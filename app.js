import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { getAllApartments, getApartmentByID } from './src/apartments/apartmentsSql.js';
import { getMenuItemByCategory } from './src/menu/menuSql.js';
import { getDrinkItemByCategory } from './src/drinks/drinksSql.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

const defaultAllowedOrigins = [
  'https://zamecek.cirova.cz',
  'http://localhost:3000',
  'http://localhost:5173',
];

const normalizeOrigin = (origin) => origin.replace(/\/$/, '');

const allowedOrigins = new Set(
  (process.env.CORS_ORIGINS ?? process.env.ALLOWED_ORIGINS ?? defaultAllowedOrigins.join(','))
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
    .map(normalizeOrigin)
);

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.has(normalizeOrigin(origin))) {
      return callback(null, true);
    }

    const error = new Error(`CORS blocked for origin: ${origin}`);
    error.status = 403;
    return callback(error);
  },
  methods: ['GET', 'HEAD', 'OPTIONS'],
  optionsSuccessStatus: 204
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('combined'));
app.use(limiter);
app.use(express.json());

const errorHandler = (err, req, res, next) => {
  if (err.message?.startsWith('CORS blocked for origin:')) {
    return res.status(err.status || 403).json({
      error: 'CORS origin denied'
    });
  }

  console.error(err.stack);
  return res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/api/rooms', async (req, res, next) => {
  try {
    const apartments = await getAllApartments();
    res.json(apartments);
  } catch (error) {
    next(error);
  }
});

app.get('/api/rooms/:apartmentId', async (req, res, next) => {
  try {
    const { apartmentId } = req.params;
    if (!apartmentId) {
      return res.status(400).json({ error: 'Apartment ID is required' });
    }

    const apartment = await getApartmentByID(apartmentId);
    if (!apartment) {
      return res.status(404).json({ error: 'Apartment not found' });
    }

    return res.json(apartment);
  } catch (error) {
    return next(error);
  }
});

app.get('/api/menu', async (req, res, next) => {
  try {
    const [appetizers, lunches, soups, desserts, hotDrinks, alcoholicDrinks, softDrinks] =
      await Promise.all([
        getMenuItemByCategory('appetizer'),
        getMenuItemByCategory('lunch'),
        getMenuItemByCategory('soup'),
        getMenuItemByCategory('dessert'),
        getDrinkItemByCategory('hot'),
        getDrinkItemByCategory('alcoholic'),
        getDrinkItemByCategory('soft')
      ]);

    res.json({
      meal: {
        appetizer: appetizers,
        lunch: lunches,
        soup: soups,
        dessert: desserts
      },
      drink: {
        hot: hotDrinks,
        alcoholic: alcoholicDrinks,
        soft: softDrinks
      }
    });
  } catch (error) {
    next(error);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

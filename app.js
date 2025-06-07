import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { getAllApartments, getApartmentByID } from './src/apartments/apartmentsSql.js';
import { getMenuItemByCategory } from './src/menu/menuSql.js';
import { getDrinkItemByCategory } from './src/drinks/drinksSql.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  methods: ['GET']
}));
app.use(helmet()); // Adds various HTTP headers for security
app.use(morgan('combined')); // Request logging
app.use(limiter);
app.use(express.json());

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

// Routes
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

    res.json(apartment);
  } catch (error) {
    next(error);
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
        dessert: desserts,
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

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware should be last
app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port http://localhost:${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
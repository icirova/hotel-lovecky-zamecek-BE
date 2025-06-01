# Hotel Lovecky Zamecek - Backend

This is the backend API for the Hotel Lovecky Zamecek website. It provides endpoints for retrieving information about hotel rooms, menu items, and drinks.

## Features

- RESTful API for hotel information
- PostgreSQL database integration
- Docker containerization
- Rate limiting and security headers

## Prerequisites

- Node.js (v16 or higher)
- Docker and Docker Compose (for containerized deployment)
- PostgreSQL (if running locally without Docker)

## Getting Started

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/hotel-lovecky-zamecek-BE.git
   cd hotel-lovecky-zamecek-BE
   ```

2. Create a `.env` file based on the example:
   ```
   cp .env.example .env
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

### Docker Deployment

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/hotel-lovecky-zamecek-BE.git
   cd hotel-lovecky-zamecek-BE
   ```

2. Create a `.env` file based on the example:
   ```
   cp .env.example .env
   ```

3. Build and start the Docker containers:
   ```
   docker-compose up -d
   ```

## API Endpoints

- `GET /` - API status check
- `GET /api/rooms` - Get all rooms/apartments
- `GET /api/rooms/:apartmentId` - Get a specific room/apartment by ID
- `GET /api/menu` - Get all menu items and drinks

## Environment Variables

See `.env.example` for all available configuration options.

## Project Structure

```
hotel-lovecky-zamecek-BE/
├── db/                  # Database scripts and configuration
├── src/                 # Source code
│   ├── apartments/      # Apartments/rooms related code
│   ├── drinks/          # Drinks related code
│   ├── menu/            # Menu related code
│   └── postgres.js      # Database connection
├── app.js               # Main application entry point
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
└── package.json         # Project dependencies and scripts
```

## Contributing

Please see [IMPROVEMENTS.md](IMPROVEMENTS.md) for a list of planned improvements and how you can contribute.

## License

ISC

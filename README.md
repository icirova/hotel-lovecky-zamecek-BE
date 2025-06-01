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

### CI/CD Pipeline

This project uses GitHub Actions for continuous integration and delivery:

1. **Automated Builds**: Every push to the main branch and pull request triggers a build.
2. **Testing**: The workflow installs dependencies and runs linting checks.
3. **Docker Images**: On successful merge to main, both the backend API and database Docker images are built for multiple architectures (amd64 and arm64) and published to Docker Hub.

#### Using the Published Docker Images

##### Backend API Image

You can pull the latest backend API image from Docker Hub:

```bash
docker pull [username]/hotel-lovecky-zamecek-be:latest
```

Run the container:

```bash
docker run -p 4000:4000 --env-file .env [username]/hotel-lovecky-zamecek-be:latest
```

##### Database Image

You can pull the latest database image from Docker Hub:

```bash
docker pull [username]/hotel-lovecky-zamecek-db:latest
```

Run the database container:

```bash
docker run -p 5432:5432 -e POSTGRES_PASSWORD=yourpassword [username]/hotel-lovecky-zamecek-db:latest
```

#### Available Tags

- `latest`: Most recent build from the main branch
- `[sha]`: Specific commit build (short SHA)
- Version tags when releases are created

#### Architecture Support

Both Docker images support multiple architectures:
- `linux/amd64`: For Intel/AMD 64-bit processors
- `linux/arm64`: For ARM 64-bit processors (e.g., Apple Silicon, AWS Graviton)

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
├── .github/             # GitHub configuration
│   └── workflows/       # GitHub Actions workflows
│       └── main.yml     # CI/CD pipeline configuration
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

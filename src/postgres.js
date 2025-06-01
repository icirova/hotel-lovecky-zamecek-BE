import postgres from 'postgres'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const sql = postgres({
    host: process.env.DB_HOST || 'db',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: process.env.DB_NAME || 'lovecky-zamecek',
    username: process.env.DB_USER || 'lovec',
    password: process.env.DB_PASSWORD || 'lovecPg',
    ssl: process.env.DB_SSL === 'true',
    max: 10, // Connection pool size
    idle_timeout: 30, // Close idle connections after 30 seconds
    connect_timeout: 10, // Connection timeout after 10 seconds
})

export default sql

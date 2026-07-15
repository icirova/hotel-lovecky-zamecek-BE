import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config()

const sql = postgres({
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'lovecky-zamecek',
  username: process.env.DB_USER || 'lovec',
  password: process.env.DB_PASSWORD || 'lovecPg',
  ssl: process.env.DB_SSL === 'true',
  max: 10,
  idle_timeout: 30,
  connect_timeout: 10,
})

export default sql

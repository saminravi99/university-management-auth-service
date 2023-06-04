import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  port: process.env.PORT,
  db_uri: process.env.DATABASE_URI,
  node_env: process.env.NODE_ENV,
  default_password: process.env.DEFAULT_PASSWORD,
}

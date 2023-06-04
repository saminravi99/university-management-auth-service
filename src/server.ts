import mongoose from 'mongoose'
import app from './app/app'
import config from './config'
import { logger, errorLogger } from './app/shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, () => {
      logger.info(`Server listening on port ${config.port}`)
    })
    logger.info('Connected to mongoDB')
  } catch (error) {
    errorLogger.error(`Failed to connect to database: ${error}`)
  }
}

bootstrap().catch(err => errorLogger.error(err))

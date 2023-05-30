import mongoose from 'mongoose'
import app from './app/app'
import config from './config'

async function bootstrap() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`)
    })
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log('Failed to connect to database', error)
  }
}

bootstrap().catch(err => console.log(err))

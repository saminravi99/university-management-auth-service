import winston from 'winston'
import path from 'path'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      //   filename: path.join(__dirname, '../../logs/winston/combined.log'),
      filename: path.join(path.join(process.cwd(), 'logs/winston/success.log')),
    }),
  ],
})
const errorLogger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      //   filename: path.join(__dirname, '../../logs/winston/error.log'),
      filename: path.join(path.join(process.cwd(), 'logs/winston/error.log')),
    }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
}

export { logger, errorLogger }

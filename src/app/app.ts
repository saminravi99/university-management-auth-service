import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './modules/user/user.routes'

const app: Application = express()

//middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the University Management System API')
})

app.use('/api/v1/users', userRoutes)

export default app

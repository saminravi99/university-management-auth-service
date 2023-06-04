import { Router } from 'express'

import { createUser } from './user.controller'

const router: Router = Router()

router.post('/create-user', createUser)

export { router as userRoutes }

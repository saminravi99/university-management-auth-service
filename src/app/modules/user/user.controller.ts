import { Request, Response } from 'express'
import { IUser } from './user.interface'
import { createUserToDb } from './user.services'
import { logger } from '../../shared/logger'

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user: IUser | null = req.body as IUser | null
    logger.info(`user: ${user}`)
    const newUser: IUser | null = await createUserToDb(user as IUser)
    res.status(201).json({ user: newUser })
  } catch (error) {
    logger.error(`Error creating user: ${error}`)
    res.status(500).json({ error: error })
  }
}

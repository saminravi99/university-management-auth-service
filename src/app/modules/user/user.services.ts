import generateNewUserId from '../../../utils/idGenarator'
import { generatePassword } from '../../../utils/passwordGenarator'
import { IUser } from './user.interface'
import User from './user.model'

export const createUserToDb = async (user: IUser): Promise<IUser | null> => {
  if (!user.password) {
    user.password = generatePassword()
  }
  user.id = await generateNewUserId()
  const newUser = new User(user)
  if (!newUser) throw new Error('Error creating new user')
  return await newUser.save()
}

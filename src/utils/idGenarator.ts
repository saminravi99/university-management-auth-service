import { IUser } from '../app/modules/user/user.interface'
import User from '../app/modules/user/user.model'

const getLastUserId = async (): Promise<string | null> => {
  const lastUser: IUser | null = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()

  if (!lastUser) return null

  return lastUser.id
}

const isLastNumber = (number: number, digitCount: number): boolean => {
  const lastNumber = Math.pow(10, digitCount) - 1
  return number === lastNumber
}

const generateNewUserId = async (): Promise<string> => {
  const currentYear: number = new Date().getFullYear()

  let lastStudentId: string | null = await getLastUserId()

  const randomHex = Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, '0')

  const idPrefix: string = `${currentYear}${randomHex}` as string

  let idSuffix: string = '' as string

  if (lastStudentId) {
    idSuffix = lastStudentId.slice(10)
    const suffixLength: number = idSuffix.length
    if (isLastNumber(Number(idSuffix), suffixLength)) {
      idSuffix = (1).toString().padStart(suffixLength + 1, '0')
    } else {
      idSuffix = (Number(idSuffix) + 1).toString().padStart(suffixLength, '0')
    }
  } else {
    idSuffix = '0001'
  }

  lastStudentId = `${idPrefix}${idSuffix}`

  return lastStudentId.toUpperCase()
}

export default generateNewUserId

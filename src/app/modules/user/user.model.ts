import { Model, Schema, model } from 'mongoose'
import { IUser } from './user.interface'

type UserModel = Model<IUser, object>

const UserSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'teacher', 'admin'],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default model<IUser, UserModel>('User', UserSchema)

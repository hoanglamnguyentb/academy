import { ERole, EUserStatus } from '@/types/enums';
import { model, models, Schema } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  username: string;
  email: string;
  fullname: string;
  avatar: string;
  createdAt: Date;
  status: EUserStatus;
  role: ERole;
  courseIds: Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  fullname: String,
  avatar: String,
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
  role: {
    type: String,
    enum: Object.values(ERole),
    default: ERole.User,
  },
  courseIds: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      default: [],
    },
  ],
});

const User = models.IUser || model('User', userSchema);
export default User;

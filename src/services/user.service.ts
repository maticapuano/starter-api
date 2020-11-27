import { IUserDto, User } from '@models/User.model';
import { Encryption } from '@utils/Encryption';

export const getUserById = async (id: string): Promise<IUserDto> => {
  const user = await User.findById(id);

  return user as IUserDto;
};

export const getUserByEmail = async (
  email: string,
): Promise<IUserDto> => {
  const user = await User.findOne({ email });

  return user as IUserDto;
};

export const createUser = async (
  attrs: IUserDto,
): Promise<IUserDto> => {
  const hashedPassword = await Encryption.toHash(attrs.password);

  attrs.password = hashedPassword;

  const user = await User.create(attrs);

  return user;
};

export const signInUser = async (
  email: string,
  password: string,
): Promise<IUserDto | null> => {
  const user = await getUserByEmail(email);

  if (user) {
    const checkHash = await Encryption.compare(user.password, password);

    if (checkHash) {
      return user;
    }
  }

  return null;
};

export default {
  getUserById,
  getUserByEmail,
  createUser,
  signInUser,
};

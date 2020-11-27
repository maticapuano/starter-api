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

export default {
  getUserById,
  getUserByEmail,
  createUser,
};

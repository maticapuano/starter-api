import { BadRequestError } from '@errors/error/BadRequestError';
import { InternalServerError } from '@errors/error/InternalServerError';
import userService from '@services/user.service';
import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response } from 'express';
import _ from 'lodash';
import httpStatus from 'http-status-codes';
import { createTokens } from '@utils/authUtil';

export const signUp = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const body = _.pick(req.body, ['full_name', 'email', 'password']);
  const userByEmail = await userService.getUserByEmail(body.email);

  if (userByEmail) {
    throw new BadRequestError('Account already exits.');
  }

  const user = await userService.createUser(body);

  if (!user) {
    throw new InternalServerError();
  }

  const userResponse = _.pick(user, ['id', 'full_name', 'email']);

  return ApiResponse.success(
    res,
    userResponse,
    httpStatus.CREATED,
    'Account created successfully.',
  );
};

export const signIn = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const { email, password } = _.pick(req.body, ['email', 'password']);
  const user = await userService.signInUser(email, password);

  if (!user) {
    throw new BadRequestError('Email or Password is invalid.');
  }

  const tokens = await createTokens(user);

  const userResponse = _.pick(user, [
    'id',
    'full_name',
    'email',
    'isStaff',
    'isActive',
  ]);

  return ApiResponse.success(
    res,
    { ...userResponse, tokens },
    httpStatus.OK,
    'Login successfully',
  );
};

export default {
  signUp,
  signIn,
};

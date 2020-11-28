import { BadRequestError } from '@errors/error/BadRequestError';
import { InternalServerError } from '@errors/error/InternalServerError';
import userService from '@services/user.service';
import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response } from 'express';
import _ from 'lodash';
import httpStatus from 'http-status-codes';
import { createTokens } from '@utils/authUtil';
import { NotAuthorizedError } from '@errors/error/NotAuthorizedError';
import en from '@locale';
import { IPayloadJWT } from '@utils/JWT';

export const signUp = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const body = _.pick(req.body, ['full_name', 'email', 'password']);
  const userByEmail = await userService.getUserByEmail(body.email);

  if (userByEmail) {
    throw new BadRequestError(en.EMAIL_ALREADY_EXISTS);
  }

  const user = await userService.createUser(body);

  if (!user) {
    throw new InternalServerError();
  }

  const tokens = await createTokens(user);
  const userResponse = _.pick(user, ['id', 'full_name', 'email']);

  return ApiResponse.success(
    res,
    { ...userResponse, tokens },
    httpStatus.CREATED,
    en.ACCOUNT_CREATED_SUCCESS,
  );
};

export const signIn = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const { email, password } = _.pick(req.body, ['email', 'password']);
  const user = await userService.signInUser(email, password);

  if (!user) {
    throw new BadRequestError(en.CREDENTIALS_INVALID);
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
    en.LOGIN_SUCCESS,
  );
};

export const self = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const { id } = _.pick(req.user, ['id']);
  const user = await userService.getUserById(id as string);

  if (!user) {
    throw new NotAuthorizedError();
  }

  const userResponse = _.pick(user, [
    'id',
    'full_name',
    'email',
    'isStaff',
    'isActive',
  ]);

  return ApiResponse.success(
    res,
    userResponse,
    httpStatus.OK,
    en.SHOWING_CURRENT_USER,
  );
};

export const refreshToken = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const currentUser = req.user as IPayloadJWT;
  const getUserByEmail = await userService.getUserById(currentUser.id);

  if (!getUserByEmail.isActive) {
    throw new BadRequestError(en.ACCOUNT_NOT_ACTIVATED);
  }

  const tokens = await createTokens(getUserByEmail);

  return ApiResponse.success(
    res,
    { tokens },
    httpStatus.OK,
    en.REFRESH_TOKEN_GENERATED,
  );
};

export const update = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const currentUser = req.user?.id as string;
  const user = await userService.updateUser(currentUser, req.body);

  return ApiResponse.success(
    res,
    user,
    httpStatus.OK,
    en.ACCOUNT_UPDATED_SUCCESS,
  );
};

export default {
  signUp,
  signIn,
  self,
  refreshToken,
  update,
};

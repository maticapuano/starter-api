import { InternalServerError } from '@errors/error/InternalServerError';
import en from '@locale';
import { ProductDoc } from '@models/Product.model';
import productService from '@services/product.service';
import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import _ from 'lodash';

export const create = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const body = _.pick(req.body, [
    'name',
    'description',
    'price',
    'stock',
    'userId',
  ]);

  body.userId = req.user?.id;

  const product = (await productService.create(body)) as ProductDoc;

  if (!product) {
    throw new InternalServerError();
  }

  const productResponse = _.pick(product, [
    'id',
    'name',
    'description',
    'price',
    'stock',
    'userId',
    'isActive',
  ]);

  return ApiResponse.success(
    res,
    productResponse,
    httpStatus.CREATED,
    en.PRODUCT_CREATED,
  );
};

export const getAll = async (
  req: Request,
  res: Response,
): Promise<ApiResponse> => {
  const getAll = await productService.getAll();

  return ApiResponse.success(res, getAll, httpStatus.OK);
};

export default {
  create,
  getAll,
};

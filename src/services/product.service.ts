import { InternalServerError } from '@errors/error/InternalServerError';
import { IProductDto, Product } from '@models/Product.model';
import _ from 'lodash';

export const create = async (
  attr: IProductDto,
): Promise<IProductDto> => {
  const body = _.pick(attr, [
    'name',
    'description',
    'price',
    'stock',
    'userId',
  ]);
  const product = await Product.create(body);

  if (!product) {
    throw new InternalServerError();
  }

  return product;
};

export const findById = async (
  id: string,
): Promise<IProductDto | null> => {
  const product = await Product.findById(id);

  if (!product) {
    return null;
  }

  return product;
};

export const getAll = async (): Promise<IProductDto[]> => {
  const products = await Product.find({ isActive: true });

  return products;
};

export default {
  create,
  findById,
  getAll,
};

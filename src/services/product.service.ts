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

export default {
  create,
};

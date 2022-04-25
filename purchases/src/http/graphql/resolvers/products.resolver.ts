import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { ProductsService } from '../../../services/products.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';

import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }
}

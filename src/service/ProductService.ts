import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IProduct } from '../Interfaces/interfaces';
import ProductModel from '../model/ProductModel';

export default class ProductService {
  constructor(
    private productModel: ProductModel = new ProductModel(),
  ) { }

  public async createProduct(product: IProduct): Promise<ServiceResponse<IProduct>> {

    if (!product.nome || !product.descricao || !product.preco) {
      return { status: 'INVALID_DATA',
        data: { message: 'Todos os campos devem ser preenchidos!' } };
    }

    const findProduct = await this.productModel.findProduct(product);

    if (findProduct) {
      return { status: 'INVALID_DATA', data: { message: 'Produto já cadastrado!' } };
    }

    await this.productModel.newProduct(product);
    return { status: 'SUCCESS', data: {message: 'Produto cadastrado com sucesso!'}};
  }

  public async findAllProducts(): Promise<ServiceResponse<IProduct[]>> {
    const allProducts = await this.productModel.findAllProducts();
    return { status: 'SUCCESS', data: allProducts };
  }

  public async findProductById(id: number): Promise<ServiceResponse<IProduct>> {
    const product = await this.productModel.findProductById(id);
    if (!product) {
      return { status: 'NOT_FOUND', data: { message: 'Produto não encontrado!' } };
  }
  return { status: 'SUCCESS', data: product };
  };

  public async updateProduct(id: number, product: IProduct): Promise<ServiceResponse<IProduct>> {
    const updatedProduct = await this.productModel.updateProduct(id, product);
    if (!updatedProduct) {
      return { status: 'NOT_FOUND', data: { message: 'Produto não encontrado!' } };
    }
    return { status: 'SUCCESS', data: {message: 'Produto editado com sucesso!'} };
  };

  public async deleteProduct(id: number): Promise<ServiceResponse<void>> {
    await this.productModel.updateProduct(id, { excluido: true } as IProduct);
    return { status: 'SUCCESS', data: { message: 'Produto deletado com sucesso!' } };
  }
};
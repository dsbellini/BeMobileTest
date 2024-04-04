import { IProduct } from '../Interfaces/interfaces';
import SequelizeProduct from '../database/models/SequelizeProduct';

export default class ProductModel {
  private model = SequelizeProduct;

  public async newProduct(product: IProduct): Promise<IProduct> {
    const newProduct = await this.model.create(product);
    return newProduct.dataValues;
  }

  public async findProduct(product: IProduct): Promise<IProduct | null> {
    const productData = await this.model.findOne({ where: { nome: product.nome} });
    if (!productData) {
      return null;
    }
    return productData.dataValues;
  }

  public async findAllProducts(): Promise<IProduct[]> {
    const allProducts = await this.model.findAll({
      order: [['nome', 'ASC']], // Ordena os resultados pelo campo 'nome' em ordem alfabética conforme solicitado.
      where: { excluido: false }, // Retorna apenas os produtos que não foram excluídos.
    });
    return allProducts.map((product) => product.dataValues);
  }

  public async findProductById(id: number): Promise<IProduct | null> {
    const product = await this.model.findByPk(id);
    if (!product) {
      return null;
    }
    return product.dataValues;
  }

  public async updateProduct(id: number, product: IProduct): Promise<IProduct | null> {
    await this.model.update(product, { where: { id } });
    const updatedCustomer = await this.model.findByPk(id);
    if (!updatedCustomer) {
      return null;
    }
    return updatedCustomer.dataValues;
}
};

import { Request, Response } from 'express';
import mapStatus from '../utils/mapStatus';
import ProductService from '../service/ProductService';

export default class ProductController {
  constructor(
    private productService = new ProductService(),
  ) { }

  public async createProduct(req: Request, res: Response) {
    const { nome, descricao, preco } = req.body;
    const serviceResponse = await this.productService.createProduct({ nome, descricao, preco});
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findAllProducts(req: Request, res: Response) {
    const serviceResponse = await this.productService.findAllProducts();
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findProductById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.productService.findProductById(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    const serviceResponse = await this.productService.updateProduct(Number(id), { nome, descricao, preco });
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.productService.deleteProduct(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }
};
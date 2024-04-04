"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = __importDefault(require("../model/ProductModel"));
class ProductService {
    constructor(productModel = new ProductModel_1.default()) {
        this.productModel = productModel;
    }
    async createProduct(product) {
        if (!product.nome || !product.descricao || !product.preco) {
            return { status: 'INVALID_DATA',
                data: { message: 'Todos os campos devem ser preenchidos!' } };
        }
        const findProduct = await this.productModel.findProduct(product);
        if (findProduct) {
            return { status: 'INVALID_DATA', data: { message: 'Produto já cadastrado!' } };
        }
        await this.productModel.newProduct(product);
        return { status: 'SUCCESS', data: { message: 'Produto cadastrado com sucesso!' } };
    }
    async findAllProducts() {
        const allProducts = await this.productModel.findAllProducts();
        return { status: 'SUCCESS', data: allProducts };
    }
    async findProductById(id) {
        const product = await this.productModel.findProductById(id);
        if (!product) {
            return { status: 'NOT_FOUND', data: { message: 'Produto não encontrado!' } };
        }
        return { status: 'SUCCESS', data: product };
    }
    ;
    async updateProduct(id, product) {
        const updatedProduct = await this.productModel.updateProduct(id, product);
        if (!updatedProduct) {
            return { status: 'NOT_FOUND', data: { message: 'Produto não encontrado!' } };
        }
        return { status: 'SUCCESS', data: { message: 'Produto editado com sucesso!' } };
    }
    ;
    async deleteProduct(id) {
        await this.productModel.deleteProduct(id);
        return { status: 'SUCCESS', data: { message: 'Produto deletado com sucesso!' } };
    }
}
exports.default = ProductService;
;

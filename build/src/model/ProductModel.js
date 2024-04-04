"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeProduct_1 = __importDefault(require("../database/models/SequelizeProduct"));
class ProductModel {
    constructor() {
        this.model = SequelizeProduct_1.default;
    }
    async newProduct(product) {
        const newProduct = await this.model.create(product);
        return newProduct.dataValues;
    }
    async findProduct(product) {
        const productData = await this.model.findOne({ where: { nome: product.nome } });
        if (!productData) {
            return null;
        }
        return productData.dataValues;
    }
    async findAllProducts() {
        const allProducts = await this.model.findAll({
            order: [['nome', 'ASC']], // Ordena os resultados pelo campo 'nome' em ordem alfabética conforme solicitado.
            where: { excluido: false }, // Retorna apenas os produtos que não foram excluídos.
        });
        return allProducts.map((product) => product.dataValues);
    }
    async findProductById(id) {
        const product = await this.model.findByPk(id);
        if (!product) {
            return null;
        }
        return product.dataValues;
    }
    async updateProduct(id, product) {
        await this.model.update(product, { where: { id } });
        const updatedCustomer = await this.model.findByPk(id);
        if (!updatedCustomer) {
            return null;
        }
        return updatedCustomer.dataValues;
    }
}
exports.default = ProductModel;
;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatus_1 = __importDefault(require("../utils/mapStatus"));
const ProductService_1 = __importDefault(require("../service/ProductService"));
class ProductController {
    constructor(productService = new ProductService_1.default()) {
        this.productService = productService;
    }
    async createProduct(req, res) {
        const { nome, descricao, preco } = req.body;
        const serviceResponse = await this.productService.createProduct({ nome, descricao, preco });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findAllProducts(req, res) {
        const serviceResponse = await this.productService.findAllProducts();
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findProductById(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.productService.findProductById(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async updateProduct(req, res) {
        const { id } = req.params;
        const { nome, descricao, preco } = req.body;
        const serviceResponse = await this.productService.updateProduct(Number(id), { nome, descricao, preco });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async deleteProduct(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.productService.deleteProduct(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = ProductController;
;

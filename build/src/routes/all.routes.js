"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
const CustomerController_1 = __importDefault(require("../controller/CustomerController"));
const verifyToken_1 = require("../middleware/verifyToken");
const ProductController_1 = __importDefault(require("../controller/ProductController"));
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
const customerController = new CustomerController_1.default();
const productController = new ProductController_1.default();
// User routes
router.post('/user', (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => userController.login(req, res));
// Customer routes
router.post('/customer', verifyToken_1.verifyToken, (req, res) => customerController.createCustomer(req, res));
router.get('/customer', verifyToken_1.verifyToken, (req, res) => customerController.findAllCustomers(req, res));
router.get('/customer/:id', verifyToken_1.verifyToken, (req, res) => customerController.findCustomerById(req, res));
router.put('/customer/:id', verifyToken_1.verifyToken, (req, res) => customerController.updateCustomer(req, res));
router.delete('/customer/:id', verifyToken_1.verifyToken, (req, res) => customerController.deleteCustomer(req, res));
// Product routes
router.post('/product', verifyToken_1.verifyToken, (req, res) => productController.createProduct(req, res));
router.get('/product', verifyToken_1.verifyToken, (req, res) => productController.findAllProducts(req, res));
router.get('/product/:id', verifyToken_1.verifyToken, (req, res) => productController.findProductById(req, res));
router.put('/product/:id', verifyToken_1.verifyToken, (req, res) => productController.updateProduct(req, res));
router.delete('/product/:id', verifyToken_1.verifyToken, (req, res) => productController.deleteProduct(req, res));
exports.default = router;

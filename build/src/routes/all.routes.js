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
const SellController_1 = __importDefault(require("../controller/SellController"));
const PhoneController_1 = __importDefault(require("../controller/PhoneController"));
const AddressController_1 = __importDefault(require("../controller/AddressController"));
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
const customerController = new CustomerController_1.default();
const productController = new ProductController_1.default();
const sellController = new SellController_1.default();
const phoneController = new PhoneController_1.default();
const addressController = new AddressController_1.default();
// User routes
router.post('/newuser', (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => userController.login(req, res));
// Customer routes
router.post('/newcustomer', verifyToken_1.verifyToken, (req, res) => customerController.createCustomer(req, res));
router.get('/customers', verifyToken_1.verifyToken, (req, res) => customerController.findAllCustomers(req, res));
router.get('/customer/:id', verifyToken_1.verifyToken, (req, res) => customerController.findCustomerById(req, res));
router.put('/customer/:id', verifyToken_1.verifyToken, (req, res) => customerController.updateCustomer(req, res));
router.delete('/customer/:id', verifyToken_1.verifyToken, (req, res) => customerController.deleteCustomer(req, res));
router.get('/customer/:id/sales', verifyToken_1.verifyToken, (req, res) => customerController.findCustomerWithSales(req, res));
// Product routes
router.post('/newproduct', verifyToken_1.verifyToken, (req, res) => productController.createProduct(req, res));
router.get('/product', verifyToken_1.verifyToken, (req, res) => productController.findAllProducts(req, res));
router.get('/product/:id', verifyToken_1.verifyToken, (req, res) => productController.findProductById(req, res));
router.put('/product/:id', verifyToken_1.verifyToken, (req, res) => productController.updateProduct(req, res));
router.delete('/product/:id', verifyToken_1.verifyToken, (req, res) => productController.deleteProduct(req, res));
// Sell routes
router.post('/newsell', verifyToken_1.verifyToken, (req, res) => sellController.createSell(req, res));
// Phone routes
router.post('/newphone', verifyToken_1.verifyToken, (req, res) => phoneController.createPhone(req, res));
router.get('/phone', verifyToken_1.verifyToken, (req, res) => phoneController.findAllPhones(req, res));
router.get('/phone/:id', verifyToken_1.verifyToken, (req, res) => phoneController.findPhoneById(req, res));
router.delete('/phone/:id', verifyToken_1.verifyToken, (req, res) => phoneController.deletePhone(req, res));
// Address routes
router.post('/newaddress', verifyToken_1.verifyToken, (req, res) => addressController.createAddress(req, res));
router.get('/address', verifyToken_1.verifyToken, (req, res) => addressController.findAllAddresses(req, res));
router.get('/address/:id', verifyToken_1.verifyToken, (req, res) => addressController.findAddressById(req, res));
router.put('/address/:id', verifyToken_1.verifyToken, (req, res) => addressController.updateAddress(req, res));
router.delete('/address/:id', verifyToken_1.verifyToken, (req, res) => addressController.deleteAddress(req, res));
exports.default = router;

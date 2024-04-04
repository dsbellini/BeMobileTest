import { Router } from 'express';
import UserController from '../controller/UserController';
import CustomerController from '../controller/CustomerController';
import { verifyToken } from '../middleware/verifyToken';
import ProductController from '../controller/ProductController';
import SellController from '../controller/SellController';
import PhoneController from '../controller/PhoneController';
import AddressController from '../controller/AddressController';

const router = Router();

const userController = new UserController();
const customerController = new CustomerController();
const productController = new ProductController();
const sellController = new SellController();
const phoneController = new PhoneController();
const addressController = new AddressController();

// User routes
router.post('/newuser', (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => userController.login(req, res));

// Customer routes
router.post('/customer', verifyToken, (req, res) => customerController.createCustomer(req, res));
router.get('/customer', verifyToken, (req, res) => customerController.findAllCustomers(req, res));
router.get('/customer/:id', verifyToken, (req, res) => customerController.findCustomerById(req, res));
router.put('/customer/:id', verifyToken, (req, res) => customerController.updateCustomer(req, res));
router.delete('/customer/:id', verifyToken, (req, res) => customerController.deleteCustomer(req, res));
router.get('/customer/:id/sales', verifyToken, (req, res) => customerController.findCustomerWithSales(req, res));

// Product routes
router.post('/product', verifyToken, (req, res) => productController.createProduct(req, res));
router.get('/product', verifyToken, (req, res) => productController.findAllProducts(req, res));
router.get('/product/:id', verifyToken, (req, res) => productController.findProductById(req, res));
router.put('/product/:id', verifyToken, (req, res) => productController.updateProduct(req, res));
router.delete('/product/:id', verifyToken, (req, res) => productController.deleteProduct(req, res));

// Sell routes
router.post('/sell', verifyToken, (req, res) => sellController.createSell(req, res));

// Phone routes
router.post('/phone', verifyToken, (req, res) => phoneController.createPhone(req, res));
router.get('/phone', verifyToken, (req, res) => phoneController.findAllPhones(req, res));
router.get('/phone/:id', verifyToken, (req, res) => phoneController.findPhoneById(req, res));
router.delete('/phone/:id', verifyToken, (req, res) => phoneController.deletePhone(req, res));

// Address routes
router.post('/address', verifyToken, (req, res) => addressController.createAddress(req, res));
router.get('/address', verifyToken, (req, res) => addressController.findAllAddresses(req, res));
router.get('/address/:id', verifyToken, (req, res) => addressController.findAddressById(req, res));
router.put('/address/:id', verifyToken, (req, res) => addressController.updateAddress(req, res));
router.delete('/address/:id', verifyToken, (req, res) => addressController.deleteAddress(req, res));

export default router;
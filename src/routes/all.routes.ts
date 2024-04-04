import { Router } from 'express';
import UserController from '../controller/UserController';
import CustomerController from '../controller/CustomerController';
import { verifyToken } from '../middleware/verifyToken';
import ProductController from '../controller/ProductController';

const router = Router();

const userController = new UserController();
const customerController = new CustomerController();
const productController = new ProductController();

// User routes
router.post('/user', (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => userController.login(req, res));

// Customer routes
router.post('/customer', verifyToken, (req, res) => customerController.createCustomer(req, res));
router.get('/customer', verifyToken, (req, res) => customerController.findAllCustomers(req, res));
router.get('/customer/:id', verifyToken, (req, res) => customerController.findCustomerById(req, res));
router.put('/customer/:id', verifyToken, (req, res) => customerController.updateCustomer(req, res));
router.delete('/customer/:id', verifyToken, (req, res) => customerController.deleteCustomer(req, res));

// Product routes
router.post('/product', verifyToken, (req, res) => productController.createProduct(req, res));
router.get('/product', verifyToken, (req, res) => productController.findAllProducts(req, res));
router.get('/product/:id', verifyToken, (req, res) => productController.findProductById(req, res));
router.put('/product/:id', verifyToken, (req, res) => productController.updateProduct(req, res));
router.delete('/product/:id', verifyToken, (req, res) => productController.deleteProduct(req, res));

export default router;
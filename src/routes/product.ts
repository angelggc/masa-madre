import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products-controller";
import { authToken } from "../middlewares/auth-middleware";

const router = express.Router();

// Rutas para CRUD de productos
router.post("/:categoryId/products", createProduct); // Crear un nuevo producto
router.get("/products", authToken, getAllProducts); // Obtener todos los productos
router.get("/products/:productId", getProductById); // Obtener un producto por su ID
router.put("/products/:productId", updateProductById); // Actualizar un producto por su ID
router.delete("/products/:productId", deleteProductById); // Eliminar un producto por su ID

export default router;

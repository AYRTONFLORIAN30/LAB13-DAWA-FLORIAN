import axios from 'axios';

const PRODUCTO_BASE_API_URL = "http://localhost:8080/api/v1/productos";

class ProductoService {
    getAllProductos() {
        return axios.get(PRODUCTO_BASE_API_URL);
    }

    createProducto(producto) {
        return axios.post(PRODUCTO_BASE_API_URL, producto);
    }

    getProductoById(productoId) {
        return axios.get(`${PRODUCTO_BASE_API_URL}/${productoId}`);
    }

    updateProducto(productoId, producto) {
        return axios.put(`${PRODUCTO_BASE_API_URL}/${productoId}`, producto);
    }

    deleteProducto(productoId) {
        return axios.delete(`${PRODUCTO_BASE_API_URL}/${productoId}`);
    }
}

const productoServiceInstance = new ProductoService();
export default productoServiceInstance;

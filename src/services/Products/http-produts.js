import { API_BASE, HTTP_PRODUCT } from "../config";
import httpBase from "../http-base";

class HttpProduct {
  async getProducts() {
    try {
      const url = `${API_BASE}${HTTP_PRODUCT.getProducts}`;
      const data = await httpBase.baseGet(url, {});
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getProduct(id) {
    try {
      const url = `${API_BASE}${HTTP_PRODUCT.getProducts}/${id}`;
      console.log(url);
      const data = await httpBase.baseGet(url, {});
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
export default new HttpProduct;

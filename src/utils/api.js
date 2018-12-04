const API_ENDPOINT = "https://shoppingproducts.herokuapp.com";

class Api {
  getProducts() {
    let promise = new Promise((resolve, reject) => {
      fetch(`${API_ENDPOINT}/products`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => {
          reject(error);
        })
        .catch(error => reject(error));
    });
    return promise;
  }

  async getProductsAwait() {
    try {
      const query = await fetch(`${API_ENDPOINT}/products`);
      const data = await query.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductsAwait(id) {
    try {
      const query = await fetch(`${API_ENDPOINT}/products/${id}`);
      const data = await query.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new Api();
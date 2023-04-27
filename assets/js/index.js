import { getProducts, Product } from "./utils.js";


const render = async () => {
    const container = document.querySelector("#container");

    const products = await getProducts();
    for (const product of products){
        const newProduct = new Product(product.id, product.image);
        const productComponent = newProduct.render();
        container.appendChild(productComponent);
        newProduct.addClickListener();
    }
}

render();
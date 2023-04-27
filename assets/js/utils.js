export const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };
  
  export class Product {
    #image = "";
    #id ="";
    constructor(id,image) {
      this.#image = image;
      this.#id = id;
    }
  
    render() {
      const image = document.createElement("img");
      image.id = "image"+this.#id;
      image.classList.add("image");
      image.src = this.#image;
      return image;
    }

    addClickListener(){
        const image = document.querySelector("#image"+this.#id);
        image.addEventListener("click", () => {
            window.location ="/product.html?productId="+this.#id;
        })
    }
  }
  
  
  
export class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    addToDOM(container) {
        const productDiv = document.createElement("div");
        productDiv.className =
            "p-4 bg-white rounded shadow-lg flex flex-col items-center justify-center space-y-2";
        productDiv.innerHTML = `
            <h3 class="text-lg font-bold">${this.name}</h3>
            <p class="text-gray-700">$${this.price}</p>
            <img src="${this.image}" class="w-24 h-24 object-contain" />
            <input type="number" value="1" min="1" id="qty-${this.id}" class="mb-2 w-16 text-center border rounded">
            <div class="flex space-x-2">
              <button class="add-single px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 cursor-pointer">Add 1 to Cart</button>
              <button class="add-multiple px-4 py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 cursor-pointer">Add Multiple to Cart</button>
            </div>
          `;
        productDiv
            .querySelector(".add-single")
            .addEventListener("click", () => cart.addToCart(this.id, false));
        productDiv
            .querySelector(".add-multiple")
            .addEventListener("click", () => cart.addToCart(this.id, true));
        container.appendChild(productDiv);
    }
}
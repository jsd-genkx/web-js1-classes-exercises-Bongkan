export class Cart {
    constructor() {
        this.items = [];
    }

    addToCart(productId, isMultiple) {
        const quantityInput = document.getElementById(`qty-${productId}`);
        const quantity = isMultiple ? parseInt(quantityInput.value) : 1;
        const product = products.find((p) => p.id === productId);
        const cartItem = this.items.find((item) => item.id === product.id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            this.items.push({ ...product, quantity: quantity });
        }
        this.updateCart();
    }

    updateCart() {
        cartItemsEl.innerHTML = "";
        this.items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            li.className = "mb-1";
            cartItemsEl.appendChild(li);
        });
        const total = this.items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        cartTotalEl.textContent = `Total: $${total}`;
        cartTotalEl.className = "font-bold text-xl mt-2";
    }

    clearCart() {
        this.items.length = 0;
        this.updateCart();
    }

    checkout() {
        const transactionId = Date.now();
        const date = new Date().toISOString();
        const orderDetails = this.items.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            unitPrice: item.price,
            totalPrice: item.price * item.quantity,
        }));
        const grandTotal = this.items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        const transaction = new Transaction(
            transactionId,
            date,
            orderDetails,
            grandTotal
        );
        transactions.push(transaction);
        transaction.displayTransaction();
        this.clearCart();
    }
}
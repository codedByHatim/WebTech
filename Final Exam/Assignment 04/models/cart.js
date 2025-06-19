// models/cart.js
class Cart {
  constructor(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
  }

  add(item, id) {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  }

  update(id, qty) {
    let item = this.items[id];
    if (item) {
      this.totalQty += (qty - item.qty);
      this.totalPrice += (qty - item.qty) * item.item.price;
      item.qty = qty;
      item.price = item.item.price * qty;
    }
  }

  remove(id) {
    let item = this.items[id];
    if (item) {
      this.totalQty -= item.qty;
      this.totalPrice -= item.price;
      delete this.items[id];
    }
  }

  generateArray() {
    return Object.values(this.items);
  }
}

module.exports = Cart;

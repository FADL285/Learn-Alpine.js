document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,

    toggle() {
      this.open = !this.open
    }
  }))

  Alpine.store("cart", {
    items: [
      { name: "Apple", price: 1.99 },
      { name: "Orange", price: 2.99 },
      { name: "Banana", price: 3.99 },
      { name: "Pineapple", price: 4.99 },
      { name: "Strawberry", price: 5.99 }
    ],
    add(item) {
      this.items.push(item)
    }
  })
})

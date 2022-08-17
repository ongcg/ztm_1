const state = () => ({
  orders: [
    { name: 'Crispy Chicken', price: 11.99, quantity: 1 },
    { name: 'Baa-Baa Black Sheep', price: 15.75, quantity: 1 }
  ],
});

const mutations = {
  addItem(state, selectedItem) {
    const index = state.orders.findIndex(
      (item) => {
        return item.name === selectedItem.name;
      });

    if (index === -1) {
      state.orders.push({
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: 1,
      });
    } else {
      state.orders[index].quantity++;
    }
  },
};

export default {
  state,
  mutations,
};

import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Sheer Pullover T-shirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        price: 2300,
        collecton:'test 1212',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        ]
      },
      {
        id: 2,
        name: 'Straight Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        price: 2490,
        collecton:'test 11',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        ]
      },
      {
        id: 3,
        name: 'Jacquard Denim Jacket with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        price: 7990,
        collecton:'test 32',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        ]
      },
      {
        id: 4,
        name: 'Pocket Wide Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        price: 2290,
        collecton:'test 12',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        ]
      },
      {
        id: 5,
        name: 'Flare Leg Denim Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        price: 3690,
        collecton:'test 6',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        ]
      },
      {
        id: 6,
        name: 'Pocket Denim Jumpsuit with Refelctive Binding',
        img: 'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        price: 7990,
        collecton:'test 5',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        ]
      },
      {
        id: 7,
        name: 'Patchwork Denim Top with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        price: 4290,
        collecton:'test 4',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        ]
      },
      {
        id: 8,
        name: 'Buttoned Denim A-Line Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        price: 3290,
        collecton:'test 1',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        ]
      },
      {
        id: 9,
        name: 'Seam Denim Straight Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        price: 2690,
        collecton:'test 2',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        ]
      },
      {
        id: 10,
        name: 'Jumpsuit',
        img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        price: 3990,
        collecton:'test 3',
        options:[
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        ]
      },
    ]
  },
  getters: {
    getProducts: state => state.products,
  },
  mutations: {
    createProduct(state, product) {
      state.products.push(product);
    },
    editProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
          state.products.splice(index, 1, updatedProduct);
      }
  },
  },
  actions: {
    createProduct({ commit }, product) {
      commit('createProduct', product);
    },
    editProduct({ commit }, product) {
      commit('editProduct', product);
    }
  },
  modules: {},
});

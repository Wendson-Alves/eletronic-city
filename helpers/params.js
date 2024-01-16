// const params = (data) => {
//   return data.map((item) => {
//    return item.products.map((data) => {
//     return data.discount.filter((dataDiscont) => {
//       return dataDiscont <= 125
//     })
//    })
//   }).flat()
// }

const params = (data) => {
  return data
    .map((item) => {
      return item.products.map((data) => {
        return data.image;
      });
    })
    .flat();
};

export default params;
// return item.products.map((product, index) => {
//   return {
//    ...product,
//    category: item.category
//  }
//  })

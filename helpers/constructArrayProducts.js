const refatoringArray = (data) => {
  return data.map((category, index) => {
    return (
      category.products.map((product, index) => {
        return {
          category: category.category,
          id: product.id,
          title: product.title,
          slug: product.slug,
          rating: product.rating,
          price: product.price,
          discount: product.discount,
          stock: product.stock,
          image: product.image
        }
      })
    )
  }).flat()
}

export default refatoringArray;
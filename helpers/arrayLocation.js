const refatoringArray = (data) => {
  return data.map((category, index) => {
    return (
      category.locations.map((product, index) => {
        return {
          category: category.category,
          id: product.id,
          title: product.title,
          location: product.location,
          phone: product.phone,
          email: product.email,
          image: product.image,
          work: product.work
        }
      })
    )
  }).flat()
}

export default refatoringArray;
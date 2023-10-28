const refatoringArray = (data) => {
  return data.map((category, index) => {
    return (
      category.people.map((product, index) => {
        return {
          category: category.category,
          id: product.id,
          name: product.name,
          age: product.age,
          profession: product.profession,
          image: product.image,
        }
      })
    )
  }).flat()
}

export default refatoringArray;
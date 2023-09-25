import React from 'react'
import { useContext } from 'react'
import { ProductContext } from './FetchProduct'
import Products from './Products'


export default function Home() {
  const {products} = useContext(ProductContext)
  console.log(products)

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"  || item.category === "electronics" || item.category === "jewelery"
    )
  })
  console.log(filteredProducts)
  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
              return <Products product={product} key={product.id}/>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

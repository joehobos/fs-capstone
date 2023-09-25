import React, { useState,useContext } from 'react';

import Products from './Products';
import { ProductContext } from './FetchProduct';

function Home() {
  const [filter, setFilter] = useState('');

  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    if (filter === '') {
      return true; // Show all products when no filter is selected
    }
    return item.category === filter;
  });

  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='mb-4'>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className='p-2 border rounded-md'
            >
              <option value=''>All</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewlery</option>
            </select>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => (
              <Products product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

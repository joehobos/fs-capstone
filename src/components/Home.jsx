import React, { useState, useContext } from 'react';
import useSearch from './Search';
import Products from './Products';
import { ProductContext } from './FetchProduct';

function Home() {
  const [filter, setFilter] = useState('');
  const { searchTerm, handleSearch } = useSearch();
  const { products } = useContext(ProductContext);

  // Combine both category and text search filters
  const filteredProducts = products.filter((item) => {
    const categoryFilter = filter === '' || item.category === filter;
    const textFilter = searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryFilter && textFilter;
  });

  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='mb-4'>
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="p-2 border rounded-md"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className='p-2 border rounded-md'
            >
              <option value=''>All</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelry">Jewelry</option>
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

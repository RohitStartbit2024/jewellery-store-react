import ProductCard from '../../Components/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';
import FilterBar from './FilterBar/FilterBar';

const ProductTable = () => {
  const[products , setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [sortType, setSortType] = useState('default');
  
  function passedArray(updatedProducts){
    setProducts(updatedProducts)
    setCurrentPage(1)}
  
  useEffect(()=>{
    setFilteredProducts(products)
  },[products])
  
  //show filter mobile
  const[showFilter , setShowFilter] = useState(false);
  function handleShowFilter(){
    setShowFilter(!showFilter)
  }
  
  // Sorting and Pagination Logic
  const sortProducts = (type) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (type === 'price-low-high') return a.price - b.price;
      if (type === 'price-high-low') return b.price - a.price;
      return 0;
    });
    setFilteredProducts(sorted);
    setSortType(type);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div className="container mx-auto">

      <div className="flex justify-between font-semibold text-[8px] text-white md:text-sm  bg-teal-400 mb-3 md:mb-8">
        <div className='flex'>
        <div className="py-2 px-1 md:p-5 border-r md:border-r-2 md:border-gray-400">
          <p>SHOWING {currentPage}-{Math.ceil(filteredProducts.length / productsPerPage)} OF {products.length} ITEM(S)</p>
        </div>
        <div className="p-2 md:p-5 md:border-r-2 md:border-gray-400">
          <label className="mr-2">SORT BY:</label>
          <select value={sortType} onChange={(e) => sortProducts(e.target.value)} className="bg-teal-400 w-16 md:w-24 outline-none">
            <option value="default">DEFAULT</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
        </div>
        <div className='md:hidden pr-2 self-center'>
          <p onClick={handleShowFilter}>FILTER <i className="fa-solid fa-filter text-white"></i></p>  
        </div>
      </div>

      <div className='md:flex'>
        <div className={`${showFilter?"":"hidden"} md:block mb-3 md:mb-0 md:w-[30%]`}>
          <FilterBar passedArray={passedArray}/>
        </div>
        <div className='md:w-[70%]'>
        <div className="px-3 md:px-0 flex flex-wrap justify-start items-start gap-x-[3.5%]">
             {currentProducts.length === 0 ? (
                  <p className='w-full text-red-500 my-5 md:my-28  md:text-3xl text-center'>Oops! No Products found...</p>
                ) : (
                  currentProducts.map((product) => (
                        <ProductCard  key={product.sku}
                                      id={product.sku}
                                      image={product.image}
                                      category={product.category}
                                      name={product.name}
                                      price={product.price}/>
                                      ))
                    )}
          </div>
          </div>
      </div>

      <div className={`flex text-xs md:text-base justify-center mt-8 space-x-2 `}>
  <button
    onClick={() => paginate(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 ${
      currentPage === 1 ? 'hidden' : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    <i className="fa-solid fa-chevron-right fa-rotate-180"></i>
  </button>
  {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, i) => (
    <button
      key={i + 1}
      onClick={() => paginate(i + 1)}
      className={`px-4 py-2 ${
        currentPage === i + 1 ? 'bg-teal-400 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {i + 1}
    </button>
  ))}
  <button
    onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
    className={`px-4 py-2  ${
      currentPage === Math.ceil(filteredProducts.length / productsPerPage)
        ? 'hidden'
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    <i className="fa-solid fa-chevron-right"></i>
  </button>
</div>


    </div>
  );
};

export default ProductTable;

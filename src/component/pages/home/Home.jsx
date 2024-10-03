import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-4 lg:px-8 text-center">
        <div>
          <h4 className="md:text-2xl lg:text-5xl font-bold text-gray-800 mb-6">Some Template</h4>
          <p className="md:text-xl lg:text-xl font-semibold text-gray-600 mb-6">Get the best design for every web template for free.</p>
        </div>
        <div className="flex flex-wrap mx-4 justify-center">
          {products.slice(0,7).map((item) => (
            <Link className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6" to={`/product-detais/${item.id}`} key={item.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden  transition-transform transform hover:scale-105 hover:shadow-xl">
                <img src={item.img} className="w-full h-48 object-cover" alt={item.title} />
                <div className="p-4">
                <div className="p-4">
                  <h5 className="text-gray-800 font-semibold">{item.title}</h5>
                  <p className="text-gray-700">{item.heading}</p>
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/allproduct">
          <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200">
            See More
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;

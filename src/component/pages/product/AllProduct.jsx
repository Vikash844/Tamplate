import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllProduct = () => {
    const products = useSelector((state) => state.product.products);
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the number of pages
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Get current products for the page
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="container mx-auto px-4 md:px-6 py-4 lg:px-8 text-center">
                <div>
                    <h4 className="md:text-2xl lg:text-5xl font-bold text-gray-800 mb-6">Template</h4>
                    <p className="md:text-xl lg:text-xl font-bold text-gray-600 my-6">Discover a variety of free web templates to enhance your projects.</p>
                </div>
                <div className="flex flex-wrap mx-4 justify-center">
                    {currentProducts.map((item) => (
                        <Link className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6" to={`/product-detais/${item.id}`} key={item.id}>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                                <img src={item.img} className="w-full h-48 object-cover" alt={item.title} />
                                <div className="p-4">
                                    <h5 className="text-gray-800 font-semibold">{item.title}</h5>
                                    <p className="text-gray-700">{item.heading}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-center mt-6">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`mx-1 px-4 py-2 rounded-md transition duration-200 
                                ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProduct;

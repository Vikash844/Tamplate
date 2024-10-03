import react, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const MainProduct = () => {
    const { id } = useParams();
    const products = useSelector((state) => state.product.products);
    const [product, setProduct] = useState()
    console.log(id);

    // const dispath
    // const nevigate = useNavigate()


    useEffect(() => {
        const newProduct = products.find((product) => product.id === parseInt(id))
        setProduct(newProduct)
    }, [id])


    if (!product) return <h1 className="text-center">loading....</h1>
    console.log(product.title);


    return (
        <>
            <div className="max-w-4xl mx-auto p-6 my-10 ">
                <h1 className="text-5xl font-bold text-blue-600 text-center mb-6">{product.title}</h1>
                <p className="text-gray-700 my-5 text-center">{product.heading}</p>
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={product.img}
                        alt="Delicious food"
                        className="w-full h-96 md:w-1/2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    />
                    <div className="md:ml-8 mt-6 md:mt-0">
                        <h2 className="text-3xl font-bold text-red-500">Enjoy all the benefits of our subscription.</h2>
                        <p className="text-gray-700 mt-5">Discover a delightful range of mouthwatering dishes at Yummy and Tasty Food Corner.</p>
                        <p className="text-gray-700 mt-2">From appetizers to desserts, we've got something for everyone!</p>

                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Features:</h2>
                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                <li>Web Tamplate for Free</li>
                                <li>More tha 1000+ Download</li>
                                <li>Special members-only events</li>
                            </ul>
                            <div className="flex flex-col md:flex-row mt-4 space-y-2 md:space-y-0 md:space-x-4">
                                <a href={product.link} target="_blank" className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-200">
                                    Live Preview
                                </a>
                                <a download href={product.zip} className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200">
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainProduct;
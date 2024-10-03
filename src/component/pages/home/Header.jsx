import React from 'react';

function Header() {
    return (
        <section className="bg-blue-100 md:py-24 lg:py-32 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 bg-blue-500 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-48 md:w-64 lg:w-80 bg-blue-500 rounded-full opacity-50 blur-xl"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 mb-6">Website Templates</h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 mb-8">Creative Agency</h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 mb-8">All Type Of Website Tamplate is Avilable </h2>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
                    We are a small team of 3 people making themes and doing custom design work. If you can't find what you're
                    looking for in our store section feel free to contact us with a custom job request.
                </p>
            </div>
        </section >
    );
}

export default Header;
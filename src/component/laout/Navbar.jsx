import { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-gray-300 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 underline"></div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/allproduct" className="text-gray-600 hover:text-gray-800">Tamplate</Link>

          <form className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button type="submit" className="ml-2 bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700">
              Search
            </button>
          </form>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <div className="bar w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="bar w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="bar w-6 h-0.5 bg-gray-600"></div>
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Home</Link>
        <Link to="/allproduct" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">Tamplate</Link>

        <form className="px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <button type="submit" className="mt-2 w-full bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;

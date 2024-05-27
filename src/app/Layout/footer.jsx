

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h5 className="text-white font-bold mb-4">Columna 1</h5>
            <ul>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 1</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 2</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 3</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h5 className="text-white font-bold mb-4">Columna 2</h5>
            <ul>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 4</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 5</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 6</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h5 className="text-white font-bold mb-4">Columna 3</h5>
            <ul>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 7</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 8</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 9</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h5 className="text-white font-bold mb-4">Columna 4</h5>
            <ul>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 10</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 11</li>
              <li className="text-gray-400 hover:text-white transition duration-300 mb-2">Enlace 12</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

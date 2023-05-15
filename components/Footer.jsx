import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fringilla tempus felis, vitae dictum urna.
            </p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Product 1
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Product 2
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Product 3
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">123 Main Street</p>
            <p className="text-gray-400">City, State, Country</p>
            <p className="text-gray-400">Phone: 123-456-7890</p>
            <p className="text-gray-400">Email: info@example.com</p>
          </div>
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        <p className="text-center text-gray-400">
          © 2023 My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

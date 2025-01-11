import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";

import avatarImg from '../assets/avatar.png';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/Auth.Context";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const cartItems = useSelector(state => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  const token = localStorage.getItem("token");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const searchSuggestions = ["Dashboard", "Orders", "Cart", "Checkout"].filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 bg-white dark:bg-gray-900 transition-colors">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden focus:outline-none"
          >
            <HiMiniBars3CenterLeft className="text-2xl" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 left-4 bg-white dark:bg-gray-800 shadow-lg rounded-md z-50">
              <ul className="space-y-2 p-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="block text-gray-700 dark:text-gray-200 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link to="/">
            <h1 className="text-xl font-bold text-gray-700 dark:text-gray-200">E-Book</h1>
          </Link>
        </div>

        {/* Search bar */}
        <div className="relative md:flex hidden">
          <IoSearchOutline className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 w-80 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchTerm && (
            <ul className="absolute top-12 bg-white dark:bg-gray-800 shadow-md w-full rounded-md">
              {searchSuggestions.length > 0 ? (
                searchSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No suggestions found</li>
              )}
            </ul>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button onClick={handleDarkModeToggle} className="focus:outline-none">
            {isDarkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
          </button>

          {/* User profile */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="focus:outline-none"
              >
                <img
                  src={avatarImg}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary hover:scale-105 transition-transform"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/checkout"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        CheckOut
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hover:text-primary">
              <HiOutlineUser className="text-xl" />
            </Link>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 bg-primary text-white px-4 py-1 rounded-md"
          >
            <HiOutlineShoppingCart className="text-xl" />
            <span>{cartItems.length || 0}</span>
          </Link>

          {/* Heart icon */}
          <button className="hidden sm:block">
            <HiOutlineHeart className="text-xl" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

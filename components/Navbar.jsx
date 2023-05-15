import Link from "next/link";
import { useRef } from "react";
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <button className="text-2xl font-bold text-white">CodeKapde</button>
          </Link>
          <div className="flex space-x-4 items-center">
            <Link href="/tshirts">
              <button className="text-gray-300 hover:text-white">
                T-Shirt
              </button>
            </Link>
            <Link href="/hoodies">
              <button className="text-gray-300 hover:text-white">
                Hoodies
              </button>
            </Link>
            <Link href="/mugs">
              <button className="text-gray-300 hover:text-white">Mugs</button>
            </Link>
            <Link href="/about">
              <button className="text-gray-300 hover:text-white">About</button>
            </Link>
            <Link href="/contact">
              <button className="text-gray-300 hover:text-white">
                Contact
              </button>
            </Link>
          </div>
          <button className="text-gray-300 hover:text-white text-2xl" onClick={toggleCart}>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
      <div
        className="sidebar absolute top-0 right-0 bg-[#91a8da] p-10 transition-transform translate-x-full transform h-full z-10 border-l shadow-2xl"
        ref={ref}
      >
        <h2 className="text-4xl font-semibold">Shopping Cart</h2>
        <span
          className="absolute top-2 right-2 cursor-pointer text-2xl"
          onClick={toggleCart}
        >
          X
        </span>
        <ol className="py-4 font-semibold space-y-6">
          <li className="flex justify-between">
            <span>Tshirt - Wear the code - </span>
            <span className="flex items-center"><AiOutlinePlusCircle className="mx-2"/>1<AiOutlineMinusCircle className="mx-2"/></span>
          </li>
          <li className="flex justify-between">
            <span>Tshirt - Wear the code - </span>
            <span className="flex items-center"><AiOutlinePlusCircle className="mx-2"/>1<AiOutlineMinusCircle className="mx-2"/></span>
          </li>
          <li className="flex justify-between">
            <span>Tshirt - Wear the code - </span>
            <span className="flex items-center"><AiOutlinePlusCircle className="mx-2"/>1<AiOutlineMinusCircle className="mx-2"/></span>
          </li>
          <li className="flex justify-between">
            <span>Tshirt - Wear the code - </span>
            <span className="flex items-center"><AiOutlinePlusCircle className="mx-2"/>1<AiOutlineMinusCircle className="mx-2"/></span>
          </li>
          <li className="flex justify-between">
            <span>Tshirt - Wear the code - </span>
            <span className="flex items-center"><AiOutlinePlusCircle className="mx-2"/>1<AiOutlineMinusCircle className="mx-2"/></span>
          </li>
        </ol>
        <button className="py-2 px-6 bg-black text-white w-full rounded">Checkout</button>
      </div>
    </nav>
  );
};

export default Navbar;

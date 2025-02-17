import { Link } from "react-router-dom";
import Button from "./Button";
import { products, solutions } from "../constants";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <nav className="bg-white py-6 fixed top-0 w-full z-40 border-b border-gray-300">
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <h2 className="text-[#486284] font-medium text-[25px] cursor-pointer">Meetio</h2>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex list-none items-center mr-4">
                    <li className="relative group">
                        <Link to="/" className="mr-4 text-sm text-[#000000]">Products</Link>
                        {/* Dropdown */}
                        <div className="absolute left-0 top-14 mt-2 w-[300px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="grid gap-4 p-4">
                                {products.map((product) => (
                                    <div key={product.id} className="flex flex-col">
                                        <h3 className="text-[16px] font-medium">{product.title}</h3>
                                        <ul className="mt-2">
                                            {product.links.map((item) => (
                                                <li key={item.link} className="flex items-center gap-3 cursor-pointer">
                                                    <img src={item.icon} alt="icon" className="w-5 h-5" />
                                                    {item.link}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link to="/" className="mr-4 text-sm text-[#000000]">Solutions</Link>
                        {/* Dropdown */}
                        <div className="absolute left-0 top-14 mt-2 w-[300px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="grid gap-4 p-4">
                                {solutions.map((solution) => (
                                    <div key={solution.id} className="flex flex-col">
                                        <h3 className="text-[16px] font-medium">{solution.title}</h3>
                                        <ul className="mt-2">
                                            {solution.links.map((item) => (
                                                <li key={item.link} className="flex items-center gap-3 cursor-pointer">
                                                    <img src={item.icon} alt="icon" className="w-5 h-5" />
                                                    {item.link}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li><Link to="/about" className="mr-4 text-sm text-[#000000]">About us</Link></li>
                    <li><Link to="/contact" className="mr-4 text-sm text-[#000000]">Contact</Link></li>
                    <li><Link to="/pricing" className="mr-4 text-sm text-[#000000]">Pricing</Link></li>
                </ul>

                {/* Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Button containerClass="btn_primary" to="/login">Log In</Button>
                    <Button containerClass="btn_secondary" to="/signup">Sign up free</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-[32px] text-black cursor-pointer">
                        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 right-0 w-full h-screen bg-white z-40 p-6 lg:hidden">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <button onClick={() => toggleDropdown("products")} className="flex justify-between w-full text-left text-[16px] text-[#000000]">
                                Products
                                <span className="cursor-pointer">{dropdownOpen === "products" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                            </button>
                            {dropdownOpen === "products" && (
                                <div className="mt-2 p-4 bg-gray-100 rounded-lg overflow-scroll">
                                    {products.map((product) => (
                                        <div key={product.id} className="flex flex-col">
                                            <h3 className="text-[16px] font-medium">{product.title}</h3>
                                            <ul className="mt-2">
                                                {product.links.map((item) => (
                                                    <li key={item.link} className="flex items-center gap-3 cursor-pointer">
                                                        <img src={item.icon} alt="icon" className="w-5 h-5" />
                                                        {item.link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <button onClick={() => toggleDropdown("solutions")} className="flex justify-between w-full text-left text-[16px] text-[#000000]">
                                Solutions
                                <span className="cursor-pointer">{dropdownOpen === "solutions" ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                            </button>
                            {dropdownOpen === "solutions" && (
                                <div className="mt-2 p-4 bg-gray-100 rounded-lg overflow-scroll">
                                    {solutions.map((solution) => (
                                        <div key={solution.id} className="flex flex-col">
                                            <h3 className="text-[16px] font-medium">{solution.title}</h3>
                                            <ul className="mt-2">
                                                {solution.links.map((item) => (
                                                    <li key={item.link} className="flex items-center gap-3 cursor-pointer">
                                                        <img src={item.icon} alt="icon" className="w-5 h-5" />
                                                        {item.link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li><Link to="/about" className="text-[16px] text-[#000000]">About us</Link></li>
                        <li><Link to="/contact" className="text-[16px] text-[#000000]">Contact</Link></li>
                        <li><Link to="/pricing" className="text-[16px] text-[#000000]">Pricing</Link></li>
                    </ul>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col gap-3">
                        <Button containerClass="btn_primary w-full text-center" to="/login">Log In</Button>
                        <Button containerClass="btn_secondary w-full text-center" to="/signup">Sign up free</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;

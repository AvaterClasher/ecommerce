import React, {useState, useEffect} from "react";
import Menu from "./Menu";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
    const [show, setShow] = useState("translate-y-0");
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [categories, setCategories] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);

    const {cartItems} = useSelector((state) => state.cart);

    return(
        <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
            <span>header</span>
        </header>
    )
}

export default Header;
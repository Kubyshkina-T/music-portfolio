"use client";
import css from "@/components/Header/Header.module.css";
import Link from "next/link";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { YouTube } from "@/components/icons/YouTube";
import BurgerIcon from "@/components/icons/burger";
import {  Pacifico } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";


const pacifico = Pacifico({
     subsets: ["latin"],
 weight: ["400"],
   });
     
const Header = () => {
   
    const pathname = usePathname();
const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className={css.header}>
            <Link className={`${css.headerLogo} ${pacifico.className}`} href="/" aria-label="Home">
                Tanyasha
            </Link>
<button
        className={css.burgerBtn}
        type="button"
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
       <BurgerIcon/>
      </button>

            <nav aria-label="Main Navigation" className={css.navigationContainer}>
                <ul className={css.navigation}>
                    <li>
                        <Link className={`${css.headerNavigation} ${
    pathname === "/" ? css.active : ""
  }`} href="/">Home</Link>
                    </li>
                    <li>
                        <Link className={`${css.headerNavigation} ${
    pathname === "/" ? css.active : ""
  }`} href="/">My music</Link>
                    </li>
                    <li>
                        <Link className={`${css.headerNavigation} ${
    pathname === "/" ? css.active : ""
  }`}href="/">About me</Link>
                    </li>
                    <li>
                        <Link className={`${css.headerNavigation} ${
    pathname === "/" ? css.active : ""
  }`} href="/">Contacts</Link>
                    </li>
                </ul>
                <ul className={css.socialMedia}>
                    <li>
                        <a className={css.headerSocial} href="https://www.instagram.com">
                            <InstagramIcon/>
                       </a>
                    </li>
                    <li>
                        <a className={css.headerSocial} href="https://www.youtube.com">
                            <YouTube/>
                       </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header; 
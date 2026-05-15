"use client";
import css from "@/components/Header/Header.module.css";
import Link from "next/link";
import BurgerIcon from "@/components/icons/burger";
import {  Pacifico } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../Container/Container";
import SocialMedia from "../SocialMedia/SocialMedia";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const pacifico = Pacifico({
     subsets: ["latin"],
 weight: ["400"],
   });
     
const Header = () => {
   
    const pathname = usePathname();
const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className={css.header}>
            <Container>
                <div className={css.headerContainer}>
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
                    {isMenuOpen && (
  <BurgerMenu onClose={() => setIsMenuOpen(false)} />
)}

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
  }`} href="/music">My music</Link>
                    </li>
                    <li>
                        <Link className={`${css.headerNavigation} ${
    pathname === "/" ? css.active : ""
  }`}href="/about">About me</Link>
                    </li>
                    <li>
                        <Link className={`${css.headerNavigation} ${
    pathname === "/" ? css.active : ""
  }`} href="/contacts">Contacts</Link>
                    </li>
                </ul>
               <SocialMedia/>
                    </nav>
                    </div>
                </Container>
        </header>
    )
}
export default Header; 
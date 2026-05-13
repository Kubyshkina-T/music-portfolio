import React from "react"
import Link from "next/link"
import css from "@/components/BurgerMenu/BurgerMenu.module.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import Modal from "../Modal/Modal";


interface BurgerMenuProps{
    onClose: () => void;
}
export default function BurgerMenu({onClose}: BurgerMenuProps) {
    return (
        <Modal onClose={onClose}>
        <div className={css.menu}>
            <button className={css.btnMenuClose} type="button" onClick={onClose}>✕</button>
      <Link href="/about" className={css.link} onClick={onClose} >
        About Me
      </Link>
      <Link href="/music" className={css.link} onClick={onClose}>
        My Music
                </Link>
        <Link href="/contacts" className={css.link} onClick={onClose}>
        Contacts
      </Link>
      <SocialMedia/>
            </div>  
            </Modal>
    )
}
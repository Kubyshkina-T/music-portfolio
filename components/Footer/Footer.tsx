import css from "@/components/Footer/Footer.module.css";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import Container from "../Container/Container";
import SocialMedia from "../SocialMedia/SocialMedia";
const pacifico = Pacifico({
     subsets: ["latin"],
 weight: ["400"],
   });

const Footer = () => {
    return (
        <footer className={css.footer}>
            <Container>
            <div className={css.footerContainer}>
                 <Link className={`${css.footerLogo} ${pacifico.className}`} href="/" aria-label="Home">
                Tanyasha
                    </Link>
                    <p className={css.footerDescription}>
                        © 2026 Tanyasha. All rights reserved.
                    </p>
                    <SocialMedia/>
                </div>
                </Container>
        </footer>
    )
}
export default Footer;
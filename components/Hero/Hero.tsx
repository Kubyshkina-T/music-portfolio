import css from "@/components/Hero/Hero.module.css";
import Container from "../Container/Container";
import Link from "next/link";
const Hero = () => {
    return (
       
        <section className={css.hero}>
            <Container>
                <div className={css.heroContainer}>
                    <h1 className={css.heroTitle}>Music -
                        <span className={css.heroSubtitle}> is my way of speaking to the world</span> </h1>
            
            <p className={css.heroDescription}>I sing about feelings, life, and everything that inspires me. Thank you for listening!</p>
                </div> 
           <Link className={css.heroLink} href="/">About me ☆ </Link>
            </Container>
        </section>
            
    );
}
export default Hero;
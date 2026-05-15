import css from "@/components/Hero/Hero.module.css";
import Container from "../Container/Container";
import ButtonLink from "../Button/Button";
const Hero = () => {
    return (
       
        <section className={css.hero}>
            <Container>
                <div className={css.heroContainer}>
                    <h1 className={css.heroTitle}>Music -
                        <span className={css.heroSubtitle}> is my way of speaking to the world</span> </h1>
            
            <p className={css.heroDescription}>I sing about feelings, life, and everything that inspires me. Thank you for listening!</p>
                </div> 
                <ButtonLink className={css.btnAboutMe} href="/about">About me ☆ </ButtonLink>
            </Container>
        </section>
            
    );
}
export default Hero;
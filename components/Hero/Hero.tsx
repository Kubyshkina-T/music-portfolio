import css from "@/components/Hero/Hero.module.css";

const Hero = () => {
    return (
        <section className={css.hero}>
            <h1 className={css.heroTitle}>Tanyasha</h1>
            <p className={css.heroSubtitle}>Singer, songwriter, and producer</p>
        </section>
    );
}
export default Hero;
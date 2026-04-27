import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import SongSection from "@/components/SongSection/SongSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SongSection/>
      <Footer/>
      </>
  );
}

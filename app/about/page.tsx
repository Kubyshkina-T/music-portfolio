import css from "@/app/about/about.module.css"
import ButtonLink from "@/components/Button/Button";
import Container from "@/components/Container/Container";

export default function AboutPage() {
    return (
          <main className={css.aboutPage}>
                <Container>
     <section className={css.aboutContent}>
      <h1 className={css.titleAboutPage}>Hi, I’m Tanyasha.</h1>
      <p className={css.descriptionAboutPage}>
    I’m not a professional singer — I sing from the heart.
                            </p>
                             <p className={css.descriptionAboutPage}>
For me, music is not about perfection.
It’s about feelings, emotions, and honesty.</p>
  <p className={css.descriptionAboutPage}>
I write my own songs, create covers, and share moments through music.
Each track is a small piece of my inner world.
                            </p>
<p className={css.descriptionAboutPageHightlight}>
✨ I truly enjoy performing live and connecting with people through sound.
                            </p>
 <p className={css.descriptionAboutPage}>                            
If you are looking for live music for pubs, small events, or cozy evenings — I’m open to collaboration.
                            </p>
                            <h2 className={css.subtitleAboutPage }>🎵 In my portfolio, you can find covers in: </h2>
                            <ul className={css.listLanguages}>
                                  <li className={css.itemLanguage}> English</li>
                                  <li className={css.itemLanguage}> German</li>
                                  <li className={css.itemLanguage}> Russian</li>
                                  <li className={css.itemLanguage}> Ukrainian</li>
                            </ul>                        
                            
<p className={css.descriptionAboutPage}>      
Thank you for being here 🤍
                            </p>
                            <ButtonLink href="mailto:tanyasha_@ukr.net">Send message 🕊️</ButtonLink>
                            <ButtonLink href ="https://www.donationalerts.com/r/k_tanyasha">Support me 💸</ButtonLink>
                      </section>
                      </Container>
            </main>
  );
}
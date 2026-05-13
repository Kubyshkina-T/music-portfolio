import css from "@/app/contacts/contacts.module.css";
import Link from "next/link";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Container from "@/components/Container/Container";

export default function Contacts() {
    return (
        <main className={css.contactsPage}>
            <section className={css.contactsSection}>
                <Container>
    <h2 className={css.contactsTitle}>Contacts</h2>
    <p className={css.contactsDescription}>Open for collaborations, live performances and creative projects 🎵</p>
                    <Link className={css.linkMail} href="mailto:tanyasha_@ukr.net">
  tanyasha_@ukr.net
</Link>  

                    </Container>
</section>
        </main>
    )
}
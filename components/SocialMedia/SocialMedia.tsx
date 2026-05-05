import css from "@/components/SocialMedia/SocialMedia.module.css";
import { InstagramIcon } from "../icons/InstagramIcon";
import { YouTube } from "../icons/YouTube";

const SocialMedia = () => {
    return (
         <ul className={css.socialMedia}>
                    <li>
                        <a className={css.linkSocial} href="https://www.instagram.com/k_tanyasha/">
                            <InstagramIcon/>
                       </a>
                    </li>
                    <li>
                        <a className={css.linkSocial} href="https://www.youtube.com/@TaNyasha_K">
                            <YouTube/>
                       </a>
                    </li>
                </ul>
    )
}
export default SocialMedia;
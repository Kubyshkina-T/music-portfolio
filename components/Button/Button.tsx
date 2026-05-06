import css from "@/components/Button/Button.module.css"
import Link from "next/link";
type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
}

export default function ButtonLink({ href, children, }: ButtonLinkProps) {
    return (
        <Link className={css.link} href={href}>
            {children}
        </Link>
    )
}

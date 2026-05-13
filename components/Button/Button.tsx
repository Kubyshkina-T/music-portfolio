import css from "@/components/Button/Button.module.css"
import Link from "next/link";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function ButtonLink({ href, children, className }: ButtonLinkProps) {
    return (
        <Link className={`${css.link} ${className || ""}`} href={href}>
            {children}
        </Link>
    )
}

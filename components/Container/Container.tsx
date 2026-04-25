import css from "@/components/Container/Container.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className={css.container}>{children}</div>;
}
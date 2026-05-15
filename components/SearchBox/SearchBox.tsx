import css from "@/components/SearchBox/SearchBox.module.css";

interface SearchBoxProps{
    text: string;
    onSearch: (nextSearchQuery: string) => void;
}

export default function SearchBox({ text, onSearch }: SearchBoxProps) {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event?.target.value)
    };
    return (
        <input className={css.input}
            type="text"
            placeholder="Search.."
            value={text}
            onChange={handleSearch}/>
    )
}
import { SEARCH_PLACEHOLDER } from "../../../config/constants";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-base-shade px-4 py-3 ring-1 ring-neutral-shade/50 transition-all duration-200 focus-within:ring-accent-main/60">
      <svg
        className="size-4 shrink-0 text-neutral-main"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="6.5" cy="6.5" r="4.5" />
        <path strokeLinecap="round" d="M10.5 10.5l3 3" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={SEARCH_PLACEHOLDER}
        className="min-w-0 flex-1 bg-transparent text-sm text-font-main placeholder:text-neutral-main focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="flex shrink-0 items-center justify-center text-neutral-main transition-colors duration-150 hover:text-font-main"
        >
          <svg
            className="size-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;

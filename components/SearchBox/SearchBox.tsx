"use client";

import { useState } from "react";
import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";

function SearchBox() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    500
  );

  // useEffect(() => {
  //   console.log(searchValue);
  // }, [searchValue]);

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={searchValue}
      onChange={handleChange}
    />
  );
}

export default SearchBox;

// import css from "./SearchBox.module.css";

// interface SearchBoxProps {
//   onSearch: (value: string) => void;
//   value: string;
// }

// function SearchBox({ onSearch, value }: SearchBoxProps) {
//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     onSearch(event.target.value);
//   };

//   return (
//     <input
//       className={css.input}
//       type="text"
//       placeholder="Search notes"
//       defaultValue={value}
//       onChange={handleSearch}
//     />
//   );
// }

// export default SearchBox;

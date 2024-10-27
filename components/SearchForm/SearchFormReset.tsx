"use client";
import Link from "next/link";
import React from "react";

// ICONS
import { X } from "lucide-react";

/**
 * A React functional component that renders a reset button for a search form.
 * When the button is clicked, it resets the form with the class name "search-form".
 *
 * @component
 * @example
 * <SearchFormReset />
 *
 * @returns {JSX.Element} The rendered reset button component.
 */
const SearchFormReset = () => {
  const resetFrom = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement; // get the form element
    if (form) {
      form.reset(); // reset the form
    }
  };
  return (
    <button type="reset" onClick={resetFrom}>
      <Link href="/" className="search-btn text-white">
        <X size={20} />
      </Link>
    </button>
  );
};

export default SearchFormReset;

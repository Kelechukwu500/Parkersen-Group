import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
      // Add your search logic here
    }
  };

  return (
    <div className="min-h-screen pt-48 flex items-center justify-center bg-gradient-to-b from-black via-yellow-500 to-black">
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-grow text-black bg-transparent outline-none placeholder-gray-500"
        />
        <button
          onClick={handleSearch}
          className="ml-2 text-yellow-700 hover:text-yellow-600"
          title="Search"
        >
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;

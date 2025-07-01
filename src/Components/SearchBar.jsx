import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

// List of pages and their routes
const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Career", path: "/career" },
  { name: "Data Protection", path: "/data-protection" },
  { name: "Sitemap", path: "/sitemap" },
  { name: "Forecast Features", path: "/forecast-features" },
  { name: "Construction Expertise", path: "/construction-expertise" },
  { name: "Group Products", path: "/group-products" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Investor Relations", path: "/investor-relations" },
];

const fuse = new Fuse(pages, {
  keys: ["name"],
  threshold: 0.4,
});

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    const result = fuse.search(query);
    if (result.length > 0) {
      navigate(result[0].item.path);
    } else {
      alert("Page not found.");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      const results = fuse.search(value).slice(0, 5);
      setSuggestions(results.map((res) => res.item));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen pt-48 flex items-center justify-center bg-gradient-to-b from-black via-yellow-500 to-black">
      <div className="w-full max-w-md">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <input
            type="text"
            value={query}
            onChange={handleChange}
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

        {suggestions.length > 0 && (
          <ul className="mt-2 bg-white rounded-lg shadow-lg text-black">
            {suggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(item.path)}
                className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;

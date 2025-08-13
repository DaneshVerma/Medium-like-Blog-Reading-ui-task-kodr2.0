import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Optionally, add logic to handle search input (e.g., filtering posts or triggering search)
  };

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/75 dark:bg-gray-900/80 sticky top-0 z-20 backdrop-blur">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="text-2xl font-semi-bold text-gray-900 dark:text-white tracking-tight whitespace-nowrap"
        >
          Medio
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search posts..."
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Search blog posts"
          />
        </div>

        {/* User Icon */}
        <button
          aria-label="User profile"
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title="User Profile"
        >
          <img
            src="https://picsum.photos/seed/usericon/40/40" 
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}

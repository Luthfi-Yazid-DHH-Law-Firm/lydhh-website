"use client";

import Dropdown from "@/components/ui/dropdown";
import useSearchFilter from "@/hooks/useSearchFilter";
import { mapCategoriesToDropdownOptions } from "@/lib/mappers";
import { client } from "@/sanity/lib/client";
import { ALL_CATEGORY_QUERIES } from "@/sanity/lib/queries";
import { ALL_CATEGORY_QUERIESResult } from "@/sanity/types";
import { useCallback, useEffect, useRef, useState } from "react";

const options = { next: { revalidate: 60 } };

const SearchIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const CloseIcon = () => (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ArticleSearchFilter = () => {
  const [categories, setCategories] = useState<ALL_CATEGORY_QUERIESResult>([]);
  const [searchInput, setSearchInput] = useState("");
  const { filters, handleFilterChange } = useSearchFilter();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    client.fetch(ALL_CATEGORY_QUERIES, {}, options)
        .then(setCategories)
        .catch(console.error);
  }, []);

  useEffect(() => {
    setSearchInput(filters.search || "");
  }, [filters.search]);

  const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchInput(value);
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          handleFilterChange({ search: value || null });
        }, 500);
      },
      [handleFilterChange]
  );

  const handleCategoryChange = useCallback(
      (val: string) => handleFilterChange({ category: val || null }),
      [handleFilterChange]
  );

  const handleClearSearch = useCallback(() => {
    setSearchInput("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    handleFilterChange({ search: null });
  }, [handleFilterChange]);

  const handleClearCategory = useCallback(
      () => handleFilterChange({ category: null }),
      [handleFilterChange]
  );

  useEffect(() => () => { if (debounceRef.current) clearTimeout(debounceRef.current); }, []);

  const mappedCategories = mapCategoriesToDropdownOptions(categories);
  const hasFilters = filters.search || filters.category;

  return (
      <div className="w-full space-y-4">
        {/* Search + category row */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          {/* Search input */}
          <div className="relative flex-1">
            <input
                type="text"
                placeholder="Search articles..."
                value={searchInput}
                onChange={handleSearchChange}
                className="w-full h-11 border border-black/[0.12] bg-white pl-4 pr-10 text-[13px] text-[#0d1117] placeholder:text-black/25 outline-none focus:border-[#c9a84c]/60 transition-colors duration-200 font-sans"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c9a84c] pointer-events-none">
            <SearchIcon />
          </span>
            {searchInput && (
                <button
                    onClick={handleClearSearch}
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-black/30 hover:text-[#c9a84c] transition-colors"
                    aria-label="Clear search"
                >
                  <CloseIcon />
                </button>
            )}
          </div>

          {/* Category dropdown */}
          <div className="md:min-w-[180px]">
            <Dropdown
                options={mappedCategories}
                placeholder="All Categories"
                value={filters.category || ""}
                onChange={handleCategoryChange}
                searchable={mappedCategories.length > 10}
            />
          </div>
        </div>

        {/* Active filter pills */}
        {hasFilters && (
            <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#8a8a8a] text-[10px] tracking-[0.12em] uppercase">
            Active filters:
          </span>

              {filters.search && (
                  <span className="inline-flex items-center gap-1.5 border border-[#c9a84c]/30 bg-[#c9a84c]/[0.06] text-[#c9a84c] text-[11px] px-2.5 py-1">
              Search: &ldquo;{filters.search}&rdquo;
                    <button
                        onClick={handleClearSearch}
                        className="hover:opacity-70 transition-opacity"
                        aria-label="Remove search filter"
                    >
                <CloseIcon />
              </button>
            </span>
              )}

              {filters.category && (
                  <span className="inline-flex items-center gap-1.5 border border-[#c9a84c]/30 bg-[#c9a84c]/[0.06] text-[#c9a84c] text-[11px] px-2.5 py-1">
              {mappedCategories.find((c) => c.value === filters.category)?.label ?? filters.category}
                    <button
                        onClick={handleClearCategory}
                        className="hover:opacity-70 transition-opacity"
                        aria-label="Remove category filter"
                    >
                <CloseIcon />
              </button>
            </span>
              )}
            </div>
        )}
      </div>
  );
};

export default ArticleSearchFilter;
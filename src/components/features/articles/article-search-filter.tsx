"use client";

import Dropdown from "@/components/ui/dropdown";
import useSearchFilter from "@/hooks/useSearchFilter";
import { mapCategoriesToDropdownOptions } from "@/lib/mappers";
import { client } from "@/sanity/lib/client";
import { ALL_CATEGORY_QUERIES } from "@/sanity/lib/queries";
import { ALL_CATEGORY_QUERIESResult } from "@/sanity/types";
import { useEffect, useState, useCallback, useRef } from "react";

const options = { next: { revalidate: 60 } };

const ArticleSearchFilter = () => {
  const [categories, setCategories] = useState<ALL_CATEGORY_QUERIESResult>([]);
  const [searchInput, setSearchInput] = useState("");
  const { filters, handleFilterChange } = useSearchFilter();
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await client.fetch(ALL_CATEGORY_QUERIES, {}, options);
        setCategories(result);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Sync search input with filters when filters change from URL
  useEffect(() => {
    setSearchInput(filters.search || "");
  }, [filters.search]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchInput(value);

      // Clear existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      // Set new timeout for debounced search
      debounceTimeoutRef.current = setTimeout(() => {
        handleFilterChange({ search: value || null });
      }, 500);
    },
    [handleFilterChange]
  );

  const handleCategoryChange = useCallback(
    (categoryValue: string) => {
      handleFilterChange({ category: categoryValue || null });
    },
    [handleFilterChange]
  );

  const handleClearSearch = useCallback(() => {
    setSearchInput("");
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    handleFilterChange({ search: null });
  }, [handleFilterChange]);

  const handleClearCategory = useCallback(() => {
    handleFilterChange({ category: null });
  }, [handleFilterChange]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  const mappedCategories = mapCategoriesToDropdownOptions(categories);

  return (
    <div className="w-full space-y-4">
      {/* Search and Category Row */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchInput}
            onChange={handleSearchChange}
            className="border border-gray-400 w-full h-12 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E1BC1C] focus:border-[#E1BC1C] bg-white"
          />
          {searchInput && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="md:min-w-[200px]">
          <Dropdown
            options={mappedCategories}
            placeholder="All Categories"
            value={filters.category || ""}
            onChange={handleCategoryChange}
            searchable={mappedCategories.length > 10}
          />
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.search || filters.category) && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-600">Active filters:</span>

          {filters.search && (
            <div className="inline-flex items-center gap-1 bg-linear-to-r from-[#E1BC1C] to-[#c2a317] text-white px-3 py-1 rounded-full text-sm">
              <span>Search: &quot;{filters.search}&quot;</span>
              <button
                onClick={handleClearSearch}
                className="ml-1 text-white"
                aria-label="Remove search filter"
              >
                ✕
              </button>
            </div>
          )}

          {filters.category && (
            <div className="inline-flex items-center gap-1 bg-[#A22C51] text-white px-3 py-1 rounded-full text-sm">
              <span>
                Category:{" "}
                {mappedCategories.find((cat) => cat.value === filters.category)
                  ?.label || filters.category}
              </span>
              <button
                onClick={handleClearCategory}
                className="ml-1 text-white"
                aria-label="Remove category filter"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticleSearchFilter;

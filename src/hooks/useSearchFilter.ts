"use client";

import { SearchFiltersType } from "@/types/search-filters-type";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useRef } from "react";

const useSearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<SearchFiltersType>({
    search: null,
    category: null,
    sortBy: null
  });
  
  // Track if we're initializing to prevent router updates during initial sync
  const isInitializing = useRef(true);

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());

    const search = query.get("search");
    const category = query.get("category");
    const sortBy = query.get("sortBy");

    setFilters({
      search: search || null,
      category: category || null,
      sortBy: sortBy || null
    });

    // Mark initialization as complete after first sync
    isInitializing.current = false;
  }, [searchParams]);

  const handleFilterChange = useCallback((newFilter: Partial<SearchFiltersType>) => {
    // Don't update URL during initialization
    if (isInitializing.current) {
      return;
    }

    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, ...newFilter };
      
      // Use setTimeout to avoid updating during render
      setTimeout(() => {
        const params = new URLSearchParams();

        Object.entries(updatedFilters).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            params.set(key, value.toString());
          }
        });

        router.push(`?${params.toString()}`);
      }, 0);

      return updatedFilters;
    });
  }, [router]);

  return { filters, handleFilterChange };
};

export default useSearchFilter;
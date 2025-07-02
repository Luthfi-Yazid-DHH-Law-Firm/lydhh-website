import { DropdownOption } from "@/components/ui/dropdown";
import { ALL_CATEGORY_QUERIESResult } from "@/sanity/types";

export const mapCategoriesToDropdownOptions = (
  categories: ALL_CATEGORY_QUERIESResult
): DropdownOption[] => {
  return categories
    .filter((category) => category.title !== null) // Filter out categories without titles
    .map((category) => ({
      value: category.slug?.current || category._id, // Use slug as value, fallback to _id if slug is null
      label: category.title!, // We know title is not null due to filter above
      disabled: false, // Set to true if you want to disable categories without slugs
    }));
};
"use client";

import Link from "next/link";
import { ChevronRightIcon } from "@sanity/icons";
import { FC, ReactNode } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  showHome?: boolean;
  homeHref?: string;
  className?: string;
  itemClassName?: string;
  activeClassName?: string;
  separatorClassName?: string;
  maxItems?: number;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  items,
  separator = <ChevronRightIcon className="w-4 h-4" />,
  showHome = true,
  homeHref = "/",
  className = "",
  itemClassName = "",
  activeClassName = "",
  separatorClassName = "",
  maxItems,
}) => {
  const breadcrumbItems =
    showHome && items[0]?.href !== homeHref
      ? [{ label: "Home", href: homeHref }, ...items]
      : items;

  const displayItems =
    maxItems && breadcrumbItems.length > maxItems
      ? [
          ...breadcrumbItems.slice(0, 1), // First item (usually Home)
          { label: "...", href: undefined }, // Ellipsis
          ...breadcrumbItems.slice(-(maxItems - 2)), // Last few items
        ]
      : breadcrumbItems;

  const defaultStyles = {
    container: "flex items-center text-sm text-gray-600",
    item: "hover:text-[#E1BC1C] transition-colors duration-200 truncate max-w-[200px] sm:max-w-none",
    activeItem: "text-[#E1BC1C] font-medium truncate max-w-[200px] sm:max-w-none",
    separator: "text-gray-400 flex-shrink-0 mx-1 sm:mx-2",
    link: "flex items-center hover:underline truncate",
    ellipsis: "text-gray-400 cursor-default flex-shrink-0",
  };

  return (
    <nav
      className={`${defaultStyles.container} ${className} overflow-x-auto scrollbar-hide`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-nowrap min-w-0">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === "...";

          return (
            <li key={index} className="flex items-center shrink-0 min-w-0">
              {/* Breadcrumb Item */}
              {isEllipsis ? (
                <span className={`${defaultStyles.ellipsis} ${itemClassName}`}>
                  {item.label}
                </span>
              ) : item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`${defaultStyles.link} ${defaultStyles.item} ${itemClassName}`}
                  title={item.label}
                >
                  {item.icon && <span className="shrink-0">{item.icon}</span>}
                  <span className="truncate">{item.label}</span>
                </Link>
              ) : (
                <span
                  className={`${defaultStyles.activeItem} ${activeClassName} ${itemClassName} flex items-center`}
                  aria-current={isLast ? "page" : undefined}
                  title={item.label}
                >
                  {item.icon && <span className="shrink-0">{item.icon}</span>}
                  <span className="truncate">{item.label}</span>
                </span>
              )}

              {/* Separator */}
              {!isLast && (
                <span
                  className={`${defaultStyles.separator} ${separatorClassName}`}
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
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
    container: "flex items-center space-x-2 text-sm text-gray-600",
    item: "hover:text-[#E1BC1C] transition-colors duration-200",
    activeItem: "text-[#E1BC1C] font-medium",
    separator: "text-gray-400",
    link: "flex items-center space-x-1 hover:underline",
    ellipsis: "text-gray-400 cursor-default",
  };

  return (
    <nav
      className={`${defaultStyles.container} ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isEllipsis = item.label === "...";

          return (
            <li key={index} className="flex items-center space-x-2">
              {/* Breadcrumb Item */}
              {isEllipsis ? (
                <span className={`${defaultStyles.ellipsis} ${itemClassName}`}>
                  {item.label}
                </span>
              ) : item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`${defaultStyles.link} ${defaultStyles.item} ${itemClassName}`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span
                  className={`${defaultStyles.activeItem} ${activeClassName} ${itemClassName} flex items-center space-x-1`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
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

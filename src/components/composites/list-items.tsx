import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    ComponentPropsWithoutRef,
    ComponentRef,
    forwardRef,
    ReactNode,
} from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export const ListItems = forwardRef<
    ComponentRef<"a">,
    Omit<ComponentPropsWithoutRef<"a">, "title"> & {
    title: string | null | undefined;
    icon?: ReactNode;
    isMore?: boolean;
    liClassName?: string; // class applied to the <li> wrapper
}
>(({ className, liClassName, title, icon, children, href, isMore = false, ...props }, ref) => {
    return (
        <li className={liClassName}>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href ?? "#"}
                    className={cn(
                        // Base
                        "group flex flex-col gap-1 p-3 select-none no-underline outline-none transition-all duration-200",
                        // Default item
                        !isMore && [
                            "bg-[#0d1117] border border-transparent",
                            "hover:border-[#c9a84c]/20 hover:bg-[#c9a84c]/[0.04]",
                        ],
                        // "More" item — full width gold-tinted
                        isMore && [
                            "bg-[#0d1117] border border-[#c9a84c]/15",
                            "hover:border-[#c9a84c]/35 hover:bg-[#c9a84c]/[0.06]",
                        ],
                        className
                    )}
                    {...props}
                >
                    {/* Title row */}
                    <div
                        className={cn(
                            "flex items-center gap-2 text-[12.5px] font-medium leading-none transition-colors duration-200",
                            isMore
                                ? "text-[#c9a84c]"
                                : "text-[#d4d8de] group-hover:text-[#c9a84c]"
                        )}
                    >
                        {icon && (
                            <span
                                className={cn(
                                    "flex-shrink-0 transition-colors duration-200",
                                    isMore ? "text-[#c9a84c]" : "text-[#6b7785] group-hover:text-[#c9a84c]"
                                )}
                            >
                {icon}
              </span>
                        )}
                        {title ?? "Untitled"}
                    </div>

                    {/* Description */}
                    <p className="text-[11.5px] leading-snug text-[#6b7785] group-hover:text-[#8a95a3] transition-colors duration-200 mt-0.5">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});

ListItems.displayName = "ListItems";
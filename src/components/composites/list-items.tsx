import Link from "next/link";
import {cn} from "@/lib/utils";
import {ComponentPropsWithoutRef, ComponentRef, forwardRef, ReactNode} from "react";
import {NavigationMenuLink} from "@/components/ui/navigation-menu";

export const ListItems = forwardRef<
    ComponentRef<"a">,
    Omit<ComponentPropsWithoutRef<"a">, "title"> & {
    title: string | null | undefined;
    icon?: ReactNode;  // ← add icon prop
}
>(({ className, title, icon, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href ?? "#"}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    {/* Title row with icon */}
                    <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        {icon && (
                            <span className="text-muted-foreground">
                {icon}
              </span>
                        )}
                        {title ?? "Untitled"}
                    </div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItems.displayName = "ListItems";
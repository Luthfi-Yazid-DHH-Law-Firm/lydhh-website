import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
    "text-xs font-medium p-2 min-w-[81px] min-h-8 md:text-sm md:py-2 md:px-3 md:min-w-[100px] md:min-h-9 lg:font-semibold lg:py-3 lg:px-4 lg:min-w-[109px] lg:min-h-11 cursor-pointer",
    {
        variants: {
            intent: {
                primary: [
                    "bg-bg-base", "text-text-lighter", "border-primary-light", "border",
                    "disabled:bg-bg-light", "disabled:text-[#83A2E1]", "rounded-lg",
                    "active:bg-bg-darker"
                ],
                secondary: [
                    "bg-transparent", "text-text-darker", "border-stroke-lighter", "border",
                    "disabled:bg-bg-lighter", "disabled:text-text-light", "disabled:border-primary-lighter",
                    "active:bg-bg-base", "active:border-primary-lighter", "active:text-text-lighter", "rounded-lg",
                ],
                destructive: [
                    "bg-bg-destructive", "text-text-lighter",
                    "disabled:opacity-75", "rounded-lg",
                    "active:bg-danger-lighter", "active:text-danger-base", "active:border-stroke-destructive"
                ],
                ghostPrimary: [
                    "bg-transparent", "border-none", "text-text-base", "disabled:text-text-light"
                ],
                ghostSecondary: [
                    "bg-transparent", "border-none", "text-text-highlight", "disabled:text-text-light"
                ],
                ghostDestructive: [
                    "bg-transparent", "border-none", "text-text-destructive", "disabled:text-text-light"
                ],
            },
            disabled: {
                false: null,
                true: ["cursor-not-allowed"],
            },
        },
        compoundVariants: [
            {
                intent: "primary",
                disabled: false,
                class: "hover:bg-bg-dark",
            },
            {
                intent: "secondary",
                disabled: false,
                class: "hover:bg-bg-light",
            },

            {
                intent: "destructive",
                disabled: false,
                class: "hover:bg-danger-light",
            },
        ],
        defaultVariants: {
            disabled: false,
            intent: "primary",
        },
    });

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ className, intent, disabled, ...props }) => (
    <button
        className={button({ intent, disabled, className })}
        disabled={disabled || undefined}
        {...props}
    />
);

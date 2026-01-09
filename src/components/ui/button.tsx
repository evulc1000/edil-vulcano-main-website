import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold font-brunson ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-cta hover:shadow-cta-hover",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero CTA - solid orange with shadow
        hero:
          "bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] text-primary-foreground font-normal uppercase shadow-[0_8px_20px_rgba(194,64,0,0.25)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(194,64,0,0.35)] hover:brightness-110",
        // Gradient CTA for navbar
        gradient:
          "bg-[linear-gradient(171.76deg,_#FB7838_22.64%,_#D35213_95.06%)] text-[#F2F2F2] font-normal uppercase shadow-[0_10px_24px_rgba(211,82,19,0.35)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(211,82,19,0.35)] hover:brightness-110",
        // Nav link style
        nav: "text-headline hover:text-primary bg-transparent font-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        cta: "h-[58px] px-6 rounded-[3px] text-[20px] md:text-[22px] lg:text-[24px] leading-[1.2] tracking-[0.8px]",
        "cta-sm": "h-[52px] px-5 rounded-[3px] text-[18px] md:text-[20px] leading-[1.2] tracking-[0.6px]",
        "cta-compact": "h-[48px] px-4 rounded-[3px] text-[18px] leading-[1.2] tracking-[0.5px]",
        "cta-bar": "h-[44px] px-4 rounded-[3px] text-[19px] leading-[1.2] tracking-[0.8px]",
        "cta-nav": "h-[44px] px-3 rounded-[3px] text-[24px] xl:text-[28px] leading-[1.2] tracking-[0.8px]",
        "cta-xl":
          "min-h-[90px] px-8 py-5 rounded-[3px] text-[18px] md:text-[26px] leading-[1.2] tracking-[0.8px] whitespace-normal",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

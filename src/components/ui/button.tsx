"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#1FB8BF] text-white hover:bg-[#1FB8BF]/90 focus-visible:ring-[#1FB8BF]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border-2 border-[#1FB8BF] text-[#1FB8BF] hover:bg-[#1FB8BF] hover:text-white",
        secondary: "bg-white text-[#1FB8BF] hover:bg-gray-100",
        ghost: "text-[#1FB8BF] hover:bg-[#1FB8BF]/10",
        link: "text-[#1FB8BF] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: "button" | "a";
  href?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, as = "button", href, ...props }, ref) => {
    if (as === "a") {
      if (href?.startsWith('http') || href?.startsWith('tel:') || href?.startsWith('mailto:')) {
        return (
          <a
            href={href}
            className={cn(buttonVariants({ variant, size, className }))}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {props.children}
          </a>
        );
      }
      return (
        <Link
          href={href || '/'}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 
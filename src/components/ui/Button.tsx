import { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import buttonVariants from "@styles/variants/buttonVariants";
import { cn } from "../../utils/cn";

const Button = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

export default Button;

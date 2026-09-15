import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  // transition-colors misses focus-visible's ring, which is a box-shadow, so
  // the ring used to pop on instantly. active:translate-y-px, not a scale —
  // scaling resamples the label text.
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding font-heading text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out outline-none select-none active:translate-y-px focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Blue fill with a white label: 4.8:1 on either tone.
        primary: "bg-blue text-white hover:bg-blue-hover",
        // border-current + text-on-surface makes one variant read correctly on
        // a dark hero and a light band alike.
        outline:
          "border-current/35 text-on-surface hover:border-current hover:bg-on-surface/5",
        "solid-ink": "bg-ink text-white hover:bg-ink-raised",
        ghost: "text-on-surface hover:bg-on-surface/8",
      },
      size: {
        default: "h-10 gap-2 px-5",
        lg: "h-12 gap-2.5 px-6 text-[0.9375rem]",
        sm: "h-8 gap-1.5 px-3 text-[0.8rem]",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

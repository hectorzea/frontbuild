import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        "epic": "border-transparent bg-violet-600 text-violet-600-foreground shadow hover:bg-violet-400",
        "tech-debt":"border-transparent bg-gray-600 text-gray-600-foreground shadow hover:bg-gray-400",
        "feature":"border-transparent bg-cyan-600 text-cyan-600-foreground shadow hover:bg-cyan-400",
        "bug":"border-transparent bg-red-600 text-red-600-foreground shadow hover:bg-red-400"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => (
  <div
    className={cn("grid w-full auto-rows-[26rem] grid-cols-3 gap-4", className)}
    {...props}
  >
    {children}
  </div>
)

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-2xl",
      // dark glass card
      "bg-[rgba(10,10,14,0.75)] backdrop-blur-xl",
      "border border-white/[0.08]",
      "[box-shadow:0_1px_0_rgba(255,255,255,0.06)_inset,0_-20px_80px_-20px_rgba(255,255,255,0.04)_inset]",
      "transform-gpu transition-all duration-300",
      "hover:border-white/[0.14] hover:[box-shadow:0_1px_0_rgba(255,255,255,0.08)_inset,0_32px_60px_rgba(0,0,0,0.6)]",
      className
    )}
    {...props}
  >
    {/* Animated background — fills top, fades out at bottom */}
    <div className="absolute inset-0 z-0">
      {background}
    </div>

    {/* Gradient overlay — fades background into card bottom */}
    <div className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background: "linear-gradient(to top, rgba(10,10,14,1) 0%, rgba(10,10,14,0.92) 30%, rgba(10,10,14,0.4) 60%, transparent 100%)"
      }}
    />

    {/* Text content — pinned to bottom, above gradient */}
    <div className="relative z-20 p-5 sm:p-6">
      {/* Icon + title + desc — slide up on hover to reveal CTA */}
      <div className="pointer-events-none flex transform-gpu flex-col gap-1.5 transition-all duration-300 lg:group-hover:-translate-y-8">
        <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm">
          <Icon className="h-5 w-5 text-white/70 transition-all duration-300 ease-in-out group-hover:scale-90 origin-left" />
        </div>
        <h3 className="text-lg font-bold text-white/90 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-syne), sans-serif", letterSpacing: "-0.02em" }}>
          {name}
        </h3>
        <p className="text-sm text-white/45 leading-relaxed max-w-sm"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          {description}
        </p>
      </div>

      {/* CTA — hidden on desktop, slides up on hover */}
      <div className="pointer-events-none absolute bottom-5 left-5 sm:bottom-6 sm:left-6 flex w-full translate-y-0 transform-gpu flex-row items-center opacity-100 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:translate-y-8 lg:opacity-0">
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0 text-white/60 hover:text-white text-sm font-medium"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </a>
        </Button>
      </div>
    </div>

    {/* Subtle hover overlay */}
    <div className="pointer-events-none absolute inset-0 z-10 transform-gpu transition-all duration-300 group-hover:bg-white/[0.02]" />
  </div>
)

export { BentoCard, BentoGrid }

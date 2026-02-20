export function BetaBanner() {
  return (
    <div className="relative bg-accent text-accent-foreground text-center text-xs font-medium py-2 px-4 overflow-hidden">
      <div className="absolute inset-0 animate-shimmer" />
      <span className="relative inline-flex items-center gap-2">
        <span className="bg-accent-foreground/15 text-accent-foreground px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          Beta
        </span>
        Versiunea beta a site-ului Dr. Lungu Family. Ne deschidem portile in curand!
      </span>
    </div>
  )
}

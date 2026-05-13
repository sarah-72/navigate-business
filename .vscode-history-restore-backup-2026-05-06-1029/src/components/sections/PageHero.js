import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden bg-(--charcoal) pt-32 pb-20 sm:pt-40 sm:pb-24">
      
     <div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#3fd6a32e,transparent_55%)]"
/>

     <div
  aria-hidden="true"
  className="absolute inset-0 opacity-[0.05] 
  bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] 
  bg-size-[64px_64px]"
/>

      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-(--secondary-foreground)/75 hover:text-(--primary-bright) text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>

        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-(--primary-bright)/15 border border-emerald-400/50">
          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-bright)" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-(--primary-bright)">
            {eyebrow}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-(--secondary-foreground) leading-[1.05] tracking-tight max-w-3xl">
          {title}
        </h1>

        {intro && (
          <p className="text-base sm:text-lg text-(--secondary-foreground)/85 max-w-2xl mt-6 leading-relaxed font-light">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
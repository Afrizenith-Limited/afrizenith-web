import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import type { Project } from "@/types/content";

export function ProjectTile({ title, category, image, href }: Project) {
  const body = (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      {/* Legibility scrim for the overlaid label — the one gradient on the site. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink from-5% via-ink/80 via-30% to-transparent to-60%"
      />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-heading text-base font-semibold text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-white/70">{category}</p>
      </div>
    </>
  );

  const classes = cn(
    "group relative block aspect-3/2 w-full overflow-hidden rounded-lg",
  );

  return href ? (
    <Link href={href} className={classes}>
      {body}
    </Link>
  ) : (
    <div className={classes}>{body}</div>
  );
}

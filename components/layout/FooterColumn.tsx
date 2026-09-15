interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className="font-heading text-xs font-semibold tracking-[0.14em] uppercase">
        {title}
      </h2>
      <div className="mt-5 text-sm text-on-surface-mute">{children}</div>
    </div>
  );
}

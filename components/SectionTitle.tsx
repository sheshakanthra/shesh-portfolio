import { ReactNode } from "react";

export default function SectionTitle({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="font-mono text-xs text-emerald-400">{index}</span>
      <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
        {children}
      </h2>
      <span className="h-px flex-1 bg-slate-800" />
    </div>
  );
}

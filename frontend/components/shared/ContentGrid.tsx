import type { ReactNode } from "react";

type ContentGridProps = {
  children: ReactNode;
  className?: string;
};

export function ContentGrid({ children, className }: ContentGridProps) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className ?? ""}`}>{children}</div>
  );
}

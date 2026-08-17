type DividerProps = {
  className?: string;
};

export function Divider({ className }: DividerProps) {
  return <div className={className ?? "h-px w-full bg-border"} />;
}

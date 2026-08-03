export function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border bg-muted p-8 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-80" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border bg-background">
          <span className="text-3xl">✨</span>
        </div>

        <h3 className="text-xl font-semibold">
          AI Outfit Preview
        </h3>

        <p className="mt-3 max-w-xs text-sm text-muted-foreground">
          Future AI-generated outfit recommendations will be displayed here.
        </p>
      </div>
    </div>
  );
}
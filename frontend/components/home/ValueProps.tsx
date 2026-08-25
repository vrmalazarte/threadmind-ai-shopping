const valueProps = [
  {
    title: "AI-Powered",
    description: "Smarter discovery for your personal style.",
  },
  {
    title: "Personalized",
    description: "Recommendations tailored to your preferences.",
  },
  {
    title: "Curated",
    description: "Thoughtfully selected fashion for every occasion.",
  },
];

export function ValueProps() {
  return (
    <section className="border-y">
      <div className="mx-auto grid max-w-7xl divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
        {valueProps.map((valueProp) => (
          <div key={valueProp.title} className="px-6 py-8 text-center">
            <h3 className="font-semibold">{valueProp.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{valueProp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

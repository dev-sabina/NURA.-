const MarqueeSection = () => {
  const rows = [
    { text: "FRUITJOY", direction: "normal" },
    { text: "HEALTHYSWEET", direction: "reverse" },
    { text: "FRUITJOY", direction: "normal" },
    { text: "HEALTHYSWEET", direction: "reverse" },
    { text: "FRUITJOY", direction: "normal" },
    { text: "HEALTHYSWEET", direction: "reverse" },
  ];

  return (
    <section className="py-12 overflow-hidden">
      {rows.map((row, i) => (
        <div key={i} className="overflow-hidden">
          <div className={row.direction === "normal" ? "animate-marquee" : "animate-marquee-reverse"}
            style={{ display: "flex", width: "200%" }}>
            <span className="marquee-text flex-shrink-0">
              {Array(8).fill(row.text).join(" · ")} ·&nbsp;
            </span>
            <span className="marquee-text flex-shrink-0">
              {Array(8).fill(row.text).join(" · ")} ·&nbsp;
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MarqueeSection;

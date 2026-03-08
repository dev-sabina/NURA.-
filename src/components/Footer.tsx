const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-hero text-4xl md:text-6xl font-bold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            NURA
          </p>
          <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            Real fruit. Pure deliciousness.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-label mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Flavors</p>
            {["Strawberry", "Mango", "Mixed Berry"].map((item) => (
              <a key={item} href="#" className="text-sm hover:opacity-60 transition-opacity" style={{ color: "hsl(var(--primary))" }}>
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>Company</p>
            {["About", "FAQs", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm hover:opacity-60 transition-opacity" style={{ color: "hsl(var(--primary))" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-16 text-xs" style={{ color: "hsl(var(--muted-foreground) / 0.5)" }}>
        © 2026 NURA. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer
      style={{
        minHeight: "45vh",
        width: "100%",
        backgroundColor: "var(--nura-bg)",
      }}
    >
      <div
        style={{
          backgroundColor: "#28242b",
          color: "#fff",
          paddingTop: 40,
          fontSize: "0.8rem",
        }}
      >
        <div
          className="grid gap-8"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            borderBottom: "1px solid #555",
            paddingBottom: 40,
          }}
        >
          <div>
            <h4 style={{ color: "#eee", marginBottom: 15, fontSize: "1.1em", fontWeight: 600 }}>
              NURA
            </h4>
            <p style={{ color: "#ccc", lineHeight: 1.6 }}>
              Real fruit candy made with pure, natural flavors. Sweetness you can feel good about.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#eee", marginBottom: 15, fontSize: "1.1em", fontWeight: 600 }}>
              Flavors
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Strawberry", "Mango", "Mixed Berry", "Apple Burst", "Citrus Zing"].map((item) => (
                <li key={item} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#eee", marginBottom: 15, fontSize: "1.1em", fontWeight: 600 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["About", "FAQs", "Contact", "Privacy Policy"].map((item) => (
                <li key={item} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#222",
            padding: "15px 20px",
            textAlign: "center",
            fontSize: "0.9em",
            color: "#aaa",
          }}
        >
          © 2026 NURA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

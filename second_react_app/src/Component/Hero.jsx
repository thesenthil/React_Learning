function Hero() {
  const styles = {
    hero: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "100vh",
      padding: "0 8%",
      background: "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)",
      color: "white",
      flexWrap: "wrap",
      fontFamily: "'Poppins', sans-serif",
    },

    left: {
      flex: 1,
      minWidth: "350px",
    },

    badge: {
      display: "inline-block",
      background: "#1e40af",
      color: "#93c5fd",
      padding: "8px 18px",
      borderRadius: "30px",
      fontSize: "14px",
      marginBottom: "20px",
    },

    heading: {
      fontSize: "60px",
      fontWeight: "700",
      lineHeight: "1.2",
      marginBottom: "20px",
    },

    highlight: {
      color: "#38bdf8",
    },

    paragraph: {
      fontSize: "18px",
      color: "#cbd5e1",
      lineHeight: "1.8",
      maxWidth: "600px",
      marginBottom: "40px",
    },

    buttonBox: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },

    btn1: {
      padding: "15px 35px",
      background: "#38bdf8",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      transition: ".3s",
    },

    btn2: {
      padding: "15px 35px",
      background: "transparent",
      color: "#38bdf8",
      border: "2px solid #38bdf8",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    },

    right: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "350px",
    },

    image: {
      width: "100%",
      maxWidth: "650px",
      borderRadius: "20px",
      filter: "drop-shadow(0 20px 35px rgba(56,189,248,.35))",
    },
  };

  return (
    <section style={styles.hero}>
      {/* Left Content */}
      <div style={styles.left}>
        <div style={styles.badge}>🚀 Professional Web Development</div>

        <h1 style={styles.heading}>
          Build Your <span style={styles.highlight}>Dream Website</span>
          <br />
          With Modern Technology
        </h1>

        <p style={styles.paragraph}>
          We create beautiful, responsive, and high-performance websites using
          React, JavaScript, Node.js, Express, and MongoDB. Whether you need a
          portfolio, business website, e-commerce platform, or custom web
          application—we bring your ideas to life.
        </p>

        <div style={styles.buttonBox}>
          <button style={styles.btn1}>Get Started</button>

          <button style={styles.btn2}>Our Services</button>
        </div>
      </div>

      {/* Right Side */}
      <div style={styles.right}>
        <img
          style={styles.image}
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
          alt="Website Development"
        />
      </div>
    </section>
  );
}

export default Hero;
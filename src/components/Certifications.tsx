import "./styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Machine Learning (Elite, Top 5%)",
      provider: "IIT Madras",
      score: "73%",
      link: "https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs74/NOC26CS74S49020020504963022.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=archive-run%40nptel-exam.iam.gserviceaccount.com%2F20260724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260724T224454Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=6cab9caf458ef7d3b5cc304f999fc1555e66900db76969f3ab1d98161b3111a428685bba18c56ba78073064b230127066a3a6cc0c131f9c3c7b2727c085215af38b98ec550b7cca9e9d3e777658f39a6b8b94bc18d93dcbfb641af0b633b3c016d016de437df072b63eefa213e035bc21bd40d6568c2159015475b2cdb8d86c791335b42359b67c0cc9a40cbdfa33c81873f6c58ad02bd98cc2ae939c18dcd8852ba9d6d0ea7d27dabe94ed2785fd5a509b0cf2be8aa55457c868d78c69cb072e6343188137f3904ca5e7d613ea9e00ae0b191b1abae8e888bb7e08",
    },
    {
      title: "NPTEL – Cloud Computing (Silver)",
      provider: "IIT Kharagpur",
      score: "78%",
      link: "https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs55/NOC26CS55S99020031404963022.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=archive-run%40nptel-exam.iam.gserviceaccount.com%2F20260724%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260724T224901Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=cd249503e7a5b956bcf90c1e3c4555cb3a30f57155b0f5ce8fa3d175fe84559d2c51adaf645ffb387e9d59ef700416d5fb390858d2640113e8a7d80157eff1dbed7ab4ecbf75b1188d0bd84c60e199db5b49d32b3213ee16f2b3dff38d8457666a86da0a6846ec3eff181d0f9558a13cc884b549cfd1204cc7dff24f718788bd0ecc44896c827d9f429d778aa1b6955c9c78ca973477d3bdea0aa8d3bb1a26552ad8a1b1e55eb0e98225bf56b6257e42041dbcfaf4554b643c30bdfe8ccdc1a71a813c981fcf0a06aee4a039304fc7f2b1d4c544a5f58dcc1dc2de01c1cdc459530c745f3dec6348227128889d54bda5852f1ee510382adb707cf9df8e7eb702",
    },
    {
      title: "Artificial Intelligence: Concepts and Techniques (Elite)",
      provider: "IISc Bangalore",
      score: "63%",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs159/Course/NPTEL25CS159S125520054710912393.pdf",
    },
  ];

  return (
    <div className="certifications-section section-container" id="certifications">
      <h2>
        <span>Certifications</span>
      </h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="certification-card"
          >
            <h4>{cert.title}</h4>
            <p>{cert.provider}</p>
            <span>Score: {cert.score}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

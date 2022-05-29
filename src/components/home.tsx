export default function Home() {
  const bits = [
    "landing page",
    "mediocre website",
    "fun to refresh page",
    "source of many regrets",
  ];
  const randomNumber = Math.floor(Math.random() * bits.length);
  return (
    <div className="flex-box container">
      <div className="flex-item">
        <svg viewBox="0 0 100 85">
          <g fill="white">
            <path d="M 10 13 C 10 13 10 10 13 10 L 87 10 C 87 10 90 10 90 13 L 90 60 L 10 60" />
          </g>
          <g fill="var(--background)">
            <path d="M 13 13 L 87 13 L 87 57 L 13 57" />
          </g>
          <g fill="var(--code)">
            <text x="20" y="50">
              hello
            </text>
          </g>
          <g fill="var(--code)">
            <path d="M 10 60 L 90 60 L 90 67 C 90 67 90 70 87 70 L 13 70 C 13 70 10 70 10 67" />
            <path d="M 40 71 L 60 71 L 60 83 L 40 83" />
            <path d="M 39 84 L 61 84 L 61 85 L 39 85" />
          </g>
        </svg>
      </div>
      <div className="flex-item">
        <h1>hi, i'm bryant 👋🏻</h1>
        <h2>i'm a software engineer 🧑🏻‍💻</h2>
        <h3>
          {"this is my "}
          <code>{bits[randomNumber]}</code>
          {" 🌎"}
        </h3>
      </div>
    </div>
  );
}

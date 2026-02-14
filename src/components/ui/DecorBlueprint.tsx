export default function DecorBlueprint({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`decor-network text-white/[0.15] ${className}`}
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
    >
      {/* Diamond shapes */}
      <rect x="50" y="50" width="40" height="40" transform="rotate(45 70 70)" />
      <rect x="150" y="30" width="30" height="30" transform="rotate(45 165 45)" />
      <rect x="220" y="120" width="35" height="35" transform="rotate(45 237.5 137.5)" />

      {/* Hexagons */}
      <polygon points="100,150 120,138 140,150 140,172 120,184 100,172" />
      <polygon points="200,200 215,190 230,200 230,218 215,228 200,218" />

      {/* Circles */}
      <circle cx="80" cy="220" r="20" />
      <circle cx="250" cy="60" r="15" />
      <circle cx="180" cy="140" r="10" />

      {/* Connection lines */}
      <line x1="70" y1="70" x2="120" y2="150" />
      <line x1="120" y1="150" x2="165" y2="45" />
      <line x1="165" y1="45" x2="237" y2="137" />
      <line x1="237" y1="137" x2="215" y2="200" />
      <line x1="120" y1="184" x2="80" y2="220" />
      <line x1="250" y1="60" x2="237" y2="137" />
      <line x1="180" y1="140" x2="200" y2="200" />

      {/* Chevrons */}
      <polyline points="40,280 55,265 70,280" />
      <polyline points="260,250 275,235 290,250" />
    </svg>
  );
}

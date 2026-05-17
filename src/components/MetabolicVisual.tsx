/** Abstract metabolic / circulation visual — no stock imagery */
export default function MetabolicVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="240" cy="240" r="180" stroke="#e5e3de" strokeWidth="1" />
      <circle cx="240" cy="240" r="120" stroke="#e5e3de" strokeWidth="1" />
      <circle cx="240" cy="240" r="60" stroke="#5b7c99" strokeWidth="0.75" opacity="0.5" />
      <circle cx="240" cy="240" r="8" fill="#5b7c99" opacity="0.6" className="animate-breathe" />
      {/* Nodes */}
      {[
        [240, 60],
        [396, 150],
        [396, 330],
        [240, 420],
        [84, 330],
        [84, 150],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="240" y1="240" x2={x} y2={y} stroke="#5b7c99" strokeWidth="0.5" opacity="0.25" />
          <circle cx={x} cy={y} r="5" fill="#fafaf9" stroke="#5b7c99" strokeWidth="1" opacity="0.7" />
        </g>
      ))}
      <path
        d="M 120 240 Q 240 180 360 240 Q 240 300 120 240"
        stroke="#5b7c99"
        strokeWidth="0.75"
        opacity="0.2"
        fill="none"
      />
    </svg>
  );
}

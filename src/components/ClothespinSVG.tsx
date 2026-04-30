export function ClothespinSVG({ size = 160 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left arm */}
      <path
        d="M30 15 L55 58 L50 65 L18 28 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right arm */}
      <path
        d="M90 15 L65 58 L70 65 L102 28 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Spring coil */}
      <circle cx="60" cy="63" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="60" cy="63" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Lower left arm */}
      <path
        d="M50 65 L38 105" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Lower right arm */}
      <path
        d="M70 65 L82 105" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Gap between arms at top */}
      <path
        d="M43 36 L77 36" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}

/**
 * Decorative components for the resin art aesthetic.
 * Gold flakes, brush stroke dividers, and organic resin shapes.
 */

/** Floating gold flake particles — scattered across a section */
export function GoldFlakes({ count = 8, className = "" }: { count?: number; className?: string }) {
  const flakes = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${10 + (i * 73 + 17) % 80}%`,
    size: 2 + (i % 3) * 1.5,
    delay: `${(i * 0.7) % 4}s`,
    duration: `${3 + (i % 3) * 2}s`,
    opacity: 0.3 + (i % 4) * 0.15,
    rotation: (i * 45) % 360,
  }));

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute"
          style={{
            left: f.left,
            top: `${20 + (f.id * 37) % 60}%`,
            width: f.size,
            height: f.size,
            background: `linear-gradient(${f.rotation}deg, #D4AF37, #F4E4BC, #B79B6C)`,
            borderRadius: f.id % 2 === 0 ? '50%' : '30% 70% 60% 40%',
            opacity: f.opacity,
            animation: `goldFlakeShimmer ${f.duration} ease-in-out ${f.delay} infinite`,
            boxShadow: '0 0 4px rgba(212, 175, 55, 0.4)',
          }}
        />
      ))}
    </div>
  );
}

/** A brush stroke divider — organic, painterly horizontal separator */
export function BrushDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 300 12"
        className="w-48 h-3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6 C20 3, 40 9, 60 5 C80 1, 100 8, 120 4 C140 0, 160 10, 180 6 C200 2, 220 9, 240 5 C260 1, 280 8, 300 6"
          stroke="url(#brushGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="brushGrad" x1="0" y1="6" x2="300" y2="6">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#B79B6C" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#B79B6C" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Organic resin-shaped image frame */
export function ResinFrame({
  children,
  variant = 1,
  className = "",
  glow = true,
}: {
  children: React.ReactNode;
  variant?: 1 | 2 | 3 | 4;
  className?: string;
  glow?: boolean;
}) {
  const shapes: Record<number, string> = {
    1: '30% 70% 66% 34% / 40% 30% 70% 60%',
    2: '60% 40% 30% 70% / 50% 60% 40% 50%',
    3: '40% 60% 55% 45% / 35% 55% 45% 65%',
    4: '50% 50% 40% 60% / 60% 40% 60% 40%',
  };

  return (
    <div
      className={`relative overflow-hidden resin-reveal ${className}`}
      style={{
        borderRadius: shapes[variant],
        boxShadow: glow
          ? '0 12px 48px rgba(183, 155, 108, 0.15), inset 0 1px 0 rgba(255,255,255,0.5)'
          : undefined,
      }}
    >
      {children}
    </div>
  );
}

/** Decorative corner flourish — tiny gold leaf accent */
export function GoldLeafCorner({ position = 'top-right' }: { position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }) {
  const pos = {
    'top-right': 'top-3 right-3',
    'top-left': 'top-3 left-3 -scale-x-100',
    'bottom-right': 'bottom-3 right-3 -scale-y-100',
    'bottom-left': 'bottom-3 left-3 -scale-x-100 -scale-y-100',
  };

  return (
    <svg
      className={`absolute ${pos[position]} w-8 h-8 pointer-events-none`}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 30 Q2 16, 8 8 Q14 2, 30 2"
        stroke="url(#leafGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="30" cy="2" r="1.5" fill="#D4AF37" opacity="0.6" />
      <defs>
        <linearGradient id="leafGrad" x1="2" y1="30" x2="30" y2="2">
          <stop offset="0%" stopColor="#B79B6C" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

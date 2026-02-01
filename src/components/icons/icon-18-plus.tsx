import type { SVGProps } from 'react';

export function Icon18Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative inline-block">
      <svg
        width="128"
        height="148"
        viewBox="0 0 128 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FBBF24' }} />
            <stop offset="100%" style={{ stopColor: '#B45309' }} />
          </linearGradient>
        </defs>
        <path
          d="M64 5.33333L15.3333 25V85C15.3333 120 64 145 64 145C64 145 112.667 120 112.667 85V25L64 5.33333Z"
          fill="#18181b"
        />
        <path
          d="M64 5.33333L15.3333 25V85C15.3333 120 64 145 64 145C64 145 112.667 120 112.667 85V25L64 5.33333Z"
          stroke="url(#gold-gradient)"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white text-[40px] font-bold"
          fontFamily="Inter, sans-serif"
        >
          18+
        </text>
      </svg>
      <div className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 border-2 border-white shadow-md">
        <span className="text-white text-2xl font-bold select-none">!</span>
      </div>
    </div>
  );
}

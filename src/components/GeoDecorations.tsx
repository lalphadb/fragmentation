/* Reusable geometric SVG decorations inspired by Enaex */

export function ChevronDeco({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5L30 30L10 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 5L45 30L25 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DiamondDeco({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="2" width="25" height="25" transform="rotate(45 20 2)" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HexDeco({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 1L48 15V43L25 57L2 43V15L25 1Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowDeco({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L15 25L2 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossDeco({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function TriangleDeco({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2L38 33H2L20 2Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

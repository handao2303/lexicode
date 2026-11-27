/** The Lexicode study fox: flat vector mascot, drawn for this app. */

export function FoxHead({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path d="M6 6c7 1 12 5 15 10L8 27C5 20 4 12 6 6Z" fill="#ff5f52" />
      <path d="M42 6c-7 1-12 5-15 10l13 11c3-7 4-15 2-21Z" fill="#ff5f52" />
      <path d="M9.5 11c3.6 1.2 6.2 3.2 8 5.8L10.8 22c-1.3-3.5-1.8-7.3-1.3-11Z" fill="#7a2b36" />
      <path d="M38.500 11c-3.600 1.200-6.200 3.200-8 5.800l6.700 5.200c1.300-3.500 1.800-7.300 1.300-11Z" fill="#7a2b36" />
      <path d="M24 12c11 0 19 8 19 16 0 4-3 6-6 8-4 3-8 7-13 7s-9-4-13-7c-3-2-6-4-6-8 0-8 8-16 19-16Z" fill="#ff6f5b" />
      <path d="M5 29c6-2 12 0 14 4 1.500 2.500 3 3.500 5 3.500s3.500-1 5-3.500c2-4 8-6 14-4-1 3-3.500 5-6 7-4 3-8 7-13 7s-9-4-13-7c-2.500-2-5-4-6-7Z" fill="#fff6ee" />
      <circle cx="16" cy="27" r="2.400" fill="#2a1a2e" />
      <circle cx="32" cy="27" r="2.400" fill="#2a1a2e" />
      <path d="M21 34.500h6c-.600 2-1.600 3.200-3 3.200s-2.400-1.200-3-3.200Z" fill="#2a1a2e" />
    </svg>
  );
}

/** The fox reading on its little planet, with orbit rings and a paper plane. */
export function FoxScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 320" className={className} aria-hidden="true">
      {/* orbit, back half */}
      <path d="M24 232C40 188 130 156 214 160s140 34 122 72" fill="none" stroke="#f2b184" strokeWidth="1.5" />
      <path d="M52 122c70-62 190-66 262-16" fill="none" stroke="#f2b184" strokeWidth="1.5" strokeDasharray="3 7" />
      {/* planet */}
      <path d="M46 320c0-76 60-122 134-122s134 46 134 122Z" fill="var(--planet, #fff)" />
      <ellipse cx="180" cy="214" rx="62" ry="9" fill="#2a1a2e" opacity=".08" />
      {/* tail */}
      <g className="fox-tail">
      <path d="M150 188c-34 16-72 2-74-34-1-22 10-40 26-50-6 20 2 30 14 38 16 11 36 20 34 46Z" fill="#ff5f52" />
      <path d="M102 104c-16 10-27 28-26 50 6-8 12-10 18-8-2-14 0-28 8-42Z" fill="#fff6ee" />
      <path d="M92 150c8 20 28 30 52 28" fill="none" stroke="#d93f45" strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* body */}
      <path d="M180 128c26 0 40 34 40 62 0 18-16 24-40 24s-40-6-40-24c0-28 14-62 40-62Z" fill="#ff6f5b" />
      <path d="M180 140c14 0 22 22 22 40 0 12-10 18-22 18s-22-6-22-18c0-18 8-40 22-40Z" fill="#ffb27a" />
      {/* feet */}
      <ellipse cx="160" cy="212" rx="15" ry="8" fill="#7a2b36" />
      <ellipse cx="202" cy="212" rx="15" ry="8" fill="#7a2b36" />
      {/* head */}
      <g className="fox-head">
        <path d="M130 40c20 3 34 14 42 28l-37 30c-9-18-12-40-5-58Z" fill="#ff5f52" />
        <path d="M230 40c-20 3-34 14-42 28l37 30c9-18 12-40 5-58Z" fill="#ff5f52" />
        <path d="M138 53c10 3 18 10 23 17l-19 15c-4-10-6-21-4-32Z" fill="#7a2b36" />
        <path d="M222 53c-10 3-18 10-23 17l19 15c4-10 6-21 4-32Z" fill="#7a2b36" />
        <path d="M180 62c31 0 54 22 54 45 0 12-9 17-17 23-11 9-23 18-37 18s-26-9-37-18c-8-6-17-11-17-23 0-23 23-45 54-45Z" fill="#ff6f5b" />
        <path d="M127 110c17-6 34 0 40 11 4 7 8 10 13 10s9-3 13-10c6-11 23-17 40-11-3 9-9 13-16 20-11 9-23 18-37 18s-26-9-37-18c-7-7-13-11-16-20Z" fill="#fff6ee" />
        <g className="fox-eyes">
          <circle cx="158" cy="104" r="5.5" fill="#2a1a2e" />
          <circle cx="202" cy="104" r="5.5" fill="#2a1a2e" />
          <circle cx="160" cy="102" r="1.7" fill="#fff" />
          <circle cx="204" cy="102" r="1.7" fill="#fff" />
        </g>
        <circle cx="145" cy="118" r="6" fill="#ff9d8c" opacity=".7" />
        <circle cx="215" cy="118" r="6" fill="#ff9d8c" opacity=".7" />
        <path d="M172 124h16c-1.5 5-4 8-8 8s-6.5-3-8-8Z" fill="#2a1a2e" />
        <path d="M172 137c4 4 12 4 16 0" fill="none" stroke="#2a1a2e" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* open book */}
      <path d="M128 164l52 12 56-20-6 34-50 18-48-14Z" fill="#1d2340" />
      <path d="M135 170l45 11v19l-41-12Z" fill="#2c3668" />
      <path d="M180 181l48-17-4 20-44 16Z" fill="#242c55" />
      <ellipse cx="140" cy="184" rx="9" ry="7" fill="#7a2b36" />
      <ellipse cx="222" cy="180" rx="9" ry="7" fill="#7a2b36" />
      {/* orbit, front half */}
      <path d="M24 232c-12 34 70 60 150 60s152-22 162-60" fill="none" stroke="#f2b184" strokeWidth="1.5" />
      <circle cx="52" cy="266" r="8" fill="#ffc20e" />
      <circle cx="248" cy="256" r="12" fill="#7b2ff0" />
      <circle cx="322" cy="262" r="7" fill="#8fd0d4" />
      {/* paper plane */}
      <g className="fox-plane">
        <path d="M40 70l62-26-24 52-12-20Z" fill="#ff5f52" />
        <path d="M66 76l36-32-44 24Z" fill="#d93f45" />
      </g>
    </svg>
  );
}

export type Mood = "happy" | "cheer" | "oops" | "sleepy";

/** Cute fox faces for feedback, empty states and finished screens. */
export function FoxMood({ mood = "happy", size = 64, className }: { mood?: Mood; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path d="M6 6c7 1 12 5 15 10L8 27C5 20 4 12 6 6Z" fill="#ff5f52" />
      <path d="M42 6c-7 1-12 5-15 10l13 11c3-7 4-15 2-21Z" fill="#ff5f52" />
      <path d="M9.5 11c3.6 1.2 6.2 3.2 8 5.8L10.8 22c-1.3-3.5-1.8-7.3-1.3-11Z" fill="#7a2b36" />
      <path d="M38.5 11c-3.6 1.2-6.2 3.2-8 5.8l6.7 5.200c1.300-3.500 1.800-7.300 1.300-11Z" fill="#7a2b36" />
      <path d="M24 12c11 0 19 8 19 16 0 4-3 6-6 8-4 3-8 7-13 7s-9-4-13-7c-3-2-6-4-6-8 0-8 8-16 19-16Z" fill="#ff6f5b" />
      <path d="M5 29c6-2 12 0 14 4 1.5 2.5 3 3.500 5 3.500s3.500-1 5-3.500c2-4 8-6 14-4-1 3-3.500 5-6 7-4 3-8 7-13 7s-9-4-13-7c-2.500-2-5-4-6-7Z" fill="#fff6ee" />
      <circle cx="11" cy="31" r="2.600" fill="#ff9d8c" opacity=".75" />
      <circle cx="37" cy="31" r="2.600" fill="#ff9d8c" opacity=".75" />
      {mood === "happy" && (
        <>
          <circle cx="16" cy="27" r="2.400" fill="#2a1a2e" />
          <circle cx="32" cy="27" r="2.400" fill="#2a1a2e" />
          <circle cx="16.800" cy="26.100" r=".8" fill="#fff" />
          <circle cx="32.800" cy="26.100" r=".8" fill="#fff" />
          <path d="M21 34.500h6c-.6 2-1.600 3.200-3 3.200s-2.400-1.200-3-3.200Z" fill="#2a1a2e" />
        </>
      )}
      {mood === "cheer" && (
        <>
          <path d="M13 28.500c1-3.500 5-3.500 6 0M29 28.500c1-3.500 5-3.500 6 0" fill="none" stroke="#2a1a2e" strokeWidth="2.200" strokeLinecap="round" />
          <path d="M19.500 34h9c0 4-2 6.500-4.500 6.500S19.500 38 19.500 34Z" fill="#2a1a2e" />
          <path d="M22 38.500c1-1.200 3-1.200 4 0-.5 1.400-3.500 1.400-4 0Z" fill="#ff7d86" />
          <path d="M42 4l1 2.600 2.600 1-2.600 1-1 2.600-1-2.600-2.600-1 2.600-1Z" fill="#ffc20e" />
          <path d="M6 10l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z" fill="#ffc20e" />
        </>
      )}
      {mood === "oops" && (
        <>
          <circle cx="16" cy="27.500" r="2.400" fill="#2a1a2e" />
          <circle cx="32" cy="27.500" r="2.400" fill="#2a1a2e" />
          <circle cx="16.800" cy="26.600" r=".8" fill="#fff" />
          <circle cx="32.800" cy="26.600" r=".8" fill="#fff" />
          <path d="M12.5 24l6-1.8M35.5 24l-6-1.8" stroke="#2a1a2e" strokeWidth="1.800" strokeLinecap="round" />
          <path d="M21 34.500h6c-.6 1.800-1.600 2.800-3 2.800s-2.400-1-3-2.800Z" fill="#2a1a2e" />
          <path d="M42 18c2 3 3 5 3 6.500a3 3 0 0 1-6 0c0-1.500 1-3.500 3-6.500Z" fill="#8fd0d4" />
        </>
      )}
      {mood === "sleepy" && (
        <>
          <path d="M13 27.500c1.500 2 4.500 2 6 0M29 27.500c1.500 2 4.500 2 6 0" fill="none" stroke="#2a1a2e" strokeWidth="2.200" strokeLinecap="round" />
          <path d="M21 34.500h6c-.6 2-1.600 3.200-3 3.200s-2.400-1.200-3-3.200Z" fill="#2a1a2e" />
          <path d="M37 6h5l-5 6h5" fill="none" stroke="#7b2ff0" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

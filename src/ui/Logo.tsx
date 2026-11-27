import { FoxHead } from "./Fox";

export function Mark({ size = 32 }: { size?: number }) {
  return <FoxHead size={size} className="mark" />;
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo">
      <Mark />
      <span className="logo-text">
        <b>
          <em>Lexi</em>code
        </b>
        {!compact && <small>IELTS · Code</small>}
      </span>
    </span>
  );
}

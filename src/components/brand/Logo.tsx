export function LogoMark({
  size = 44,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Emerald background circle */}
      <circle cx="22" cy="22" r="22" fill="#0c7558" />

      {/* Stylized document / magnifying glass */}
      {/* Document shape */}
      <path
        d="M14 12 H26 L30 16 V30 C30 31.1 29.1 32 28 32 H14 C12.9 32 12 31.1 12 30 V14 C12 12.9 12.9 12 14 12 Z"
        fill="white"
      />
      {/* Folded corner */}
      <path
        d="M26 12 L26 16 L30 16 Z"
        fill="#dcf0ea"
      />
      {/* Lines inside document */}
      <line x1="15.5" y1="20" x2="22" y2="20" stroke="#0c7558" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="15.5" y1="23.5" x2="26" y2="23.5" stroke="#0c7558" strokeWidth="1.4" strokeLinecap="round" />
      {/* Checkmark (third "line" replaced) */}
      <path
        d="M16 27.5 L18.5 30 L23 25.5"
        stroke="#0c7558"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Sun pastille (notification badge) */}
      <circle cx="36" cy="8" r="6.5" fill="#fcfaf5" />
      <circle cx="36" cy="8" r="5" fill="#e89d2e" />
    </svg>
  );
}

export function Logo({
  size = 44,
  showTagline = true,
  className = "",
}: {
  size?: number;
  showTagline?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={size} />
      <div className="flex flex-col leading-tight">
        <span
          className="font-extrabold text-ink -tracking-[0.02em] leading-none"
          style={{ fontSize: size * 0.34 }}
        >
          erreur-retraite.fr
        </span>
        {showTagline ? (
          <span
            className="text-muted font-medium mt-1"
            style={{ fontSize: size * 0.19 }}
          >
            L'information retraite enfin accessible
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function LogoFooter({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span
        className="font-extrabold text-white -tracking-[0.02em]"
        style={{ fontSize: size * 0.36 }}
      >
        erreur-retraite.fr
      </span>
    </div>
  );
}

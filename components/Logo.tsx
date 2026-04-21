interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

export default function Logo({ size = "md", variant = "dark" }: LogoProps) {
  const sizes = { sm: 32, md: 44, lg: 60 };
  const dim = sizes[size];
  const textColor = variant === "dark" ? "#0f2847" : "#ffffff";

  return (
    <div className="flex items-center gap-2.5">
      {/* Icon mark */}
      <svg width={dim} height={dim} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer frame */}
        <rect x="2" y="2" width="40" height="40" rx="8" fill="#0f2847"/>
        {/* Window frame */}
        <rect x="7" y="7" width="30" height="30" rx="3" fill="none" stroke="#f97316" strokeWidth="2.5"/>
        {/* Vertical divider */}
        <line x1="22" y1="7" x2="22" y2="37" stroke="#f97316" strokeWidth="2.5"/>
        {/* Horizontal divider */}
        <line x1="7" y1="22" x2="37" y2="22" stroke="#f97316" strokeWidth="2.5"/>
        {/* Handle */}
        <rect x="19.5" y="19" width="5" height="6" rx="2.5" fill="#fdba74"/>
        {/* Corner shine */}
        <circle cx="10" cy="10" r="1.5" fill="#f97316" opacity="0.6"/>
        <circle cx="34" cy="10" r="1.5" fill="#f97316" opacity="0.6"/>
        <circle cx="10" cy="34" r="1.5" fill="#f97316" opacity="0.6"/>
        <circle cx="34" cy="34" r="1.5" fill="#f97316" opacity="0.6"/>
      </svg>
      {/* Word mark */}
      <div className="leading-tight">
        <div className="flex items-baseline gap-0">
          <span
            className="font-extrabold tracking-tight"
            style={{
              color: textColor,
              fontSize: size === "sm" ? "14px" : size === "lg" ? "24px" : "18px",
              letterSpacing: "-0.02em",
            }}
          >
            fenêtre
          </span>
          <span
            className="font-extrabold tracking-tight"
            style={{
              color: "#f97316",
              fontSize: size === "sm" ? "14px" : size === "lg" ? "24px" : "18px",
            }}
          >
            229
          </span>
        </div>
        <div
          className="text-gray-400 uppercase tracking-widest"
          style={{ fontSize: size === "sm" ? "7px" : size === "lg" ? "11px" : "8px" }}
        >
          Menuiserie · Vitrerie
        </div>
      </div>
    </div>
  );
}

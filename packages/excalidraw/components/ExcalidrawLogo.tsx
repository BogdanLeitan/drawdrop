import "./ExcalidrawLogo.scss";

const LogoIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ExcalidrawLogo-icon"
    aria-hidden="true"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        strokeWidth="2.15"
        d="M6.6 7.8c-.3-1.1.6-2 1.8-1.9l16.2-1c1.2-.1 2.2.9 2.1 2.1l-1.5 19.2c-.1 1.2-1.3 2.1-2.5 2L7.3 26.7c-1.2-.1-2-1.3-1.8-2.5L6.6 7.8Z"
      />
      <path strokeWidth="1.55" d="M11 13.4c2.8-.7 5.8-.9 8.6-.3" />
      <path strokeWidth="1.55" d="M11.4 18.8c2.4-.5 5-.6 7.3.1" />
    </g>
    <path
      fill="currentColor"
      d="M27.4 10.6s-10.4 10.8-10.4 16.8c0 5.6 4.6 10 10.4 10s10.4-4.4 10.4-10c0-6-10.4-16.8-10.4-16.8Z"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.5"
      d="M30.8 21.8c1.3 1.5 1.4 3.8.1 5.4"
    />
  </svg>
);

const LogoText = () => <span className="ExcalidrawLogo-text">Drawdrop</span>;

type LogoSize = "xs" | "small" | "normal" | "large" | "custom" | "mobile";

interface LogoProps {
  size?: LogoSize;
  withText?: boolean;
  style?: React.CSSProperties;
  isNotLink?: boolean;
}

export const ExcalidrawLogo = ({
  style,
  size = "small",
  withText,
}: LogoProps) => {
  return (
    <div className={`ExcalidrawLogo is-${size}`} style={style}>
      <LogoIcon />
      {withText && <LogoText />}
    </div>
  );
};

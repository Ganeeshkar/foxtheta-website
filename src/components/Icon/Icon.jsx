/**
 * Icon — a single inline-SVG icon set.
 *
 * Usage:  <Icon name="arrow" size={20} />
 * Icons inherit `currentColor`, so colour them with CSS on the parent.
 * Add new icons by adding a key to `paths` below.
 */

const paths = {
  arrow: (
    <>
      <path d="M5 12h13" />
      <path d="M12.5 5.5 19 12l-6.5 6.5" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m5.5 11.5 6.5-6.5 6.5 6.5" />
    </>
  ),
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  chevronRight: <path d="m9.5 6 6 6-6 6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  check: <path d="m20 6.5-11 11-5-5" />,
  spark: (
    <>
      <path d="M12 3.5 13.9 9l5.6 2-5.6 2-1.9 5.5L10.1 13 4.5 11l5.6-2z" />
      <path d="M18.5 3.5v3" />
      <path d="M20 5h-3" />
    </>
  ),

  /* --- service icons ------------------------------------- */
  agent: (
    <>
      <rect x="3.5" y="8" width="17" height="12" rx="3.5" />
      <path d="M12 3.5V8" />
      <circle cx="12" cy="2.6" r="1.4" />
      <path d="M9 13v1.6" />
      <path d="M15 13v1.6" />
      <path d="M1.5 13v3" />
      <path d="M22.5 13v3" />
    </>
  ),
  knowledge: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  automation: (
    <>
      <rect x="2.5" y="3.5" width="7" height="6" rx="2" />
      <rect x="14.5" y="14.5" width="7" height="6" rx="2" />
      <path d="M6 9.5v5a3 3 0 0 0 3 3h5.5" />
      <path d="M12 6.5h3.5a3 3 0 0 1 3 3v5" />
    </>
  ),
  sparkle: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M12 8.2 13.2 11l2.8 1.2-2.8 1.2L12 16.2 10.8 13.4 8 12.2 10.8 11z" />
    </>
  ),
  integrations: (
    <>
      <path d="M9.8 13.2a4.5 4.5 0 0 0 6.8.5l2.6-2.6a4.5 4.5 0 0 0-6.4-6.4l-1.5 1.5" />
      <path d="M14.2 10.8a4.5 4.5 0 0 0-6.8-.5l-2.6 2.6a4.5 4.5 0 0 0 6.4 6.4l1.5-1.5" />
    </>
  ),
  devices: (
    <>
      <rect x="2" y="4" width="13" height="10" rx="2.5" />
      <path d="M5.5 18h6" />
      <rect x="16.5" y="9" width="5.5" height="11" rx="2" />
    </>
  ),
  cloud: (
    <>
      <path d="M12 2.5 2.5 7 12 11.5 21.5 7z" />
      <path d="m2.5 17 9.5 4.5 9.5-4.5" />
      <path d="m2.5 12 9.5 4.5 9.5-4.5" />
    </>
  ),

  /* --- approach / value icons ---------------------------- */
  layers: (
    <>
      <path d="M12 2.5 2.5 7 12 11.5 21.5 7z" />
      <path d="m2.5 12 9.5 4.5 9.5-4.5" />
      <path d="m2.5 17 9.5 4.5 9.5-4.5" />
    </>
  ),
  route: (
    <>
      <circle cx="5.5" cy="5.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
      <path d="M8 5.5h5a4 4 0 0 1 0 8h-2a4 4 0 0 0 0 8h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4 5.5v6c0 5.5 4.4 8.9 8 10 3.6-1.1 8-4.5 8-10v-6z" />
      <path d="m9 11.8 2.2 2.2L15.2 10" />
    </>
  ),
  trending: (
    <>
      <path d="M22 6.5 13.5 15 9 10.5 2 17.5" />
      <path d="M16.5 6.5H22v5.5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  chat: (
    <>
      <path d="M20.5 12.5a7.5 7.5 0 0 1-10.9 6.7L4 20.5l1.3-5.4A7.5 7.5 0 1 1 20.5 12.5z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.4l3.4 2" />
    </>
  ),
  users: (
    <>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H6.5a4 4 0 0 0-4 4V20" />
      <circle cx="9.25" cy="7.5" r="3.5" />
      <path d="M21.5 20v-1.5a4 4 0 0 0-3-3.87" />
      <path d="M15.5 4.13a4 4 0 0 1 0 6.74" />
    </>
  ),

  /* --- contact / social ---------------------------------- */
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M21.5 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.6 4.2 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L7.6 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2z" />
  ),
  pin: (
    <>
      <path d="M20.5 10.5c0 6.5-8.5 12-8.5 12s-8.5-5.5-8.5-12a8.5 8.5 0 0 1 17 0z" />
      <circle cx="12" cy="10.3" r="3" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16.2 8.4A5.4 5.4 0 0 1 21.6 13.8V21h-3.9v-7.2a1.5 1.5 0 0 0-3 0V21h-3.9v-7.2a5.4 5.4 0 0 1 5.4-5.4z" />
      <rect x="2.6" y="9" width="3.9" height="12" rx="0.6" />
      <circle cx="4.55" cy="4.4" r="2" />
    </>
  ),
  twitter: (
    <path
      d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.67l7.73-8.83L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.11z"
      fill="currentColor"
      stroke="none"
    />
  ),
  github: (
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
      fill="currentColor"
      stroke="none"
    />
  ),
  quote: (
    <path
      d="M9.4 5.5C6 7.1 4 10.1 4 13.6c0 2.9 1.7 4.9 4.1 4.9 2.1 0 3.7-1.6 3.7-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 2-3.3 4-4.2zm10.2 0c-3.4 1.6-5.4 4.6-5.4 8.1 0 2.9 1.7 4.9 4.1 4.9 2.1 0 3.7-1.6 3.7-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 2-3.3 4-4.2z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export default function Icon({
  name,
  size = 24,
  strokeWidth = 1.6,
  className = "",
  ...rest
}) {
  const content = paths[name];
  if (!content) return null;

  return (
    <svg
      className={`icon icon--${name} ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  );
}

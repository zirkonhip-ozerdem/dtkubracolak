import type { ComponentProps } from "react";
import type { ReactNode } from "react";

type IconName = "tooth" | "implant" | "spark" | "gum" | "crown" | "shield" | "drop" | "scaler" | "extract" | "filling" | "bridge" | "phone" | "mail" | "pin" | "menu" | "close";

type SiteIconProps = ComponentProps<"svg"> & {
  name: IconName;
};

const paths: Record<IconName, ReactNode> = {
  tooth: (
    <path d="M12 3.5c-1.4 0-2.1.7-3.2.7-1 0-1.4-.4-2.5-.4-2 0-3.6 1.8-3.6 4.6 0 3.8 2 8.1 3.5 10.4.8 1.2 1.7 1 2.1-.4l.7-2.8c.3-1.2.9-1.8 2.1-1.8h1.8c1.2 0 1.8.6 2.1 1.8l.7 2.8c.4 1.4 1.3 1.6 2.1.4 1.5-2.3 3.5-6.6 3.5-10.4 0-2.8-1.6-4.6-3.6-4.6-1.1 0-1.5.4-2.5.4-1.1 0-1.8-.7-3.2-.7Z" />
  ),
  implant: (
    <>
      <path d="M9 4.5h6l1 3.5-2.2 2.5H10.2L8 8l1-3.5Z" />
      <path d="M12 10.5v9" />
      <path d="M9.5 14h5" />
      <path d="M9.8 17h4.4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.1L19 10l-5.2 1.9L12 17l-1.8-5.1L5 10l5.2-1.9L12 3Z" />
      <path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
      <path d="M18 15l.6 1.6 1.4.4-1.4.5L18 20l-.6-1.5-1.4-.5 1.4-.4L18 15Z" />
    </>
  ),
  gum: (
    <>
      <path d="M4 13c2-3 4-4.5 8-4.5S18 10 20 13" />
      <path d="M5 13v2.5c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V13" />
      <path d="M8 13v5" />
      <path d="M12 12v6.5" />
      <path d="M16 13v5" />
    </>
  ),
  crown: (
    <>
      <path d="M5 18h14l1-9-4 3-4-6-4 6-4-3 1 9Z" />
      <path d="M6 21h12" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.6-2.9 8-7 10-4.1-2-7-5.4-7-10V6l7-3Z" />,
  drop: <path d="M12 3C12 3 5.5 10 5.5 14.5a6.5 6.5 0 0 0 13 0C18.5 10 12 3 12 3Z" />,
  scaler: (
    <>
      <path d="M5 19L16 8" />
      <path d="M16 8c2.5-2.5 5 0 2 3" />
      <path d="M5 19l-1.5 2" />
    </>
  ),
  extract: (
    <>
      <path d="M9 4v9M15 4v9" />
      <path d="M7 4h10" />
      <path d="M9 13c0 2.5 1.3 4.5 3 4.5s3-2 3-4.5" />
    </>
  ),
  filling: (
    <>
      <path d="M12 4c-1.2 0-1.9.6-2.9.6-1 0-1.3-.3-2.2-.3C5.3 4.3 4 5.8 4 8c0 3.1 1.7 6.5 3 8.4.6 1 1.3.8 1.7-.2l.5-2C9.5 13.2 10 12.8 11 12.8h2c1 0 1.5.4 1.8 1.4l.5 2c.3 1 1 1.2 1.7.2C18.3 14.5 20 11.1 20 8c0-2.2-1.3-3.7-3-3.7-.9 0-1.2.3-2 .3-1 0-1.7-.6-3-.6Z" />
      <path d="M10 8h4v3h-4Z" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 19V11L6.5 7 10 11V19" />
      <path d="M10 19V9L12 5 14 9V19" />
      <path d="M14 19V11L17.5 7 21 11V19" />
      <path d="M3 19H21" />
    </>
  ),
  phone: <path d="M7 4h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3c0 1.1-.9 2-2 2C10.3 20 4 13.7 4 6c0-1.1.9-2 2-2h1Z" />,
  mail: (
    <>
      <path d="M4 6h16v12H4V6Z" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" />
      <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
};

export function SiteIcon({ name, className = "h-5 w-5", ...props }: SiteIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

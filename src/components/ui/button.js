import React from "react";
import ctl from "@netlify/classnames-template-literals";

// export const NLink = ({ href, to, className, children }) => {
//   let NLinkElement;
//   let nlinkProps = {};

//   if (to) {
//     NLinkElement = Link;
//     nlinkProps.to = to;
//   }

//   if (href) {
//     NLinkElement = "a";
//     if (typeof href === "string") {
//       nlinkProps.href = href;
//     }
//     // to open the link on a new tab, make href an object with the property "url"
//     if (typeof href === "object") {
//       nlinkProps.href = href.url;
//       nlinkProps.target = "_blank";
//       nlinkProps.rel = "noreferrer";
//     }
//   }

//   return (
//     <NLinkElement className={className} {...nlinkProps}>
//       {children}
//     </NLinkElement>
//   );
// };

export default function Button({
  text,
  variant: buttonVariant = "primary",
  onClick,
  styles,
  children,
}) {
  const buttonStyle = ctl(`
  ${baseStyle}
  ${variants[buttonVariant]}
  `);

  return (
    <button className={`${buttonStyle} ${styles}`} onClick={onClick}>
      {text || children}
    </button>
  );
}

const baseStyle = ctl(`

    font-semibold
    disabled:cursor-not-allowed
`);

const variants = {
  primary: `
  disabled:bg-secondary
  text-primary-white
  font-medium
  bg-gradient-primary
`,
  alternative: `
  alternative
  text-white
`,
};

Button.defaultProps = {
  variant: "primary",
  size: "xsmall",
};

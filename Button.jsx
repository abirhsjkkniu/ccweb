import { Link } from "react-router-dom";

export default function Button({ to, href, onClick, variant = "gold", children, type = "button", className = "" }) {
  const variantClass = variant === "gold" ? "btn-gold" : variant === "outline-ivory" ? "btn-outline-ivory" : "btn-outline-navy";
  const classes = `btn ${variantClass} ${className}`.trim();

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes}>{children}</a>;
  return <button type={type} className={classes} onClick={onClick}>{children}</button>;
}

import { Link } from "react-router-dom";

type ButtonProps = {
  children: string;
  containerClass: string;
  to?: string;
  variant?: "full" | "ocx";
};

const Button: React.FC<ButtonProps> = ({
  children,
  containerClass,
  to,
  variant = "full",
}) => {
  const roundedClass = variant === "full" ? "rounded-full" : "rounded-lg";

  return to ? (
    <Link
      to={to}
      className={`${containerClass} ${roundedClass} relative py-3 px-6 cursor-pointer font-medium`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${containerClass} ${roundedClass} relative py-3 px-6 cursor-pointer font-medium`}
    >
      {children}
    </button>
  );
};

export default Button;

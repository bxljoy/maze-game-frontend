import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        "flex h-12 w-12 items-center text-center font-bold bg-slate-500 border-2 border-slate-600 text-white hover:bg-blue-400 hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
      )}
    >
      {children}
    </button>
  );
}

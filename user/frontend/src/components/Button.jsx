import { twMerge } from "tailwind-merge";

export function Button({ children, className, onClick }) {
  return (
    <div
      className={twMerge(
        "bg-primary hover:bg-primary/80 text-white font-semibold p-2 rounded-lg w-fit flex items-center cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

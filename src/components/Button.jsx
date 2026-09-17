import { twMerge } from "tailwind-merge";

export function Button({ children, className }) {
  return (
    <div
      className={twMerge(
        "bg-primary text-white font-semibold p-2 rounded-lg w-fit flex items-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

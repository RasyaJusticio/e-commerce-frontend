import React, { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export type InputProps = {
  isError?: boolean;
} & React.ComponentProps<"input">;

export type PasswordInputProps = {
  type?: undefined;
} & InputProps;

const Input: React.FC<InputProps> & {
  Password: React.FC<PasswordInputProps>;
} = ({ className, type, ref, isError, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        isError && "border-destructive",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};
Input.displayName = "Input";

const PasswordInput: React.FC<PasswordInputProps> = ({
  isError,
  className,
  type,
  ref,
  ...props
}) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={
      cn(
        "group flex items-center w-full rounded-md border border-input has-[:focus-visible]:outline-none has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-ring has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        isError && "border-destructive"
      )

    }>
      <input
        type={isHidden ? "password" : "text"}
        className={cn(
          "flex h-9 w-full rounded-md bg-transparent border-none outline-none px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={() => setIsHidden((prev) => !prev)}
        className={cn(
          "flex justify-center items-center px-3 border-l border-input h-full text-zinc-500 hover:text-zinc-400"
        )}
      >
        {isHidden ? <EyeIcon /> : <EyeOff />}
      </button>
    </div>
  );
};
PasswordInput.displayName = "Input.Password";

Input.Password = PasswordInput;

export { Input };

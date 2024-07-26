import { type HTMLAttributes } from "react";
import { cn } from "../../../../../lib/classMerge";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva("border-4 px-10 py-4 text-center text-font-main", {
  variants: {
    kind: {
      action: "w-60 select-none rounded-2xl font-bold",
      reset:
        "w-10/12 rounded-xl bg-neutral-shade font-normal opacity-90 hover:-translate-y-1 hover:translate-x-1 hover:bg-accent-main md:w-auto",
    },
  },
  defaultVariants: {
    kind: "action",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  isSpeechReady?: boolean;
}

const Button = ({
  className,
  kind,
  isSpeechReady,
  onClick,
  ...props
}: ButtonProps) => {
  const nextText = isSpeechReady === false ? "Listen" : "Next";
  return (
    <button
      onClick={onClick}
      className={cn(variants({ className, kind }), {
        "cursor-none bg-base-main":
          kind === "action" && isSpeechReady === false,
        "border-accent-shade bg-neutral-shade hover:-translate-y-1 hover:translate-x-1":
          kind === "action" && isSpeechReady === true,
      })}
      disabled={kind === "action" && !isSpeechReady}
      {...props}
    >
      {kind === "action" && nextText}
      {kind === "reset" && "Try Again"}
    </button>
  );
};

export default Button;
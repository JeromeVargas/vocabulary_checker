import { type VariantProps, cva } from "class-variance-authority";

import {
  ACTION_BUTTON_LISTEN,
  ACTION_BUTTON_NEXT,
  TRY_AGAIN_BUTTON,
} from "../../../../../config/constants";

import { cn } from "../../../../../lib/classMerge";

const variants = cva(
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main/70",
  {
    variants: {
      kind: {
        action: "w-full max-w-xs select-none",
        reset:
          "w-full bg-base-shade text-font-main ring-1 ring-neutral-shade/50 hover:bg-accent-main hover:text-white hover:ring-accent-main sm:w-auto",
      },
    },
    defaultVariants: {
      kind: "action",
    },
  },
);

import { type HTMLAttributes } from "react";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  isSpeechReady?: boolean;
}

const Button = ({ kind, isSpeechReady, onClick, ...props }: ButtonProps) => {
  const nextText =
    isSpeechReady === false ? ACTION_BUTTON_LISTEN : ACTION_BUTTON_NEXT;
  return (
    <button
      onClick={onClick}
      className={cn(variants({ kind }), {
        "cursor-not-allowed bg-neutral-light text-neutral-main opacity-50":
          kind === "action" && isSpeechReady === false,
        "bg-accent-main text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md":
          kind === "action" && isSpeechReady === true,
      })}
      disabled={kind === "action" && !isSpeechReady}
      {...props}
    >
      {kind === "action" && nextText}
      {kind === "reset" && TRY_AGAIN_BUTTON}
    </button>
  );
};

export default Button;

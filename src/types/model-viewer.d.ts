import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "camera-orbit"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        "ar"?: boolean;
      };
    }
  }
}
"use client";

import { useEffect, useRef } from "react";
import { bubbleColors } from "./site.config";

export default function BubbleBackground({ interactive = true }) {
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (!interactive) {
      return undefined;
    }

    let frame = 0;
    let targetX = 50;
    let targetY = 48;
    let currentX = 50;
    let currentY = 48;

    function animatePointer() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (backgroundRef.current) {
        backgroundRef.current.style.setProperty("--pointer-x", `${currentX}%`);
        backgroundRef.current.style.setProperty("--pointer-y", `${currentY}%`);
      }

      frame = window.requestAnimationFrame(animatePointer);
    }

    function handlePointerMove(event) {
      targetX = (event.clientX / window.innerWidth) * 100;
      targetY = (event.clientY / window.innerHeight) * 100;
    }

    frame = window.requestAnimationFrame(animatePointer);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [interactive]);

  return (
    <div
      ref={backgroundRef}
      className="bubble-background"
      aria-hidden="true"
      style={{
        "--bubble-one": bubbleColors.first,
        "--bubble-two": bubbleColors.second,
        "--bubble-three": bubbleColors.third,
        "--bubble-four": bubbleColors.fourth,
        "--bubble-five": bubbleColors.fifth,
        "--bubble-six": bubbleColors.sixth,
        "--pointer-x": "50%",
        "--pointer-y": "48%",
      }}
    >
      <div className="bubble-layer bubble-layer-one" />
      <div className="bubble-layer bubble-layer-two" />
      <div className="bubble-layer bubble-layer-three" />
      <div className="bubble-layer bubble-layer-four" />
      <div className="bubble-layer bubble-layer-five" />
      <div className="bubble-layer bubble-layer-six" />
      <div className="bubble-layer bubble-layer-cursor" />
    </div>
  );
}

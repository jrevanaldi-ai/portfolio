"use client";

import { useEffect, useState } from "react";

const bubbleColors = {
  first: "18,113,255",
  second: "221,74,255",
  third: "0,220,255",
  fourth: "200,50,50",
  fifth: "180,180,50",
  sixth: "140,100,255",
};

export default function BubbleBackground({ interactive = true }) {
  const [position, setPosition] = useState({ x: 50, y: 48 });

  useEffect(() => {
    if (!interactive) {
      return undefined;
    }

    function handlePointerMove(event) {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [interactive]);

  return (
    <div
      className="bubble-background"
      aria-hidden="true"
      style={{
        "--bubble-one": bubbleColors.first,
        "--bubble-two": bubbleColors.second,
        "--bubble-three": bubbleColors.third,
        "--bubble-four": bubbleColors.fourth,
        "--bubble-five": bubbleColors.fifth,
        "--bubble-six": bubbleColors.sixth,
        "--pointer-x": `${position.x}%`,
        "--pointer-y": `${position.y}%`,
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

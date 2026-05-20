"use client";

import { useEffect, useMemo, useState } from "react";
import { welcomeIntro } from "./site.config";

export default function WelcomeIntro({ children }) {
  const [ready, setReady] = useState(false);
  const [typed, setTyped] = useState("");
  const lines = useMemo(() => typed.split("\n"), [typed]);

  useEffect(() => {
    if (window.sessionStorage.getItem(welcomeIntro.storageKey) === "true") {
      document.body.classList.remove("intro-active");
      setReady(true);
      return undefined;
    }

    document.body.classList.add("intro-active");

    const typeInterval = window.setInterval(() => {
      setTyped((current) => {
        if (current.length >= welcomeIntro.text.length) {
          window.clearInterval(typeInterval);
          return current;
        }

        return welcomeIntro.text.slice(0, current.length + 1);
      });
    }, Math.max(16, welcomeIntro.durationMs / welcomeIntro.text.length));

    const hideTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(welcomeIntro.storageKey, "true");
      document.body.classList.remove("intro-active");
      setReady(true);
    }, welcomeIntro.durationMs);

    return () => {
      window.clearInterval(typeInterval);
      window.clearTimeout(hideTimer);
      document.body.classList.remove("intro-active");
    };
  }, []);

  if (ready) {
    return children;
  }

  return (
    <div className="welcome-intro" role="status" aria-live="polite" aria-label="Welcome intro">
      <div className="welcome-code">
        <div className="welcome-code-header">
          <strong>note.txt</strong>
          <small>{Math.round(welcomeIntro.durationMs / 1000)}s</small>
        </div>
        <pre className="welcome-code-block">
          <code>
            {lines.map((line, index) => (
              <span className="welcome-code-line" key={`${line}-${index}`}>
                {line || " "}
              </span>
            ))}
            <span className="welcome-cursor" />
          </code>
        </pre>
      </div>
    </div>
  );
}

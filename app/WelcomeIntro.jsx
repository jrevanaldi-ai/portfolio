"use client";

import { useEffect, useMemo, useState } from "react";

const SESSION_KEY = "nathan-welcome-seen";
const WELCOME_DURATION = 5000;

const welcomeCode = `const visitor = {
  status: "welcome",
  destination: "Nathan Portfolio",
  services: ["website", "application", "game"],
};

boot(visitor);`;

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const lines = useMemo(() => typed.split("\n"), [typed]);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY) === "true") {
      return undefined;
    }

    setVisible(true);

    const typeInterval = window.setInterval(() => {
      setTyped((current) => {
        if (current.length >= welcomeCode.length) {
          window.clearInterval(typeInterval);
          return current;
        }

        return welcomeCode.slice(0, current.length + 1);
      });
    }, Math.max(16, WELCOME_DURATION / welcomeCode.length));

    const hideTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setVisible(false);
    }, WELCOME_DURATION);

    return () => {
      window.clearInterval(typeInterval);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="welcome-intro" role="status" aria-live="polite" aria-label="Welcome intro">
      <div className="welcome-code">
        <div className="welcome-code-header">
          <div>
            <span />
            <span />
            <span />
          </div>
          <strong>welcome.js</strong>
          <small>5s</small>
        </div>
        <pre className="welcome-code-block">
          <code>
            {lines.map((line, index) => (
              <span className="welcome-code-line" key={`${line}-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{line}</span>
              </span>
            ))}
            <span className="welcome-cursor" />
          </code>
        </pre>
      </div>
    </div>
  );
}

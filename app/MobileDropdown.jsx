"use client";

import { useEffect, useRef, useState } from "react";

export default function MobileDropdown({ items, label = "Menu" }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="dropdown-menu" ref={menuRef}>
      <button
        className="menu-button dropdown-trigger"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        data-open={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="dropdown-content" role="menu" aria-label={label}>
          <span className="dropdown-label">{label}</span>
          <span className="dropdown-separator" />
          <div className="dropdown-group">
            {items.map((item, index) => (
              <a
                className="dropdown-item"
                href={item.href}
                key={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <small>{item.shortcut ?? `0${index + 1}`}</small>
              </a>
            ))}
          </div>
          <span className="dropdown-separator" />
          <a
            className="dropdown-item"
            href="https://t.me/AstraluneTeam2"
            target="_blank"
            rel="noreferrer"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <span>Order</span>
            <small>TG</small>
          </a>
        </div>
      )}
    </div>
  );
}

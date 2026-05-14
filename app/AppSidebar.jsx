"use client";

import { m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiBriefcase, FiHelpCircle, FiHome, FiSend, FiX } from "react-icons/fi";

const sidebarGroups = [
  {
    label: "Pages",
    items: [
      { href: "/", label: "Portfolio", icon: FiHome, key: "portfolio" },
      { href: "/services", label: "Services", icon: FiBriefcase, key: "services" },
      { href: "/qna", label: "QnA", icon: FiHelpCircle, key: "qna" },
    ],
  },
  {
    label: "Action",
    items: [
      { href: "https://t.me/AstraluneTeam2", label: "Order", icon: FiSend, key: "order", external: true },
    ],
  },
];

export default function AppSidebar({ active }) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function toggleSidebar() {
      setOpen((value) => !value);
    }

    window.addEventListener("toggle-sidebar", toggleSidebar);

    return () => {
      window.removeEventListener("toggle-sidebar", toggleSidebar);
    };
  }, []);

  return (
    <>
      {open && <button className="sidebar-backdrop" type="button" aria-label="Close sidebar" onClick={() => setOpen(false)} />}
      <m.aside
        className={open ? "app-sidebar is-open" : "app-sidebar"}
        aria-label="Page sidebar"
        initial={false}
        animate={reduceMotion ? undefined : { x: open ? 0 : "-120%" }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <div className="sidebar-header">
          <a className="sidebar-brand" href="/">
            <span>NT</span>
            <strong>portfolio</strong>
          </a>
          <button className="sidebar-close" type="button" aria-label="Close sidebar" onClick={() => setOpen(false)}>
            <FiX aria-hidden="true" />
          </button>
        </div>

        <div className="sidebar-content">
          {sidebarGroups.map((group) => (
            <div className="sidebar-group" key={group.label}>
              <p>{group.label}</p>
              <nav className="sidebar-menu" aria-label={group.label}>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = active === item.key;

                  return (
                    <a
                      className={isActive ? "sidebar-menu-item is-active" : "sidebar-menu-item"}
                      href={item.href}
                      key={item.key}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                    >
                      <Icon aria-hidden="true" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <span>page navigation</span>
        </div>
        <span className="sidebar-rail" aria-hidden="true" />
      </m.aside>
    </>
  );
}

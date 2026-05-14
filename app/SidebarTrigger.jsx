"use client";

import { FiMenu } from "react-icons/fi";

export default function SidebarTrigger() {
  function toggleSidebar() {
    window.dispatchEvent(new Event("toggle-sidebar"));
  }

  return (
    <button className="sidebar-trigger" type="button" aria-label="Open sidebar" onClick={toggleSidebar}>
      <FiMenu aria-hidden="true" />
    </button>
  );
}

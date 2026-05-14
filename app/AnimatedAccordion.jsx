"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function AnimatedAccordion({ items, label, defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const reduceMotion = useReducedMotion();

  return (
    <div className="accordion" aria-label={label}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="accordion-item" key={item.title} data-open={isOpen}>
            <button
              className="accordion-button"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.title}</span>
              <span className="accordion-arrow" aria-hidden="true">
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  className="accordion-panel"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={reduceMotion ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <p>{item.content}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

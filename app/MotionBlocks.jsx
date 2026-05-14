"use client";

import { m, useReducedMotion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function RevealSection({ children, className, id, ariaLabel }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section className={className} id={id} aria-label={ariaLabel}>
        {children}
      </section>
    );
  }

  return (
    <m.section
      className={className}
      id={id}
      aria-label={ariaLabel}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.42, ease: "easeOut" }}
    >
      {children}
    </m.section>
  );
}

export function MotionCard({ children, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <article className={className}>{children}</article>;
  }

  return (
    <m.article className={className} whileHover={{ y: -4 }} transition={{ duration: 0.18, ease: "easeOut" }}>
      {children}
    </m.article>
  );
}

"use client";

import { motion } from "framer-motion";

// Trigger as soon as the top of an element is a little inside the viewport.
// A fractional `amount` (e.g. 0.2) can never be reached by elements taller
// than ~5x the screen — like a long product grid on mobile — so they'd stay
// invisible forever.
const VIEWPORT_MARGIN = "0px 0px -60px 0px";

const directions = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { y: 0, x: 36 },
  right: { y: 0, x: -36 },
  none: { y: 0, x: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = "some",
  as: Tag = "div",
}) {
  const offset = directions[direction] ?? directions.up;
  const MotionTag = motion[Tag] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount, margin: VIEWPORT_MARGIN }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.12,
  delay = 0,
  once = true,
  amount = "some",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: VIEWPORT_MARGIN }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", direction = "up" }) {
  const offset = directions[direction] ?? directions.up;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

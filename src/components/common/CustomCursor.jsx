import React, { useEffect, useRef, useState } from 'react';

/**
 * Mini dot cursor (shown together with the normal OS cursor):
 * - white dot + mix-blend-difference, so it inverts whatever is behind it
 * - follows the mouse with a little smoothing
 * - fixed size, no hover expand
 * - only on devices with a real mouse (not touch screens)
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  // Only on devices with a real mouse
  useEffect(() => {
    setEnabled(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const setOpacity = (v) => {
      if (dotRef.current) dotRef.current.style.opacity = v;
    };

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setOpacity('1');
    };

    const onLeave = () => setOpacity('0');
    const onEnter = () => setOpacity('1');

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    const render = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.28;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.28;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{ opacity: 0 }}
      className="fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none will-change-transform transition-opacity duration-200"
    />
  );
}
"use client";

import { useEffect, useState } from "react";

const Cursor: React.FC = () => {
  // Define radii based on half the element's dimensions.
  // Outer circle: Tailwind "w-10 h-10" means 40px, so half is 20.
  // Inner circle: Tailwind "w-2 h-2" means 8px, so half is 4.
  const outerRadius = 20;
  const innerRadius = 4;

  // 'cursor' will hold the outer circle's center (which is the mouse position)
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  // 'innerCursor' will hold the inner circle's center
  const [innerCursor, setInnerCursor] = useState({ x: 0, y: 0 });

  // Update the outer circle's center instantly on mouse move.
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smoothly update the inner circle's position so that it moves toward the outer circle's center
  // but never goes farther than (outerRadius - innerRadius) away.
  useEffect(() => {
    let raf: number;

    const updateInnerCursor = () => {
      setInnerCursor((prev) => {
        // Lerp toward the outer circle's center.
        const lerpX = prev.x + (cursor.x - prev.x) * 0.2;
        const lerpY = prev.y + (cursor.y - prev.y) * 0.2;

        // Compute displacement vector from the outer circle's center (cursor) to the inner circle.
        const dx = lerpX - cursor.x;
        const dy = lerpY - cursor.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Maximum allowed distance for the inner circle's center from the outer circle's center.
        const maxDistance = outerRadius - innerRadius;

        // If the inner circle would be outside the allowed boundary, clamp it.
        if (distance > maxDistance) {
          const angle = Math.atan2(dy, dx);
          return {
            x: cursor.x + Math.cos(angle) * maxDistance,
            y: cursor.y + Math.sin(angle) * maxDistance,
          };
        }
        return { x: lerpX, y: lerpY };
      });
      raf = requestAnimationFrame(updateInnerCursor);
    };

    updateInnerCursor();
    return () => cancelAnimationFrame(raf);
  }, [cursor, outerRadius, innerRadius]);

  return (
    <>
      {/* Outer Circle: Always centered on the mouse */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-purple-500 rounded-full pointer-events-none transition-transform duration-75 ease-out  z-[110]"
        style={{
          // Translate so that the circle is centered at (cursor.x, cursor.y)
          transform: `translate(${cursor.x - outerRadius}px, ${cursor.y - outerRadius}px)`,
        }}
      />
      {/* Inner Circle: Moves smoothly but stays within the outer circle */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-yellow-600 rounded-full pointer-events-none transition-transform duration-50 ease-out z-[110]"
        style={{
          // Translate so that the inner circle is centered at (innerCursor.x, innerCursor.y)
          transform: `translate(${innerCursor.x - innerRadius}px, ${innerCursor.y - innerRadius}px)`,
        }}
      />
    </>
  );
};

export default Cursor;

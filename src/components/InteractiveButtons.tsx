"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function InteractiveButtons() {
  const router = useRouter();
  const [noStyle, setNoStyle] = useState<React.CSSProperties>({});
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Lock flag: while true the button is mid-flight and click is blocked
  const isMoving = useRef(false);
  const hasMoved = useRef(false);

  useEffect(() => {
    fetch("/api/track-view").catch((err) => console.error(err));
  }, []);

  const moveButton = useCallback(() => {
    if (isMoving.current) return;
    const button = buttonRef.current;
    if (!button) return;

    // Make button smaller on mobile
    const btnWidth = button.offsetWidth || 70;
    const btnHeight = button.offsetHeight || 32;
    const margin = 20;

    const maxX = Math.max(margin, window.innerWidth - btnWidth - margin);
    const maxY = Math.max(margin, window.innerHeight - btnHeight - margin);

    const randomX = Math.floor(Math.random() * maxX) + margin;
    const randomY = Math.floor(Math.random() * maxY) + margin;

    // First touch: instant snap (no transition), then snappy 150ms
    const transition = hasMoved.current
      ? "top 0.15s ease, left 0.15s ease"
      : "none";

    hasMoved.current = true;
    isMoving.current = true;

    setNoStyle({
      position: "fixed",
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition,
      zIndex: 50,
    });

    setTimeout(() => {
      isMoving.current = false;
    }, 200);
  }, []);

  const handleYes = () => {
    // Fire-and-forget — do NOT await so navigation is instant
    fetch("/api/accept", { method: "POST" }).catch((err) => console.error(err));
    router.push("/yes");
  };

  const handleNo = async () => {
    if (isMoving.current) return;
    try {
      await fetch("/api/no-click", { method: "POST" });
    } catch (err) {
      console.error(err);
    }
    router.push("/no");
  };

  return (
    <div className="relative w-full flex items-center justify-center mt-6 h-14">
      {/* YES button */}
      <button
        onClick={handleYes}
        className="px-7 py-2.5 sm:px-10 sm:py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        Yes 💖
      </button>

      {/*
        NO button — fixed position after first hover/touch.
        Deliberately small so it's hard to click even if you catch it.
        onMouseEnter + onTouchStart fire before any click event,
        so the button is already gone before a finger lifts.
      */}
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        onTouchStart={(e) => {
          e.preventDefault();
          moveButton();
        }}
        onClick={handleNo}
        style={noStyle}
        className="ml-4 sm:ml-5 px-3 py-1.5 sm:px-5 sm:py-2 bg-white/50 text-gray-600 border border-gray-200 rounded-full font-medium text-xs sm:text-sm shadow-sm backdrop-blur-sm select-none"
      >
        No!!! 😡
      </button>
    </div>
  );
}

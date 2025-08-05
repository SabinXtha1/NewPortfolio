"use client"

import { useEffect, useRef, useState } from "react"



export default function PhysicsCursor({
  speed = 0.15,
  hoverScale = 1.5,
  size = 40,
  color = "#60a5fa", // blue-400
  hideDefaultCursor = true,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef()

  // Linear interpolation function for smooth movement
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor
  }


  const isInteractiveElement = (element) => {
    if (!element) return false

    const tagName = element.tagName.toLowerCase()
    const interactiveTags = ["button", "a", "input", "textarea", "select", "label"]

   
    if (interactiveTags.includes(tagName)) return true

    // Check for cursor pointer style
    const computedStyle = window.getComputedStyle(element)
    if (computedStyle.cursor === "pointer") return true

    // Check for click handlers or interactive attributes
    if (
      element.hasAttribute("onclick") ||
      element.hasAttribute("onmousedown") ||
      element.hasAttribute("onmouseup") ||
      (element.hasAttribute("role") && ["button", "link"].includes(element.getAttribute("role") || ""))
    ) {
      return true
    }

    // Check for common interactive classes
    const className = element.className || ""
    if (
      typeof className === "string" &&
      (className.includes("hover:") ||
        className.includes("cursor-pointer") ||
        className.includes("clickable") ||
        className.includes("interactive") ||
        className.includes("btn") ||
        className.includes("button"))
    ) {
      return true
    }

    return false
  }

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check what element is under the cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
      const shouldHover = isInteractiveElement(elementUnderCursor)
      setIsHovering(shouldHover)
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const animateCursor = () => {
      setCursorPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, speed),
        y: lerp(prev.y, mousePosition.y, speed),
      }))

      animationRef.current = requestAnimationFrame(animateCursor)
    }

    animationRef.current = requestAnimationFrame(animateCursor)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, speed])

  // Apply global cursor hiding
  useEffect(() => {
    if (hideDefaultCursor) {
      document.body.style.cursor = "none"
      const style = document.createElement("style")
      style.innerHTML = `
        *, *::before, *::after {
          cursor: none !important;
        }
      `
      document.head.appendChild(style)

      return () => {
        document.body.style.cursor = ""
        document.head.removeChild(style)
      }
    }
  }, [hideDefaultCursor])

  const cursorSize = size
  const halfSize = cursorSize / 2

  return (
    <div
      className="physics-cursor"
      style={{
        position: "fixed",
        left: cursorPosition.x - halfSize,
        top: cursorPosition.y - halfSize,
        width: cursorSize,
        height: cursorSize,
        pointerEvents: "none",
        zIndex: 9999,
        transform: `scale(${isHovering ? hoverScale : 1})`,
        transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        willChange: "transform",
      }}
    >
      {/* Outer circle */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: `2px solid ${isHovering ? color : "rgba(255, 255, 255, 0.7)"}`,
          borderRadius: "50%",
          backgroundColor: isHovering ? `${color}20` : "rgba(0, 0, 0, 0.2)",
          boxShadow: isHovering ? `0 0 20px ${color}80` : "0 4px 12px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(4px)",
          transition: "all 0.3s ease",
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.25 : 1})`,
          width: cursorSize * 0.2,
          height: cursorSize * 0.2,
          backgroundColor: isHovering ? "#93c5fd" : color, // lighter blue when hovering
          borderRadius: "50%",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
        }}
      />
    </div>
  )
}

// Export the component and a hook for easy integration
export const usePhysicsCursor = (options) => {
  return { PhysicsCursor: () => <PhysicsCursor {...options} /> }
}

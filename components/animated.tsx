"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionStyles[direction]}`
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 100,
  direction = "up",
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <FadeIn key={i} delay={i * staggerDelay} direction={direction}>
          {child}
        </FadeIn>
      ))}
    </div>
  )
}

export function CountUp({
  end,
  suffix = "",
  duration = 2000,
  className = "",
}: {
  end: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [hasStarted, end, duration])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}

export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 3,
}: {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
}) {
  return (
    <div
      className={`animate-float ${className}`}
      style={
        {
          "--float-amplitude": `${amplitude}px`,
          "--float-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

export function PulseOnHover({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`group ${className}`}>
      <div className="transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-[0.98]">
        {children}
      </div>
    </div>
  )
}

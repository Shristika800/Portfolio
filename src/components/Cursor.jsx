import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)

  useEffect(() => {
    const onMove = e => {
      mx.current = e.clientX
      my.current = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 5 + 'px'
        cursorRef.current.style.top = e.clientY - 5 + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      rx.current += (mx.current - rx.current - 18) * 0.12
      ry.current += (my.current - ry.current - 18) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top = ry.current + 'px'
      }
      requestAnimationFrame(animate)
    }
    animate()

    const addExpand = () => ringRef.current?.classList.add('expand')
    const removeExpand = () => ringRef.current?.classList.remove('expand')
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', addExpand)
      el.addEventListener('mouseleave', removeExpand)
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}

import { useEffect, useState } from 'react'

function App() {
  const [currentTime, setCurrentTime] = useState(() => new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4 text-gray-900">
      <section className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow">
        <h1 className="mb-4 text-2xl font-bold">Digital Clock</h1>
        <time className="block font-mono text-5xl font-semibold tabular-nums text-blue-700">
          {currentTime.toLocaleTimeString()}
        </time>
        <p className="mt-3 text-gray-600">
          {currentTime.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </section>
    </main>
  )
}

export default App

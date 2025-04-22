"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function AreaChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Sample data to match the design
    const labels = ["Nov 2019", "March 2020", "July 2021", "August 2022", "August 2023", "August 2024"]

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, "rgba(0, 119, 99, 0.2)")
    gradient.addColorStop(1, "rgba(0, 119, 99, 0)")

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Earnings",
            data: [1, 2.5, 4.5, 2, 3, 2.5],
            borderColor: "#007763",
            backgroundColor: gradient,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#007763",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            border: {
              display: false,
            },
            grid: {
              color: "#f3f3f3",
            },
            ticks: {
              callback: (value) => value + " Month",
              stepSize: 1,
              max: 5,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#000",
            bodyColor: "#555",
            borderColor: "#e9e9e9",
            borderWidth: 1,
            padding: 12,
            displayColors: false,
            callbacks: {
              title: (context) => context[0].label,
              label: (context) => context.parsed.y + " Month",
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

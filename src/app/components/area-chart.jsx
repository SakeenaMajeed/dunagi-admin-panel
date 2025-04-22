"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

// Sample data for different time filters
const chartData = {
  daily: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [2.1, 3.5, 2.8, 4.2, 3.9, 2.5, 3.1],
    yAxisLabel: "Month",
    yMax: 5,
  },
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    data: [1.5, 2.8, 3.2, 2.7, 3.5, 2.9],
    yAxisLabel: "Month",
    yMax: 5,
  },
  monthly: {
    labels: ["Nov 2019", "March 2020", "July 2021", "August 2022", "August 2023", "August 2024"],
    data: [1, 2.5, 4.5, 2, 3, 2.5],
    yAxisLabel: "Month",
    yMax: 5,
  },
  yearly: {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    data: [1.2, 2.8, 3.5, 4.2, 3.8, 4.5],
    yAxisLabel: "Month",
    yMax: 5,
  },
}

export function AreaChart({ timeFilter }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    const { labels, data, yAxisLabel, yMax } = chartData[timeFilter]

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
            data,
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
              callback: (value) => value + " " + yAxisLabel,
              stepSize: 1,
              max: yMax,
              font: {
                weight: "bold",
              },
              padding: 10,
            },
            position: "left",
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                weight: "bold",
              },
              padding: 10,
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
            titleFont: {
              weight: "bold",
            },
            callbacks: {
              title: (context) => context[0].label,
              label: (context) => context.parsed.y + " " + yAxisLabel,
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        animation: {
          duration: 500,
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [timeFilter])

  return <canvas ref={chartRef} />
}

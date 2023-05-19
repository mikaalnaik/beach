'use client'
import { useState } from 'react'
import { VictoryChart, VictoryLine } from 'victory'

export const HistoricalChart = ({ data }) => {
  const initialData = data.map(entry => { return { x: entry.date, y: 0 } })
  const [chartData, setChartData] = useState(initialData)

  setTimeout(() => {
    setChartData(data)
  }, 500)

  return (

    <VictoryLine
      animate={{ duration: 500, onLoad: { duration: 500 } }}
      scale={{ x: "time", y: "linear" }}
      style={{
        data: {
          stroke: "black",
          strokeWidth: '.1',
        },
      }}
      data={chartData}
    />
  )
}
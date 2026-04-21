'use client'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory'

interface DataPoint {
  x: Date;
  y: number;
}

export const HistoricalChart = ({ data }: { data: DataPoint[] }) => {
  const initialData = data.map(entry => ({ x: entry.x, y: 0 }))
  const [chartData, setChartData] = useState(initialData)
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 })

  useEffect(() => {
    setDimensions({
      height: window.innerHeight / 1.5,
      width: window.outerWidth,
    })
    const timer = setTimeout(() => {
      setChartData(data)
    }, 500)
    return () => clearTimeout(timer)
  }, [data])

  if (!dimensions.width) return null

  return (
    <VictoryChart
      domainPadding={{ x: 25 }}
      height={dimensions.height}
      width={dimensions.width}
      padding={{ top: 50, bottom: 50, right: 10, left: 10 }}
    >
      <VictoryLine
        domainPadding={0}
        animate={{ duration: 500, onLoad: { duration: 500 } }}
        scale={{ x: "time", y: "linear" }}
        interpolation="natural"

        style={{

          parent: { border: "1px solid #ccc" },
          data: {
            height: '880px',
            stroke: "black",
            strokeWidth: '1',
          },
        }}
        data={chartData}
      />
      <VictoryAxis dependentAxis
        padding={{ top: 50, bottom: 50, right: 10, left: 10 }}

        style={{
          axis: { stroke: "none" },
          axisLabel: { fontSize: 10, padding: 30 },
          grid: {
            stroke: ({ tick }) => tick === 100 ? "#3D550C" : "none"
          },
          ticks: { stroke: "blue", size: 5 },
          tickLabels: { fontSize: 10, padding: 5 }
        }}
        theme={VictoryTheme.material}
        offsetX={200}
      />
      <VictoryAxis
        tickCount={5}
        tickFormat={(t) => `${dayjs(t).format('MMM DD, YYYY')}`}

        style={{
          axis: { stroke: "none" },
          axisLabel: { fontSize: 10, padding: 30 },
          grid: {
            strokeWidth: '2px',
            stroke: ({ tick, }) => {
              return tick === 100 ? "#3D550C" : "none"
            },
          },
          ticks: { stroke: "blue", size: 5 },
          tickLabels: { fontSize: 10, padding: 5 }
        }}
        theme={VictoryTheme.material}
        offsetX={200}
      />
    </VictoryChart>
  )
}

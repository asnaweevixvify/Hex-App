"use client"

import { useEffect, useRef, useState } from "react"
import functionPlot from "function-plot"
import styles from './page.module.css'

export default function Page() {
  const plotRef = useRef(null)
  const [fun,setFun] = useState("")
  const [data,setData] = useState("sin(x)")

  useEffect(() => {
    functionPlot({
      target: plotRef.current,
      width: 1000,
      height: 400,
      xAxis: { domain: [-10, 10] },
      yAxis: { domain: [-10, 10] },
      data: [
        { fn: data, color: "blue" },
      ],
      grid: true,  
      tip: {
        xLine: true,
        yLine: true
      }
    })
  }, [data])

  const inputValue=()=>{
    setData(fun)
  }

  return (
    <>
      <h1 className="textmain">Function Plot Example</h1>
      <div ref={plotRef} style={{color:"black",display:"flex",justifyContent:"center",marginTop:"50px"}}></div>
      <input type="text" className={styles.input} onInput={(e)=>setFun(e.target.value)}></input>
      <button className={styles.plotBtn} onClick={inputValue}>plot</button>
    </>
  )
}

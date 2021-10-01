import React, {useEffect, useRef} from "react";
import { DateState } from "../store/date/dateReducer";
import { tick } from "./canvasTick";
import style from './style.module.css'

interface IPropsAnalogClock {
  date: DateState,
  timeZone: number;
  width?: number,
  height?: number,
}
export const AnalogClock = ({timeZone, width = 220, height = 220, date}:IPropsAnalogClock) =>{
  const canvas = useRef<HTMLCanvasElement>(null);
  
  useEffect(()=>{
  const ctx = canvas.current?.getContext('2d')
  ctx?.translate(width/2,height/2);
  if(ctx !== null && ctx !== undefined){
    tick(date,width-20,height-20,timeZone,ctx);
  }
  return ()=>{
    ctx?.translate(-width/2,-height/2);
  }
  })


  return (
    <div className={style.container}>
       <canvas ref={canvas} width={width} height={height}></canvas>
    </div>
  );
}
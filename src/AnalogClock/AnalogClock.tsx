import React, {useEffect, useRef} from "react";

import { tick } from "./canvasTick";

interface IPropsAnalogClock {
  timeZone: number;
  width?: number,
  height?: number,
}
export const AnalogClock = ({timeZone, width = 200, height = 200,}:IPropsAnalogClock) =>{
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    const ctx = canvas.current?.getContext('2d');
    ctx?.translate(width/2,height/2);
    setInterval(()=>{
      if(ctx !== null && ctx !== undefined){
        const datee = new Date()
        tick(datee,width-20,height-20,timeZone,ctx);
      }
    })
  }, [canvas, timeZone, width, height])

  return (
     <canvas ref={canvas} width={width} height={height}></canvas>
  );
}
import { getRadiant } from "../utils/getRadiant";
import { corner, cornerHours, cornerMinuts, cornerSec } from "./corner";

export function tick(date: Date, width: number, height: number, timeZone: number = 0, ctx: CanvasRenderingContext2D | null | undefined) {
  //get sec, minutes, hours
  const milSec = date.getMilliseconds();
  const sec = date.getSeconds();
  const minutes = date.getMinutes();
  let hours = date.getUTCHours() + timeZone;
  hours = hours > 11 ? hours - 12 : hours;

  ctx?.clearRect(-width / 2, -height / 2, width, height); // Очищаем холст
  ctx?.beginPath();

  //Circle
  ctx?.arc(0, 0, width / 2, 0, 2 * Math.PI);
  ctx!.strokeStyle = 'grey';
  ctx!.lineWidth = 1;
  ctx?.stroke();

  // Штрихи
  for (let i = 0; i < 60; i++) {
    ctx?.beginPath();
    ctx?.moveTo((width / 2) * Math.cos(getRadiant(corner * i - 90)), (height / 2) * Math.sin(getRadiant(corner * i - 90)));

    if (i % 5 === 0) {
      ctx?.lineTo((width / 2 - 8) * Math.cos(getRadiant(corner * i - 90)), (height / 2 - 8) * Math.sin(getRadiant(corner * i - 90)));
      ctx!.strokeStyle = 'red';
    } else {
      ctx?.lineTo((width / 2 - 4) * Math.cos(getRadiant(corner * i - 90)), (height / 2 - 4) * Math.sin(getRadiant(corner * i - 90)));
      ctx!.strokeStyle = 'grey';
    }

    ctx!.lineWidth = 1;
    ctx?.stroke();
  }

  // Minutes
  ctx?.beginPath();
  ctx!.lineWidth = 3;
  ctx?.moveTo(0, 0);
  ctx?.lineTo((width / 2 - 10) * Math.cos(getRadiant(cornerMinuts * (minutes * 60 + sec) - 90)), (height / 2 - 10) * Math.sin(getRadiant(cornerMinuts * (minutes * 60 + sec) - 90)));
  ctx!.strokeStyle = 'grey';
  ctx!.lineCap = 'round';
  ctx?.stroke();
  ctx?.closePath();

  // Hours
  ctx?.beginPath();
  ctx!.lineWidth = 5;
  ctx?.moveTo(0, 0);
  ctx?.lineTo((width / 2) * Math.cos(getRadiant(cornerHours * (hours * 60 * 60 + minutes * 60) - 90)) / 2, (height / 2 / 2) * Math.sin(getRadiant(cornerHours * (hours * 60 * 60 + minutes * 60) - 90)));
  ctx?.stroke();
  ctx?.closePath();

  //Circle for sec
  ctx?.beginPath();
  ctx?.arc(0, 0, 5, 0, getRadiant(380));
  ctx!.lineWidth = 1;
  ctx?.stroke();
  ctx!.fillStyle = 'red';
  ctx?.fill()

  // Sec
  ctx?.beginPath();
  ctx?.moveTo(0, 0);
  ctx?.lineTo((width / 2 - 10) * Math.cos(getRadiant(cornerSec * (sec * 1000 + milSec) - 90)), (height / 2 - 10) * Math.sin(getRadiant(cornerSec * (sec * 1000 + milSec) - 90)));
  ctx!.lineWidth = 1;
  ctx!.strokeStyle = 'red';
  ctx?.stroke();
  ctx?.closePath();
}
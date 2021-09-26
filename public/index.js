const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.translate(100,100);
function getRadiant(arg){
  return Math.PI*arg/180
}

  
 
  function tick(sec){
    ctx?.clearRect(-100,-100,200,200);
    ctx?.beginPath();
    const corner = 360/60*sec;
    //Circle
    ctx.arc(0,0, 100, 0, getRadiant(380));
    ctx.strokeStyle = 'grey';
    ctx.stroke();
    
    // Sec
    ctx?.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(100*Math.cos(getRadiant(corner)),100*Math.sin(getRadiant(corner)));
    ctx.stroke();
    ctx.clothePath;
  }
  setInterval(()=>{
    const date = new Date();
    const sec = date.getSeconds();
    tick(sec);
  },0)
  
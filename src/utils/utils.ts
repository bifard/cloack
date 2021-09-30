export function getRadiant(arg:number):number{
  return Math.PI*arg/180
}

export const getTwoNumber = (num:number) => {
  return num > 9 ? num :`0${num}`;
}

export const getRandomString = () => {
  return Math.random().toString(16)
}


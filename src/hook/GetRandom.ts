export const GetRandom = ( number :number = 10):number[] => {
  let num: number[] = [];

  for (let i = 1; i <= number; i++) {
    let n = Math.floor(Math.random() * 100);
    num = [...num, n];
  }

  return num
};

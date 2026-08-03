export const GetRandom = ( length :number = 5 ):number[] => {
  let num: number[] = [];

  for (let i = 1; i <= length; i++) {
    let n = Math.floor(Math.random() * 100);
    num = [...num, n];
  }

  return num
};

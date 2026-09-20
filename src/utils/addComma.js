export function addComma(number) {
  const parsedNum = Number(number);
  const formated = parsedNum.toLocaleString();
  return formated;
}

export function useRandomColor() {
  const colorR = Math.round(Math.random() * 9);
  const colorG = Math.round(Math.random() * 9);
  const colorB = Math.round(Math.random() * 9);
  return `#${colorR + "" + colorG}${colorG + "" + colorB}${colorB + "" + colorR}`;
}

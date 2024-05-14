import jalaali from "jalaali-js";

function g2p(year: number, month: number, day: number) {
  const { jy, jm, jd } = jalaali.toJalaali(year, month, day);
  return [jy, jm, jd];
}

function p2g(year: number, month: number, day: number) {
  const { gy, gm, gd } = jalaali.toGregorian(year, month, day);
  return [gy, gm, gd];
}

export default {
  J: (y: number, m: number, d: number) => g2p(y, m, d),
  G: (y: number, m: number, d: number) => p2g(y, m, d),
};

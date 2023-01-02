module.exports = function reverse (n) {
  let num = Math.abs(parseInt(n));
  let reverse = num.toString().split('').reverse().join('');
  console.log(reverse);
  return Number(reverse);
}

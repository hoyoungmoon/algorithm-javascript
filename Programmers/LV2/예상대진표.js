function solution(n, a, b) {
  let playerA = a;
  let playerB = b;

  let cnt = 0;
  while (Math.abs(playerA - playerB) !== 0) {
    playerA = Math.ceil(playerA / 2);
    playerB = Math.ceil(playerB / 2);
    cnt++;
  }

  return cnt;
}

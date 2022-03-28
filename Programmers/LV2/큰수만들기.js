// 처음 풀었던 방법
// 테스트케이스 하나가 시간초과됨

function solution(number, k) {
  let deleteCnt = 0;
  let num = number;
  while (deleteCnt < k) {
    deleteCnt++;
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] < num[i + 1]) {
        num = num.slice(0, i) + num.slice(i + 1);
        break;
      }
    }
    // 모두 같은 수이거나 내림차순으로 되어있을 경우
    if (number.length !== num.length + deleteCnt) {
      num = num.slice(0, num.length - 1);
    }
  }
  return num;
}

// 스택 활용한 방법 (다른 사람 풀이 참고)
function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    const n = number[i];
    while (k > 0 && stack[stack.length - 1] < n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  return stack.slice(0, number.length - k).reduce((acc, v) => acc + v, "");
}

// 1번 풀이 방법은 최악의 경우 k * number.length 만큼 loop를 돌아야함
// 2번 풀이는 number.length 만큼만 돌아도 되서 k가 매우 큰 숫자이면 효율성 차이가 많이 난다.
// 시간초과가 나면 최악의 경우에 대한 케이스일 가능성이 높으므로 연산을 적게할 수 있는 방법을 생각하자.

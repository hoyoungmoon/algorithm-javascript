// 배열을 잘 다루자.

function solution(key, lock) {
  let rotateKeys = new Array(4);

  // 0, 90, 180, 270deg 회전한 key들로 초기화
  for (let i = 0; i < 4; i++) {
    if (i === 0) rotateKeys[i] = key;
    else rotateKeys[i] = rotate(rotateKeys[i - 1]);
  }

  const KEY_LENGTH = key.length;
  const LOCK_LENGTH = lock.length;
  // 3*LOCK_LENGTH x 3*LOCK_LENGTH 2차원 배열에서 열쇠를 이동시키며 모든 경우의 수 비교해보기
  // 배열의 크기를 키워서 비교하면 인덱스 관리가 편하다
  const extendArr = Array.from(new Array(3 * LOCK_LENGTH), () =>
    new Array(3 * LOCK_LENGTH).fill(1)
  );

  let answer = false;
  rotateKeys.forEach((rotateKey) => {
    for (
      let move_row = 1;
      move_row <= extendArr.length - KEY_LENGTH;
      move_row++
    ) {
      for (
        let move_col = 0;
        move_col <= extendArr.length - KEY_LENGTH;
        move_col++
      ) {
        for (let i = LOCK_LENGTH; i < 2 * LOCK_LENGTH; i++) {
          for (let j = LOCK_LENGTH; j < 2 * LOCK_LENGTH; j++) {
            extendArr[i][j] = lock[i - LOCK_LENGTH][j - LOCK_LENGTH];
          }
        }

        for (let i = 0; i < KEY_LENGTH; i++) {
          for (let j = 0; j < KEY_LENGTH; j++) {
            // 돌기와 홈이 만났을 때 1
            if (extendArr[move_row + i][move_col + j] ^ rotateKey[i][j])
              extendArr[move_row + i][move_col + j] = 1;
            // 돌기와 돌기가 만나면 안되는 조건이 있으므로 0으로 할당
            else if (
              extendArr[move_row + i][move_col + j] === 1 &&
              rotateKey[i][j] === 1
            )
              extendArr[move_row + i][move_col + j] = 0;
          }
        }

        // 열리는지 체크
        let unlock = true;
        for (let i = LOCK_LENGTH; i < 2 * LOCK_LENGTH; i++) {
          for (let j = LOCK_LENGTH; j < 2 * LOCK_LENGTH; j++) {
            if (!answer && extendArr[i][j] === 0) unlock = false;
          }
        }
        if (unlock) answer = true;
      }
    }
  });

  return answer;
}

function rotate(arr) {
  const N = arr.length;
  const newArr = Array.from(new Array(N), () => new Array(N).fill(-1));
  arr.forEach((_, row) => {
    arr[row].forEach((v, col) => {
      newArr[col][N - 1 - row] = v;
    });
  });
  return newArr;
}

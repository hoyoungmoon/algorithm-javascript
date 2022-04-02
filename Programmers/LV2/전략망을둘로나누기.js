function solution(n, wires) {
  let tree = Array.from(new Array(n + 1), () => []);
  wires.forEach((wire) => {
    const [a, b] = wire;
    tree[a].push(b);
    tree[b].push(a);
  });

  function getCount(start, before, cut) {
    let cnt = 0;
    let nodeCnt = 0;
    tree[start].forEach((w) => {
      if (w !== before && w !== cut) {
        nodeCnt++;
        cnt += getCount(w, start);
      }
    });
    return cnt + nodeCnt;
  }

  let answer = Infinity;
  wires.forEach((wire) => {
    const [leftWire, rightWire] = wire;
    const n1 = getCount(leftWire, leftWire, rightWire);
    const n2 = getCount(rightWire, rightWire, leftWire);
    if (answer > Math.abs(n1 - n2)) answer = Math.abs(n1 - n2);
  });
  return answer;
}

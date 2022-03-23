// 조합(Combination)

function combination(list, pickCnt) {
  let result = [];
  if (pickCnt === 1) return list.map((v) => [v]);

  list.forEach((item, index) => {
    const fixed = item;
    const nextList = list.slice(index + 1);
    const combinationArr = combination(nextList, pickCnt - 1);
    const pickResult = combinationArr.map((v) => [fixed, ...v]);
    result.push(...pickResult);
  });

  return result;
}

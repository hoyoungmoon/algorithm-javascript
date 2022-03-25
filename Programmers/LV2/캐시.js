// LRU(Lease Recently Used) 알고리즘을 이용한 캐시 성능 체크 문제

function solution(cacheSize, cities) {
  const HIT = 1,
    MISS = 5;
  let cache = [];
  let time = 0;

  cities
    .map((v) => v.toLowerCase())
    .forEach((city) => {
      if (cache.includes(city)) {
        time += HIT;
        // 방법1. filter 후 재할당
        cache = cache.filter((v) => v !== city);
        // 방법2. splice로 요소 제거
        // const idx = cache.findIndex(v=>v===city);
        // cache.splice(idx, 1);
      } else {
        time += MISS;
      }
      cache.push(city);

      if (cache.length > cacheSize)
        cache = cache.slice(cache.length - cacheSize);
    });

  return time;
}

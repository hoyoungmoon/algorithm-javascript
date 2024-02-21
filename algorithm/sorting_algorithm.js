// 인접한 숫자 비교 후 자리 변경하는 방법
function bubbleSort() {
  const arr = Array.from({ length: 30 }, () => Math.round(Math.random() * 100));
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  console.log("bubbleSort:", arr);
}

// i(i<0)번째 원소를 0~i-1 원소를 비교 후 알맞은 자리에 넣는 방법
function insertionSort() {
  const arr = Array.from({ length: 30 }, () => Math.round(Math.random() * 100));
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = key;
        break;
      }
    }
  }
  console.log("insertionSort:", arr);
}

/**
 * 균등 분할정복(divide-conquer) 방식
 * 절반으로 분할하여 부분배열 정렬 후 다시 합친 후 정렬을 반복하는 방식
 */
function mergeSort() {
  let arr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
  const sort = (left, right, arr) => {
    if (left >= right) {
      return arr;
    }
    const mid = Math.floor((left + right) / 2);
    arr = sort(left, mid, arr);
    arr = sort(mid + 1, right, arr);
    return merge(left, mid, right, arr);
  };

  const merge = (left, mid, right, arr) => {
    let leftIndex = left;
    let rightIndex = mid + 1;
    let i = left;
    const result = [...arr];
    while (leftIndex <= mid && rightIndex <= right) {
      if (arr[leftIndex] < arr[rightIndex]) {
        result[i++] = arr[leftIndex++];
      } else {
        result[i++] = arr[rightIndex++];
      }
    }

    if (rightIndex <= right) {
      while (rightIndex <= right) {
        result[i++] = arr[rightIndex++];
      }
    } else if (leftIndex <= mid) {
      while (leftIndex <= mid) {
        result[i++] = arr[leftIndex++];
      }
    }
    return result;
  };

  console.log("mergeSort:", sort(0, arr.length - 1, arr));
}

/**
 * 비균등 분할정복(divide-conquer) 방식
 * pivot을 기준으로 작은건 왼쪽, 큰건 오른쪽으로 이동시키는 방식
 */
function quickSort() {
  const arr = Array.from({ length: 30 }, () => Math.round(Math.random() * 100));
  console.log("start", arr);
  const sort = (left, right, arr) => {
    if (left >= right) {
      return arr;
    }

    const pivot = arr[left];
    let leftIndex = left + 1;
    let rightIndex = right;
    while (true) {
      while (leftIndex <= right && arr[leftIndex] <= pivot) {
        leftIndex++;
      }
      while (rightIndex >= left && arr[rightIndex] > pivot) {
        rightIndex--;
      }
      if (leftIndex >= rightIndex) {
        break;
      } else {
        const tmp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = tmp;
      }
    }
    const tmp = arr[rightIndex];
    arr[rightIndex] = pivot;
    arr[left] = tmp;

    arr = sort(left, rightIndex - 1, arr);
    arr = sort(rightIndex + 1, right, arr);
    return arr;
  };

  console.log("quickSort:", sort(0, arr.length - 1, arr));
}

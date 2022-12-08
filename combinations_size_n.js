function* combinations(arr, r) {
  const n = arr.length;

  if (r > n) {
    return;
  }

  const indices = Array(r);
  for (let i = 0; i < r; i++) {
    indices[i] = i;
  }

  yield indices.map((i) => arr[i]);

  while (true) {
    let i;
    for (i = r - 1; i >= 0 && indices[i] === i + n - r; i--);
    if (i < 0) {
      return;
    }
    indices[i]++;
    for (let j = i + 1; j < r; j++) {
      indices[j] = indices[i] + j - i;
    }
    yield indices.map((i) => arr[i]);
  }
}



console.log([...combinations(['A', 'E', 'C','F'], 3)])

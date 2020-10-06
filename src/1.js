var run = function (A, B) {
  var max = '';
  if (A === B) {
    return A;
  }
  max = A >= B ? A : B;
  return max;
};
var A = 1;
var B = 1;
run(A, B);

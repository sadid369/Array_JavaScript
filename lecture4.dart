void main(List<String> args) {
  var arr1 = new List<bool>.filled(5, true);
  for (var i = 0; i < arr1.length; i++) {
    arr1[i] = true;
  }
  arr1.insert(1, true);
  print([...arr1]);
}

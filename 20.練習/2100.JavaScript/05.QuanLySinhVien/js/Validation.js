function Validation() {
  // Kiểm tra giá trị nhập vào có rỗng hay khôn
  this.isEmpty = function (value) {
    if (value.trim() === "") {
      return true;
    }
    return false;
  };
}

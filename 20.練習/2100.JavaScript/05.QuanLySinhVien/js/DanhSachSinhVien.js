function DanhSachSinhVien() {
  this.DSSV = [];

  // Định nghĩa các method trong class
  // Them sinh viên vào danh sách sinh viên
  this.themSinhVien = function (sinhVien) {
    this.DSSV.push(sinhvien);
  };
  // Xoá sinh viên trong danh sách sinh viên
  this.xoaSinhVien = function (listSVXoa) {};

  this.suaSinhVien = function (sinhVien) {};

  this.timKiemSinhVien = function (tenSV) {};
}

function hitung(tombol) {
  //tangkap id form
  var frm = document.getElementById("calcForm");
  var a1 = parseFloat(frm.angka1.value);
  var a2 = parseFloat(frm.angka2.value);
  var tombol = frm.tombol.value;
  switch (tombol) {
    case "btn_tambah":
      if (isNaN(a1) || isNaN(a2)) {
        var total = a1 + a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    case "btn_kurang":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        var total = a1 - a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    case "btn_kali":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        var total = a1 * a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    case "btn_bagi":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        var total = a1 / a2; //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    case "btn_pangkat":
      if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
      } else {
        var total = Math.pow(a1, a2); //rumus
        frm.hasil.value = total; //penempatan hasil
      }
      break;
    default:
  }
}

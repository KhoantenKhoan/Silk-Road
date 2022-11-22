let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id}.json`;
  var check = document.getElementsByClassName('anHien');
    for (var i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        anHien = check[i].value;
        console.log(anHien);
      }
    }
    sp={
      idDMT : document.querySelector("#dmt").value.trim(),
      idDM : document.querySelector("#dm").value.trim(),
      tenSP: document.querySelector("#ten").value.trim(),
      moTa: document.querySelector("#mota").value.trim(),
      hinhAnh: document.querySelector("#hinh").value.trim(),
      ngayNhap: document.querySelector("#ngay").value.trim(),
      gia: document.querySelector("#gia").value.trim(),
      giamGia:document.querySelector("#giamgia").value.trim(),
      soLuong: document.querySelector("#soluong").value.trim(),
      trangThai : anHien
    }
  options = {
    method: "PUT",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="product.html";
  })
}

// url="http://localhost:3000/DanhMuc";
// fetch(url)
// .then(res => res.json())
// .then(listLoai =>{
//   listLoai.forEach(loai =>{
//     document.getElementById("idloai").innerHTML +=`
//       <option value="${loai.id}">${loai.id}-${loai.TenDM}</option>
//     `;
//   })
// })
url = `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/sanPham/${id}.json`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById("dmt").value= sp.idDMT,
    document.getElementById("dm").value= sp.idDM,
    document.getElementById('ten').value = sp.tenSP;
    document.getElementById('mota').value = sp.moTa;
    document.getElementById('hinh').value = sp.hinhAnh;
    document.getElementById('ngay').value = sp.ngayNhap;
    document.getElementById('gia').value = sp.gia;
    document.getElementById("soluong").value = sp.soLuong
    document.getElementById("giamgia").value = sp.giamGia;
    document.getElementById('div_anHien').innerHTML = `
    <label class="btn btn-outline-success waves-effect waves-light m-r-10">
    <input type="radio" name="anHien" value="1" class="anHien" ${sp.trangThai=="1" ? "checked" :""}>Còn hàng
    </label>
    <label class="btn btn-outline-danger waves-effect waves-light">
    <input type="radio" name="anHien" value="0" class="anHien" ${sp.trangThai!="1" ? "checked" :""}> Hết hàng
    </label>  
    `;
})

var table1 = document.querySelector("#dmt");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMucTong.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          table1.innerHTML += `
          <option value="${row.id}">${row.tenDMT}</option>
            `;
        });
      })();

var table = document.querySelector("#dm");
      (async () => {
        const response = await fetch(
          "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc.json"
        );
        const data = await response.json();
        Object.keys(data).forEach((key) => {
          const row = data[key];
          console.log(row);
          console.log(key);
          table.innerHTML += `
          <option value="${row.id}">${row.tenDM}</option>
            `;
        });
      })();
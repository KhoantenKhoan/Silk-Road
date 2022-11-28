let params = new URLSearchParams(location.search);
let id = params.get('id');
btnluu = document.querySelector("#btnluu");
btnluu.onclick = function(){
  url=`https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/thongBao/${id}.json`;
  
  sp={
      hinhAnh: document.querySelector("#hinh").value.trim(),
      ngayDang: document.querySelector("#ngaynhap").value.trim(),
  }
  options = {
    method: "PUT",
    body: JSON.stringify(sp),
    headers: {'Content-Type':'application/json'}
  }
  fetch(url, options).then(res => res.json())
  .then(data =>{
    document.location="blog.html";
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
url = `http://localhost:3000/tintuc/${id}`;
fetch(url)
.then(res => res.json())
.then(sp  =>{
    document.getElementById('tieude').value = sp.TieuDe;
    document.getElementById('tacgia').value = sp.TacGia;
    document.getElementById('hinh').value = sp.HinhAnh;
    document.getElementById('ngaynhap').value = sp.NgayDang;
    document.getElementById('mota').value = sp.NoiDung;
    document.getElementById('tomtat').value = sp.TomTat;
    document.getElementById('luotxem').value = sp.LuotXem;
})
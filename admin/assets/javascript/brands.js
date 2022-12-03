let count = 1;
var table = document.querySelector("#brand");
let currentPage = 1;
let perPage = 5;
let totalPage = 0;
let item = [];
let db = [];
async function getData() {
  const response = await fetch(
    "https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc.json"
  );
  const data = await response.json();
  db = data;
  item = db.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  console.log(item);
  render();
  showPageNumber();
}
function showPageNumber() {
  totalPage = db.length / perPage;
  for (let i = 1; i < totalPage; i++) {
    document.getElementById(
      "page"
    ).innerHTML += `<a onclick="handlePageNumber(${i})">${i}</a>`;
  }
}
function handlePageNumber(num) {
  currentPage = num;
  item = db.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  render();
  console.log(item);
}
function render() {
  table.innerHTML=``;
  Object.keys(item).forEach((key) => {
    const row = item[key];
    if (row) {
      table.innerHTML += `
          <tr>
          <td> ${count++}</td>
          <td>${row.tenDM}</td>
          <td>${
            row.trangThai == "1"
              ? '<span class="btn btn-primary">Còn Hàng</span>'
              : '<span class="btn btn-danger">Hết Hàng</span>'
          }</td>
          <td>
            <a href="update-category.html?id=${key}"><button  class="badge badge-primary sua button">Sửa</button></a>
            <button class="badge badge-danger xoa button" onclick="xoasp('${key}')">Xóa</button>
          </td>
        </tr>
            `;
    }
  });
}

const xoasp = (id) => {
  (async () => {
    await fetch(
      `https://silkroad-project-28d19-default-rtdb.asia-southeast1.firebasedatabase.app/danhMuc/${id}.json`,
      {
        method: "DELETE",
      }
    );
    toastr.success("Xóa thành công!");
    window.location.reload();
  })();
};
getData();
showPageNumber();

 function openModal() {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent");
  modal.style.display = "block";
  modalContent.innerHTML = '<iframe id="modalViewer" src="./modals/modal_360.html" frameborder="0" allowfullscreen></iframe>';
}

function closeModal() {
  var modal = document.getElementById("myModal");
  var modalContent = document.getElementById("modalContent");
  modal.style.display = "none";
  modalContent.innerHTML = "";
}

function openFormModal() {
  var modal = document.getElementById("myModalForm");
  modal.style.display = "flex";
}

function closeFormModal() {
  var modal = document.getElementById("myModalForm");
  modal.style.display = "none";
}
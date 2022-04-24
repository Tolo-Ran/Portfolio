function openDialog(dialogId) {
     document.getElementById(dialogId).classList.add("visible");
     document.getElementById("overlay").classList.add("visible");
}

function closeDialog(dialogId) {
     document.getElementById(dialogId).classList.remove("visible");
     document.getElementById("overlay").classList.remove("visible");
}
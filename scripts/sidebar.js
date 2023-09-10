const btn = document.getElementById('sb-btn');
const sb = document.getElementById('sidebar');
const sbInfo = document.getElementById('page-footer');
sb.classList.add('sidebar-visible');
btn.innerHTML = "Show";

btn.addEventListener("click", function () {
  // console.log(sidebar.classList);
  if (sb.classList.contains('sidebar-visible')) {
    sb.classList.remove('sidebar-visible');
    btn.innerHTML = "Hide"
  } else {
    sb.classList.add('sidebar-visible');
    btn.innerHTML = "Show"
  }
});

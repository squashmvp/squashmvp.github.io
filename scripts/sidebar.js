const btn = document.getElementById('sb-btn');
sb = document.getElementById('sidebar');
sbInfo = document.getElementById('page-footer');

sb.classList.add('sidebar-visible');
btn.innerHTML = "Show";

btn.addEventListener("click", function () {
  // console.log(sidebar.classList);
  if (sb.classList.contains('sidebar-visible')) {
    sb.classList.remove('sidebar-visible');
    btn.innerHTML = "Hide";
  } else {
    sb.classList.add('sidebar-visible');
    btn.innerHTML = "Show";
  }
});

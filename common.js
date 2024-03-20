function changeMenu(index) {
  if (index == null) { return }
  var menuList = document.querySelectorAll(".menu-container span");
  for (var i = 0; i < menuList.length; i++) {
    menuList[i].classList.remove("active");
  }
  let path = window.location.href;
  let lastSlashIndex = path.lastIndexOf('/');
  let newPath = path.slice(0, lastSlashIndex);
  menuList[index].classList.add("active");
  switch (index) {
    case 0:
      window.location.href = newPath + "/index.html";
      break;
    case 1:
      window.location.href = newPath + "/news.html";
      break;
    case 2:
      window.location.href = newPath + "/publication.html";
      break;
    case 3:
      window.location.href = newPath + "/projects.html";
      break;
    case 4:
      window.location.href = newPath + "/teaching.html";
      break;
    case 5:
      window.location.href = newPath + "/students.html";
      break;
    case 6:
      window.location.href = newPath + "/personalLife.html";
      break;
    case 7:
      window.location.href = newPath + "/contact.html";
      break;
  }
}

function toUrl(str) {
  if (str == 1) {
    window.location.href = 'mailto:ylsun@cs.ecnu.edu.cn'
  } else if (str == 2) {
    window.open('https://scholar.google.com/citations?user=qGUy4s0AAAAJ&hl=en&oi=sra')
  }
}
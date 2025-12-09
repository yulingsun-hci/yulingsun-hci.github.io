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
      window.location.href = newPath + "/home+.html";
      break;
    case 1:
      window.location.href = newPath + "/news.html";
      break;
    case 2:
      window.location.href = newPath + "/publication.html";
      break;
    case 3:
      window.location.href = newPath + "/research.html";
      break;
    case 4:
      window.location.href = newPath + "/awards.html";
      break;
   // case 5:
     // window.location.href = newPath + "/students.html";
    //  break;
    case 5:
      window.location.href = newPath + "/personalLife.html";
      break;
    case 6:
      window.location.href = newPath + "/contact.html";
      break;
  }
}

function toUrl(str) {
  let path = window.location.href;
  let lastSlashIndex = path.lastIndexOf('/');
  let newPath = path.slice(0, lastSlashIndex);
  if (str == 0) {
    window.open(newPath + "/personalPhotos.html");
  }
  if (str == 1) {
    window.location.href = 'mailto:yulingsun@fudan.edu.cn'
  } else if (str == 2) {
    window.open('https://scholar.google.com/citations?user=qGUy4s0AAAAJ&hl=en&oi=sra')
  } else if (str == 3) {
    // window.open('https://docs.google.com/document/d/1LbNu-JGxNTKyGGh_UoxfnfFt8QHmbnj-/edit?usp=sharing&ouid=105846516868763140042&rtpof=true&sd=true')
    window.open(newPath + "/cvpdf.html");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.research-tab');
  const panels = document.querySelectorAll('.research-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      // 切 tab active
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 切 panel
      panels.forEach(panel => {
        if (panel.getAttribute('data-tab') === target) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
});


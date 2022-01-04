function hitTab(evt, tabName) {
  
  let i, tabContent, tablinks

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none"
  }
  
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "")
  }

  document.getElementById(tabName).style.display = "block"
  evt.currentTarget.className += " active"
}

document.getElementById("defaultOpen").click()
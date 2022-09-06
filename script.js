function Menu() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } 
  else if (x.className === "navbar darknav") {
    x.className += " responsive";
  }
  else if (x.className === "navbar darknav responsive" ||
    x.className === "navbar responsive darknav"){
      x.className = "navbar darknav";
  }
  else{
    x.className = "navbar";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function DarkMode() {
  var bg = document.body;
  var nav = document.getElementById("topnav");
  var swtch = document.getElementById("switch");
  var right = document.getElementById("nvright");
  var abt = document.getElementById("about");
  var ed = document.getElementById("education");
  var its = document.getElementById("logoits");
  var smala = document.getElementById("logosmala");
  var botits = document.getElementById("logoIts");
  var botsml = document.getElementById("logoSmala");
  var skill = document.getElementById("skill");
  var html = document.getElementById("logohtml");
  var css = document.getElementById("logocss");
  var js = document.getElementById("logojs");
  var cpp = document.getElementById("logocpp");
  var py = document.getElementById("logopy");
  var laravel = document.getElementById("logolaravel");
  var figma = document.getElementById("logofigma");
  var rb = document.getElementById("rb");
  var map1 = document.getElementById("map1");
  var map2 = document.getElementById("map2");
  var map3 = document.getElementById("map3");
  bg.classList.toggle("darkbg");
  nav.classList.toggle("darknav");
  swtch.classList.toggle("darkswitch");
  right.classList.toggle("darkright");
  abt.classList.toggle("darkabout");
  ed.classList.toggle("darkedu");
  its.classList.toggle("darkits");
  smala.classList.toggle("darksmala");
  botits.classList.toggle("darkbotits");
  botsml.classList.toggle("darkbotsml");
  skill.classList.toggle("darkskill");
  html.classList.toggle("darkstatic");
  css.classList.toggle("darkstatic");
  js.classList.toggle("darkstatic");
  cpp.classList.toggle("darkstatic");
  py.classList.toggle("darkstatic");
  laravel.classList.toggle("darkstatic");
  figma.classList.toggle("darkstatic");;
  rb.classList.toggle("darkrb");
  map1.classList.toggle("darkmap1");
  map2.classList.toggle("darkmap2");
  map3.classList.toggle("darkmap3");
}
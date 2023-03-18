function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function sentmessage(){
  setTimeout(() => {

    $("#loading").css("display", "block")
  setTimeout(() => {
    $("#sentmessage").css("display", "block")
    $("#loading").css("display", "none")
    setTimeout(() => {
      $("#sentmessage").css("display", "none")
      $("#name").val("")
      $("#email").val("")
      $("#subject").val("")
      $("#mess").val("")
    }, 1000);
  }, 2000);
}, 200);
  
}

  function showhide(idInput) {
  if (idInput === "home"){
    $("#home").removeClass("titlehomeback").addClass("titlehome")
    $("#headerhome").removeClass("titlehomeback").addClass("titlehome")
    $("#about").hide()
    $("#contact").hide()
    $("#skills").hide()
    $("#headername,#headernamef,#headernamel").show()
    $("#navul").addClass("hometitle")
    $("#ulms").removeClass("ms-auto")
    $("#divnav").addClass("titlenav").removeClass("titlenavback")
    $("#homename").removeClass("navbarbg")

    $("#homet").removeClass("hover-underline-animation").addClass("hoverr")
    $("#aboutt").addClass("hover-underline-animation").removeClass("hoverr")
    $("#skillst").addClass("hover-underline-animation").removeClass("hoverr")
    $("#contactt").addClass("hover-underline-animation").removeClass("hoverr")

    $("#homet2").removeClass("hover-underline-animation").addClass("hoverr")
    $("#aboutt2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#skillst2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#contactt2").addClass("hover-underline-animation").removeClass("hoverr")
  }
  else if (idInput === "about"){
    $("#home").addClass("titlehomeback").removeClass("titlehome")
    $("#headerhome").addClass("titlehomeback").removeClass("titlehome")
    $("#about").show()
    $("#contact").hide()
    $("#skills").hide()
    $("#headername,#headernamef,#headernamel").hide()
    $("#navul").removeClass("hometitle")
    $("#ulms").addClass("ms-auto")
    $("#divnav").removeClass("titlenav").addClass("titlenavback")
    $("#homename").addClass("navbarbg")

    $("#homet").addClass("hover-underline-animation").removeClass("hoverr")
    $("#aboutt").removeClass("hover-underline-animation").addClass("hoverr")
    $("#skillst").addClass("hover-underline-animation").removeClass("hoverr")
    $("#contactt").addClass("hover-underline-animation").removeClass("hoverr")

    $("#homet2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#aboutt2").removeClass("hover-underline-animation").addClass("hoverr")
    $("#skillst2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#contactt2").addClass("hover-underline-animation").removeClass("hoverr")
  }
  else if (idInput === "contact"){
    $("#home").addClass("titlehomeback").removeClass("titlehome")
    $("#headerhome").addClass("titlehomeback").removeClass("titlehome")
    $("#about").hide()
    $("#contact").show()
    $("#skills").hide()
    $("#headername,#headernamef,#headernamel").hide()
    $("#navul").removeClass("hometitle")
    $("#ulms").addClass("ms-auto")
    $("#divnav").removeClass("titlenav").addClass("titlenavback")
    $("#homename").addClass("navbarbg")

    $("#homet").addClass("hover-underline-animation").removeClass("hoverr")
    $("#contactt").removeClass("hover-underline-animation").addClass("hoverr")
    $("#aboutt").addClass("hover-underline-animation").removeClass("hoverr")
    $("#skillst").addClass("hover-underline-animation").removeClass("hoverr")

    $("#homet2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#contactt2").removeClass("hover-underline-animation").addClass("hoverr")
    $("#aboutt2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#skillst2").addClass("hover-underline-animation").removeClass("hoverr")
  }
  else if (idInput === "skills"){
    $("#home").addClass("titlehomeback").removeClass("titlehome")
    $("#headerhome").addClass("titlehomeback").removeClass("titlehome")
    $("#about").hide()
    $("#contact").hide()
    $("#skills").show()
    $("#headername,#headernamef,#headernamel").hide()
    $("#navul").removeClass("hometitle")
    $("#ulms").addClass("ms-auto")
    $("#divnav").removeClass("titlenav").addClass("titlenavback")
    $("#homename").addClass("navbarbg")

    $("#homet").addClass("hover-underline-animation").removeClass("hoverr")
    $("#skillst").removeClass("hover-underline-animation").addClass("hoverr")
    $("#contactt").addClass("hover-underline-animation").removeClass("hoverr")
    $("#aboutt").addClass("hover-underline-animation").removeClass("hoverr")

    $("#homet2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#skillst2").removeClass("hover-underline-animation").addClass("hoverr")
    $("#contactt2").addClass("hover-underline-animation").removeClass("hoverr")
    $("#aboutt2").addClass("hover-underline-animation").removeClass("hoverr")
  }
    }
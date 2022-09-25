//all scripting are interconnected and all pages scritp are in the single doc ready function
$(document).ready(function(){
  // ----script for index(main page) section-----
      let i =4;
      $("#navbar-bar").click(function(){
          if( i % 2 === 0) {
              $("#navbar-list").css("display", "block");
          }else{
              $("#navbar-list").css("display", "none");
              i++
          }
      });
      var header =  $(".header");
      var banner = $(".banner")
      var sticky = header.offset().top;
  
      $(window).scroll(function(){
          if(window.pageYOffset > 150){
              banner.addClass("content")
              header.addClass("sticky");
          }else{
              banner.removeClass("content")
              header.removeClass("sticky");
         }
      });
     //scroll to top button function
      //Getting the button:
    mybutton = $("#scrollbtn");
  
    // When the user scrolls down 10px from the top of the document, show the button
      $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
              mybutton.css("display", "block"); // show the button
          } else {
            mybutton.css("display", "none"); // hide the button
          }
      });
  
    // When the user clicks on the button, scroll to the top of the document
    mybutton.click( function(){
      $([document.documentElement, document.body]).animate({ scrollTop: $("#body").offset().top}, 800);
    } );


  //page_dropdown button script

    let pageDropdown = $('#page_dropdown');
    let innerPageDropdown = $('#productcheckout');
    let pages = $('#pages');
     pages.mouseover(
       function() {
         pageDropdown.css("display", "block");
       }
     );
     pages.mouseleave(
       function() {
         pageDropdown.css("display", "none");
       }
     )

    // video button script
    let button = $("#play-button");
    let iframe = $("#iframe_video");
    let divs = $(".video_play")
    button.click(function(){
      divs.css("display", "none");
      iframe.css("display", "block");
    });
  // -----index section ends-----
  
  // signup page scripting ---->
  
      $("#signup_img").mouseout(function(){
          $(this).css("transform" , "scale(1)");
          $(this).css("transition" , "all 1s")
      });
  
  // signup page scripting ends --->
  
  // login page scripting ----->
  
  $(document).ready(function(){
      
  });
  
  // login page scripting ends ---->
  
  // -----script for add cart page starts-----
  
  var prize = $("#prize").html();                     // product prize as string
  var prizenum  = parseFloat(prize);                  //changing product prize as number
  var unit = $("#quantity");                          //input tag
  var value = $("#quantity").val();                   //number of quantity which get the input  value from customer as string
  var valuenum = parseInt(value);                     //changing quantity value as number
  var totaldiv = $(".total_quantity");                //parent div of total which is use to append child(total)
  if(value <= 1){
    var h4 = $("<h4></h4>");
    h4.text(prize);
    totaldiv.append(h4);
  }
  unit.change(function(){
      
    console.log(typeof prize);
    console.log(typeof value);
    console.log(typeof prizenum);
    console.log(typeof valuenum);
    console.log(prizenum);
    console.log(valuenum);
    var total = prizenum * valuenum;
    h4.text(total);
    
  });
  //-----script for add cart page ends-----

  // -----scripting for shop page -----

  // for flters on click border style
  let f1 = $("#f1");    //a tag 
  let f2 = $("#f2");
  let f3 = $("#f3");
  f1.click(function(){
    $(this).css("border-bottom", "2px solid red");
    f2.add(f3).css("border-bottom", "unset")
  });
  f2.click(function(){
    $(this).css("border-bottom", "2px solid red");
    f1.add(f3).css("border-bottom", "unset");
  });
  f3.click(function(){
    $(this).css("border-bottom", "2px solid red");
    f2.add(f1).css("border-bottom", "unset");
  });

  
  // -----scripting for shop page ends -----

 
  
  //----end of document ready function-----
  });
  
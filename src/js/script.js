var script = document.createElement('script');
script.src = "./jquery-3.6.1.js";
document.getElementsByTagName('head')[0].appendChild(script);


  //Dropdown: 
  $(".dropdown-item-text").hide();
  $(".dropdown-item-btn").click(
    function(){
      $(this).next(".dropdown-item-text").toggle()
      if($(".dropdown-item-text").is(":visible")){
        $(this).css({"z-index":"1"}).addClass("ativo")
      }
      else{
        $(this).removeClass("ativo")
      }
    }
  )

  //Interactive Circle
  $(".yellow").hide();
  $(".red").hide();
  $(".gray").hide();
  $("#yellow-toggle").click(
    function(){
        $(".yellow").toggle()
        if($(".yellow").is(":visible")){
          $(this).addClass("plus").removeClass("minus")

        }
        else{
          $(this).addClass("minus").removeClass("plus")
        }
      }
  )
  $("#gray-toggle").click(
    function(){
    $(".gray").toggle()
    if($(".gray").is(":visible")){
      $(this).addClass("plus").removeClass("minus")

    }
    else{
      $(this).addClass("minus").removeClass("plus")
    }
  }
  )

  $("#red-toggle").click(
    function(){
    $(".red").toggle()
    if($(".red").is(":visible")){
      $(this).addClass("plus").removeClass("minus")

    }
    else{
      $(this).addClass("minus").removeClass("plus")
    }
  }
  )


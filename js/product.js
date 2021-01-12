jQuery(document).ready(function(){
    // Карусель top
    var w_img = $(".karusel_wrap_img").width();

    var w_wrap = $(".product_karusel_wrap").width();

    var w_sum_img = $(".karusel_wrap_img img").length * w_img;

    var s = 0;

    $(".product_karusel_wrap_arrow_left").on("click", function(){

        s = s + w_img;
        if(w_sum_img - s >= w_wrap){
            $(".product_karusel_wrap_img").animate({"margin-left" : "-=" + w_img},1000);
        }
        else{
            s = s - w_img;
        }
    })

    $(".product_karusel_wrap_arrow_right").on("click", function(){
        s = s - w_img
        if(s >= 0){
            $(".product_karusel_wrap_img").animate({"margin-left" : "+=" + w_img},1000);
        }
        else{
            s = 0;
        }
    })

    // Карусель top в развороте

    // var wrap_turn = $(".wrap_turn");

    // $(".product_karusel_img").on("click", function(){
    //     $(wrap_turn).addClass("activ");

    // })


    // var w_img = $(".wrap_turn_block_img").width();

    // var w_wrap = $(".wrap_turn_block").width();

    // var w_sum_img = $(".wrap_turn_block_img img").length * w_img;

    // var s = 0;

    // $(".wrap_turn_btn_left").on("click", function(){

    //     s = s + w_img;
    //     if(w_sum_img - s >= w_wrap){
    //         $(".wrap_turn_block_w").animate({"margin-left" : "-=" + w_img},1000);
    //     }
    //     else{
    //         s = s - w_img;
    //     }
    // })

    // $(".wrap_turn_btn_right").on("click", function(){
    //     s = s - w_img
    //     if(s >= 0){
    //         $(".wrap_turn_block_w").animate({"margin-left" : "+=" + w_img},1000);
    //     }
    //     else{
    //         s = 0;
    //     }
    // })


    // Карточка товара

    // var product_wrap_list = $(".product_wrap_list");

    // $(".product_wrap_preview_list li").on("click", function(){
    //     if($(".product_wrap_list_description").hasClass("activ_description")){
    //         $(".product_wrap_list_description").removeClass("activ_description");
    //         // $(".product_wrap_list_description").css("display", "none");
    //         $(".product_wrap_list_description").hide();

            
    //     }
    //     else{
    //         $(".product_wrap_list_description").addClass("activ_description");
    //         // $(".product_wrap_list_description").css("display", "block");
    //         $(".product_wrap_list_description").show();

    //     }
    // })


})

window.onload = function(){
    let top_block_footer_menu = document.querySelector(".top_block_footer_menu");
    let top_block_list_menu_btn = document.querySelector(".top_block_list_menu_btn");
    let top_block_footer_menu_close = document.querySelector(".top_block_footer_menu_close i");



    top_block_list_menu_btn.onclick = function(){
        top_block_footer_menu.style.display = "block";
    }

    top_block_footer_menu_close.onclick = function(){
        top_block_footer_menu.style.display = "none";
    }

}


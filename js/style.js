jQuery(document).ready(function(){
    
    var w_img = $(".content_top_promo_right_img").width();
    console.log(w_img);

    var w_wrap = $(".content_top_promo_right").width();
    console.log(w_wrap);

    var w_sum_img = $(".content_top_promo_right img").length * w_img;
    console.log(w_sum_img);

    var s = 0;

    $(".content_top_promo_right_btn_one").on("click", function(){

        s = s + w_img;
        if(w_sum_img - s >= w_wrap){
            $(".content_top_promo_right_wrap").animate({"margin-left" : "-=" + w_img},1000);
        }
        else{
            s = s - w_img;
        }
    })

    $(".content_top_promo_right_btn_two").on("click", function(){
        s = s - w_img
        if(s >= 0){
            $(".content_top_promo_right_wrap").animate({"margin-left" : "+=" + w_img},1000);
        }
        else{
            s = 0;
        }
    })
    
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

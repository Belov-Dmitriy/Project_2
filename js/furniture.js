//Вариант JS
/*
window.onload = function(){
    let categories_wrap_item = document.querySelector(".categories_wrap_item");
    let categories_wrap_list = document.querySelector(".categories_wrap_list");

    categories_wrap_item.onclick = function(){
        categories_wrap_list.style.display = "block";

    }
}
*/

//Вариант JQuery не работает на 100%
/*
jQuery(document).ready(function(){


    $(".categories_wrap_item").on("click", function(){
        $(".categories_wrap_list").toggle();
    })


    $(".categories_wrap_list_item").on("click", function(){
        $(".categories_wrap_list_list").toggle();
    })


})
*/

jQuery(document).ready(function(){

    $(".categories_wrap_item").on("click", function(){
        if($(this).next().hasClass("show_div")){
            $(this).next().removeClass("show_div");
            $(this).next().slideUp(500);
        }
        else{
            $(this).next().addClass("show_div");
            $(this).next().slideDown(500);
        }
    })


    $(".categories_wrap_list_item").on("click", function(){
        if($(this).next().hasClass("show_div")){
            $(this).next().removeClass("show_div");
            $(this).next().slideUp(1000);
        }
        else{
            $(this).next().addClass("show_div");
            $(this).next().slideDown(1000);
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


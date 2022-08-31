function toggle_mc_dropdown() {
    
}

var is_menu_shown = false;
$(document).ready(function () {
    let btn = $("#navbar_item_minecraft_text");
    let menu = $("#navbar_mc_dropdown_menu");

    btn.click(function () {
        if (is_menu_shown) {
            menu.hide();
        } else {
            menu.show();
            menu.css("display", "flex");
        }
        is_menu_shown = !is_menu_shown;
    });

    $("#navbar_alien_logo img").hover(function() {
        $(this).attr("src", "/static/resources/icons/Mr3DAlien_Color_Sparkly_Eyes.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/mr3dalien_white.png.webp");
    });
});
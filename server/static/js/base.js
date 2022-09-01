function toggle_mc_dropdown() {
    
}

var is_menu_shown_mc = false;
var is_menu_shown_p = false;
$(document).ready(function () {
    let btn_mc = $("#navbar_item_minecraft_text");
    let menu_mc = $("#navbar_mc_dropdown_menu");

    btn_mc.click(function () {
        if (is_menu_shown_mc) {
            menu_mc.hide();
        } else {
            menu_mc.show();
            menu_mc.css("display", "flex");
        }
        is_menu_shown_mc = !is_menu_shown_mc;
    });

    let btn_p = $("#navbar_item_partners_text");
    let menu_p = $("#navbar_partners_dropdown_menu");

    btn_p.click(function () {
        if (is_menu_shown_p) {
            menu_p.hide();
        } else {
            menu_p.show();
            menu_p.css("display", "flex");
        }
        is_menu_shown_p = !is_menu_shown_p;
    });

    $("#navbar_alien_logo img").hover(function() {
        $(this).attr("src", "/static/resources/icons/Mr3DAlien_Color_Sparkly_Eyes.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/mr3dalien_white.png.webp");
    });

    $("#navbar_social_youtube img").hover(function() {
        $(this).attr("src", "/static/resources/icons/youtube_button_color.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/youtube_button.webp");
    });

    $("#navbar_social_twitter img").hover(function() {
        $(this).attr("src", "/static/resources/icons/twitter_button_color.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/twitter_button.webp");
    });

    $("#navbar_social_patreon img").hover(function() {
        $(this).attr("src", "/static/resources/icons/patreon_button_color.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/patreon_button.webp");
    });

    $("#navbar_social_planetminecraft img").hover(function() {
        $(this).attr("src", "/static/resources/icons/planetminecraft_button_color.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/planetminecraft_button.webp");
    });

    $("#navbar_social_discord img").hover(function() {
        $(this).attr("src", "/static/resources/icons/discord_button_color.webp");
        
    }, function() {
        $(this).attr("src", "/static/resources/icons/discord_button.webp");
    });
});
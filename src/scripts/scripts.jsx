import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(document).ready(function(){
    $(".btn-loading").click(function(){
        $(this).addClass('clicked');
        $(".btn-loading i").removeAttr('class');
        $(".btn-loading i").addClass('fa-solid');
        $(".btn-loading i").addClass('fa-fire');
    });
    // Open menu
    $(".Header .mainMenu").click(function(){
        $(".overlay").fadeIn().show();
        $(".Header .Menu").fadeIn(300).show();
        $(this).css('z-index', 9999);
    });
    // Close menu
    $(".overlay").click(function(){
        $(".Header .Menu").fadeOut(300).hide(300);
        $(this).fadeOut(300).hide(300);
        $(".Header .mainMenu").css('z-index', 0);
    });
    // Like post
    $(".Post .posting .infos .like").click(function(){
        const id = $(this).data('id');
        var like = $("#"+id+" .posting .infos .like span").text()
        var likes = parseInt(like) + 1;
        $("#"+id+" .posting .infos .like i").removeClass("fa-regular");
        $("#"+id+" .posting .infos .like i").addClass("fa-solid").css('color', 'red');
        $("#"+id+" .posting .infos .like span").text(likes);
        $('#'+id+' .posting .likePhoto').fadeIn(400).css('display', 'grid');
        $('#'+id+' .posting .likePhoto').fadeOut(2000).hide(2000);
        $(this).removeClass("like");
    });
});

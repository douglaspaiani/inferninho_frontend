import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(".btn-loading").click(function(){
    $(this).addClass('clicked');
    $(".btn-loading i").removeAttr('class');
    $(".btn-loading i").addClass('fa-solid');
    $(".btn-loading i").addClass('fa-fire');
});
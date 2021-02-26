$(document).ready(function () {
    $.each(localStorage.getItem("TigerDirect"), function(i, data){
        $("#dist").append("<li>" + data + "</li>");
    });

});

/**
 * Created by Acumium on 9/22/2017.
 */

$(function(){
    $("#header").load("/templates/includes/header.html");
});
$(function(){
    $("#footer").load("/templates/includes/footer.html");
});
$(document).ready(function(){
    var dteNow = new Date();
    var intYear = dteNow.getFullYear();
    console.log(intYear);
    $("#currentYear").text(intYear);
});

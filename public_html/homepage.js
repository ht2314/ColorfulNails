/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init() {
    var pages = ["#services", "#prices", "#contact"];
    for(var page in pages) {
        $(pages[page]).hide();
    }
    
    
}
      function initMap() {
        var latLang = {lat: 51.514888, lng: 0.426739};  
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: latLang,
          zoom: 17
        });
        
        var marker = new google.maps.Marker({
            position: latLang,
            map: map,
            title: 'Hello! come visit us'            
        });
      }

$(document).ready(function (){
    init();
    $("#map").hide();
    $("#optionsList a").click(function(){
  
        var hashSym = "#";
        var currentlyShowing = $("#optionsList .active").children("a").text();
        var toHide = hashSym + currentlyShowing;
        $("#map").hide();
        $(toHide).hide();
        var toShow = hashSym + $(this).text();
        $("#optionsList .active").removeClass("active");
        $(this).parent().addClass("active");
        $(toShow).show();
        if($(this).text() === "contact"){
            $("#map").show();
            initMap();
        }
        
    });
});


jQuery(function($){

$( document ).ready(function() {

 setTimeout(function(){

  if($("div.typeform-title").length) {

      var texxt1 = "Martine DEGREMONT, Directrice du SITEVI"
           
      var texxt2 = "et Frédéric MARTIN, Président d\' AXEMA et du SITEVI,"

      var texxt3 = "sont heureux de vous inviter aux conférences de presse de lancement du SITEVI 2017"

   $("div.typeform-title").html(texxt1 + "<br>" + texxt2 + "<br>" + texxt3 + "<br>");

   $(".qa-start-button").html("Répondre").css("margin-top", "20px;");

  }
 
 }, 1500);

});

});
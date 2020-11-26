


$(document).ready(function($){
  $('.button-collapse').sideNav();//on appele la fonction nav bar
  $('.parallax').parallax();//on appele la fonction parallax
 
    
  $('select').material_select();///toutes les balises select du html
  
  

    $('.modal').modal();

    var options=[{
     selector:"#infobulle", offset:300, callback:'Materialize.toast("Merci de me laisser un message",3500)'//message a afiicher

    }];
    Materialize.scrollFire(options);//fera apparaitre mon info bulle en paramettte de la fonction options
    

    
    document.getElementById('mess').innerHTML = "";

    setTimeout(function() {
      document.getElementById('mess').innerHTML = "Contactez-moi";
    },2000);

  });
    
//mon bouton appele la fonction sideNav
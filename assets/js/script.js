$(function(){
  $('#firstName,#lastName').focus(function(){ // On détermine l'ensemble des #id qui seront ciblées
    $(this).css('border','1px solid green'); // Le this permet de cibler l'#id précise qui a déclenché la fonction
  });

  $('#firstName,#lastName').blur(function(){
    $(this).css('border','1px solid red');
  });
});

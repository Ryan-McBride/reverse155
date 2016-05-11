$(document).ready(function(){
  var questions = [];
  var audio = new Audio('/public/ex.mp3');
  $.ajax({
    url: '/public/questions.json'
  })
  .done(function(data){
    questions = data;
  })

  $('#button').on('click', function(){
    audio.play();
    var rand= Math.floor(Math.random()*questions.length);
    $('#main').text(questions[rand].q);
    $('#to').text(questions[rand].to + ':');
  });
});

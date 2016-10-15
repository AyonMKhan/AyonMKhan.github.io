$(document).ready(function(){
  //text for quote
  var qtext = '';
  //function to generate quote
  var qGen = function() {
    //random number between 1 and 10
    var rndom = Math.floor((Math.random() * 10) + 1);
    switch(rndom) {
      case(1):
        qtext = "Starting a company is like eating glass and staring into the abyss. - Elon musk's friend";
        break;
      case(2):
        qtext = "Brilliant thinking is rare, but courage is in even shorter supply than genius. - Peter Thiel";
        break;
      case(3):
        qtext = "Often any decision, even the wrong decision, is better than no decision. - Ben Horowitz";
        break;
      case(4):
        qtext = "The first principle is that you must not fool yourself and you are the easiest person to fool. - Richard Feynman";
        break;
      case(5):
        qtext = "Everyone is an entrepreneur. The only skills you need to be an entrepreneur: an ability to fail, an ability to have ideas, to sell those ideas, to execute on those ideas, and to be persistent so even as you fail you learn and move onto the next adventure. - James Altucher";
        break;
      case(6):
        qtext = "The astronaut dream was probably not going to happen, but I should do things that keep me moving in the right direction, just in case – and I should be sure those things interest me, so that whatever happens, I’m happy. – Chris Hadfield";
        break;
      case(7):
        qtext = "Do not envy those who seem to be naturally gifted; it is often a curse, as such types rarely learn the value of diligence and focus, and they pay for this later in life. - Robert Greene";
        break;
      case(8):
        qtext = "The wound is the place where the Light enters you. - Rumi";
        break;
      case(9):
        qtext = "The day before something is truly a breakthrough, it’s a 'crazy idea.' Trying out crazy ideas means bucking expert opinion and taking big risks. It means not being afraid to fail. Because you will fail. The road to bold is paved with failure, and this means having a strategy in place to handle risk and learn from mistakes is critical - Peter Diamandis";
        break;
      case(10):
        qtext = "A person's success in life can usually be measured by the number of uncomfortable conversations he or she is willing to have. - Tim Ferriss";
        break;
    }
    return qtext;
  }


  $('#quote').click(function() {
    var qtext = qGen();
    $('#quotepara').text(qtext);

    var tweeturl = "http://twitter.com/home/?status=" + qtext;

    $('#tweet').attr('href', tweeturl);
  })

});

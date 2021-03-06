var timerID = null;
var timer = 0;

function start() {
  var text = document.getElementById("chrono");
  var timer_h = 0;
  var timer_min = 0;
  var timer_s = 0;

  if (timerID === null) {
    timerID = setInterval(function() {
      timer += 1;
      timer_s = Math.floor(timer / 100);
      timer_min = Math.floor(timer_s / 60);
      timer_h = Math.floor(timer_min / 60);
      text.innerHTML = timer_h + " h : " + timer_min % 60 + " min : " + timer_s % 60 + " s";
    }, 10);
  }
}

function stop() {
  clearInterval(timerID);
  timerID = null;
}

function reset_timer() {
  timer = 0;
  stop();
  document.getElementById("chrono").innerHTML = "0 h : 0 min : 0 s";
}

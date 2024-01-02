console.log("Extension loaded")
// Load jQuery from the external source

// Parse time in the format "mm:ss"
function parseTime(timeString) {
  var timeParts = timeString.split(':');
  var minutes = parseInt(timeParts[0], 10);
  var seconds = parseInt(timeParts[1], 10);
  return minutes * 60 + seconds;
}

var num = 0;
function printNum(){
  num++
  // console.log(num)
  var currentTimeElement = document.evaluate('//*[@id="movie_player"]/div[32]/div[2]/div[1]/div[1]/span[2]/span[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  var durationElement = document.evaluate('//*[@id="movie_player"]/div[32]/div[2]/div[1]/div[1]/span[2]/span[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (!currentTimeElement) {
    var currentTimeElement = document.evaluate('//*[@id="movie_player"]/div[33]/div[2]/div[1]/div[1]/span[2]/span[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

  if (!durationElement) {
    var durationElement = document.evaluate('//*[@id="movie_player"]/div[33]/div[2]/div[1]/div[1]/span[2]/span[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

  var currentTime = parseTime(currentTimeElement.innerText);
  var duration = parseTime(durationElement.innerText);
  // console.log('time compared');
  // console.log('currentTime', currentTime);
  // console.log('duration', duration);
  if (currentTime == duration) {
    var nextButton = document.evaluate('//*[@id="movie_player"]/div[32]/div[2]/div[1]/a[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // If div[32] elements are not found, try div[33]
    if (!nextButton ) {
      // console.log("nextButton 2")
      nextButton = document.evaluate('//*[@id="movie_player"]/div[33]/div[2]/div[1]/a[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } else if (!nextButton) {
      // console.log("nextButton 3")
      nextButton = document.evaluate('//*[@id="movie_player"]/div[33]/div[2]/div[1]/div[1]/span[2]/span[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    if (nextButton) {
      // console.log(nextButton)
      // $(nextButton)[0].click()
      console.log("next button clicked");
      nextButton.click();
    }
  }
}
setInterval(printNum, 1000);

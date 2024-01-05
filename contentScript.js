console.log("Extension loaded")

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

  var currentTimeXpathExpressions = [
      '//*[@id="movie_player"]/div[33]/div[2]/div[1]/div[1]/span[2]/span[1]',
      '//*[@id="movie_player"]/div[32]/div[2]/div[1]/div[1]/span[2]/span[1]',
      '//*[@id="movie_player"]/div[31]/div[2]/div[1]/div[1]/span[2]/span[1]'
      // Add more XPath expressions here
  ];

  var currentTimeElement = null;

  for (var i = 0; i < currentTimeXpathExpressions.length; i++) {
      currentTimeElement = document.evaluate(currentTimeXpathExpressions[i], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (currentTimeElement) {
          // If a valid currentTimeElement is found, break out of the loop
          console.log('current time found')
          break;
      }
  }

  var currentTimeXpathExpressions = [
      '//*[@id="movie_player"]/div[33]/div[2]/div[1]/div[1]/span[2]/span[3]',
      '//*[@id="movie_player"]/div[32]/div[2]/div[1]/div[1]/span[2]/span[3]',
      '//*[@id="movie_player"]/div[31]/div[2]/div[1]/div[1]/span[2]/span[3]'
      // Add more XPath expressions here
  ];

  var durationElement = null;

  for (var i = 0; i < currentTimeXpathExpressions.length; i++) {
      durationElement = document.evaluate(currentTimeXpathExpressions[i], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

      if (durationElement) {
          // If a valid durationElement is found, break out of the loop
          console.log('duration found')
          break;
      }
  }


  var currentTime = parseTime(currentTimeElement.innerText);
  var duration = parseTime(durationElement.innerText);
  // console.log('time compared');
  // console.log('currentTime', currentTime);
  // console.log('duration', duration);
  if (currentTime == duration) {
    console.log("end of video reached")

    var currentTimeXpathExpressions = [
        '//*[@id="movie_player"]/div[32]/div[2]/div[1]/a[2]',
        '//*[@id="movie_player"]/div[33]/div[2]/div[1]/a[2]',
        '//*[@id="movie_player"]/div[33]/div[2]/div[1]/div[1]/span[2]/span[1]',
        '//*[@id="movie_player"]/div[31]/div[2]/div[1]/a[2]'
        // Add more XPath expressions here
    ];

    var nextButton = null;

    for (var i = 0; i < currentTimeXpathExpressions.length; i++) {
        nextButton = document.evaluate(currentTimeXpathExpressions[i], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (nextButton) {
            // If a valid durationElement is found, break out of the loop
            console.log('next button found')
            console.log("next button clicked");
            nextButton.click();
            break;
        }
    }
  }

}
setInterval(printNum, 1000);

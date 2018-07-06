$('form').on("submit", function(e){
  e.preventDefault();
  
  var apiKey = "xx9UFiARCM8mqTXwYcFWW5MveErV7UUB3icp5ZPx";
  var date = $('#dateInput').val();
  var apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + '&date=' + date;

  $.ajax({
    url: apiURL,
    success: function(res){
      $('imageBlank').addClass("hidden");
      $('iframe').addClass("hidden");
      console.log(res.url);
      if (res.url.includes(".png") || res.url.includes(".jpeg")  || res.url.includes(".jpg")){
        $('#imageBlank').attr('src', res.url);
        $('#imageBlank').removeClass();
      } else {
        $('#ifBlank').attr('src', res.url);
        $('#ifBlank').removeClass();
      }
    },
    error: function(r){
      // console.log(r);
      console.log(r)
    }

  });

});

$(document).ready(function(){
/*Show API Data in Console*/
  $.getJSON('https://www.googleapis.com/youtube/v3/search?' + '&part=snippet' + '&key=AIzaSyBozgyInS7c8ADFGvsNygIfkqh5w2wPN6w' + '&maxResults=10' + '&q=Cats', function(data){
    myData = data
    console.log(myData)
  })
/*Search Functionality*/
  $('#search-term').submit(function(event){
      event.preventDefault();
      $('#search-results').html("");
      var searchTerm = $('#query').val();
      getRequest(searchTerm);
  });
});

function getRequest(searchTerm) {
    var search = searchTerm;
    var part = 'snippet';
    var key = 'AIzaSyBozgyInS7c8ADFGvsNygIfkqh5w2wPN6w';
    var maxResults = '10';
    var params = {
        q: search,
        part: part,
        key: key,
        maxResults: maxResults
    };
    url = 'https://www.googleapis.com/youtube/v3/search?';
    $.getJSON(url, params, function(data){
    showResults(data.items);
      });
}


function showResults(results) {
    var displayTitle = "";
    var displayThumbnail = "";
    $.each(results, function(index,value){
        displayTitle = '<p class="title"><a href=https://www.youtube.com/watch?v=' + value.id.videoId + '>' + value.snippet.title + '</a></p>';
        displayThumbnail = '<p class="thumbnail"><a href=https://www.youtube.com/watch?v=' + value.id.videoId + '><img src="' + value.snippet.thumbnails.medium.url + '"></a></p>';
        $('#search-results').append(displayTitle + displayThumbnail);
    });
    
}

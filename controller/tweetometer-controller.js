$( document ).ready(function() {
  var ws = new WebSocket('ws://127.0.0.1:1337/', 'echo-protocol');
  // var search = new Search();
  // var dataParser = new dataParser();
  // var control = new Control();

  // to do : replace this test obj dummy with instantiation
  var transformer =  {
    getTweets: function(srchStrng) {
      $('#results-list').append("<li>More results...</li>");
    },
    stopStream: function() {}
  }
  // to do : temp testing function to delete

  var twitterStarted;
  initialiseInterface();

  function initialiseInterface() {
    $('#search-string').val("");
    $('#search-string').focus();
    $('#search-string').prop('disabled', false);
    $('#start-btn').prop('disabled', false);
    $('#stop-btn').prop('disabled', true);
    twitterStarted = false;
  }

  $('#start-btn').click(function(event) {
    event.preventDefault();
    // getResults();
    var searchString = $('#search-string').val();
    ws.send(searchString)
  });

  ws.addEventListener("message", function(e) {
    var msg = e.data;
    $('#results-list').append("<li>More results...</li>"+msg);
  })

  $('html').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      getResults();
    }
  });

  $('#stop-btn').click(function(event) {
    event.preventDefault();
    transformer.stopStream();
    initialiseInterface();
  });

  function getResults() {
    if (!twitterStarted) {
      var searchString = $('#search-string').val();
      $('#results-list').empty();
      transformer.getTweets(searchString);
      twitterStarted = true;
      $("#search-heading").html("Seach for: " + searchString);
      $('#search-string').prop('disabled', true);
      $('#start-btn').prop('disabled', true);
      $('#stop-btn').prop('disabled', false);
      $('#stop-btn').focus();
    }
  }

});

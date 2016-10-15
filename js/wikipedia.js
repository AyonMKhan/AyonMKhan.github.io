$(document).ready(function() {//when document is ready

  var searchdiv = $("#searchdiv");
  var searchform = $(".searchform");

  var searchdisp = $("#searchresults");//cache the searchresults div in searchdisp variable

  searchdisp.hide();//hide searchdisp when document is ready

  $("#search").on("click", function(wtf) {//when the search button is clicked

    //prevent form from reloading by default which prevents getJSON from working
    wtf.preventDefault();


    //getting the value entered in searchbox
    var searchstr = $("#searchbox").val();
    //replacing " " space with html encoded "%20"
    searchstr = searchstr.replace(" ", "%20");


    //this is the url of the api endpoint
    var apiurl = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" + searchstr + "&format=json&gsrlimit=max&prop=info|extracts&exintro&explaintext&exsentences=1&exlimit=max&inprop=url&callback=?";

    //opensearch&   &srsearch

    $.getJSON(apiurl, function(results) {

      display(results);
      }
    );

  });

  //function detailing how to display the results in the page
  function display(resultJSON) {

    var resultcontent = "";//variable to store the formatted html content from the json object
    //resultcontent = JSON.stringify(resultJSON);
    var loopy = resultJSON["query"]["pages"];//variable to store and loop through the json object format it into html

    for(var item in loopy) {//looping through loopy

     resultcontent += "<div class='result'><h3 class='resulttitle'><a class='resultlink' href='" + loopy[item]["fullurl"] + "'>" + loopy[item]["title"];

    if (loopy[item]["extract"]) {
      resultcontent += "<p class='resultsnippet'>" + loopy[item]["extract"] + "</p>";
    }

    resultcontent += "</h4></a></div>";

    }

    searchdiv.removeClass("wikibox").addClass("navbar navbar-inverse text-center");
    searchform.removeClass('searchform');
    searchdisp.html(resultcontent);//populate the div with results

    searchdisp.show(100);//show the div onscreen

  }

})

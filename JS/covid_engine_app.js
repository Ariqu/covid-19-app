function showData(jsonResponse) {
      var countries = '';
      var country_option = 'Poland';

      var sel = document.getElementById("kraj");
    //console.log(sel.selectedIndex);
    if(sel.selectedIndex != -1) {
      country_option = sel.options[sel.selectedIndex].text;
      console.log(country_option);
    }
    for (var i = 0; i <= jsonResponse.length -1; i++) {
          //countries = countries+' '+jsonResponse[i]['country'] + ",";
       if(jsonResponse[i]['country'] == country_option) {
        //console.log(country_input);
        //console.log(jsonResponse[i]);
        //console.log(jsonResponse[i]['country']);
        document.getElementById("demo").innerHTML = '<b>Covid-19 statisctics for: '+jsonResponse[i]['country']+'</b><ul>\
        <p  class="covid">Przypadki: '+jsonResponse[i]['cases']+'</p>\
        <p class="covid">Przypadki [dziś]: '+jsonResponse[i]['todayCases']+'</p>\
        <p class="covid">Liczba ofiar: '+jsonResponse[i]['deaths']+'</p>\
        <p class="covid">Liczba ofiar [dzis]: '+jsonResponse[i]['todayDeaths']+'</p>\
        </ul>'
      }
    }
  }

  function World(jsonResponse) {
      var wrld = 'World';
      //console.log(jsonResponse);
  for (var i = 0; i <= jsonResponse.length -1; i++) {
          //dane dla World[swiat]
        if(jsonResponse[i]['country'] == wrld) {
          //console.log(jsonResponse[i]['country']);
          document.getElementById("world").innerHTML = '<b>Covid-19 statisctics for: '+jsonResponse[i]['country']+'</b><ul>\
          <p class="covid-world">Przypadki: '+jsonResponse[i]['cases']+'</p>\
          <p class="covid-world">Przypadki [dziś]: '+jsonResponse[i]['todayCases']+'</p>\
          <p id="deaths" class="covid-world">Liczba ofiar: '+jsonResponse[i]['deaths']+'</p>\
          <p class="covid-world">Liczba ofiar [dzis]: '+jsonResponse[i]['todayDeaths']+'</p>\
          </ul>'
          break;
        }
      }
  }

function for_x(jsonResponse) {
  var sel = document.getElementById("kraj");
  var opt = document.createElement('option');

  jsonResponse.forEach(function(item, index, array) {
    if (item.country != 'Total:' && item.country != '') {
      //console.log(item.country);
      sel.options[sel.options.length] = new Option(item.country, index);
    }
    //console.log(index,item);
    //opt.appendChild(document.createTextNode(item.country));
    //opt.value = index;
    //sel.add(opt);
  });
}

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log(xhr.responseText);
            var api = xhr.responseText;
            //Tu jest zmiana JSON.parse
            var jsonResponse = JSON.parse(api);
            //console.log(jsonResponse);
            for_x(jsonResponse);
            showData(jsonResponse);
            World(jsonResponse);
            title();
        }
    }
    xhr.open('GET', 'https://coronavirus-19-api.herokuapp.com/countries', true);
    xhr.send(null);
}
  getData();

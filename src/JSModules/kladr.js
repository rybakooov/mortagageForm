//import axios from 'axios';

export default function(obj, cb){
  const token = 'ASNEHyznaNN8fGtYZGiRFBHbY9eBY7TZ';
  const limit = 10;
  
  var url = 'https://kladr-api.ru/api.php?'
  url+= 'token=' + token + '&';
  url+= 'limit=' + limit;
  if('query' in obj){
    var query = obj.query;
    url+= '&' + 'query=' + query;
  }

  if('contentType' in obj){
    var contentType = obj.contentType;
    url+= '&' + 'contentType=' + contentType;
  }

  if('regionId' in obj && obj.regionId != ''){
    var regionId = obj.regionId;
    url+= '&regionId=' + regionId;
  }

  if('cityId' in obj && obj.cityId != ''){
    var cityId = obj.cityId;
    url+= '&cityId=' + cityId;
  }




  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then((contents) => {

      cb(JSON.parse(contents));
    })
  
}
/*script.js - Daniel Syrén (20105070)*/
var universities = [];
var websites = [];

/*https://www.html-code-generator.com/javascript/array/country-names*/
var cities = ["kabul", "mariehamn", "tirana", "algiers", "pago pago", "andorra la vella", "luanda", "the valley", "antarctica", "st. john's", "buenos aires", "yerevan", "oranjestad", "canberra", "vienna", "baku", "nassau", "manama", "dhaka", "bridgetown", "minsk", "brussels", "belmopan", "porto-novo", "hamilton", "thimphu", "sucre", "kralendijk", "sarajevo", "gaborone", "brasilia", "diego garcia", "bandar seri begawan", "sofia", "ouagadougou", "bujumbura", "phnom penh", "yaounde", "ottawa", "praia", "george town", "bangui", "n'djamena", "santiago", "beijing", "flying fish cove", "west island", "bogota", "moroni", "brazzaville", "kinshasa", "avarua", "san jose", "yamoussoukro", "zagreb", "havana", "willemstad", "nicosia", "prague", "copenhagen", "djibouti", "roseau", "santo domingo", "quito", "cairo", "san salvador", "malabo", "asmara", "tallinn", "addis ababa", "stanley", "torshavn", "suva", "helsinki", "paris", "cayenne", "papeete", "port-aux-francais", "libreville", "banjul", "tbilisi", "berlin", "accra", "gibraltar", "athens", "nuuk", "st. george's", "basse-terre", "hagatna", "guatemala city", "st peter port", "conakry", "bissau", "georgetown", "port-au-prince", "vatican city", "tegucigalpa", "hong kong", "budapest", "reykjavik", "new delhi", "jakarta", "tehran", "baghdad", "dublin", "douglas, isle of man", "jerusalem", "rome", "kingston", "tokyo", "saint helier", "amman", "astana", "nairobi", "tarawa", "pyongyang", "seoul", "pristina", "kuwait city", "bishkek", "vientiane", "riga", "beirut", "maseru", "monrovia", "tripolis", "vaduz", "vilnius", "luxembourg", "macao", "skopje", "antananarivo", "lilongwe", "kuala lumpur", "male", "bamako", "valletta", "majuro", "fort-de-france", "nouakchott", "port louis", "mamoudzou", "mexico city", "palikir", "chisinau", "monaco", "ulan bator", "podgorica", "plymouth", "rabat", "maputo", "nay pyi taw", "windhoek", "yaren", "kathmandu", "amsterdam", "willemstad", "noumea", "wellington", "managua", "niamey", "abuja", "alofi", "kingston", "saipan", "oslo", "muscat", "islamabad", "melekeok", "east jerusalem", "panama city", "port moresby", "asuncion", "lima", "manila", "adamstown", "warsaw", "lisbon", "san juan", "doha", "saint-denis", "bucharest", "moscow", "kigali", "gustavia", "jamestown", "basseterre", "castries", "marigot", "saint-pierre", "kingstown", "apia", "san marino", "sao tome", "riyadh", "dakar", "belgrade", "belgrade", "victoria", "freetown", "singapur", "philipsburg", "bratislava", "ljubljana", "honiara", "mogadishu", "pretoria", "grytviken", "juba", "madrid", "colombo", "khartoum", "paramaribo", "longyearbyen", "mbabane", "stockholm", "berne", "damascus", "taipei", "dushanbe", "dodoma", "bangkok", "dili", "lome", "nuku'alofa", "port of spain", "tunis", "ankara", "ashgabat", "cockburn town", "funafuti", "kampala", "kiev", "abu dhabi", "london", "washington", "montevideo", "tashkent", "port vila", "caracas", "hanoi", "road town", "charlotte amalie", "mata utu", "el-aaiun", "sanaa", "lusaka", "harare"];

/*https://css-tricks.com/snippets/javascript/array-of-country-names/*/
var countries = ["afghanistan", "albania", "algeria", "andorra", "angola", "anguilla", "antigua & barbuda", "argentina", "armenia", "aruba", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia & herzegovina", "botswana", "brazil", "british virgin islands", "brunei", "bulgaria", "burkina faso", "burundi", "cambodia", "cameroon", "cape verde", "cayman islands", "chad", "chile", "china", "colombia", "congo", "cook islands", "costa rica", "cote d ivoire", "croatia", "cruise ship", "cuba", "cyprus", "czech republic", "denmark", "djibouti", "dominica", "dominican republic", "ecuador", "egypt", "el salvador", "equatorial guinea", "estonia", "ethiopia", "falkland islands", "faroe islands", "fiji", "finland", "france", "french polynesia", "french west indies", "gabon", "gambia", "georgia", "germany", "ghana", "gibraltar", "greece", "greenland", "grenada", "guam", "guatemala", "guernsey", "guinea", "guinea bissau", "guyana", "haiti", "honduras", "hong kong", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "isle of man", "israel", "italy", "jamaica", "japan", "jersey", "jordan", "kazakhstan", "kenya", "kuwait", "kyrgyz republic", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "moldova", "monaco", "mongolia", "montenegro", "montserrat", "morocco", "mozambique", "namibia", "nepal", "netherlands", "netherlands antilles", "new caledonia", "new zealand", "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan", "palestine", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland", "portugal", "puerto rico", "qatar", "reunion", "romania", "russia", "rwanda", "saint pierre & miquelon", "samoa", "san marino", "satellite", "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "slovakia", "slovenia", "south africa", "south korea", "spain", "sri lanka", "st kitts & nevis", "st lucia", "st vincent", "st. lucia", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "timor l'este", "togo", "tonga", "trinidad & tobago", "tunisia", "turkey", "turkmenistan", "turks & caicos", "uganda", "ukraine", "united arab emirates", "united kingdom", "uruguay", "uzbekistan", "vatican city", "venezuela", "vietnam", "virgin islands (us)", "yemen", "zambia", "zimbabwe"];

/*displayI(json) receives json, hides rotating cities, and displays all the universities in the entered city as links to their websites.*/
function displayI(json) {
    var city = document.getElementById("city").value;
    if (json.length === 0 && cities.includes(city.toLowerCase()) === true) {
        alert(city + " has no university!");
    }
    else if (json.length === 0 && cities.includes(city.toLowerCase()) === false) {
        alert(city + " is not a city!");
    }
    else {
        document.getElementById("cities").style.display = "none";
        for (var i = 0; i < (json.length); i++) {
            if (universities.includes(json[i].name) === false) {
                document.getElementById("container").innerHTML += "<div id='uni" + (i + 1) + "' style='height:50px;'></div>";
                universities.push(json[i].name);
                websites.push(json[i].web_pages[0]);
                var id = (i + 1);
                document.getElementById("uni" + id).innerHTML = "<a href=" + websites[i] + " target='_blank' style='background-color:#00FF00;'>" + universities[i] + "</a>";
            }
        }
    }
}

/*displayO(json) receives json, hides rotating countries, and displays all the universities in the entered country as links to their websites.*/
function displayO(json) {
    var country = document.getElementById("country").value;
    if (json.length === 0 && countries.includes(country.toLowerCase()) === true) {
        alert(country + " has no university!");
    }
    else if (json.length === 0 && countries.includes(country.toLowerCase()) === false) {
        alert(country + " is not a country!");
    }
    else {
        document.getElementById("countries").style.display = "none";
        for (var i = 0; i < (json.length); i++) {
            if (universities.includes(json[i].name) === false) {
                document.getElementById("container").innerHTML += "<div id='uni" + (i + 1) + "' style='height:50px;'></div>";
                universities.push(json[i].name);
                websites.push(json[i].web_pages[0]);
                var id = (i + 1);
                document.getElementById("uni" + id).innerHTML = "<a href=" + websites[i] + " target='_blank' style='background-color:#00FF00;'>" + universities[i] + "</a>";
            }
        }
    }
}

/*returnRandomI() generates and returns a random number between 0 and 247.*/
function returnRandomI() {
    var max = 247;
    return Math.floor(Math.random() * max) + 1;
}

/*returnRandomO() generates and returns a random number between 0 and 205.*/
function returnRandomO() {
    var max = 205;
    return Math.floor(Math.random() * max) + 1;
}

/*rotateI() displays 4 random cities determined by returnRandomI() and rotates them every 1.8 seconds.*/
function rotateI() {
    setInterval(function () {
        document.getElementById("city1").innerHTML = cities[returnRandomI()], document.getElementById("city2").innerHTML = cities[returnRandomI()], document.getElementById("city3").innerHTML = cities[returnRandomI()], document.getElementById("city4").innerHTML = cities[returnRandomI()];
    }, 1800);
}

/*rotateO() displays 4 random countries determined by returnRandomO() and rotates them every 1.8 seconds.*/
function rotateO() {
    setInterval(function () {
        document.getElementById("country1").innerHTML = countries[returnRandomO()], document.getElementById("country2").innerHTML = countries[returnRandomO()], document.getElementById("country3").innerHTML = countries[returnRandomO()], document.getElementById("country4").innerHTML = countries[returnRandomO()];
    }, 1800);
}

/*searchI() concatenates entered city with the URL to create url that is passed into window.fecth(url).*/
function searchI() {
    var city = document.getElementById("city").value;
    if (city.includes(" ") === true) {
        city = city.replace(/ /g, "+");
    }
    var url = "http://universities.hipolabs.com/search?name=" + city;
    window.fetch(url)
        .then(urlRes => urlRes.json())
        .then(jsonRes => displayI(jsonRes));
}

/*searchO() concatenates entered country with the URL to create url that is passed into window.fecth(url).*/
function searchO() {
    var country = document.getElementById("country").value;
    if (country.includes(" ") === true) {
        country = country.replace(/ /g, "+");
    }
    var url = "http://universities.hipolabs.com/search?country=" + country;
    window.fetch(url)
        .then(urlRes => urlRes.json())
        .then(jsonRes => displayO(jsonRes));
}
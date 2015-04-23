var city, api, description, currenttemp, mintemp, maxtemp;
var base = "http://api.openweathermap.org/data/2.5/weather?q=";

// Store selected city in variable "city" and build API URL
document.querySelector("#citylist").addEventListener('change', 
	function () {
		city = citylist.options[citylist.selectedIndex].value;
	    console.log(city); 
	    api = base + city + ",AU&units=metric";
	    console.log(api);

	    fetch(api)  
		  .then(  
		    function(response) {  
		      if (response.status !== 200) {  
		        console.log('Looks like there was a problem. Status Code: ' +  
		          response.status);  
		        return;  
		      }

		      // Examine the text in the response  
		      response.json().then(function(data) {  		        

		        // Weather Description
		        description = data["weather"][0]["description"];

		        // Weather Temps
		        currenttemp = data["main"]["temp"];
		        mintemp = data["main"]["temp_min"];
		        maxtemp = data["main"]["temp_max"]

		        console.log(data["main"]["temp_min"]);

		        console.log("Description: " + description + "\n" + 
		        			"Current temp: " + currenttemp + "\n" + 
		        			"Min temp: " + mintemp + "\n" + 
		        			"Max temp: " + maxtemp);
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });

		 api = base;
	}
);

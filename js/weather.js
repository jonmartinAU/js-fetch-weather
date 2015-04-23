var city, api;
var base = "http://api.openweathermap.org/data/2.5/weather?q=";

// Store selected city in variable "city" and build API URL
document.querySelector("#citylist").addEventListener('change', 
	function () {
		city = citylist.options[citylist.selectedIndex].value;
	    console.log(city); 
	    api = base + city + ",AU";
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
		        console.log(data["weather"][0]["description"]);  
		      });  
		    }  
		  )  
		  .catch(function(err) {  
		    console.log('Fetch Error :-S', err);  
		  });

		 api = base;
	}
);

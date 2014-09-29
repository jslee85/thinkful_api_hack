$(document).ready( function() {
	navigator.geolocation.getCurrentPosition(function(location) {
		var lat = location.coords.latitude,
			long = location.coords.longitude,
			url = 'https://api.forecast.io/forecast/5e9457d35ada3f7d120f34384e7f173f/' + lat + ',' + long; 

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'jsonp',
			success: function(data) {
				$('.sandiegotemp').text(data.currently.temperature);
				$('.sdhigh').text(data.daily.apparentTemperatureMax);
				$('.sdlow').text(data.daily.apparentTemperatureMin);				
				console.log(data.currently.temperature);
				console.log(data.currently.apparentTemperatureMin);
				console.log(data.currently.apparentTemperatureMax);
			},
			error: function(){
				console.log(arguments[1]);
			}
		});
	});
});
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
				$('.yourcitytemp').text(data.currently.temperature);
				console.log(data.currently.temperature);
			},
			error: function(){
				console.log(arguments[1]);
			}
		});
	});

	sdWeather();

	navigator.geolocation.getCurrentPosition(function(location) {
		var lat = location.coords.latitude,
			long = location.coords.longitude,
			time = function() {
				$.now();
				return time;
			},
			url = 'https://api.forecast.io/forecast/5e9457d35ada3f7d120f34384e7f173f/' + lat + ',' + long + ',' + time; 

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'jsonp',
			success: function(data) {
				$('.yourhigh').text(data.daily.apparentTemperatureMax);
				console.log(data.daily.apparentTemperatureMin);
			},
			error: function(){
				console.log(arguments[1]);
			}
		});
	});

});

var sdWeather = function() {
	var lat = 32.7150,
		long = 117.1625,
		url = 'https://api.forecast.io/forecast/5e9457d35ada3f7d120f34384e7f173f/' + lat + ',' + long; 

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			$('.sandiegotemp').text(data.currently.temperature);
			console.log(data.currently.temperature);
		},
		error: function(){
			console.log(arguments[1]);
		}
	});
};
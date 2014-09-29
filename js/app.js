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
				$('.yourhigh').text(data.daily.apparentTemperatureMax);
				$('.yourlow').text(data.daily.apparentTemperatureMin);				
				console.log(data.currently.temperature);
				console.log(data.daily.apparentTemperatureMin);
				console.log(data.daily.apparentTemperatureMax);
			},
			error: function(){
				console.log(arguments[1]);
			}
		});
	});

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
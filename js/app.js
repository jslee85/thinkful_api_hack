var yourWeather = function() {
	$('.yourcitytemp').text(getNow());
	$('.yourhigh').text(getNow());
	$('.yourlow').text(getNow());
};

var sdWeather = function() {
	$('.sandiegotemp').text(getNow());
	$('.sdhigh').text(getNow());
	$('.sdlow').text(getNow());
};

navigator.geolocation.getCurrentPosition(function(location) {
	var lat = location.coords.latitude,
		long = location.coords.longitude,
		url = 'https://api.forecast.io/forecast/5e9457d35ada3f7d120f34384e7f173f/' + lat + ',' + long; 

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			var currentTemp = data.currently.temperature;
			return currentTemp;
			console.log(data.currently.temperature);
			console.log(data.currently.apparentTemperatureMin);
			console.log(data.currently.apparentTemperatureMax);
		},
		error: function(){
			console.log(arguments[1]);
		}
	});
});

$(document).ready( function() {
	yourWeather();
	sdWeather();
});
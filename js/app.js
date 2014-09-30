var getLocation = function (cb) {
	return navigator.geolocation.getCurrentPosition(cb);
};

$(document).ready(function () {
	// get current
	getLocation(function (loc) {
		getWeather({lat: loc.coords.latitude, long: loc.coords.longitude}, '.yourcitytemp');
	});

	// get SD
	getWeather({lat: 32.7150, long: 117.1625}, '.sandiego');
});

var getWeather = function (loc, tempDiv) {
	if (typeof loc !== 'object') return console.error('loc needs to be an object');
	if (typeof tempDiv !== 'string') return console.error('tempDiv needs to be a string');

	$.ajax({
		url: 'https://api.forecast.io/forecast/5e9457d35ada3f7d120f34384e7f173f/' + loc.lat + ',' + loc.long,
		type: 'GET',
		dataType: 'jsonp',
		success: function (data) {
			console.log(data.currently.temperature);
			console.log(data.daily.data[0].temperatureMax);
			console.log(data.daily.data[0].temperatureMin);
			$(tempDiv)
			.find('.temp').html(Math.round(data.currently.temperature) + '&#176;')
			.end()
			.find('.hightemp').html(Math.round(data.currently.temperature) + '&#176;')
			.end()
			.find('.lowtemp').html(Math.round(data.currently.temperature) + '&#176;');
		},
		error: function () {
			console.error(arguments[1]);
		}
	});
};
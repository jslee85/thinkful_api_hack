$(document).ready( function() {

});

navigator.geolocation.getCurrentPosition(function(location) {
	var lat = location.coords.latitude,
		long = location.coords.longitude,
		url = 'https://api.forecast.io/forecast/5e9457d35ada3f7d120f34384e7f173f/' + lat + ',' + long; 

	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			console.log(data.currently.temperature);
		},
		error: function(){
			console.log(arguments[1]);
		}
	});
});
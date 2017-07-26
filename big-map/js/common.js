// инициализация карты
function initMap() {
	var uluru = {lat: 49.992300, lng: 36.229513};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
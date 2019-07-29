'use strict';

function getBySong(result) {
		var resultBySong = $.ajax({
			url: `https://orion.apiseeds.com/api/music/search/?q=${result.title}`,
			type: "GET",
			dataType: 'json',
			headers: {
				'X-API-Key': 'wlFw9WYie7FrkiAbT1hnHBKOI6vMqfsHatSRChlzKLhzisS5awQgEE1gh4LBkH4p'
			}
		})
			.done(function (resultBySong) {
				displayBySongResults(resultBySong);
			})
			.fail(function (jqXHR, error, errorThrown) {
				console.log(jqXHR);
				console.log(error);
				console.log(errorThrown);
			});
}

function displayBySongResults(bySongArray) {

	let buildBySong = "";

	for (let i = 0; i < bySongArray.result.length; i++) {
		buildBySong +=
			`<li><a href="#" data-id= ${bySongArray.result[i].id}>${bySongArray.result[i].title} ${bySongArray.results[i].artist})</a></li>`;
	}

	$('#search-results').html(buildBySong);
}

function handleSearchSubmit() {
	$('#go-button').on('click', function (event) {
		event.preventDefault();

		let result = $('#entry-form').val();
		$("#search-results").show();
		getBySong(result);
	});
}

function init() {

	//add all event listeners here
	handleSearchSubmit();
  getBySong();
}

//document on ready function
//$(init);
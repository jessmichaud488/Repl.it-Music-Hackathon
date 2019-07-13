function getBySong(result) {
		var resultBySong = $.ajax({
			url: `https://orion.apiseeds.com/api/music/search/${result.title}`,
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

	for (let i = 0; i < bySongArray.results.length; i++) {
		buildBySong +=
			`<li><a href="#" data-id= ${bySongArray.results[i].id}>${bySongArray.results[i].name} ${bySongArray.results[i].party})</a></li>`;
	}

	$('#house ul').html(buildBySong);
}

function handleSearchSubmit() {
	$('#rep-state-search').on('click', function (event) {
		event.preventDefault();

		let result = $('#state-select').val();
		$("#pick-rep").show();
		getBySong(result);
	});
}

function init() {

	//add all event listeners here
	handleSearchSubmit();
  getBySong();
	$("#pick-rep").hide();
	$("#rep-results-section").hide();
  $("#news-results-section").hide();
  $(".newsfeed-header").hide();
}

//document on ready function
$(init);
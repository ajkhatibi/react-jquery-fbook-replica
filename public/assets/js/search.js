
$('#searchperson').on('click', function(e){
	e.preventDefault();
	var personSearch  = $('#inputpersonsearch').val().trim();
	console.log("frontend personserch",personSearch);
window.location.href = '/friend-book/personresults/' + personSearch;


});

// contains selector
jQuery.expr[':'].contains = function (a, i, m) {
	return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0
}

$('#myInput').keyup(function () {
	// reset visibility of all cards
	$('.card-filter').removeClass('d-none')

	// get filter value
	var filter = $(this).val().trim()
	if (filter) {
		// filter cards
		$('#myCards')
			.find(
				'.card-filter .card-body .d-flex p:not(:contains("' + filter + '"))'
			)
			.closest('.card-filter')
			.addClass('d-none')
	}
})

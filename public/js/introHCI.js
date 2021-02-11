'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	// $.post("/public/js/introHCI.js", {"id": {{id}}}, addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	console.log(projectID);
	var address = '/project/' + idNumber;

	$.get(address, callBackFn);

	console.log("User clicked on project " + idNumber);
}

function callBackFn(result) {
	var idNumber = result['id'];
	console.log(idNumber);
	$('#project' + idNumber +' .details').html('<bold>' + result['title'] + '</bold>' + '<p>' + result['date'] + '</p>'
	 + '<img src="' + result['image'] + '"class="detailsImage"' + '<p>' + result['summary'] + '</p>');
}
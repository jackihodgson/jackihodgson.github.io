function askQuestions () {

	var firstName = prompt('Please let us know your first name');
	var lastName  = prompt('Please let us know your surname');

	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);



	/*
		If the user's first name is 'General'
		and the last name is NOT 'Assembly', then greet the general!
	*/

	if (firstName.toLowerCase () == 'general' && lastName.toLowerCase () !== 'assembly') {
		console.log('Welcome on board, General!');
	} else {
		console.log('Intruder!');
	}

	var faveColour = prompt('What is your favourite colour?');
	faveColour = faveColour.toLowerCase();
		/* This takes the value entered & then makes it all lowercase */

	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour == 'green' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
			/* changing the H1 colour to be the user's favourite nominated colour */
	}

	$('h2').text('Hello, ' + firstName);
		/* Personalised greeting for an individual */
}

	/* When the page loads */
	$(function () {

		/* When the user clients the image, ask the questions */
		$('img').on('click', askQuestions);

		/* When the user clicks a header */
		$( 'h3' ).on( 'click', function() {

			/* Hide/show the next element */
			$(this).next().slideToggle();

		});

	});

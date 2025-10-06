// show toast on form submission
function showToast(usernameValue, emailValue, textareaValue) {
	const toastContainer = document.getElementById('toast-container')

	// set the toast message
	toastText.innerText = `Username: ${usernameValue}\nEmail: ${emailValue}\nText: ${textareaValue}`

	// display toast by replacing bootstrap classes
	toastContainer.classList.remove('d-none')
	toastContainer.classList.add('d-block')

	setTimeout(() => {
		setTimeout(() => toastContainer.classList.add('d-none'), 500)
	}, 3000)
}

// ===== form submit handler =====
const form = document.getElementById('myForm')
const username = document.getElementById('username')
const email = document.getElementById('email')
const query = document.getElementById('query')
const textarea = document.getElementById('textarea')
const toastText = document.getElementById('custom-body-text')

// on submit
form.addEventListener('submit', (e) => {
	e.preventDefault()

	// input values
	const usernameValue = username.value.trim()
	const emailValue = email.value.trim()
	const textareaValue = textarea.value.trim()

	if (validateInputs(usernameValue, emailValue, textareaValue)) {
		showToast(usernameValue, emailValue, textareaValue)
	}
})

// if not valid, add class
const setError = (element, message) => {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.error')

	errorDisplay.innerText = message
	inputControl.classList.add('error')
}

// if valid, remove class
const setSuccess = (element) => {
	const inputControl = element.parentElement
	const errorDisplay = inputControl.querySelector('.error')

	errorDisplay.innerText = ''
	inputControl.classList.remove('error')
}

// validate inputs function
const validateInputs = (usernameValue, emailValue, textareaValue) => {
	let isValid = true

	if (usernameValue === '') {
		setError(username, 'Username is required')
		isValid = false
	} else {
		setSuccess(username)
	}

	if (emailValue === '') {
		setError(email, 'Email is required')
		isValid = false
	} else {
		if (validateEmail(emailValue) === null) {
			setError(email, 'Please, enter a valid email')
			isValid = false
		} else {
			setSuccess(email)
		}
	}

	if (textareaValue === '') {
		setError(textarea, 'Text is required')
		isValid = false
	} else {
		if (textareaValue.length < 5) {
			setError(textarea, 'Text length must be at least 5 characters long')
			isValid = false
		} else {
			setSuccess(textarea)
		}

		return isValid
	}

	// validate email
	function validateEmail(email) {
		return email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
	}
}

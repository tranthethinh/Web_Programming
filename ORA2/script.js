// Define the original TTSV object
const original = {
	name: 'Trần Thế Thịnh',
    year:2019,
    bdt:'KSCLC-TN-TT-VN-ICT',
    ct:'Công nghệ thông tin Global ICT 2019',
    kv:'Trường Công nghệ Thông tin và Truyền thông',
	ttht:'Học',
    gender:'Nam',
    class:'ICT 01-k64',
    khoa:'64',
    email:'thinh.tt194853@sis.hust.edu.vn',
    image:'./a.jpg',
};

// Define the current TTSV object
let current = {
	...original
};

// Get form elements
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const bdtInput = document.getElementById('bdt');
const ctInput = document.getElementById('ct');
const kvInput = document.getElementById('kv');
const tthtInput = document.getElementById('ttht');
const genderInput = document.getElementById('gender');
const classInput = document.getElementById('class');
const khoaInput = document.getElementById('khoa');
const emailInput = document.getElementById('email');
const imageIn=document.getElementById('myImage');

const imageInput= document.getElementById('myFile');

const editButton = document.getElementById('edit-button');
const submitButton = document.getElementById('submit-button');
const cancelButton = document.getElementById('cancel-button');
const resetButton = document.getElementById('reset-button');
const statusMessage = document.getElementById('status-message');

// Function to update form values with current user information
function updateForm() {
	nameInput.value = current.name;
	yearInput.value = current.year;
    bdtInput.value = current.bdt;
    ctInput.value = current.ct;
    kvInput.value = current.kv;
    tthtInput.value = current.ttht;
    genderInput.value = current.gender;
    classInput.value = current.class;
    khoaInput.value = current.khoa;
    emailInput.value = current.email;
    imageIn.src=current.image;
}

// Function to disable all form inputs
function disableForm() {
	nameInput.disabled = true;
	yearInput.disabled = true;
    bdtInput.disabled = true;
    ctInput.disabled = true;
    kvInput.disabled = true;
    tthtInput.disabled = true;
    genderInput.disabled = true;
    classInput.disabled = true;
    khoaInput.disabled = true;
    emailInput.disabled = true;
    nameInput.style.border = "none";
    yearInput.style.border = "none";
    bdtInput.style.border = "none";
    ctInput.style.border = "none";
    kvInput.style.border = "none";
    tthtInput.style.border = "none";
    genderInput.style.border = "none";
    classInput.style.border = "none";
    khoaInput.style.border = "none";
    emailInput.style.border = "none";
}

// Function to enable all form inputs
function enableForm() {
	nameInput.disabled = false;
	yearInput.disabled = false;
    bdtInput.disabled = false;
    ctInput.disabled = false;
    kvInput.disabled = false;
    tthtInput.disabled = false;
    genderInput.disabled = false;
    classInput.disabled = false;
    khoaInput.disabled = false;
    emailInput.disabled = false;
    nameInput.style.border = "solid";
    yearInput.style.border = "solid";
    bdtInput.style.border = "solid";
    ctInput.style.border = "solid";
    kvInput.style.border = "solid";
    tthtInput.style.border = "solid";
    genderInput.style.border = "solid";
    classInput.style.border = "solid";
    khoaInput.style.border = "solid";
    emailInput.style.border = "solid";
}

// Function to show the edit buttons
function showEditButtons() {
	editButton.style.display = 'none';
	submitButton.style.display = 'inline-block';
	cancelButton.style.display = 'inline-block';
	resetButton.style.display = 'inline-block';
    imageInput.style.display = 'inline-block';
}

// Function to hide the edit buttons
function hideEditButtons() {
	editButton.style.display = 'inline-block';
	submitButton.style.display = 'none';
	cancelButton.style.display = 'none';
	resetButton.style.display = 'none';
    imageInput.style.display = 'none';
}

// Function to handle the form submit event
function handleSubmit(event) {
	event.preventDefault();
	// Update the current user information object with the form values
	current.name = nameInput.value;
	current.year=yearInput.value;
    current.bdt=bdtInput.value;
    current.ct=ctInput.value;
    current.kv=kvInput.value;
    current.ttht=tthtInput.value;
    current.gender=genderInput.value;
    current.class=classInput.value;
    current.khoa=khoaInput.value;
    current.email=emailInput.value;
    current.image=imageIn.src;
	// Disable the form inputs and hide the edit buttons
	disableForm();
	hideEditButtons();

    var newImage = document.getElementById("myFile").files[0];
    // Set the new image if it was uploaded
    if (newImage) {
        var reader = new FileReader();
        reader.onload = function(event) {
          document.getElementById("myImage").src = event.target.result;
          current.image=event.target.result;
        }
        reader.readAsDataURL(newImage);
      }
    
	for (let property in current) {
        console.log(`${property}: ${current[property]}`);
      }
}

// Function to handle the edit button click event
function handleEditClick() {
	// Enable the form inputs and show the edit buttons
	enableForm();
	showEditButtons();

    var imageSrc = document.getElementById("myImage").src;
}

// Function to handle the cancel button click event
function handleCancelClick() {
    
	// Update the form values with the current user information
	updateForm();
	// Disable the form inputs and hide the edit buttons
	disableForm();
	hideEditButtons();

    document.getElementById("myFile").value ="";

	for (let property in current) {
        console.log(`${property}: ${current[property]}`);
      }
}

// Function to handle the reset button click event
function handleResetClick() {
	// Reset the current user information object to the original values
	current = {
		...original
	};
	// Update the form values with the current user information
	updateForm();
	// Disable the form inputs and hide the edit buttons
	disableForm();
	hideEditButtons();
	for (let property in original) {
        console.log(`${property}: ${original[property]}`);
      }
}

// Add event listeners to form elements and buttons
document.getElementById('user-form').addEventListener('submit', handleSubmit);
editButton.addEventListener('click', handleEditClick);
cancelButton.addEventListener('click', handleCancelClick);
resetButton.addEventListener('click', handleResetClick);

// Initialize the form with the current user information
updateForm();
disableForm();
hideEditButtons();
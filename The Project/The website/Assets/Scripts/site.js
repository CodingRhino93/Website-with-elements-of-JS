var pic_array = ["gallery0.png", "gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg", "gallery5.jpg"];
var j = 0;

function rotatePics() {
	document.getElementById("rotator").src = "Assets/Images/" + pic_array[j];
	j++;
	setTimeout(rotatePics, 6000);
	if (j == pic_array.length) { j = 0; }
}

function leftArrow() {
	document.getElementById("rotator").src = "Assets/Images/" + pic_array[j];
	j--;
	if (j < 0) {j = 5}
}

function rightArrow() {
	document.getElementById("rotator").src = "Assets/Images/" + pic_array[j];
	j++;
	if (j > 5) {j = 0}
}

function validate() {
	if(document.contact.username.value == "") {
		alert("Enter name");
		return false;
	}

	return true;
	
}

function validate() {
	if(document.contact.textbox.value == "") {
		alert("You can't send an empty message!");
		return false;
	}

	return true;
	
}

function validate_two() {
	var isValid = true;

	var email = document.getElementById("email").value;

	if (validateEmail(email) == false) {
		alert("This is a valid email address!");
		return false;
	}

	return isValid;
}

function validateEmail(email) {
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}

var coll = document.getElementsByClassName("showButton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

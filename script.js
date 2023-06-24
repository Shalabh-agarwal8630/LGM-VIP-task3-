document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var website = document.getElementById('website').value;
  var image = document.getElementById('image').value;
  var gender = document.getElementById('gender').value;
  var skills = document.querySelectorAll('input[name="skills"]:checked');

  var skillValues = Array.from(skills).map(function(skill) {
    return skill.value;
  });

  var outputContainer = document.getElementById('outputContainer');
  var output = document.getElementById('output');
  output.innerHTML = "<h3>Registration Details:</h3>" +
                     "<p><strong>Name:</strong> " + name + "</p>" +
                     "<p><strong>Email:</strong> " + email + "</p>" +
                     "<p><strong>Website:</strong> " + website + "</p>" +
                     "<p><strong>Image:</strong></p>" +
                     "<img src='" + image + "' alt='Student Image' width='200'>" +
                     "<p><strong>Gender:</strong> " + gender + "</p>" +
                     "<p><strong>Skills:</strong> " + skillValues.join(', ') + "</p>";

  outputContainer.style.display = "block";
});

function clearForm() {
  document.getElementById('registrationForm').reset();
  document.getElementById('output').innerHTML = "";

  var outputContainer = document.getElementById('outputContainer');
  outputContainer.style.display = "none";
}

// For index.html
// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function convertTemperature() {
  const temperature = parseFloat(
    document.getElementById("temperature").value
  );
  const fromUnit = document.getElementById("from").value;
  const toUnit = document.getElementById("to").value;
  const resultElement = document.getElementById("result");

  if (isNaN(temperature)) {
    resultElement.textContent = "Please enter a valid number";
    return;
  }

  let result;

  // Convert to Celsius first
  let celsius;
  switch (fromUnit) {
    case "celsius":
      celsius = temperature;
      break;
    case "fahrenheit":
      celsius = ((temperature - 32) * 5) / 9;
      break;
    case "kelvin":
      celsius = temperature - 273.15;
      break;
  }

  // Convert from Celsius to target unit
  switch (toUnit) {
    case "celsius":
      result = celsius;
      break;
    case "fahrenheit":
      result = (celsius * 9) / 5 + 32;
      break;
    case "kelvin":
      result = celsius + 273.15;
      break;
  }

  result = Math.round(result * 100) / 100;
  resultElement.textContent = `${temperature}°${fromUnit
    .charAt(0)
    .toUpperCase()} = ${result}°${toUnit.charAt(0).toUpperCase()}`;
}

// Add event listener for Enter key
document
  .getElementById("temperature")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      convertTemperature();
    }
  });


  

  // For about.html
      function toggleMenu() {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
      }



// For contact.js
      function toggleMenu() {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
      }

      function handleSubmit(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // You would typically send this data to a server here
        console.log({ name, email, subject, message });

        // Show success message
        document.getElementById("success-message").style.display = "block";

        // Reset form
        document.getElementById("contactForm").reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          document.getElementById("success-message").style.display = "none";
        }, 5000);
      }
    
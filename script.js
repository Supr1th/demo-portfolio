document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Dummy action
  document.getElementById("formMessage").innerText = `Thanks, ${name}! I'll get back to you soon.`;

  // Clear form
  this.reset();
});

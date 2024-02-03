let typed = new Typed(".auto-type", {
  strings: ["Front-End Developer", "JavaScript Developer", "Web Developer"],
  typeSpeed: 75,
  backSpeed: 75,
  loop: true,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxHtG00OvwOWpsez0Nx-iBKg3ky0dnpv5pDdd1DqvvmbO3uZ1dgYZIhWn-QGG0CZ3BtTw/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

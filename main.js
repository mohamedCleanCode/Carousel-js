// Main varibles
const characters = {
  lowercase: "abcdefghijklmnobqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOBQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}?|+-",
};

const inputLength = document.querySelector("[type='range']");
const optionsInput = document.querySelectorAll(".option input");
const generateBtn = document.querySelector(".generate-btn");

// Func handel range
const updateRange = () => {
  document.querySelector(".pass-length span").innerHTML = inputLength.value;
};
updateRange();

// Func generatePassword
const generatePassword = () => {
  let allPassword = "";
  let passLength = inputLength.value;
  let randomPassword = "";

  // Loop on inputs to get checked inputs
  optionsInput.forEach((option) => {
    if (option.checked) {
      allPassword += characters[option.id];
    }
  });

  // Loop on allPassword to get random password
  for (let i = 0; i < passLength; i++) {
    randomPassword +=
      allPassword[Math.floor(Math.random() * allPassword.length)];
  }

  // Add randomPassword to DOM
  document.querySelector(".pass-box input").value = randomPassword;
};
generatePassword();

inputLength.addEventListener("input", updateRange);
generateBtn.addEventListener("click", generatePassword);

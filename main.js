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
  let isDuplicate = false;

  // Loop on inputs to get checked inputs
  optionsInput.forEach((option) => {
    if (option.checked) {
      if (option.id !== "duplicate" && option.id !== "space") {
        allPassword += characters[option.id];
      } else if (option.id === "space") {
        allPassword += `    ${allPassword}    `;
      } else {
        isDuplicate = true;
      }
    }
  });

  // Loop on allPassword to get random password
  for (let i = 0; i < passLength; i++) {
    let randomChar =
      allPassword[Math.floor(Math.random() * allPassword.length)];
    if (isDuplicate) {
      !randomPassword.includes(randomChar) || randomChar == " "
        ? (randomPassword += randomChar)
        : i--;
    } else {
      randomPassword += randomChar;
    }
  }

  // Add randomPassword to DOM
  document.querySelector(".pass-box input").value = randomPassword;
};
generatePassword();

inputLength.addEventListener("input", updateRange);
generateBtn.addEventListener("click", generatePassword);

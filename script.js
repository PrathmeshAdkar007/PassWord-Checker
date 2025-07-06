const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const feedback = document.getElementById("feedback");

const weakPasswords = ["123456", "password", "12345678", "qwerty", "111111", "abc123"];

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = 0;

  // Check length
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;

  // Check variety
  if (/[a-z]/.test(password)) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[\W]/.test(password)) strength += 1;

  // Check against weak list
  if (weakPasswords.includes(password.toLowerCase())) strength = 1;

  // Update strength bar and feedback
  updateStrengthDisplay(strength);
});

function updateStrengthDisplay(score) {
  const levels = ["Too Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  const colors = ["#ff4d4d", "#ff944d", "#ffd11a", "#80d4ff", "#00e676"];

  const strengthLevel = Math.min(score, levels.length - 1);
  strengthBar.style.width = `${(strengthLevel + 1) * 20}%`;
  strengthBar.style.backgroundColor = colors[strengthLevel];
  feedback.textContent = levels[strengthLevel];
}

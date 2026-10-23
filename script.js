const terminalForm = document.querySelector("#terminal-form");
const terminalInput = document.querySelector("#terminal-input");
const terminalOutput = document.querySelector("#terminal-output");

const responses = {
  help: [
    "Available commands:",
    "  help      show this command list",
    "  whoami    check your identity",
    "  ls        list training files",
    "  clear     clear the terminal",
    "  scan      run a simulated practice scan",
  ],
  whoami: ["curious mind. future defender."],
  ls: ["README.txt    network-basics/    web-fundamentals/    defense-kit/"],
  scan: [
    "Starting simulated lab scan...",
    "Target: training-sandbox.local (fictional)",
    "3 practice services found. No real systems were contacted.",
    "Scan complete. Keep exploring ethically.",
  ],
};

function appendTerminalLine(text, className = "") {
  const line = document.createElement("p");
  if (className) line.className = className;
  line.textContent = text;
  terminalOutput.append(line);
}

terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = terminalInput.value.trim().toLowerCase();
  if (!command) return;

  appendTerminalLine(`student@nullbyte:~$ ${command}`, "terminal-prompt");
  terminalInput.value = "";

  if (command === "clear") {
    terminalOutput.replaceChildren();
    return;
  }

  const result = responses[command];
  if (!result) {
    appendTerminalLine(`Command not found: ${command}. Type "help" to see available commands.`, "terminal-muted");
    return;
  }

  result.forEach((line) => appendTerminalLine(line, command === "whoami" ? "terminal-green" : "terminal-muted"));
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
});

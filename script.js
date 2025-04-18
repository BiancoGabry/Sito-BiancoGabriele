const terminalLines = document.getElementById("terminal-lines");
const terminal = document.getElementById("terminal");
const mainContent = document.getElementById("main-content");

const commands = [
  "[ OK ] Started User manager for UID 1000: bianco gabriele",
  "[    ] Starting bianco gabriele custom service...",
  "[ OK ] Mounted /home/bianco/gabriele",
  "[    ] Activating swap for bianco_gabriele...",
  "[ OK ] Reached target Multi-User System for bianco_gabriele",
  "[ OK ] Started Session c1 of user bianco_gabriele.",
  "[    ] Loading kernel modules for bianco_gabriele...",
  "bianco_gabriele login: auto-login",
  "[ OK ] Started Daily apt download for bianco_gabriele.",
  "[ OK ] Finished Update UTMP about System Boot/Shutdown (bianco_gabriele)",
  "[ OK ] Reached target Basic System (bianco_gabriele)",
  "[    ] Starting Authorization Manager: bianco_gabriele...",
  "[ OK ] Mounted /mnt/extra_data/bianco_gabriele",
  "[ OK ] Started /etc/rc.local Compatibility [bianco_gabriele]",
  "[ OK ] Initialized Network Manager Script Dispatcher Service (bianco_gabriele)"
];

const totalDuration = 6000; // 6 secondi per tutta l’animazione
const interval = totalDuration / commands.length;

let commandIndex = 0;

function showNextCommand() {
  if (commandIndex < commands.length) {
    const lineDiv = document.createElement("div");
    terminalLines.appendChild(lineDiv);
    // Calcola il tempo massimo per digitare ogni riga
    const typingDuration = interval * 0.7;
    const minTypingSpeed = 8;
    const typingSpeed = Math.max(typingDuration / commands[commandIndex].length, minTypingSpeed);
    let i = 0;
    function typeChar() {
      if (i < commands[commandIndex].length) {
        lineDiv.textContent += commands[commandIndex][i];
        i++;
        setTimeout(typeChar, typingSpeed);
      }
    }
    typeChar();
    commandIndex++;
    setTimeout(showNextCommand, interval);
  }
}

showNextCommand();

setTimeout(() => {
  terminal.style.display = "none";
  mainContent.style.display = "flex";
}, totalDuration);
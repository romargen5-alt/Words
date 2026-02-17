const words = [
    "Hello", "Computer", "Programming", "Linux", "JavaScript", "Database",
    "Keyboard", "Monitor", "Internet", "Server", "Client", "Network",
    "Algorithm", "Function", "Variable", "Array", "Object", "Class",
    "Method", "Loop", "Condition", "Boolean", "String", "Number",
    "Operator", "Compiler", "Interpreter", "Framework", "Library", "API",
    "Frontend", "Backend", "Fullstack", "HTML", "CSS", "React",
    "Node", "Express", "Python", "Java", "C++", "Git",
    "Repository", "Commit", "Branch", "Merge", "Deploy", "Cloud",
    "Hosting", "Domain", "Security", "Encryption", "Password", "Login",
    "Register", "Authentication", "Authorization", "Session", "Cookie", "Token",
    "Firewall", "Protocol", "HTTP", "HTTPS", "TCP", "IP",
    "Terminal", "Command", "Shell", "Ubuntu", "Fedora", "Windows",
    "MacOS", "Android", "iOS", "Application", "Software", "Hardware",
    "Processor", "Memory", "Storage", "RAM", "SSD", "HDD",
    "Virtual", "Container", "Docker", "Kubernetes", "Testing", "Debug",
    "Error", "Bug", "Fix", "Update", "Upgrade", "Version",
    "Development", "Design", "Interface", "Experience", "Responsive", "Mobile",
    "Desktop", "Tablet", "Data", "Information", "Analytics", "Artificial",
    "Intelligence", "Machine", "Learning", "Neural", "Model", "Training","Words"
];

let currentIndex = 0;

const wordElement = document.getElementById("word");
const knowButton = document.querySelector(".know");
const dontKnowButton = document.querySelector(".dontknow");
const restartButton = document.querySelector(".restart");

const knownList = document.getElementById("knownList");
const unknownList = document.getElementById("unknownList");
const hardButton = document.getElementById("hard");

function showWord() {
    if (currentIndex < words.length) {
        wordElement.innerText = words[currentIndex];
    } else {
        wordElement.innerText = "Finished!";
    }
}

function addWordToList(listElement, word) {
    const li = document.createElement("li");
    li.innerText = word;
    listElement.appendChild(li);
}

knowButton.addEventListener("click", () => {
    if (currentIndex < words.length) {
        addWordToList(knownList, words[currentIndex]);
        currentIndex++;
        showWord();
    }
});

dontKnowButton.addEventListener("click", () => {
    if (currentIndex < words.length) {
        addWordToList(unknownList, words[currentIndex]);
        currentIndex++;
        showWord();
    }
});

restartButton.addEventListener("click", () => {
    currentIndex = 0;
    knownList.innerHTML = "";
    unknownList.innerHTML = "";
    showWord();
});

showWord();



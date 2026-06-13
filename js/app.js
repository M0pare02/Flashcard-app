/* ---------- STORAGE ---------- */
let appData = JSON.parse(localStorage.getItem("flashcardAppData") || "null");
const legacyCards = JSON.parse(localStorage.getItem("flashcards") || "[]");

function getNaturalizationCards() {
    return [
        { id: crypto.randomUUID(), question: "What is the supreme law of the land?", answer: "The Constitution" },
        { id: crypto.randomUUID(), question: "What does the Constitution do?", answer: "Sets up the government" },
        { id: crypto.randomUUID(), question: "The idea of self-government is in the first three words of the Constitution. What are these words?", answer: "We the People" },
        { id: crypto.randomUUID(), question: "What is an amendment?", answer: "A change to the Constitution" },
        { id: crypto.randomUUID(), question: "What do we call the first ten amendments to the Constitution?", answer: "The Bill of Rights" },
        { id: crypto.randomUUID(), question: "What is one right or freedom from the First Amendment?", answer: "Freedom of speech" },
        { id: crypto.randomUUID(), question: "How many amendments does the Constitution have?", answer: "27" },
        { id: crypto.randomUUID(), question: "What did the Declaration of Independence do?", answer: "Announced our independence from Great Britain" },
        { id: crypto.randomUUID(), question: "What are two rights in the Declaration of Independence?", answer: "Life and liberty" },
        { id: crypto.randomUUID(), question: "What is freedom of religion?", answer: "You can practice any religion, or not practice a religion" },
        { id: crypto.randomUUID(), question: "What is the economic system in the United States?", answer: "Capitalist economy" },
        { id: crypto.randomUUID(), question: "What is the rule of law?", answer: "Everyone must follow the law" },
        { id: crypto.randomUUID(), question: "Name one branch or part of the government.", answer: "Congress" },
        { id: crypto.randomUUID(), question: "What stops one branch of government from becoming too powerful?", answer: "Checks and balances" },
        { id: crypto.randomUUID(), question: "Who is in charge of the executive branch?", answer: "The President" },
        { id: crypto.randomUUID(), question: "Who makes federal laws?", answer: "Congress" },
        { id: crypto.randomUUID(), question: "What are the two parts of the U.S. Congress?", answer: "The Senate and House of Representatives" },
        { id: crypto.randomUUID(), question: "How many U.S. Senators are there?", answer: "100" },
        { id: crypto.randomUUID(), question: "We elect a U.S. Senator for how many years?", answer: "6" },
        { id: crypto.randomUUID(), question: "Who is one of your state's U.S. Senators?", answer: "Varies by state" },
        { id: crypto.randomUUID(), question: "The House of Representatives has how many voting members?", answer: "435" },
        { id: crypto.randomUUID(), question: "We elect a U.S. Representative for how many years?", answer: "2" },
        { id: crypto.randomUUID(), question: "Name your U.S. Representative.", answer: "Varies by district" },
        { id: crypto.randomUUID(), question: "Who does a U.S. Senator represent?", answer: "All people of the state" },
        { id: crypto.randomUUID(), question: "Why do some states have more Representatives than other states?", answer: "Because of the state's population" },
        { id: crypto.randomUUID(), question: "We elect a President for how many years?", answer: "4" },
        { id: crypto.randomUUID(), question: "In what month do we vote for President?", answer: "November" },
        { id: crypto.randomUUID(), question: "What is the name of the President of the United States now?", answer: "Donald J. Trump" },
        { id: crypto.randomUUID(), question: "What is the name of the Vice President of the United States now?", answer: "JD Vance" },
        { id: crypto.randomUUID(), question: "If the President can no longer serve, who becomes President?", answer: "The Vice President" },
        { id: crypto.randomUUID(), question: "If both the President and the Vice President can no longer serve, who becomes President?", answer: "The Speaker of the House" },
        { id: crypto.randomUUID(), question: "Who is the Commander in Chief of the military?", answer: "The President" },
        { id: crypto.randomUUID(), question: "Who signs bills to become laws?", answer: "The President" },
        { id: crypto.randomUUID(), question: "Who vetoes bills?", answer: "The President" },
        { id: crypto.randomUUID(), question: "What does the President's Cabinet do?", answer: "Advises the President" },
        { id: crypto.randomUUID(), question: "What are two Cabinet-level positions?", answer: "Secretary of State and Secretary of Defense" },
        { id: crypto.randomUUID(), question: "What does the judicial branch do?", answer: "Reviews laws" },
        { id: crypto.randomUUID(), question: "What is the highest court in the United States?", answer: "The Supreme Court" },
        { id: crypto.randomUUID(), question: "How many justices are on the Supreme Court?", answer: "9" },
        { id: crypto.randomUUID(), question: "Who is the Chief Justice of the United States now?", answer: "John Roberts" },
        { id: crypto.randomUUID(), question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", answer: "To print money" },
        { id: crypto.randomUUID(), question: "Under our Constitution, some powers belong to the states. What is one power of the states?", answer: "Provide schooling and education" },
        { id: crypto.randomUUID(), question: "Who is the Governor of your state now?", answer: "Varies by state" },
        { id: crypto.randomUUID(), question: "What is the capital of your state?", answer: "Varies by state" },
        { id: crypto.randomUUID(), question: "What are the two major political parties in the United States?", answer: "Democratic and Republican" },
        { id: crypto.randomUUID(), question: "What is the political party of the President now?", answer: "Republican" },
        { id: crypto.randomUUID(), question: "What is the name of the Speaker of the House of Representatives now?", answer: "Mike Johnson" },
        { id: crypto.randomUUID(), question: "There are four amendments to the Constitution about who can vote. Describe one of them.", answer: "Citizens 18 and older can vote" },
        { id: crypto.randomUUID(), question: "What is one responsibility that is only for United States citizens?", answer: "Serve on a jury" },
        { id: crypto.randomUUID(), question: "Name one right only for United States citizens.", answer: "Vote in a federal election" },
        { id: crypto.randomUUID(), question: "What are two rights of everyone living in the United States?", answer: "Freedom of speech and freedom of religion" },
        { id: crypto.randomUUID(), question: "What do we show loyalty to when we say the Pledge of Allegiance?", answer: "The United States and the flag" },
        { id: crypto.randomUUID(), question: "What is one promise you make when you become a United States citizen?", answer: "Give up loyalty to other countries" },
        { id: crypto.randomUUID(), question: "How old do citizens have to be to vote for President?", answer: "18 and older" },
        { id: crypto.randomUUID(), question: "What are two ways that Americans can participate in their democracy?", answer: "Vote and join a civic group" },
        { id: crypto.randomUUID(), question: "When is the last day you can send in federal income tax forms?", answer: "April 15" },
        { id: crypto.randomUUID(), question: "When must all men register for the Selective Service?", answer: "At age 18" },
        { id: crypto.randomUUID(), question: "What is one reason colonists came to America?", answer: "Religious freedom" },
        { id: crypto.randomUUID(), question: "Who lived in America before the Europeans arrived?", answer: "American Indians" },
        { id: crypto.randomUUID(), question: "What group of people was taken to America and sold as slaves?", answer: "Africans" },
        { id: crypto.randomUUID(), question: "Why did the colonists fight the British?", answer: "Because of high taxes" },
        { id: crypto.randomUUID(), question: "Who wrote the Declaration of Independence?", answer: "Thomas Jefferson" },
        { id: crypto.randomUUID(), question: "When was the Declaration of Independence adopted?", answer: "July 4, 1776" },
        { id: crypto.randomUUID(), question: "There were 13 original states. Name three.", answer: "Virginia, Massachusetts, and New York" },
        { id: crypto.randomUUID(), question: "What happened at the Constitutional Convention?", answer: "The Constitution was written" },
        { id: crypto.randomUUID(), question: "When was the Constitution written?", answer: "1787" },
        { id: crypto.randomUUID(), question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", answer: "James Madison" },
        { id: crypto.randomUUID(), question: "What is one thing Benjamin Franklin is famous for?", answer: "U.S. diplomat" },
        { id: crypto.randomUUID(), question: "Who is the Father of Our Country?", answer: "George Washington" },
        { id: crypto.randomUUID(), question: "Who was the first President?", answer: "George Washington" },
        { id: crypto.randomUUID(), question: "What territory did the United States buy from France in 1803?", answer: "The Louisiana Territory" },
        { id: crypto.randomUUID(), question: "Name one war fought by the United States in the 1800s.", answer: "The Civil War" },
        { id: crypto.randomUUID(), question: "Name the U.S. war between the North and the South.", answer: "The Civil War" },
        { id: crypto.randomUUID(), question: "Name one problem that led to the Civil War.", answer: "Slavery" },
        { id: crypto.randomUUID(), question: "What was one important thing that Abraham Lincoln did?", answer: "Freed the slaves" },
        { id: crypto.randomUUID(), question: "What did the Emancipation Proclamation do?", answer: "Freed slaves in the Confederacy" },
        { id: crypto.randomUUID(), question: "What did Susan B. Anthony do?", answer: "Fought for women's rights" },
        { id: crypto.randomUUID(), question: "Name one war fought by the United States in the 1900s.", answer: "World War II" },
        { id: crypto.randomUUID(), question: "Who was President during World War I?", answer: "Woodrow Wilson" },
        { id: crypto.randomUUID(), question: "Who was President during the Great Depression and World War II?", answer: "Franklin Roosevelt" },
        { id: crypto.randomUUID(), question: "Who did the United States fight in World War II?", answer: "Japan, Germany, and Italy" },
        { id: crypto.randomUUID(), question: "Before he was President, Eisenhower was a general. What war was he in?", answer: "World War II" },
        { id: crypto.randomUUID(), question: "During the Cold War, what was the main concern of the United States?", answer: "Communism" },
        { id: crypto.randomUUID(), question: "What movement tried to end racial discrimination?", answer: "The civil rights movement" },
        { id: crypto.randomUUID(), question: "What did Martin Luther King, Jr. do?", answer: "Fought for civil rights" },
        { id: crypto.randomUUID(), question: "What major event happened on September 11, 2001, in the United States?", answer: "Terrorists attacked the United States" },
        { id: crypto.randomUUID(), question: "Name one American Indian tribe in the United States.", answer: "Cherokee" },
        { id: crypto.randomUUID(), question: "Name one of the two longest rivers in the United States.", answer: "Mississippi River" },
        { id: crypto.randomUUID(), question: "What ocean is on the West Coast of the United States?", answer: "Pacific Ocean" },
        { id: crypto.randomUUID(), question: "What ocean is on the East Coast of the United States?", answer: "Atlantic Ocean" },
        { id: crypto.randomUUID(), question: "Name one U.S. territory.", answer: "Puerto Rico" },
        { id: crypto.randomUUID(), question: "Name one state that borders Canada.", answer: "New York" },
        { id: crypto.randomUUID(), question: "Name one state that borders Mexico.", answer: "California" },
        { id: crypto.randomUUID(), question: "What is the capital of the United States?", answer: "Washington, D.C." },
        { id: crypto.randomUUID(), question: "Where is the Statue of Liberty?", answer: "New York Harbor" },
        { id: crypto.randomUUID(), question: "Why does the flag have 13 stripes?", answer: "Because there were 13 original colonies" },
        { id: crypto.randomUUID(), question: "Why does the flag have 50 stars?", answer: "Because there are 50 states" },
        { id: crypto.randomUUID(), question: "What is the name of the national anthem?", answer: "The Star-Spangled Banner" },
        { id: crypto.randomUUID(), question: "When do we celebrate Independence Day?", answer: "July 4" },
        { id: crypto.randomUUID(), question: "Name two national U.S. holidays.", answer: "Thanksgiving and Independence Day" }
    ];
}

if (!appData || !Array.isArray(appData.subjects)) {
    appData = {
        subjects: [{ id: crypto.randomUUID(), name: "General", cards: legacyCards }],
        currentSubjectId: null
    };
    appData.currentSubjectId = appData.subjects[0].id;
}

if (!appData.currentSubjectId || !appData.subjects.some(s => s.id === appData.currentSubjectId)) {
    appData.currentSubjectId = appData.subjects[0]?.id || null;
}

if (appData.subjects.length === 0) {
    const fallback = { id: crypto.randomUUID(), name: "General", cards: [] };
    appData.subjects.push(fallback);
    appData.currentSubjectId = fallback.id;
}

const hasNaturalization = appData.subjects.some(s => s.name.toLowerCase() === "naturalization test");
if (!hasNaturalization) {
    appData.subjects.push({
        id: crypto.randomUUID(),
        name: "Naturalization test",
        cards: getNaturalizationCards()
    });
    localStorage.setItem("flashcardAppData", JSON.stringify(appData));
}

let cards = [];
let editId = null;

function getCurrentSubject() {
    let subject = appData.subjects.find(s => s.id === appData.currentSubjectId);
    if (!subject) {
        subject = appData.subjects[0];
        appData.currentSubjectId = subject?.id || null;
    }
    return subject;
}

function syncCardsFromCurrentSubject() {
    const subject = getCurrentSubject();
    cards = subject ? subject.cards : [];
}

function updateSubjectInfo() {
    const subject = getCurrentSubject();
    const cardCount = cards.length;

    document.querySelectorAll(".current-subject-count").forEach(el => {
        el.textContent = String(cardCount);
    });
}

function saveCards() {
    const subject = getCurrentSubject();
    if (subject) subject.cards = cards;
    localStorage.setItem("flashcardAppData", JSON.stringify(appData));
    localStorage.removeItem("flashcards");
}

/* ---------- THEME ---------- */
function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);
    document.getElementById("themeToggle").textContent = isDark ? "Light Mode ☀️" : "Dark Mode 🌙";
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

document.getElementById("themeToggle").onclick = () => {
    navMenuPanel.classList.remove("open");
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
};

/* ---------- NAV OVERFLOW MENU ---------- */
const navMenuBtn   = document.getElementById("navMenuBtn");
const navMenuPanel = document.getElementById("navMenuPanel");

navMenuBtn.onclick = (e) => {
    e.stopPropagation();
    navMenuPanel.classList.toggle("open");
};

document.addEventListener("click", () => {
    navMenuPanel.classList.remove("open");
});

/* ---------- NAVIGATION ---------- */
document.querySelectorAll(".tab").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
        document.getElementById(btn.dataset.target).classList.add("active");

        if (btn.dataset.target === "study") loadStudyCard();
    };
});

/* ---------- SUBJECTS ---------- */
function renderSubjects() {
    const select = document.getElementById("subjectSelect");
    select.innerHTML = "";

    appData.subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = subject.id;
        option.textContent = subject.name;
        select.appendChild(option);
    });

    select.value = appData.currentSubjectId;
    sizeSubjectSelectToCurrent();
    syncCardsFromCurrentSubject();
    updateSubjectInfo();
    renderCardList();
    loadStudyCard();
}

function sizeSubjectSelectToCurrent() {
    const select = document.getElementById("subjectSelect");
    if (!select) return;

    const selectedText = select.options[select.selectedIndex]?.textContent || "Subject";
    const style = window.getComputedStyle(select);

    const canvas = sizeSubjectSelectToCurrent.canvas || (sizeSubjectSelectToCurrent.canvas = document.createElement("canvas"));
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const textWidth = ctx.measureText(selectedText).width;
    const extraSpace = 110;
    const width = Math.min(520, Math.max(190, Math.ceil(textWidth + extraSpace)));

    select.style.width = `${width}px`;
}

document.getElementById("subjectSelect").onchange = (e) => {
    appData.currentSubjectId = e.target.value;
    editId = null;
    studyIndex = 0;
    document.getElementById("cardSearch").value = "";
    syncCardsFromCurrentSubject();
    saveCards();
    renderSubjects();
};

document.getElementById("newSubject").onclick = () => {
    navMenuPanel.classList.remove("open");
    const name = prompt("Enter a name for the new subject:");
    if (!name) return;

    const trimmed = name.trim();
    if (!trimmed) return;

    const existing = appData.subjects.some(s => s.name.toLowerCase() === trimmed.toLowerCase());
    if (existing) {
        alert("A subject with that name already exists.");
        return;
    }

    const newSubject = { id: crypto.randomUUID(), name: trimmed, cards: [] };
    appData.subjects.push(newSubject);
    appData.currentSubjectId = newSubject.id;
    cards = newSubject.cards;
    editId = null;
    studyIndex = 0;
    document.getElementById("cardSearch").value = "";
    saveCards();
    renderSubjects();
};

document.getElementById("deleteSubject").onclick = () => {
    navMenuPanel.classList.remove("open");
    if (appData.subjects.length <= 1) {
        alert("You must keep at least one subject.");
        return;
    }

    const subject = getCurrentSubject();
    if (!subject) return;

    const confirmed = confirm(`Delete subject "${subject.name}" and all its flashcards?`);
    if (!confirmed) return;

    appData.subjects = appData.subjects.filter(s => s.id !== subject.id);
    appData.currentSubjectId = appData.subjects[0].id;
    cards = getCurrentSubject().cards;
    editId = null;
    studyIndex = 0;
    document.getElementById("cardSearch").value = "";
    saveCards();
    renderSubjects();
};

/* ---------- ADD / EDIT CARDS ---------- */
function renderCardList() {
    const list = document.getElementById("cardList");
    const query = (document.getElementById("cardSearch")?.value || "").toLowerCase().trim();
    list.innerHTML = "";
    updateSubjectInfo();

    const filtered = query
        ? cards.filter(c => c.question.toLowerCase().includes(query))
        : cards;

    filtered.forEach(card => {
        const div = document.createElement("div");
        div.className = "card-item";
        div.innerHTML = `
            <div>${card.question}</div>
            <div class="card-item-actions">
                <button class="action-btn action-edit" onclick="editCard('${card.id}')">Edit</button>
                <button class="action-btn action-delete" onclick="deleteCard('${card.id}')">Delete</button>
            </div>
        `;
        list.appendChild(div);
    });
}

document.getElementById("cardSearch").oninput = renderCardList;

function editCard(id) {
    const card = cards.find(c => c.id === id);
    editId = id;
    document.getElementById("question").value = card.question;
    document.getElementById("answer").value = card.answer;
}

function deleteCard(id) {
    cards = cards.filter(c => c.id !== id);
    saveCards();
    renderCardList();
    loadStudyCard();
}

document.getElementById("saveCard").onclick = () => {
    const q = document.getElementById("question").value.trim();
    const a = document.getElementById("answer").value.trim();
    if (!q || !a) return;

    if (editId) {
        const card = cards.find(c => c.id === editId);
        card.question = q;
        card.answer = a;
        editId = null;
    } else {
        cards.push({ id: crypto.randomUUID(), question: q, answer: a });
    }

    saveCards();
    renderCardList();
    loadStudyCard();
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
};

document.getElementById("clearAll").onclick = () => {
    if (cards.length === 0) return;

    const subject = getCurrentSubject();
    const confirmed = confirm(`Are you sure you want to delete all flashcards in "${subject.name}"?`);
    if (!confirmed) return;

    cards = [];
    editId = null;
    studyIndex = 0;
    saveCards();
    renderCardList();
    updateSubjectInfo();

    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    document.querySelector("#studyCard .front").textContent = "";
    document.querySelector("#studyCard .back").textContent = "";
    document.getElementById("studyCard").classList.remove("flipped");
};

/* ---------- STUDY MODE ---------- */
let studyIndex = 0;
let autoShuffleStudy = true;
let studyCardUpdateTimer = null;

function clearStudyCardUpdateTimer() {
    if (studyCardUpdateTimer) {
        clearTimeout(studyCardUpdateTimer);
        studyCardUpdateTimer = null;
    }
}

function updateAutoShuffleButton() {
    const button = document.getElementById("autoShuffleStudy");
    button.textContent = autoShuffleStudy ? "🔁 Auto Shuffle On" : "🔁 Auto Shuffle Off";
    button.setAttribute("aria-label", autoShuffleStudy ? "Auto shuffle on" : "Auto shuffle off");
    button.setAttribute("title", autoShuffleStudy ? "Auto shuffle on" : "Auto shuffle off");
    button.setAttribute("aria-pressed", autoShuffleStudy ? "true" : "false");
    button.classList.toggle("toggle-active", autoShuffleStudy);
}

function renderStudyCardContent() {
    const front = document.querySelector("#studyCard .front");
    const back = document.querySelector("#studyCard .back");

    if (cards.length === 0) {
        front.textContent = "No cards in this subject.";
        back.textContent = "Add cards in the Add tab.";
        return;
    }

    const card = cards[studyIndex];
    front.textContent = card.question;
    back.textContent = card.answer;
}

function shuffleStudyCard() {
    if (cards.length === 0) return;
    if (cards.length === 1) {
        loadStudyCard();
        return;
    }

    let nextIndex = studyIndex;
    while (nextIndex === studyIndex) {
        nextIndex = Math.floor(Math.random() * cards.length);
    }

    studyIndex = nextIndex;
    loadStudyCard();
}

function loadStudyCard() {
    const studyCard = document.getElementById("studyCard");
    const front = document.querySelector("#studyCard .front");
    const back = document.querySelector("#studyCard .back");
    const counter = document.getElementById("studyCounter");
    clearStudyCardUpdateTimer();

    if (cards.length === 0) {
        renderStudyCardContent();
        studyCard.classList.remove("flipped");
        counter.textContent = "";
        return;
    }

    counter.textContent = `${studyIndex + 1} / ${cards.length}`;

    const card = cards[studyIndex];

    if (studyCard.classList.contains("flipped")) {
        front.textContent = card.question;
        studyCard.classList.remove("flipped");
        studyCardUpdateTimer = setTimeout(() => {
            back.textContent = card.answer;
            studyCardUpdateTimer = null;
        }, 600);
        return;
    }

    front.textContent = card.question;
    back.textContent = card.answer;
}

let pulseRestartTimer = null;

function resetPulseTimer() {
    const wrapper = document.getElementById("studyCardWrapper");
    wrapper.classList.add("no-pulse");
    clearTimeout(pulseRestartTimer);
    pulseRestartTimer = setTimeout(() => {
        wrapper.classList.remove("no-pulse");
    }, 10000);
}

document.getElementById("studyCard").onclick = () => {
    if (cards.length === 0) return;

    resetPulseTimer();
    const studyCard = document.getElementById("studyCard");
    const isShowingAnswer = studyCard.classList.contains("flipped");

    if (isShowingAnswer) {
        if (autoShuffleStudy) {
            shuffleStudyCard();
        } else {
            studyIndex = (studyIndex + 1) % cards.length;
            loadStudyCard();
        }
    } else {
        studyCard.classList.toggle("flipped");
    }
};

document.getElementById("autoShuffleStudy").onclick = () => {
    autoShuffleStudy = !autoShuffleStudy;
    updateAutoShuffleButton();
};

updateAutoShuffleButton();
syncCardsFromCurrentSubject();
renderSubjects();

// ─── Game State ───
let state = {
  mode: "mixed",
  questions: [],
  currentQ: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  correctCount: 0,
  totalXP: 0,
  level: 1,
  xpForNext: 100,
  timeLeft: 30,
  timerInterval: null,
  answered: false,
  results: [],
  roundXP: 0,
};
 
let lastMode = "mixed";
const QUESTIONS_PER_ROUND = 10;
const BASE_TIME = 30;
const BOSS_TIME = 90;
 
// ─── Persistence ───
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("sat_quest_progress"));
    if (saved) {
      state.totalXP = saved.totalXP || 0;
      state.level = saved.level || 1;
      state.xpForNext = saved.xpForNext || 100;
    }
  } catch (e) { /* ignore */ }
}
 
function saveProgress() {
  localStorage.setItem("sat_quest_progress", JSON.stringify({
    totalXP: state.totalXP,
    level: state.level,
    xpForNext: state.xpForNext,
  }));
}
 
function getLifetimeStats() {
  try {
    return JSON.parse(localStorage.getItem("sat_quest_stats")) || {
      totalAnswered: 0, totalCorrect: 0, totalScore: 0, gamesPlayed: 0
    };
  } catch (e) {
    return { totalAnswered: 0, totalCorrect: 0, totalScore: 0, gamesPlayed: 0 };
  }
}
 
function saveLifetimeStats(stats) {
  localStorage.setItem("sat_quest_stats", JSON.stringify(stats));
}
 
// ─── Screens ───
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
 
function showStart() {
  loadProgress();
  updateStatsPreview();
  showScreen("start-screen");
}
 
function updateStatsPreview() {
  const stats = getLifetimeStats();
  const el = document.getElementById("stats-preview");
  if (stats.gamesPlayed === 0) {
    el.innerHTML = "<p>Start your first challenge!</p>";
  } else {
    const accuracy = stats.totalAnswered > 0
      ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0;
    el.innerHTML = `
      <div class="preview-stats">
        <span>Level ${state.level}</span>
        <span>${stats.gamesPlayed} games</span>
        <span>${accuracy}% accuracy</span>
        <span>${stats.totalScore.toLocaleString()} total pts</span>
      </div>
    `;
  }
}
 
// ─── Start Game ───
function startGame(mode) {
  loadProgress();
  lastMode = mode;
  state.mode = mode;
  state.currentQ = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.correctCount = 0;
  state.answered = false;
  state.results = [];
  state.roundXP = 0;
 
  // Select questions
  let pool;
  if (mode === "math") {
    pool = [...QUESTIONS.math];
  } else if (mode === "reading") {
    pool = [...QUESTIONS.reading];
  } else {
    pool = [...QUESTIONS.math, ...QUESTIONS.reading];
  }
 
  // Shuffle pool
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
 
  if (mode === "boss") {
    // Boss: only hard questions
    const hardPool = [...QUESTIONS.math, ...QUESTIONS.reading].filter(q => q.difficulty === "hard");
    for (let i = hardPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [hardPool[i], hardPool[j]] = [hardPool[j], hardPool[i]];
    }
    state.questions = hardPool.slice(0, QUESTIONS_PER_ROUND).map(prepareQuestion);
  } else {
    state.questions = pool.slice(0, QUESTIONS_PER_ROUND).map(prepareQuestion);
  }
 
  // Setup HUD
  document.getElementById("hud-level").textContent = state.level;
  updateXPBar();
  document.getElementById("streak-count").textContent = "0";
  document.getElementById("score").textContent = "0";
  document.getElementById("q-total").textContent = state.questions.length;
 
  // Build progress dots
  const dotsEl = document.getElementById("progress-dots");
  dotsEl.innerHTML = state.questions.map((_, i) =>
    `<span class="dot" id="dot-${i}"></span>`
  ).join("");
 
  showScreen("game-screen");
  loadQuestion();
}
 
// ─── Load Question ───
function loadQuestion() {
  if (state.currentQ >= state.questions.length) {
    endRound();
    return;
  }
 
  state.answered = false;
  const q = state.questions[state.currentQ];
 
  document.getElementById("q-current").textContent = state.currentQ + 1;
  document.getElementById("difficulty-tag").textContent =
    q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
  document.getElementById("difficulty-tag").className =
    "difficulty-tag " + q.difficulty;
  document.getElementById("question-category").textContent = q.category;
 
  // Passage (for reading comprehension)
  const passageEl = document.getElementById("question-passage");
  if (q.passage) {
    passageEl.textContent = q.passage;
    passageEl.style.display = "block";
  } else {
    passageEl.textContent = "";
    passageEl.style.display = "none";
  }
 
  document.getElementById("question-text").textContent = q.text;
 
  // Render answers
  const answersEl = document.getElementById("answers");
  const labels = ["A", "B", "C", "D"];
  answersEl.innerHTML = q.answers.map((a, i) =>
    `<button class="answer-btn" onclick="selectAnswer(${i})">
      <span class="answer-label">${labels[i]}</span>
      <span class="answer-text">${a}</span>
    </button>`
  ).join("");
 
  // Animate card in
  const card = document.getElementById("question-card");
  card.classList.remove("card-enter");
  void card.offsetWidth; // reflow
  card.classList.add("card-enter");
 
  // Start timer
  startTimer(state.mode === "boss" ? BOSS_TIME : BASE_TIME);
}
 
// ─── Timer ───
function startTimer(seconds) {
  clearInterval(state.timerInterval);
  state.timeLeft = seconds;
  const total = seconds;
 
  updateTimerDisplay(total);
 
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay(total);
 
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      if (!state.answered) {
        timeOut();
      }
    }
  }, 1000);
}
 
function updateTimerDisplay(total) {
  const pct = (state.timeLeft / total) * 100;
  const circumference = 100;
  const offset = circumference - (pct / 100) * circumference;
 
  document.getElementById("timer-path").style.strokeDasharray = `${circumference}`;
  document.getElementById("timer-path").style.strokeDashoffset = `${offset}`;
  document.getElementById("timer-text").textContent = state.timeLeft;
 
  const ring = document.getElementById("timer-ring");
  ring.classList.toggle("warning", state.timeLeft <= 10 && state.timeLeft > 5);
  ring.classList.toggle("danger", state.timeLeft <= 5);
}
 
function timeOut() {
  state.answered = true;
  state.streak = 0;
  document.getElementById("streak-count").textContent = "0";
  document.getElementById("streak-flame").style.opacity = "0.3";
 
  const q = state.questions[state.currentQ];
  const btns = document.querySelectorAll(".answer-btn");
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
  });
 
  state.results.push({ question: q, userAnswer: -1, correct: false, timedOut: true });
  document.getElementById(`dot-${state.currentQ}`).classList.add("dot-wrong");
 
  showExplanation(q, false);
}
 
// ─── Answer Selection ───
function selectAnswer(index) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);
 
  const q = state.questions[state.currentQ];
  const isCorrect = index === q.correct;
  const btns = document.querySelectorAll(".answer-btn");
 
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    if (i === index && !isCorrect) btn.classList.add("wrong");
  });
 
  if (isCorrect) {
    handleCorrect(q);
  } else {
    handleWrong(q);
  }
 
  state.results.push({ question: q, userAnswer: index, correct: isCorrect, timedOut: false });
  showExplanation(q, isCorrect);
}
 
function handleCorrect(q) {
  state.correctCount++;
  state.streak++;
  if (state.streak > state.bestStreak) state.bestStreak = state.streak;
 
  // Points: base + time bonus + streak bonus + difficulty bonus
  const diffBonus = { easy: 0, medium: 25, hard: 50 };
  const basePoints = 100;
  const timeBonus = state.timeLeft * 3;
  const streakBonus = Math.min(state.streak - 1, 5) * 20;
  const difficulty = diffBonus[q.difficulty] || 0;
  const total = basePoints + timeBonus + streakBonus + difficulty;
 
  state.score += total;
  document.getElementById("score").textContent = state.score;
 
  // XP
  const xpGain = 10 + Math.floor(total / 20);
  addXP(xpGain);
 
  // Streak display
  document.getElementById("streak-count").textContent = state.streak;
  document.getElementById("streak-flame").style.opacity = "1";
 
  // Popups
  showPointsPopup(`+${total}`);
  if (state.streak >= 3) {
    showComboPopup(`${state.streak}x Streak!`);
  }
 
  // Progress dot
  document.getElementById(`dot-${state.currentQ}`).classList.add("dot-correct");
}
 
function handleWrong(q) {
  state.streak = 0;
  document.getElementById("streak-count").textContent = "0";
  document.getElementById("streak-flame").style.opacity = "0.3";
 
  // Small XP for trying
  addXP(2);
 
  document.getElementById(`dot-${state.currentQ}`).classList.add("dot-wrong");
}
 
// ─── XP & Leveling ───
function addXP(amount) {
  state.roundXP += amount;
  state.totalXP += amount;
 
  while (state.totalXP >= state.xpForNext) {
    state.totalXP -= state.xpForNext;
    state.level++;
    state.xpForNext = Math.floor(state.xpForNext * 1.3);
    showComboPopup(`LEVEL UP! Lv ${state.level}`);
    document.getElementById("hud-level").textContent = state.level;
  }
 
  updateXPBar();
  saveProgress();
}
 
function updateXPBar() {
  const pct = (state.totalXP / state.xpForNext) * 100;
  document.getElementById("xp-bar").style.width = pct + "%";
  document.getElementById("xp-text").textContent = `${state.totalXP} / ${state.xpForNext} XP`;
}
 
// ─── Popups ───
function showPointsPopup(text) {
  const el = document.getElementById("points-popup");
  el.textContent = text;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
}
 
function showComboPopup(text) {
  const el = document.getElementById("combo-popup");
  el.textContent = text;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
}
 
// ─── Explanation & Next ───
function showExplanation(q, isCorrect) {
  const card = document.getElementById("question-card");
  const existing = card.querySelector(".explanation");
  if (existing) existing.remove();
 
  const div = document.createElement("div");
  div.className = "explanation " + (isCorrect ? "explanation-correct" : "explanation-wrong");
  div.innerHTML = `
    <p class="explanation-verdict">${isCorrect ? "Correct!" : "Not quite."}</p>
    <p class="explanation-text">${q.explanation}</p>
    <button class="btn-next" onclick="nextQuestion()">
      ${state.currentQ < state.questions.length - 1 ? "Next Question →" : "See Results →"}
    </button>
  `;
  card.appendChild(div);
}
 
function nextQuestion() {
  state.currentQ++;
  loadQuestion();
}
 
// ─── End Round ───
function endRound() {
  clearInterval(state.timerInterval);
 
  const accuracy = state.questions.length > 0
    ? Math.round((state.correctCount / state.questions.length) * 100) : 0;
 
  // Grade
  let grade, gradeClass;
  if (accuracy >= 90) { grade = "S"; gradeClass = "grade-s"; }
  else if (accuracy >= 80) { grade = "A"; gradeClass = "grade-a"; }
  else if (accuracy >= 70) { grade = "B"; gradeClass = "grade-b"; }
  else if (accuracy >= 60) { grade = "C"; gradeClass = "grade-c"; }
  else { grade = "D"; gradeClass = "grade-d"; }
 
  document.getElementById("results-grade").textContent = grade;
  document.getElementById("results-grade").className = "results-grade " + gradeClass;
  document.getElementById("res-score").textContent = state.score;
  document.getElementById("res-correct").textContent =
    `${state.correctCount}/${state.questions.length}`;
  document.getElementById("res-accuracy").textContent = accuracy + "%";
  document.getElementById("res-streak").textContent = state.bestStreak;
  document.getElementById("xp-gain").textContent = `+${state.roundXP} XP earned this round`;
 
  // Build review
  const reviewEl = document.getElementById("results-review");
  reviewEl.innerHTML = "<h3>Review</h3>" + state.results.map((r, i) => {
    const icon = r.correct ? "&#10003;" : "&#10007;";
    const cls = r.correct ? "review-correct" : "review-wrong";
    const userAns = r.timedOut ? "Time ran out"
      : r.question.answers[r.userAnswer];
    return `
      <div class="review-item ${cls}">
        <span class="review-icon">${icon}</span>
        <div class="review-content">
          <p class="review-question">${i + 1}. ${r.question.text}</p>
          ${!r.correct ? `<p class="review-user-ans">Your answer: ${userAns}</p>
          <p class="review-correct-ans">Correct: ${r.question.answers[r.question.correct]}</p>` : ""}
          <p class="review-explanation">${r.question.explanation}</p>
        </div>
      </div>
    `;
  }).join("");
 
  // Update lifetime stats
  const stats = getLifetimeStats();
  stats.totalAnswered += state.questions.length;
  stats.totalCorrect += state.correctCount;
  stats.totalScore += state.score;
  stats.gamesPlayed++;
  saveLifetimeStats(stats);
 
  showScreen("results-screen");
}
 
// ─── Init ───
loadProgress();
updateStatsPreview();

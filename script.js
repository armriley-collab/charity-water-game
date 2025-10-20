// Thirst for Knowledge Quiz Game
// All questions, answers, and facts are stored here

const questions = [
  // Level 1
  {
    question: "How far do women and children in sub-Saharan Africa walk on average each day to collect water?",
    answers: [
      "About 1 mile (1.6 km)",
      "About 3.7 miles (6 km)",
      "About 10 miles (16 km)"
    ],
    correct: 1,
    fact: "On average, women and children in sub-Saharan Africa walk about 3.7 miles (6 km) every day to collect water. This journey is often dangerous and time-consuming.",
  },
  {
    question: "What percentage of the Earth's water is fresh and accessible for human use?",
    answers: [
      "About 10%",
      "About 2.5%",
      "Less than 1%"
    ],
    correct: 2,
    fact: "Less than 1% of Earth's water is fresh and accessible for human use.",
  },
  {
    question: "Which disease is commonly caused by drinking contaminated water?",
    answers: [
      "Malaria",
      "Cholera",
      "Diabetes"
    ],
    correct: 1,
    fact: "Cholera is a waterborne disease often caused by drinking contaminated water.",
  },
  {
    question: "What is a simple way college students can help conserve water?",
    answers: [
      "Take shorter showers",
      "Leave the tap running while brushing teeth",
      "Use bottled water for everything"
    ],
    correct: 0,
    fact: "Taking shorter showers is an easy way to save water every day. Small changes add up to big impact!",
    bonus: true
  },

  // Level 2
  {
    question: "What was the 'Day Zero' crisis in Cape Town, South Africa?",
    answers: [
      "A day when the city ran out of food",
      "A day when the city nearly ran out of water",
      "A day when the city lost electricity"
    ],
    correct: 1,
    fact: "'Day Zero' was the name given to the day when Cape Town would have to shut off most water taps due to severe drought.",
  },
  {
    question: "Which continent has the highest number of people without access to clean water?",
    answers: [
      "Asia",
      "Africa",
      "South America"
    ],
    correct: 1,
    fact: "Africa has the highest number of people without access to clean water.",
  },
  {
    question: "What is the main source of drinking water in rural communities in developing countries?",
    answers: [
      "Rivers and lakes",
      "Groundwater from wells",
      "Rainwater harvesting"
    ],
    correct: 1,
    fact: "Groundwater from wells is the main source of drinking water in many rural communities.",
  },
  {
    question: "Which household appliance uses the most water?",
    answers: [
      "Dishwasher",
      "Washing machine",
      "Toilet"
    ],
    correct: 2,
    fact: "Toilets use the most water in the average household.",
    bonus: true
  },

  // Level 3
  {
    question: "How many people worldwide still lack access to clean and safe drinking water?",
    answers: [
      "About 771 million people",
      "About 100 million people",
      "About 2 billion people"
    ],
    correct: 0,
    fact: "Around 771 million people globally do not have access to clean and safe drinking water.",
  },
  {
    question: "Which process removes salt from seawater to make it drinkable?",
    answers: [
      "Filtration",
      "Desalination",
      "Distillation"
    ],
    correct: 1,
    fact: "Desalination removes salt from seawater to make it drinkable.",
  },
  {
    question: "What is the most common way to purify water in emergencies?",
    answers: [
      "Boiling",
      "Freezing",
      "Adding sugar"
    ],
    correct: 0,
    fact: "Boiling is the most common way to purify water in emergencies.",
  },
  {
    question: "What is a water footprint?",
    answers: [
      "The amount of water used to produce goods and services",
      "A mark left by wet shoes",
      "A measurement of rainfall"
    ],
    correct: 0,
    fact: "A water footprint is the amount of water used to produce goods and services.",
    bonus: true
  },

  // Level 4
  {
    question: "Which organization is dedicated to providing clean water to people in need?",
    answers: [
      "charity: water",
      "World Wildlife Fund",
      "Doctors Without Borders"
    ],
    correct: 0,
    fact: "charity: water is dedicated to bringing clean and safe drinking water to people in developing countries.",
  },
  {
    question: "Which of these is NOT a waterborne disease?",
    answers: [
      "Typhoid",
      "Polio",
      "Asthma"
    ],
    correct: 2,
    fact: "Asthma is not a waterborne disease.",
  },
  {
    question: "What is the main benefit of building wells in rural villages?",
    answers: [
      "Provides jobs",
      "Improves access to clean water",
      "Increases tourism"
    ],
    correct: 1,
    fact: "Building wells improves access to clean water in rural villages.",
  },
  {
    question: "How can you help reduce water pollution?",
    answers: [
      "Dispose of chemicals properly",
      "Pour oil down the drain",
      "Use more plastic bottles"
    ],
    correct: 0,
    fact: "Proper disposal of chemicals helps reduce water pollution.",
    bonus: true
  },

  // Level 5
  {
    question: "Which country has made significant progress in providing clean water to its population?",
    answers: [
      "Ethiopia",
      "Canada",
      "Australia"
    ],
    correct: 0,
    fact: "Ethiopia has made significant progress in providing clean water to its population.",
  },
  {
    question: "What is rainwater harvesting?",
    answers: [
      "Collecting rainwater for use",
      "Blocking rain from entering homes",
      "Evaporating rainwater"
    ],
    correct: 0,
    fact: "Rainwater harvesting is collecting rainwater for use.",
  },
  {
    question: "Which of these is a sign of water scarcity?",
    answers: [
      "Frequent rainfall",
      "Dry wells",
      "Flooding"
    ],
    correct: 1,
    fact: "Dry wells are a sign of water scarcity.",
  },
  {
    question: "What is the best way to support clean water initiatives?",
    answers: [
      "Spread awareness and donate",
      "Ignore the issue",
      "Use more water"
    ],
    correct: 0,
    fact: "Spreading awareness and donating are great ways to support clean water initiatives.",
    bonus: true
  }
];

const missionStatement = `charity: water is on a mission to bring clean and safe drinking water to people in developing countries. Every drop counts. Every person matters.`;

const gameContainer = document.getElementById('game-container');
let currentQuestion = 0;
let score = 0;

function showWelcome() {
  gameContainer.innerHTML = `
    <div class="start-bg"></div>
    <div class="fade-in">
      <div class="welcome-header">
        <img src="images/jerrycan.png" alt="charity: water Jerry can logo" class="welcome-logo">
        <span class="charitywater-text">charity: water</span>
      </div>
      <h1>Thirst for Knowledge</h1>
      <div class="mission">${missionStatement}</div>
      <button class="button" onclick="startGame()">Start Game</button>
    </div>
  `;
}

function showScore() {
  const percent = Math.round((score / questions.length) * 100);
  return `
    <div class="scorebar-container">
      <div class="scorebar-water" style="width:${percent}%;"></div>
      <div class="scorebar-label">${score} / ${questions.length}</div>
    </div>
  `;
}

function showQuestion() {
  const q = questions[currentQuestion];
  gameContainer.innerHTML = `
    ${showScore()}
    <div class="fade-in">
      <h2>${q.bonus ? 'Bonus Question!' : `Level ${currentQuestion + 1}`}</h2>
      <div class="question">${q.question}</div>
      <form id="quiz-form">
        <div class="answers">
          ${q.answers.map((ans, i) => `
            <label>
              <input type="radio" name="answer" value="${i}" required>
              ${ans}
            </label>
          `).join('')}
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
      <div class="feedback" id="feedback"></div>
    </div>
  `;
  document.getElementById('quiz-form').onsubmit = handleAnswer;
}

function handleAnswer(e) {
  e.preventDefault();
  const q = questions[currentQuestion];
  const form = e.target;
  const selected = form.answer.value;
  const feedback = document.getElementById('feedback');
  if (parseInt(selected) === q.correct) {
    score++;
    feedback.innerHTML = `<span class="correct">Correct! 🎉</span><br>${q.fact}`;
    // Show confetti for bonus question correct
    if (q.bonus) showConfetti();
  } else {
    score = Math.max(0, score - 1);
    feedback.innerHTML = `<span class="incorrect">Not quite! The correct answer is: <b>${q.answers[q.correct]}</b>.</span><br>${q.fact}`;
  }
  form.querySelectorAll('input').forEach(inp => inp.disabled = true);
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showGameComplete();
    }
  }, 2200);
}

function showConfetti() {
  // Remove any existing confetti
  document.querySelectorAll('.confetti-canvas').forEach(el => el.remove());

  const canvas = document.createElement('canvas');
  canvas.className = 'confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const confettiCount = 80;
  const confetti = [];
  const colors = ['#FFD200', '#0099CC', '#4fd2ff', '#fff', '#333'];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: Math.random() * 8 + 4,
      d: Math.random() * confettiCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngle: 0,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05
    });
  }

  let frame = 0;
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    updateConfetti();
    frame++;
    if (frame < 120) {
      requestAnimationFrame(drawConfetti);
    } else {
      canvas.remove();
    }
  }

  function updateConfetti() {
    confetti.forEach(c => {
      c.y += 3 + Math.random() * 2;
      c.x += Math.sin(frame / 10 + c.d) * 2;
      c.tiltAngle += c.tiltAngleIncrement;
      c.tilt = Math.sin(c.tiltAngle) * 8;
    });
  }

  drawConfetti();
}

function showGameComplete() {
  showConfetti();
  gameContainer.innerHTML = `
    <div class="fade-in">
      <h2>Game Complete!</h2>
      <div class="score">Your Score: ${score} / ${questions.length}</div>
      <div class="mission" style="margin-bottom:18px;">Thank you for playing and learning about the global water crisis. By spreading awareness, you help create real change. <br><br>Want to make an even bigger impact? <a href="https://www.charitywater.org/" target="_blank" style="color:#0099CC;text-decoration:underline;">Support charity: water</a> and help bring clean water to more people.</div>
      <button class="button" onclick="restartGame()">Play Again</button>
    </div>
  `;
}

function startGame() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function restartGame() {
  showWelcome();
}

// Start with welcome screen
showWelcome();

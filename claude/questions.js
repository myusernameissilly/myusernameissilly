const QUESTIONS = {
  math: [
    // --- Algebra ---
    {
      category: "Algebra",
      difficulty: "easy",
      text: "If 3x + 7 = 22, what is the value of x?",
      answers: ["5", "3", "7", "15"],
      correct: 0,
      explanation: "3x + 7 = 22 → 3x = 15 → x = 5"
    },
    {
      category: "Algebra",
      difficulty: "easy",
      text: "What is the slope of the line y = 4x - 9?",
      answers: ["4", "-9", "9", "-4"],
      correct: 0,
      explanation: "In y = mx + b form, the slope m = 4."
    },
    {
      category: "Algebra",
      difficulty: "easy",
      text: "Simplify: 2(x + 3) - 4",
      answers: ["2x + 2", "2x + 6", "2x - 1", "x + 2"],
      correct: 0,
      explanation: "2(x + 3) - 4 = 2x + 6 - 4 = 2x + 2"
    },
    {
      category: "Algebra",
      difficulty: "medium",
      text: "If f(x) = x² - 4x + 3, what is f(5)?",
      answers: ["8", "3", "13", "18"],
      correct: 0,
      explanation: "f(5) = 25 - 20 + 3 = 8"
    },
    {
      category: "Algebra",
      difficulty: "medium",
      text: "Which of the following is equivalent to (x + 3)(x - 3)?",
      answers: ["x² - 9", "x² + 9", "x² - 6x + 9", "x² + 6x + 9"],
      correct: 0,
      explanation: "Difference of squares: (x+3)(x-3) = x² - 9"
    },
    {
      category: "Algebra",
      difficulty: "medium",
      text: "If 2x - 5 > 11, what is the solution set for x?",
      answers: ["x > 8", "x > 3", "x < 8", "x > 16"],
      correct: 0,
      explanation: "2x - 5 > 11 → 2x > 16 → x > 8"
    },
    {
      category: "Algebra",
      difficulty: "medium",
      text: "What are the solutions to x² - 5x + 6 = 0?",
      answers: ["x = 2 and x = 3", "x = -2 and x = -3", "x = 1 and x = 6", "x = -1 and x = -6"],
      correct: 0,
      explanation: "Factor: (x-2)(x-3) = 0, so x = 2 or x = 3."
    },
    {
      category: "Algebra",
      difficulty: "hard",
      text: "If g(x) = 2x² - 3x + 1, for what value of x does g(x) reach its minimum?",
      answers: ["3/4", "1", "0", "-3/4"],
      correct: 0,
      explanation: "Minimum at x = -b/(2a) = 3/(2·2) = 3/4."
    },
    {
      category: "Algebra",
      difficulty: "hard",
      text: "The system of equations 3x + 2y = 12 and 6x + 4y = k has infinitely many solutions. What is k?",
      answers: ["24", "12", "6", "36"],
      correct: 0,
      explanation: "For infinitely many solutions, the second equation must be a multiple of the first: 2(3x+2y) = 2(12) → k = 24."
    },
    {
      category: "Algebra",
      difficulty: "hard",
      text: "If |2x - 7| = 13, what is the sum of all possible values of x?",
      answers: ["7", "10", "3", "13"],
      correct: 0,
      explanation: "2x - 7 = 13 → x = 10; 2x - 7 = -13 → x = -3. Sum = 10 + (-3) = 7."
    },
 
    // --- Geometry & Trig ---
    {
      category: "Geometry",
      difficulty: "easy",
      text: "What is the area of a rectangle with length 8 and width 5?",
      answers: ["40", "26", "13", "80"],
      correct: 0,
      explanation: "Area = length × width = 8 × 5 = 40."
    },
    {
      category: "Geometry",
      difficulty: "easy",
      text: "A triangle has angles measuring 45° and 90°. What is the third angle?",
      answers: ["45°", "90°", "30°", "60°"],
      correct: 0,
      explanation: "Angles sum to 180°: 180 - 45 - 90 = 45°."
    },
    {
      category: "Geometry",
      difficulty: "medium",
      text: "A circle has a radius of 6. What is its area?",
      answers: ["36π", "12π", "6π", "72π"],
      correct: 0,
      explanation: "Area = πr² = π(6²) = 36π."
    },
    {
      category: "Geometry",
      difficulty: "medium",
      text: "In a right triangle, one leg is 5 and the hypotenuse is 13. What is the other leg?",
      answers: ["12", "8", "10", "11"],
      correct: 0,
      explanation: "By Pythagorean theorem: b = √(13² - 5²) = √(169 - 25) = √144 = 12."
    },
    {
      category: "Geometry",
      difficulty: "hard",
      text: "A cone has a radius of 3 and a height of 4. What is its volume?",
      answers: ["12π", "36π", "9π", "16π"],
      correct: 0,
      explanation: "V = (1/3)πr²h = (1/3)π(9)(4) = 12π."
    },
 
    // --- Data Analysis & Statistics ---
    {
      category: "Data Analysis",
      difficulty: "easy",
      text: "What is the mean of the data set {2, 4, 6, 8, 10}?",
      answers: ["6", "5", "8", "30"],
      correct: 0,
      explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6."
    },
    {
      category: "Data Analysis",
      difficulty: "easy",
      text: "What is the median of {3, 7, 1, 9, 5}?",
      answers: ["5", "7", "3", "9"],
      correct: 0,
      explanation: "Sorted: {1,3,5,7,9}. The middle value is 5."
    },
    {
      category: "Data Analysis",
      difficulty: "medium",
      text: "A bag has 3 red, 5 blue, and 2 green marbles. What is the probability of drawing a blue marble?",
      answers: ["1/2", "1/3", "3/10", "2/5"],
      correct: 0,
      explanation: "P(blue) = 5/10 = 1/2."
    },
    {
      category: "Data Analysis",
      difficulty: "medium",
      text: "The range of the data set {12, 5, 8, 20, 3} is:",
      answers: ["17", "15", "12", "20"],
      correct: 0,
      explanation: "Range = max - min = 20 - 3 = 17."
    },
    {
      category: "Data Analysis",
      difficulty: "hard",
      text: "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?",
      answers: ["68%", "95%", "50%", "99.7%"],
      correct: 0,
      explanation: "The empirical rule: ~68% of data falls within 1 standard deviation."
    },
 
    // --- Advanced Algebra ---
    {
      category: "Advanced Math",
      difficulty: "medium",
      text: "What is the value of i² where i = √(-1)?",
      answers: ["-1", "1", "i", "-i"],
      correct: 0,
      explanation: "By definition, i² = -1."
    },
    {
      category: "Advanced Math",
      difficulty: "hard",
      text: "If log₂(x) = 5, what is x?",
      answers: ["32", "10", "25", "64"],
      correct: 0,
      explanation: "log₂(x) = 5 means 2⁵ = x = 32."
    },
    {
      category: "Advanced Math",
      difficulty: "hard",
      text: "What is the sum of the geometric series 1 + 1/2 + 1/4 + 1/8 + ... (infinite)?",
      answers: ["2", "1", "4", "∞"],
      correct: 0,
      explanation: "Sum = a/(1-r) = 1/(1 - 1/2) = 2."
    },
    {
      category: "Advanced Math",
      difficulty: "hard",
      text: "If f(x) = 3x and g(x) = x + 2, what is f(g(3))?",
      answers: ["15", "11", "9", "21"],
      correct: 0,
      explanation: "g(3) = 3 + 2 = 5; f(5) = 3(5) = 15."
    },
    {
      category: "Advanced Math",
      difficulty: "medium",
      text: "What is the y-intercept of the equation 2x + 3y = 12?",
      answers: ["4", "6", "2", "12"],
      correct: 0,
      explanation: "Set x = 0: 3y = 12 → y = 4."
    },
  ],
 
  reading: [
    // --- Vocabulary in Context ---
    {
      category: "Vocabulary",
      difficulty: "easy",
      text: "In the sentence \"The politician's rhetoric was designed to placate the angry crowd,\" what does \"placate\" most nearly mean?",
      answers: ["Calm", "Anger", "Confuse", "Inspire"],
      correct: 0,
      explanation: "Placate means to make someone less angry or hostile; to calm."
    },
    {
      category: "Vocabulary",
      difficulty: "easy",
      text: "\"The author's tone throughout the passage is best described as sardonic.\" What does \"sardonic\" mean?",
      answers: ["Grimly mocking", "Deeply sad", "Wildly enthusiastic", "Quietly reserved"],
      correct: 0,
      explanation: "Sardonic means grimly mocking or cynical."
    },
    {
      category: "Vocabulary",
      difficulty: "medium",
      text: "\"The evidence presented was merely circumstantial.\" In this context, \"circumstantial\" most nearly means:",
      answers: ["Indirect and inconclusive", "Completely fabricated", "Overwhelmingly strong", "Carefully documented"],
      correct: 0,
      explanation: "Circumstantial evidence is indirect — it suggests but does not prove."
    },
    {
      category: "Vocabulary",
      difficulty: "medium",
      text: "\"Her prose style is notably austere.\" The word \"austere\" most nearly means:",
      answers: ["Plain and unadorned", "Flowery and elaborate", "Humorous and light", "Dark and brooding"],
      correct: 0,
      explanation: "Austere means severe or strict in manner; without excess."
    },
    {
      category: "Vocabulary",
      difficulty: "hard",
      text: "\"The diplomat showed remarkable equanimity during the tense negotiations.\" What does \"equanimity\" mean?",
      answers: ["Calm composure", "Fierce aggression", "Nervous energy", "Cold indifference"],
      correct: 0,
      explanation: "Equanimity means mental calmness and composure, especially in difficult situations."
    },
 
    // --- Grammar & Standard English Conventions ---
    {
      category: "Grammar",
      difficulty: "easy",
      text: "Choose the correct sentence:",
      answers: [
        "The team has completed its project.",
        "The team have completed their project.",
        "The team has completed their project.",
        "The team have completed its project."
      ],
      correct: 0,
      explanation: "\"Team\" is a collective noun (singular) → use \"has\" and \"its.\""
    },
    {
      category: "Grammar",
      difficulty: "easy",
      text: "Which sentence uses a semicolon correctly?",
      answers: [
        "I love reading; it helps me relax.",
        "I love; reading it helps me relax.",
        "I love reading it; helps me relax.",
        "I love reading, it helps; me relax."
      ],
      correct: 0,
      explanation: "A semicolon joins two independent clauses that are closely related."
    },
    {
      category: "Grammar",
      difficulty: "medium",
      text: "Which sentence correctly uses parallel structure?",
      answers: [
        "She likes hiking, swimming, and biking.",
        "She likes hiking, to swim, and biking.",
        "She likes hiking, swimming, and to bike.",
        "She likes to hike, swimming, and biking."
      ],
      correct: 0,
      explanation: "Parallel structure requires consistent grammatical form: all gerunds (hiking, swimming, biking)."
    },
    {
      category: "Grammar",
      difficulty: "medium",
      text: "Identify the sentence with correct subject-verb agreement:",
      answers: [
        "Neither the teacher nor the students were aware.",
        "Neither the teacher nor the students was aware.",
        "Neither the teacher or the students were aware.",
        "Neither the teacher nor the students is aware."
      ],
      correct: 0,
      explanation: "With \"neither...nor,\" the verb agrees with the nearer subject (\"students\" → \"were\")."
    },
    {
      category: "Grammar",
      difficulty: "hard",
      text: "Which sentence correctly uses the subjunctive mood?",
      answers: [
        "The professor insisted that each student submit a draft.",
        "The professor insisted that each student submits a draft.",
        "The professor insisted that each student submitted a draft.",
        "The professor insisted that each student would submit a draft."
      ],
      correct: 0,
      explanation: "The subjunctive mood uses the base form of the verb after demands/suggestions: \"submit\" (not \"submits\")."
    },
 
    // --- Reading Comprehension ---
    {
      category: "Comprehension",
      difficulty: "medium",
      passage: "The proliferation of social media has fundamentally altered how information spreads through society. While traditional media outlets relied on editorial oversight and fact-checking processes, social media platforms allow anyone to publish content instantaneously. This democratization of information sharing has both empowered individuals and created new challenges for distinguishing reliable reporting from misinformation.",
      text: "The passage suggests that social media's impact on information sharing is:",
      answers: [
        "Both beneficial and problematic",
        "Entirely negative",
        "Mostly positive with minor drawbacks",
        "Irrelevant to traditional media"
      ],
      correct: 0,
      explanation: "The passage describes both empowerment and challenges — a balanced, dual-natured impact."
    },
    {
      category: "Comprehension",
      difficulty: "medium",
      passage: "Recent studies in neuroscience have revealed that the adolescent brain undergoes significant structural changes well into the mid-twenties. The prefrontal cortex, responsible for decision-making, impulse control, and risk assessment, is among the last brain regions to fully mature. This finding has profound implications for education policy, juvenile justice, and our understanding of adolescent behavior.",
      text: "Based on the passage, which statement is best supported?",
      answers: [
        "Adolescents may struggle with impulse control due to brain development.",
        "The adolescent brain is fully developed by age 18.",
        "Brain development has no bearing on behavior.",
        "The prefrontal cortex develops first among brain regions."
      ],
      correct: 0,
      explanation: "The passage directly states the prefrontal cortex (impulse control) is among the last to mature."
    },
    {
      category: "Comprehension",
      difficulty: "hard",
      passage: "In his 1845 narrative, Frederick Douglass recounts learning to read as the pivotal moment of his life. His enslaver's wife began teaching him the alphabet, but her husband forbade it, arguing that literacy would make Douglass unfit for slavery. Douglass later wrote that this prohibition was itself enlightening: \"I now understood the pathway from slavery to freedom.\" He continued learning covertly, trading bread to white children in exchange for reading lessons.",
      text: "The enslaver's objection to Douglass's literacy inadvertently:",
      answers: [
        "Revealed that knowledge was a tool of liberation",
        "Discouraged Douglass from pursuing education",
        "Proved that slavery was a benevolent institution",
        "Showed that reading was unimportant to enslaved people"
      ],
      correct: 0,
      explanation: "Douglass writes that the prohibition itself showed him \"the pathway from slavery to freedom\" — knowledge as liberation."
    },
    {
      category: "Comprehension",
      difficulty: "hard",
      passage: "The concept of \"opportunity cost\" is fundamental to economic thinking. Every choice involves a trade-off: selecting one option means forgoing the next best alternative. A student who spends Saturday studying for the SAT forgoes the opportunity to work a part-time job. The true cost of the study session isn't just the time spent — it includes the wages that could have been earned. Understanding opportunity cost helps individuals and societies allocate scarce resources more effectively.",
      text: "According to the passage, the \"true cost\" of an activity includes:",
      answers: [
        "Both the direct cost and the value of foregone alternatives",
        "Only the monetary expense involved",
        "The time spent, but nothing else",
        "Whatever society deems most valuable"
      ],
      correct: 0,
      explanation: "The passage explains that cost includes both direct costs and foregone alternatives (opportunity cost)."
    },
 
    // --- Rhetoric & Purpose ---
    {
      category: "Rhetoric",
      difficulty: "medium",
      text: "An author includes a personal anecdote at the beginning of an essay arguing for climate action. The most likely purpose is to:",
      answers: [
        "Create an emotional connection with the reader",
        "Provide scientific evidence for the argument",
        "Distract from a weak thesis",
        "Demonstrate expertise in climatology"
      ],
      correct: 0,
      explanation: "Personal anecdotes are a rhetorical strategy to engage readers emotionally (pathos)."
    },
    {
      category: "Rhetoric",
      difficulty: "easy",
      text: "A writer uses phrases like \"studies show\" and \"according to experts\" primarily to:",
      answers: [
        "Establish credibility and authority",
        "Express personal opinion",
        "Create humor",
        "Simplify complex ideas"
      ],
      correct: 0,
      explanation: "Citing studies and experts is an appeal to authority/credibility (ethos)."
    },
    {
      category: "Rhetoric",
      difficulty: "hard",
      text: "A satirical essay praises a clearly harmful policy in glowing terms. The author's actual purpose is most likely to:",
      answers: [
        "Critique the policy through irony",
        "Genuinely support the policy",
        "Confuse the reader for entertainment",
        "Present a balanced analysis"
      ],
      correct: 0,
      explanation: "Satire uses irony and exaggeration to critique — praise of something harmful signals the opposite intent."
    },
 
    // --- Transitions & Structure ---
    {
      category: "Writing",
      difficulty: "easy",
      text: "Which transition best fills the blank? \"The experiment yielded promising results. _______, further research is needed to confirm the findings.\"",
      answers: ["However", "Therefore", "Similarly", "For example"],
      correct: 0,
      explanation: "\"However\" signals a contrast between promising results and the need for more research."
    },
    {
      category: "Writing",
      difficulty: "medium",
      text: "Which transition word signals a cause-and-effect relationship?",
      answers: ["Consequently", "Meanwhile", "Nevertheless", "Furthermore"],
      correct: 0,
      explanation: "\"Consequently\" indicates a result or effect of a previously stated cause."
    },
    {
      category: "Writing",
      difficulty: "medium",
      text: "\"The proposal has significant flaws. _______, the cost estimates are unrealistic. _______, the timeline fails to account for regulatory approval.\"",
      answers: [
        "First / Additionally",
        "However / Therefore",
        "Meanwhile / Similarly",
        "For example / Nevertheless"
      ],
      correct: 0,
      explanation: "\"First\" introduces the first point; \"Additionally\" adds another supporting point."
    },
 
    // --- Data Interpretation in Reading ---
    {
      category: "Data Interpretation",
      difficulty: "medium",
      text: "A bar graph shows that City A's population grew from 50,000 to 75,000 over 10 years, while City B grew from 100,000 to 120,000. Which city had a greater percentage increase?",
      answers: ["City A (50%)", "City B (20%)", "They grew equally", "Cannot be determined"],
      correct: 0,
      explanation: "City A: (75k-50k)/50k = 50%. City B: (120k-100k)/100k = 20%. City A grew more in percentage."
    },
    {
      category: "Data Interpretation",
      difficulty: "hard",
      text: "A scatterplot shows a strong negative correlation between hours of TV watched per day and GPA. Which conclusion is most appropriate?",
      answers: [
        "There is an association between TV watching and lower GPA.",
        "Watching TV causes lower GPA.",
        "Students with low GPAs are lazy.",
        "The data proves TV is harmful."
      ],
      correct: 0,
      explanation: "Correlation ≠ causation. We can only say there is an association, not that one causes the other."
    },
  ]
};
 
// Shuffle answers while tracking the correct one
function prepareQuestion(q) {
  const prepared = { ...q };
  const indices = [0, 1, 2, 3];
  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  prepared.answers = indices.map(i => q.answers[i]);
  prepared.correct = indices.indexOf(q.correct);
  return prepared;
}

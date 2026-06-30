const questions = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Method",
      "Data Order Method",
    ],
    answer: "Document Object Model",
  },
  // {
  //   question: "Which keyword declares a variable that caannot be reassigned?",
  //   options: [
  //     "let",
  //     "const",
  //     "var",
  //     "new"],
  //   answer: "const",
  // },
];

questions.forEach((allQuestion, index) => {
  const currentQuestion = allQuestion;

  questions.forEach((value, index) => {
    const questionTitle = value.question;
    const correctAnswer = value.answer;
    const result = document.querySelector(".js-show-result");

    document.querySelector(".js-title").innerHTML =
      `Question${index + 1}: ${questionTitle}`;

    value.options.forEach((option) => {
      const html = `
            <li class="option-style">
                <button class="js-btn-option btn-option">
                    ${option}
                </button>
            </li>`;
      document.querySelector(".js-options").innerHTML += html;
    });

    const buttons = document.querySelectorAll(".js-btn-option");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.innerText.trim() === correctAnswer) {
          result.classList.remove("wrong-color");
          result.classList.add("correct-color");
          result.innerHTML = "Correct!";
        } else {
          result.classList.remove("correct-color");
          result.classList.add("wrong-color");
          result.innerHTML = "Wrong!";
        }

        buttons.forEach((btn) => {
          btn.disabled = true;

          if (btn.innerText.trim() === correctAnswer) {
            btn.classList.add("correct-answer");
          }

          if (btn === button && btn.innerText.trim() !== correctAnswer) {
            btn.classList.add("wrong-answer");
          }
        });
      });
    });
  });
});
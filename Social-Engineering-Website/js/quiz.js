function submitQuiz() {

    // Correct answers
    const answers = {
        q1: "B",
        q2: "A",
        q3: "A",
        q4: "C",
        q5: "D",
        q6: "B",
        q7: "C",
        q8: "C",
        q9: "B",
        q10: "D"
    };

    let score = 0;

    // Loop through questions
    for (let i = 1; i <= 10; i++) {
        let question = document.querySelector('input[name="q' + i + '"]:checked');

        if (question) {
            if (question.value === answers["q" + i]) {
                score++;
            }
        }
    }

    // Calculate percentage
    let percentage = (score / 10) * 100;

    // Determine pass/fail
    let resultMessage;

    if (percentage >= 60) {
        resultMessage = "You scored " + percentage + "% (" + score + "/10)\n\n✅ You PASSED!";
    } else {
        resultMessage = "You scored " + percentage + "% (" + score + "/10)\n\n❌ You FAILED. Please try again.";
    }

    // Show result
    alert(resultMessage);

    // Reset quiz
    document.getElementById("quizForm").reset();
}

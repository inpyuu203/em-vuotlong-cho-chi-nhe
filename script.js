const questions = [
    { 
        question: "Ngày hôm nay thế nào ngừi đẹp", 
        answers: ["Cũng iu đời", "Hơi khó chịu", "Bình thường thoii", "Hỏi làm gì"], 
        correct: -1 
    },
    { 
        question: "Tí chị chơi tft với em hông", 
        answers: ["Không", "Khồng", "Sao phải chơi", "Cóa"], 
        correct: -1
    },
    { 
        question: "Chuyện hôm qua chị còn giận em hông", 
        answers: ["Hơi hơi", "Hơi đâu mà giận", "Rất giận", "Hết rùi"], 
        correct: -1
    },
        { 
            question: "Chị có muốn em vuốt lông cho không?", 
            answers: ["Không", "Có", "Khồng", "Hông"], 
            correct: 1
        }
    ];
    
    let currentQuestion = 0;
    
    const questionElement = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    
    function loadQuestion() {
        const q = questions[currentQuestion];
        questionElement.innerText = q.question;
        answersContainer.innerHTML = "";
    
        q.answers.forEach((answer, index) => {
            const btn = document.createElement("button");
            btn.innerText = answer;
            btn.onclick = () => handleAnswer(index);
            answersContainer.appendChild(btn);
    

            if (currentQuestion === questions.length - 1 && index !== q.correct) {
                btn.classList.add("wrong");
            }
        });
    }
    
    function handleAnswer(index) {
        if (currentQuestion < questions.length - 1) {
            nextQuestion();
        } else {
            const correctIndex = questions[currentQuestion].correct;
            if (index === correctIndex) {
                document.body.innerHTML = "<h1>Hì thế để em vuốt lông cho chị nhé :>></h1>";
            } else {
                moveWrongAnswer();
            }
        }
    }
    
    function nextQuestion() {
        currentQuestion++;
        loadQuestion();
    }
    
    function moveWrongAnswer() {
        const wrongButtons = document.querySelectorAll(".wrong");
        wrongButtons.forEach(button => {
            const maxX = answersContainer.clientWidth - button.clientWidth - 20;
            const maxY = answersContainer.clientHeight - button.clientHeight - 20;
    
            button.style.position = "absolute"; 
            button.style.top = Math.random() * maxY + "px";
            button.style.left = Math.random() * maxX + "px";
        });
    }
    
    
    loadQuestion();
    

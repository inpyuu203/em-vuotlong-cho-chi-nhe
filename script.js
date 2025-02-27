const answerA = document.getElementById('answer-A');
const answerB = document.getElementById('answer-B');
const correctAnswer = 'Đáp án A';

// Xử lý sự kiện khi người chơi chọn đáp án
answerA.addEventListener('click', checkAnswer);
answerB.addEventListener('click', checkAnswer);

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;

    if (selectedAnswer !== correctAnswer) {
        moveWrongAnswer(event.target);  // Di chuyển nút khi sai
    } else {
        alert('Chúc mừng bạn đã chọn đúng!');
    }
}

// Hàm di chuyển nút ngẫu nhiên quanh màn hình
function moveWrongAnswer(button) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Tạo vị trí ngẫu nhiên cho nút
    const randomX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));

    // Cập nhật vị trí của nút
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

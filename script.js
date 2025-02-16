let playerscore = 0;
        let compscore = 0;
        let currentRound = 0;
        const maxRounds = 5;

        function getComputerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        function updateScores() {
            document.getElementById('playerScore').textContent = `Player: ${playerscore}`;
            document.getElementById('computerScore').textContent = `Computer: ${compscore}`;
            document.getElementById('roundCounter').textContent = `Round ${currentRound}/${maxRounds}`;
        }

        function playRound(playerChoice) {
            if (currentRound >= maxRounds) return;

            const computerChoice = getComputerChoice();
            let resultText = `Player chose ${playerChoice}, Computer chose ${computerChoice}. `;
            let roundResult = '';

            if (playerChoice === computerChoice) {
                roundResult = "It's a tie!";
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                playerscore++;
                roundResult = "Player wins the round!";
            } else {
                compscore++;
                roundResult = "Computer wins the round!";
            }

            currentRound++;
            document.getElementById('result').textContent = resultText + roundResult;
            updateScores();

            if (currentRound === maxRounds) {
                let gameResult = '';
                if (playerscore > compscore) {
                    gameResult = "Player wins the game!";
                } else if (compscore > playerscore) {
                    gameResult = "Computer wins the game!";
                } else {
                    gameResult = "The game is a tie!";
                }
                document.getElementById('gameResult').textContent = gameResult;
                
                // Add reset button
                const resetBtn = document.createElement('button');
                resetBtn.textContent = 'Play Again';
                resetBtn.onclick = () => {
                    playerscore = 0;
                    compscore = 0;
                    currentRound = 0;
                    updateScores();
                    document.getElementById('gameResult').textContent = '';
                    document.getElementById('result').textContent = '';
                    resetBtn.remove();
                };
                document.querySelector('.container').appendChild(resetBtn);
            }
        }

        // Event listeners for buttons
        document.getElementById('rock').addEventListener('click', () => playRound('rock'));
        document.getElementById('paper').addEventListener('click', () => playRound('paper'));
        document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
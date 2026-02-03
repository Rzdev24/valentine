const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        const question = document.getElementById('question');
        const success = document.getElementById('success');
        const floatingHearts = document.getElementById('floatingHearts');

        let noBtnSize = 16;

        // The trick: "No" button runs away and shrinks!
        noBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - 200);
            const y = Math.random() * (window.innerHeight - 100);
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
            
            // Make "No" button smaller
            noBtnSize = Math.max(noBtnSize - 2, 8);
            noBtn.style.fontSize = noBtnSize + 'px';
            
            // Make "Yes" button bigger
            const currentSize = parseInt(yesBtn.style.fontSize || '16');
            yesBtn.style.fontSize = (currentSize + 2) + 'px';
        });

        // When they click "Yes"
        yesBtn.addEventListener('click', () => {
            question.classList.add('hidden');
            success.classList.remove('hidden');
            createFloatingHearts();
        });

        // Create floating hearts animation
        function createFloatingHearts() {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'floating-heart';
                    heart.textContent = '❤️';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 2 + 's';
                    floatingHearts.appendChild(heart);

                    setTimeout(() => heart.remove(), 3000);
                }, i * 200);
            }
        }
document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const texts = [
      'A Software Engineering Student',
      'A University Student',
      'A Problem Solver',
      'A PC Enthusiast',
      'A Son',
      'and a Gamer'
    ];
  
    let index = 0;
  
    function typeText(text, callback) {
      dynamicText.innerHTML = '';
      const typingAnimation = document.createElement('span');
      typingAnimation.className = 'typing-text';
      dynamicText.appendChild(typingAnimation);
  
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        typingAnimation.textContent += text[charIndex];
        charIndex += 1;
        if (charIndex === text.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            callback();
          }, 1000); // Delay before starting the next text
        }
      }, 100); // Speed of typing
    }
  
    function startTypingCycle() {
      typeText(texts[index], () => {
        index = (index + 1) % texts.length;
        startTypingCycle();
      });
    }
  
    startTypingCycle();
  });
  
document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        const texts = [
            "studying EE @ uOttawa.",
            "a MLH hackathon organizer.",
            "excited to learn more."
        ];

        const fixedTextElement = document.createElement('span');
        fixedTextElement.textContent = "Hi, I'm: ";
        fixedTextElement.classList.add('fixed-text');
        typingTextElement.appendChild(fixedTextElement);

        const dynamicTextElement = document.createElement('span');
        typingTextElement.appendChild(dynamicTextElement);

        let textIndex = 0;
        let charIndex = 0;

        const typingSpeed = 65;
        const deletingSpeed = 70;
        const delayBetweenTexts = 2000;
        const delayAfterDelete = 1000;

        function type() {
            if (charIndex < texts[textIndex].length) {
                dynamicTextElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(deleteText, delayAfterDelete);
            }
        }

        function deleteText() {
            if (charIndex > 0) {
                dynamicTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteText, deletingSpeed);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, delayBetweenTexts);
            }
        }

        setTimeout(type, 1500);
    }
});
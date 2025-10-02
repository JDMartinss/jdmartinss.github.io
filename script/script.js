
const textArray = ["Programador Full Stack", "Front-end é arte🖼️", "Back-end é magia 🧙‍♂️"];
const typewriterElement = document.querySelector('.typewriter');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
   
    const currentText = textArray[textIndex];


    const textToShow = isDeleting 
        ? currentText.substring(0, charIndex - 1) 
        : currentText.substring(0, charIndex + 1);

    typewriterElement.textContent = textToShow;

    if (!isDeleting) {
        
        charIndex++;
        if (charIndex > currentText.length) {
           
            isDeleting = true;
           
            setTimeout(type, 1500); 
            return;
        }
    } else {
        
        charIndex--;
        if (charIndex === 0) {
            
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; 
            setTimeout(type, 500); 
            return;
        }
    }

  
    const typingSpeed = isDeleting ? 75 : 150;
    setTimeout(type, typingSpeed);
}


type();
const welcomeMessageElement = document.getElementById('Welcome-message');

        document.addEventListener('DOMContentLoaded', () => {
            // Prompt the user for their name when the page loads
            // Wrapped in a try-catch or check to ensure it doesn't block in some preview environments
            if (window.prompt) {
                const userName = prompt('What is your name?') || 'Guest'; // Default to 'Guest' if they cancel
                welcomeMessageElement.textContent = `Welcome, To Flower House! ${userName}`;
            }
        });

       // 2. Like Button Logic
        // Select all buttons with the class 'like-btn'
        const addToCartButtons = document.querySelectorAll('.add-btn');

        // Loop through each button and add a click event listener
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Find the parent container (.like-section) of the clicked button
                const parentSection = this.parentElement;
                
                // Find the span with class 'count' inside this specific parent
                const countSpan = parentSection.querySelector('.count');
                
                // Get the current number
                let currentCount = parseInt(countSpan.textContent);
                
                // Increase the number
                currentCount++;
                
                // Update the text content with the new number
                countSpan.textContent = currentCount;
            });
        });
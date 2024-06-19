// Chatbot.js
document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput');
    const chatForm = document.getElementById('chatForm');
  
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the form from submitting in the traditional way
      sendMessage();
    });
  
    function sendMessage() {
      const message = userInput.value.trim();
      if (message) {
        appendMessage('user', message);
        userInput.value = '';
  
        // Simulate admin response if sender is user
        setTimeout(() => {
          const adminResponse = generateAdminResponse(message);
          appendMessage('admin', adminResponse);
        }, 1000);
      }
    }
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender);
      messageElement.textContent = message;
      chatbox.appendChild(messageElement);
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  
    function generateAdminResponse(userMessage) {
      // Simple AI response based on user message
      if (userMessage.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you today?';
      } else if (userMessage.toLowerCase().includes('price')) {
        return 'You can find the price details on our Shopping page.';
      } else {
        return 'I am here to help! Can you please provide more details?';
      }
    }
  
    // Logout functionality
    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', function () {
      window.location.href = 'Login.html'; // Redirect to login page
    });
  });
  
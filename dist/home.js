document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const chatBubble = document.getElementById("chat-bubble");
  const popup = document.getElementById("popup");
  const chatForm = document.getElementById("chat-form");
  const chatWindow = document.getElementById("chat-window");
  const messageForm = document.getElementById("message-form");
  const messageInput = document.getElementById("message-input");
  const messagesDiv = document.getElementById("messages");

  // Show popup when chat bubble is clicked
  chatBubble.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });

  // Show chat window when form is submitted
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Process the form data
    const name = document.getElementById("name").value;
    // Hide the popup and show the chat window
    popup.classList.add("hidden");
    chatWindow.classList.remove("hidden");
    // Display welcome message
    addMessage(`Welcome to the chat, ${name}! Please type your message below and wait for an agent to join...`, 'System');
  });

  // Handle message form submission
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Capture and display the message
    const message = messageInput.value;
    if (message.trim() !== "") {
      addMessage(`You: ${message}`);
      messageInput.value = "";
    }
  });

  // Function to add a message to the messages div
  function addMessage(message, sender = 'You') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('p-2', 'mb-2', 'rounded', 'bg-[#E2E8F0]', 'text-[#2D2D2D]', 'font-semibold');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  // Hide popup and chat window when clicking outside of them
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.add("hidden");
    }
  });

  chatWindow.addEventListener("click", (event) => {
    if (event.target === chatWindow) {
      chatWindow.classList.add("hidden");
    }
  });
});

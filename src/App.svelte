<script>
  import { onMount, afterUpdate } from 'svelte';
  import { writable } from 'svelte/store';

  const messageCount = writable(0);
  let messageText = '';
  let messages = [];
  let isDarkMode = false;
  let isLoading = false;

  async function loadMessages() {
    // You can make an HTTP request here to load initial messages from the server if needed
  }

  async function addMessage(message) {
    // You can make an HTTP request here to send the new message to the server if needed
    messages = [...messages, message];
    messageCount.update(n => n + 1); // Increment total message count
  }

  onMount(loadMessages);

  function handleSubmit(event) {
    event.preventDefault();
    if (messageText.trim() !== '') {
      addMessage(messageText);
      messageText = ''; // Clear the input field after posting
    }
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
      isLoading = true;
      setTimeout(() => {
      
        addMessage(newMessage);
        isLoading = false;
      }, 1000);
    }
  }

  afterUpdate(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="{`centered-container ${isDarkMode ? 'dark-mode' : ''}`}">
  <h1>@iLostMyipad</h1>
  <div class="message-count-container">
    <img src="build/book.svg" alt="Book Icon" class="book-icon" />
    <span>{$messageCount}</span>
  </div>
  <button on:click={toggleDarkMode} style="margin-bottom: 10px;">Dark Mode</button>
  <form on:submit={handleSubmit}>
    <input type="text" bind:value={messageText} placeholder="post a message.." required>
    <button type="submit">POST</button>
  </form>
  <ul class="message-list">
    {#each messages as message}
      <li class="bubble" style="background-color: {getRandomColor()}">{message}</li>
    {/each}
  </ul>
</div>

<style>
  .dark-mode {
    background-color: #333;
    color: white;
  }

  .centered-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; 
  }

  .message-list {
    list-style-type: none;
    padding-inline-start: 0;
  }

  .bubble {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .message-count-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .book-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
</style>















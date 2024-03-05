<script>
  export let todo;

 
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

 
  let bubbleColor = getRandomColor();

  
  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }
</script>

<li style="text-align: center;">
  <span class="bubble" style="background-color: {bubbleColor}; color: {isDarkMode ? 'black' : 'white'}">{todo.text}</span>
</li>

<style>
  li {
    list-style-type: none;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: bubbleColor;
    display: flex;
    align-items: center;
  }

  .bubble {
    padding: 8px 12px;
    border-radius: 15px;
    font-size: 16px;
    margin: 0 auto; /* Center the bubble horizontally */
  }
</style>



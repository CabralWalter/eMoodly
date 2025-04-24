document.getElementById('moodForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('moodInput');
    const mood = input.value.trim();
    if (mood) {
      const li = document.createElement('li');
      li.textContent = `${new Date().toLocaleString()} - ${mood}`;
      li.className = 'bg-white p-2 rounded shadow';
      document.getElementById('moodList').appendChild(li);
      input.value = '';
    }
  });
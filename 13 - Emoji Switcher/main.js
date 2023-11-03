const emojis = ["😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗", "😛", "😏", "🤥", "😴", "🥺", "😧", "🤗", "🤩",
  "😎", "🥳", "😍", "😱", "🤓", "😷", "🥴", "😳", "🤯", "🤫", "🤑", "😪", "😴", "😵", "😶‍🌫️", "🥵", "🥶", "😳", "🤪", "😵", "🥴",
  "😵‍💫", "😠", "😡", "🤮", "🤢", "🤒", "😷", "🤬", "🤧", "😇", "🥳", "😋", "😲", "🤖", "👽", "🎃", "💀", "👻", "🤖", "🚀", "🌟",
  "🙃", "😇", "😍", "😊", "😌", "😚", "😉", "😞", "😔", "😢", "😭", "😩", "😨", "😪", "😰", "😅", "😓", "😥", "🥺", "😖", "😣"];


const emojiElement = document.getElementById('emojiBtn');

let emojiIndex = 0;

emojiElement.addEventListener('click', () => {
  emojiIndex = Math.floor(Math.random() * emojis.length);
  emojiElement.innerHTML = emojis[emojiIndex];
})

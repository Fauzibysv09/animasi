const container = document.getElementById('container');

function createText(x, y) {
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = 'I LOVE YOU';
    text.style.top = `${y}%`;
    text.style.left = `${x}%`;
    text.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    text.addEventListener('click', () => createText(x, y));
    container.appendChild(text);
}

function spreadText(event) {
    const rect = event.target.getBoundingClientRect();
    const offsetX = (Math.random() - 0.5) * 400; // Increased range for wider spread
    const offsetY = (Math.random() - 0.5) * 400; // Increased range for wider spread
    const x = (rect.left + offsetX) / window.innerWidth * 100;
    const y = (rect.top + offsetY) / window.innerHeight * 100;
    createText(x, y);
}

document.querySelector('.text').addEventListener('click', spreadText);

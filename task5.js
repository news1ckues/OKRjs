const output = document.getElementById('output');
let text = '';

document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        text = text.slice(0, -1);
    } else if (event.key === 'Enter') {
        text += '\n';
    } else if (event.key === ' ') {
        text += ' ';
    } else if (event.key.length === 1) {
        text += event.key;
    }
    
    output.textContent = text.replace(/ /g, '_');
});
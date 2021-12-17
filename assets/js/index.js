// Color selector
const colorSelected = document.getElementById('bg-color-selector');
const backgroundColor = document.getElementById('bg-color');

colorSelected.addEventListener('input', (event) => {
    backgroundColor.style.backgroundColor = event.target.value;
});

// highlight.js
const highlightButton = document.querySelector('#highlight-btn');
const codeArea = document.querySelector('.code-editor__wrapper');
const language = document.querySelector('#languages');

const applyHighlight = () => {
    const code = codeArea.innerText;
    console.log(code)
    codeArea.innerHTML = `<code class="code-editor__textarea hljs ${language.value}" id="code-editor" spellcheck="false" contenteditable="true"></code>`;
    codeArea.querySelector('code').textContent = code;
    console.log(codeArea.querySelector('code'))
    hljs.highlightElement(codeArea.querySelector('code'));
}

highlightButton.addEventListener('click', () => {
    applyHighlight();
});
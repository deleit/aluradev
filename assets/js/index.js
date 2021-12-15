// Color selector
const colorSelected = document.getElementById('bg-color-selector');
const backgroundColor = document.getElementById('bg-color');

colorSelected.addEventListener('change', (event) => {
    backgroundColor.style.backgroundColor = event.target.value;
});
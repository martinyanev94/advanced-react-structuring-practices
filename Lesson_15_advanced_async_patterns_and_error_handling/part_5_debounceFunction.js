function debounce(func, wait) {
    let timeout;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Usage with an input event
const inputField = document.getElementById('search');
inputField.addEventListener('input', debounce(() => {
    console.log('Fetch data based on input value!');
}, 500));

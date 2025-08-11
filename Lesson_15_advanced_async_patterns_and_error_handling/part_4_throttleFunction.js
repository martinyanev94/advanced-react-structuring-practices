function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const now = Date.now();

        if (!lastRan || now - lastRan >= limit) {
            func.apply(context, arguments);
            lastRan = now;
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                func.apply(context, arguments);
            }, limit - (now - lastRan));
        }
    };
}

// Usage with a scroll event
window.addEventListener('scroll', throttle(() => {
    console.log('Scroll event triggered!');
}, 1000));

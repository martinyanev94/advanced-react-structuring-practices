const controller = new AbortController();
const signal = controller.signal;

async function fetchDataWithAbort(url) {
    try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', error);
        }
    }
}

// Usage scenario
const fetchPromise = fetchDataWithAbort("https://api.example.com/data");
controller.abort(); // This would cancel the fetch

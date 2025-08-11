async function fetchDataWithBoundary(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error caught in boundary:", error);
        // Handle the error accordingly, like displaying a message to the user
    }
}

async function fetchMultipleData() {
    const urls = [
        "https://api.example.com/data1",
        "https://api.example.com/data2",
        "https://api.example.com/data3"
    ];
    const promises = urls.map(fetchDataWithBoundary);
    return Promise.all(promises);
}

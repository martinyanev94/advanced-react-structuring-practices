class ErrorLogger {
    static logError(error) {
        // Logic to send error data to a logging endpoint
        console.error("Logging error:", error);
        // Here we could implement a fetch to our logging server
    }
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        return await response.json();
    } catch (error) {
        ErrorLogger.logError(error);
        // Possibly rethrow or handle differently
    }
}

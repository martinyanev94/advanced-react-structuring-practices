async function fetchWithConcurrency(limit, urls) {
    const results = [];
    const executing = new Set(); 

    for (const url of urls) {
        const promise = fetch(url).then(response => response.json());
        results.push(promise);

        executing.add(promise);
        promise.finally(() => executing.delete(promise));

        if (executing.size >= limit) {
            await Promise.race(executing); // Wait for one promise to settle
        }
    }

    return Promise.all(results); // Ensure all results are complete
}

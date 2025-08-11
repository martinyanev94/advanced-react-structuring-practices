// app.js
async function loadFeature() {
    const { featureFunction } = await import('./feature.js');
    featureFunction();
}

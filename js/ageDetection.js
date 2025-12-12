// Age Detection using face-api.js with real age estimation
let faceApiLoaded = false;

// Initialize face-api.js models
async function initAgeDetection() {
    try {
        console.log('Loading face-api.js models...');

        // Load models from CDN
        const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';

        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL)
        ]);

        faceApiLoaded = true;
        console.log('face-api.js models loaded successfully');
        return true;
    } catch (error) {
        console.error('Error loading face-api.js models:', error);
        return false;
    }
}

// Estimate age from image using face-api.js
async function estimateAge(imageElement) {
    if (!faceApiLoaded) {
        const success = await initAgeDetection();
        if (!success) {
            throw new Error('Failed to load AI models');
        }
    }

    try {
        console.log('Analyzing face...');

        // Detect face and estimate age/gender
        const detection = await faceapi
            .detectSingleFace(imageElement, new faceapi.TinyFaceDetectorOptions())
            .withAgeAndGender();

        if (!detection) {
            throw new Error('얼굴을 찾을 수 없습니다. 정면 얼굴이 잘 보이는 사진을 올려주세요.');
        }

        // Get estimated age (round to nearest integer)
        const estimatedAge = Math.round(detection.age);

        // Get confidence score from detection
        const confidence = detection.detection.score;

        console.log(`Age estimated: ${estimatedAge}, Confidence: ${(confidence * 100).toFixed(1)}%`);

        return {
            age: estimatedAge,
            confidence: confidence,
            gender: detection.gender,
            genderProbability: detection.genderProbability,
            facesDetected: 1
        };

    } catch (error) {
        console.error('Error estimating age:', error);
        throw error;
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAgeDetection, estimateAge };
}

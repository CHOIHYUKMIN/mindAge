// Share functionality using html2canvas

// Download result as image
async function downloadResultImage() {
    try {
        const resultSection = document.getElementById('result-content');

        // Use html2canvas to capture the result section
        const canvas = await html2canvas(resultSection, {
            backgroundColor: '#0f0f23',
            scale: 2, // Higher quality
            logging: false
        });

        // Convert canvas to blob
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            const timestamp = new Date().toISOString().split('T')[0];
            link.download = `mental_age_result_${timestamp}.png`;
            link.href = url;
            link.click();

            // Clean up
            setTimeout(() => URL.revokeObjectURL(url), 100);
        }, 'image/png');

        return true;
    } catch (error) {
        console.error('Error downloading image:', error);
        alert('이미지 저장에 실패했습니다. 다시 시도해주세요.');
        return false;
    }
}

// Copy link to clipboard
async function copyLinkToClipboard() {
    try {
        const url = window.location.href;

        // Use Clipboard API if available
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(url);
            showCopyNotification();
            return true;
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = url;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();

            const success = document.execCommand('copy');
            document.body.removeChild(textarea);

            if (success) {
                showCopyNotification();
                return true;
            } else {
                throw new Error('Copy failed');
            }
        }
    } catch (error) {
        console.error('Error copying link:', error);
        alert('링크 복사에 실패했습니다.');
        return false;
    }
}

// Show notification when link is copied
function showCopyNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = '✓ 링크가 복사되었습니다!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
        z-index: 10000;
        animation: slideInDown 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Share via Web Share API (mobile)
async function shareResult(physicalAge, mentalAge, message) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: '마음의 나이 계산기',
                text: `내 실물 나이는 ${physicalAge}세, 마음의 나이는 ${mentalAge}세!\n${message}\n\n나도 테스트하기 👉`,
                url: window.location.href
            });
            return true;
        } catch (error) {
            // User cancelled or error occurred
            console.log('Share cancelled or failed:', error);
            return false;
        }
    } else {
        // Web Share API not supported, use fallback
        return copyLinkToClipboard();
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        downloadResultImage,
        copyLinkToClipboard,
        shareResult
    };
}

(function() {
    'use strict';

    const removeAds = () => {
        const adSelectors = [
            '.video-ads.ytp-ad-module',
            'ytd-ad-slot-renderer',
            'ytd-display-ad-renderer',
            '#player-ads',
            '.style-scope ytd-companion-slot-renderer'
        ];

        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });

        const video = document.querySelector('video.html5-main-video');
        const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
        
        if (skipButton) {
            skipButton.click();
        } else if (video && document.querySelector('.ad-showing')) {
            video.playbackRate = 16.0;
            video.currentTime = video.duration || 0;
        }
    };

    // Safely wait until document.body exists before observing
    const initObserver = () => {
        if (!document.body) {
            setTimeout(initObserver, 50);
            return;
        }

        const observer = new MutationObserver(() => {
            removeAds();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    };

    initObserver();
})();
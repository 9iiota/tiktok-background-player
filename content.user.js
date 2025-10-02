// ==UserScript==
// @name         Tiktok Background Player
// @namespace    https://github.com/9iiota/tiktok-background-player
// @version      1.0.0
// @description  Prevent TikToks from pausing when the tab is in the background.
// @match        *://*.tiktok.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function ()
{
    'use strict';

    (async () =>
    {
        const response = await fetch('https://github.com/9iiota/tiktok-background-player/content.js'); // TODO: change URL to your content.js location
        const code = await response.text();
        console.log('Fetched code:', code); // Log the fetched code for debugging
        // eval(code);
    })();
})();
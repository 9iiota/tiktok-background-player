# TikTok Background Player

TikTok Background Player is a small tool that prevents TikToks from pausing when your browser tab is in the background. It works as both a **Chrome extension** and a **Tampermonkey userscript**.

---

## Features

- Keeps TikTok videos playing even when switching tabs or minimizing the browser.
- Lightweight and runs automatically at page load.
- Easy to install and use.

---

## Installation

### Chrome Extension
Install the Chrome extension directly from the Chrome Web Store:

[Install Chrome Extension](https://chrome.google.com/webstore/detail/YOUR_CHROME_WEBSTORE_ID)

*(Replace `YOUR_CHROME_WEBSTORE_ID` with your extension’s actual ID.)*

### Tampermonkey Script
For users who prefer a userscript, install via Tampermonkey:

[Install Tampermonkey Script](https://raw.githubusercontent.com/9iiota/tiktok-background-player/main/content.user.js)

- Click the link.
- Tampermonkey will detect it as a userscript and prompt you to install.
- Works on all `*.tiktok.com` URLs.

---

## Usage

Once installed, the extension or script will automatically prevent TikTok from pausing videos. No configuration is required.

---

## Development

- `content.js`: Core script that overrides the visibility API and blocks visibility events.  
- `content.user.js`: Tampermonkey userscript that loads `content.js`.  
- `manifest.json`: Chrome extension manifest.  
- `icons/`: Folder containing extension icons in multiple sizes.  

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.


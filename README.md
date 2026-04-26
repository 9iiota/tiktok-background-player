# Background Player for TikTok Chrome Extension / Tampermonkey Script

[Chrome Web Store](https://chromewebstore.google.com/detail/background-player-for-tik/gfggkpmkigdofdafcglcnlebeekcihjl)

---

## Description

Background Player for TikTok is a Chrome extension and Tampermonkey userscript that prevents TikTok videos from pausing when the tab is in the background. By overriding visibility properties and intercepting visibility events, the script ensures videos continue playing even when you switch tabs or minimize the browser.

---

## Features

* Prevent TikTok videos from pausing when the tab is not active.
* Works with all TikTok pages.
* Lightweight content script that runs at `document-start` to ensure early execution.
* Compatible as both a Chrome extension and a Tampermonkey/Greasemonkey userscript.

---

## Installation

### Chrome Extension

1. Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/background-player-for-tik/gfggkpmkigdofdafcglcnlebeekcihjl).
2. Open TikTok in your browser. Videos will now continue playing when the tab is in the background.

### Tampermonkey / Userscript

1. Install [Tampermonkey](https://www.tampermonkey.net/) or a compatible userscript manager.
2. Install the script directly via this link: [Background Player for TikTok](https://raw.githubusercontent.com/9iiota/background-player-for-tiktok/main/content.user.js).
3. Visit TikTok — videos will continue playing in the background automatically.

---

## Usage

1. Open TikTok in your browser.
2. Switch tabs or minimize the browser.
3. Videos will keep playing without interruption.

---

## Development

### Folder Structure

* `content.js` - Overrides document visibility properties and blocks visibility events.
* `content.user.js` - Userscript wrapper for Tampermonkey.
* `manifest.json` - Chrome extension manifest file.
* `icons/` - Folder containing extension icons.

### Running Locally

1. Clone the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the cloned repository folder.
5. Open TikTok and test background playback.

---

## Contributing

Contributions are welcome! Fork the repository and submit pull requests for improvements, bug fixes, or additional features.

---

## License

This project is open-source and licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## Links

* [GitHub Repository](https://github.com/9iiota/background-player-for-tiktok)
* [Chrome Web Store](https://chromewebstore.google.com/detail/background-player-for-tik/gfggkpmkigdofdafcglcnlebeekcihjl)
* [Tampermonkey Script Install Link](https://raw.githubusercontent.com/9iiota/background-player-for-tiktok/main/content.user.js)

function overrideVisibility()
{
    // Override visibility properties before TikTok scripts run
    Object.defineProperty(document, "hidden", { value: false, writable: false });
    Object.defineProperty(document, "visibilityState", { value: "visible", writable: false });
    Object.defineProperty(document, "webkitVisibilityState", { value: "visible", writable: false });

    // Intercept events so TikTok never "sees" visibility changes
    const blockEvents = ["visibilitychange", "webkitvisibilitychange", "blur"];
    blockEvents.forEach(event =>
    {
        window.addEventListener(event, e => e.stopImmediatePropagation(), true);
    });
}

overrideVisibility();
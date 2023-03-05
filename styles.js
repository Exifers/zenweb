// use MutationObserver to listen for url changes
let currentUrl = window.location.href;
let previousUrl = undefined;
const observer = new MutationObserver(() => {
    if (location.href !== previousUrl) {
        previousUrl = location.href;
        window.dispatchEvent(new Event('locationchange'));
    }
});
observer.observe(document, { subtree: true, childList: true });

document.body.setAttribute('data-url', window.location.href);
window.addEventListener('locationchange', () => {
    document.body.setAttribute('data-url', window.location.href)
});
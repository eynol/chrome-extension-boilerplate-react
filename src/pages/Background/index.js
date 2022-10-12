console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onInstalled.addListener(async () => {
    // Intentionally create an invalid item, to show off error checking in the
    // create callback.
    console.log("About to try creating an invalid item - an error about " +
        "item 999 should show up");
    chrome.contextMenus.create({ "title": "Oops", id: 23, "parentId": 999 }, function () {
        if (chrome.extension.lastError) {
            console.log("Got expected error: " + chrome.extension.lastError.message);
        }
    });

})
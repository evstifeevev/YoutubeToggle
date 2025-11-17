chrome.action.onClicked.addListener(async function (tab) {
    // Get the current active tab in the current window
    if (!tab || !tab.id) {
        return;
    }
    await toggleUrl(tab);
});

chrome.commands.onCommand.addListener(async function (command) {
    if (!["toggleYoutubeMusic", "toggleYoutubeShort"].includes(command)) {
        return;
    }

    // Get the current active tab in the current window
    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });

    await toggleUrl(tab, command);
});

async function toggleUrl(tab, command) {
    if(!tab || !tab.id) {
        return;
    }

    if (typeof toggleUrlHandler !== "function") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content-script.js"], // injects the script if not already injected
        });
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (command) => toggleUrlHandler(command), // calls the function in the tab context
        args: [command],
    });
}
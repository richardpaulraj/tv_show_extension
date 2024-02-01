chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
    shows: [],
  })
  chrome.contextMenus.create({
    title: "Search Movies",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  })
  chrome.contextMenus.create({
    title: "Read this Text",
    id: "contextMenu2",
    contexts: ["page", "selection"],
  })
  chrome.contextMenus.onClicked.addListener((e) => {
    if (e.menuItemId === "contextMenu1") {
      fetch(`https://api.tvmaze.com/search/shows?q=${e.selectionText}`)
        .then((res) => res.json())
        .then((data) => {
          chrome.storage.local.set({
            shows: data,
          })
        })
    } else if (e.menuItemId === "contextMenu2") {
      chrome.tts.speak(e.selectionText)
    }
  })
})

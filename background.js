chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  })
  chrome.contextMenus.onClicked.addListener((e) => {
    console.log(e)
    chrome.tabs.create({
      url: `https://reelgood.com/search?q=${e.selectionText}`,
    })
  })
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg)
  console.log(sender)
  sendResponse("Received message from Background")
})

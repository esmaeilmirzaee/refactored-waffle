chrome.storage.local.get(['timer'], (res) => {
    console.log(res.timer);
    document.getElementById('options_time').innerText = res.timer ?? 0;
});

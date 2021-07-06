chrome.storage.sync.get(['timer', 'delay'], (res) => {
    console.log(res.timer);
    document.getElementById('options_time').innerText = res.timer ?? 0;
    document.getElementById('delay').value = res.delay ?? 1000;
});

chrome.storage.sync.set({
    timer: new Date().toLocaleTimeString(),
    delay: document.getElementById('delay').value,
});

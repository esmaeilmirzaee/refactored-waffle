function updateTime() {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    document.getElementById('clock').innerText = time;
    document.getElementById('date').textContent = date;

    chrome.storage.local.set({ timer: time }, () => {
        console.log(`Timer is set to ${time}.`);
    });

    chrome.action.setBadgeText({
        text: time,
    });

    chrome.storage.sync.get(['delay'], (res) => {
        document.getElementById('date', res.delay ?? 0);
        console.log(res.delay);
    });
}

updateTime();
setInterval(updateTime, 1000);

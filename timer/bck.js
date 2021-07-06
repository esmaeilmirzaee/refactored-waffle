chrome.alarms.create({ delayInMinutes: 1 / 60 });

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(['timer'], (res) => {
        let time = res.timer ?? 0;
        chrome.storage.local.set({
            timer: time + 1,
        });
    });

    this.registration.showNotification('PomodoroTime', {
        body: 'A second has passed.',
        icon: 'icon.png',
    });
});

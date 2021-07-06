chrome.alarms.create({ delayInMinutes: 1 / 60 });

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(['timer'], (res) => {
        let time = res.timer ?? 0;
        chrome.storage.local.set({
            timer: time + 1,
        });
    });

    chrome.storage.sync.get(['timer', 'delay'], (res) => {
        let delayTime = res.delay ?? 0;
        let time = res.timer ?? 0;
        if (delayTime > 0) {
            this.registration.showNotification('PomodoroTime', {
                body: `${delayTime} seconds has passed.`,
                icon: 'icon.png',
            });
        }
    });
});

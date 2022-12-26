let clearWatchLater = async function () {
    document.getElementsByTagName("yt-icon-button")[16].click()

    await setTimeout(() => {
        console.log("waiting")
    }, 1000);

    document.getElementsByTagName("ytd-menu-service-item-renderer")[2].click()
}


setInterval(() => {
    clearWatchLater();
}, 1000);

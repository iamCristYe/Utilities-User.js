let clearYouTubeMusicPlaylist = async function () {
    document.getElementsByTagName("tp-yt-paper-icon-button")[6].click();

    await setTimeout(() => {
        console.log("waiting")
    }, 1000);

    document.getElementsByTagName("ytmusic-menu-service-item-renderer")[2].click();
}


setInterval(() => {
    clearYouTubeMusicPlaylist();
}, 1000);

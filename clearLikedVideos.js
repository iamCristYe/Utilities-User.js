index = 16;

let clearLikedVideos = async function () {
    document.getElementsByTagName("yt-icon-button")[index].click()
    index++;

    await setTimeout(() => {
        console.log("waiting")
    }, 1000);

    document.getElementsByTagName("ytd-menu-service-item-renderer")[3].click()
}


setInterval(() => {
    clearLikedVideos();
}, 1000);

const progressArray = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-resume-playback-renderer")
const result = []
for (const element of progressArray) {
    if (element.style.width != "100%") {
        const videoIndex = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("#index").innerText
        const videoTitle = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("#video-title").innerText
        result.push([videoIndex, videoTitle, element.style.width])
    }
}
result.length ? console.log(result) : console.log("All watched!")

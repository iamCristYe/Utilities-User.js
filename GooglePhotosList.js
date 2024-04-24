const getInfoArray = () => {
    const url = window.location.href
    // Using URL object
    const urlObject = new URL(url);
    const lastSegment = urlObject.pathname.split('/').pop();
    //console.log(lastSegment);

    const result = []
    for (const sideWindow of document.getElementsByTagName("c-wiz")[0].querySelectorAll(".WUbige")) {


        if (sideWindow.dataset.p.indexOf(lastSegment) > 0) {
            //console.log(sideWindow)
            //console.log(sideWindow.dataset.p)
            //console.log(sideWindow.innerText)
            //console.log(sideWindow.querySelectorAll(".rCexAf"))
            for (const textBox of sideWindow.querySelectorAll(".rCexAf")) {
                //console.log(textBox.innerText)
                result.push(textBox.innerText)
            }
            return result
        }
    }
}


getPhotoArray = () => {
    document.getElementsByClassName("SxgK2b Cwtbxf")[document.getElementsByClassName("SxgK2b Cwtbxf").length - 1].click()

    const current = getInfoArray()
    result.push(current)
    console.log(result)
    console.log(current)

}

const result = []
setInterval(getPhotoArray, 1000)

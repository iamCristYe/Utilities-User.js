const getInfoArray = () => {
    const url = window.location.href;
    // Using URL object
    const urlObject = new URL(url);
    const lastSegment = urlObject.pathname.split('/').pop();
    //console.log(lastSegment);

    const result = [];
    result.push(lastSegment);
    for (const sideWindow of document.getElementsByTagName("c-wiz")[0].querySelectorAll(".WUbige")) {
        if (sideWindow.dataset.p.indexOf(lastSegment) > 0) {
            //console.log(sideWindow);
            //console.log(sideWindow.dataset.p);
            //console.log(sideWindow.innerText);
            //console.log(sideWindow.querySelectorAll(".rCexAf"));
            for (const textBox of sideWindow.querySelectorAll(".rCexAf")) {
                //console.log(textBox.innerText);
                result.push(textBox.innerText);
            }
            return result;
        }
    }
};

const getPhotoArray = async () => {
    const current = getInfoArray();
    result.push(current);
    console.log(result.length);
    //console.log(current);

    if (result.length % 100 == 0) {




        // Convert JSON object to string
        const jsonStr = JSON.stringify(result);

        // Create a blob with the JSON string
        const blob = new Blob([jsonStr], { type: 'application/json' });

        // Create a link element
        const a = document.createElement('a');



        // 获取当前时间
        const currentTime = new Date();

        // 获取月、日、小时和分钟，并将它们转换为两位数字符串
        const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // 月份是从0开始的，所以需要加1
        const day = String(currentTime.getDate()).padStart(2, '0');
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');

        // 设置下载属性，文件名格式为MMDDHHMM
        a.download = `GPinfo.${month}${day}-${hours}${minutes}.${result.length}.json`;
        // Create a URL for the blob and set it as the href attribute
        a.href = window.URL.createObjectURL(blob);

        // Append the link to the document body
        document.body.appendChild(a);

        // Programmatically click the link to trigger the download
        a.click();

        // Remove the link from the document
        document.body.removeChild(a);
    }

    document.getElementsByClassName("SxgK2b Cwtbxf")[document.getElementsByClassName("SxgK2b Cwtbxf").length - 1].click();

};

const result = [];
const main = async () => {
    while (true) {
        try {
            await getPhotoArray();
        } catch (error) {
            console.error('Error in getPhotoArray:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Optional delay to avoid rapid looping
    }
};

main();

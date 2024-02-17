// let parentElement = document.querySelector('.css1');

// parentElement.firstElementChild.style.display = "block"

function loadedImages() {
    fetch('https://script.google.com/macros/s/AKfycbxsWcj5Kue8IM2E4YVPRS1x1JAOSe5pQ3Cs3McUT2MBg2LP2TSHXS2ShE-KckPKeJq4/exec')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let layout = '';
            data.data.forEach(function (item, index) {
                let imageID = item.img_id;
                console.log(imageID)
                layout += `
                <div class="css ${index === 0 ? 'active' : ''}">
                    <img src="https://lh3.googleusercontent.com/d/${imageID}"
                        alt="">
                </div>`;
            });
            document.getElementById("renderImage").innerHTML = layout;
        })
}

loadedImages()

let imageVal = 0;
function imageSwitch(a) {
    if (imageVal > -1) {
        let imgNum = document.querySelectorAll(".css").length;
        let currentImage = document.querySelectorAll(".css")[imageVal];
        let nextImage = document.querySelectorAll(".css")[imageVal + 1];

        if (imageVal < imgNum - 1) {
            currentImage.style.display = "none";
            nextImage.style.display = "flex";
            imageVal += 1;
        }
        else {
            imageVal = 0;
            document.querySelectorAll(".css")[imgNum - 1].style.display = "none";
            document.querySelectorAll(".css")[0].style.display = "flex";
        }
    }
    else if (a.value == "next") {
        let imgNum = document.querySelectorAll(".css").length;
        let currentImage = document.querySelectorAll(".css")[imageVal];
        let nextImage = document.querySelectorAll(".css")[imageVal + 1];

        if (imageVal < imgNum - 1) {
            currentImage.style.display = "none";
            nextImage.style.display = "flex";
            imageVal += 1;
        }
        else {
            imageVal = 0;
            document.querySelectorAll(".css")[imgNum - 1].style.display = "none";
            document.querySelectorAll(".css")[0].style.display = "flex";
        }
    }
}

function loop() {
    let img = document.querySelector(".css2")
    let interval = setInterval(imageSwitch, 5000)

    img.addEventListener("mousedown", function () {
        clearInterval(interval)
    })
    img.addEventListener("mouseup", function () {
        interval = setInterval(imageSwitch, 5000)
    })
}
loop()
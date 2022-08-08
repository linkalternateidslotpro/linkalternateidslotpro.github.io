var data = [];

var nameData = {
    prefix: ["input_Server_", "server_Data_", "Account_", "server-1_", "server-2_", "server-3_"],
    word: [
        "Poker_",
        "Slot_",
        "Togel_",
        "Casino_",
        "Dingdong_",
    ],
    suffix: [
        "UNLOCK",
        "OPEN",
        "GET"

    ],
    suplay: [
        "_winner",
        "_hoky",
        "_winrate",
        "_ID-Pro",
        "_rtp",
        "_JackPot",
        "_ID-Pro",
        "_MaxWin",
        "_priority",
        "_platinum"

    ]
};
var display = document.querySelectorAll(".display")[0];
var loaderBar = document.querySelectorAll(".loader .bar")[0];
var loaderText = document.querySelectorAll(".loader .text")[0];
var words = makeInstallerFiles();
drawInstallerFiles(words);
setInterval(function () {
    for (var i = 0; i < words.length; i++) {
        if (words[i].percent < 100) {
            words[i].percent += Math.floor(Math.random() * 25);
            loaderBar.style.display = "block";
            if (words[i].percent >= 100) {
                words[i].percent = 100;
                if (words.length - 1 !== i) loaderBar.style.display = "none";
            }
            break;
        }
    }
    drawInstallerFiles(words);
}, 200);
function drawInstallerFiles(words) {
    display.innerHTML = "";
    words.forEach(function (word) {
        if (word.percent > 0) {
            display.innerHTML +=
                '<div class="line">' + word.word + "..." + word.percent + "%</div>";
            loaderText.innerHTML = word.word + "..." + word.percent + "%";
            loaderBar.style.width = word.percent + "%";
            if (word.percent < 100) display.scrollTop = 100000;
        }
    });
}

function makeInstallerFiles() {
    var arr = [];
    for (var i = 0; i < 20; i++) {
        var prefix = chooseRandomValue(nameData.prefix);
        var word = chooseRandomValue(nameData.word);
        var suffix = chooseRandomValue(nameData.suffix);
        var suplay = chooseRandomValue(nameData.suplay);
        arr.push({
            word: prefix + word + suffix + suplay,
            percent: 0
        });
    }
    return arr;
}

function chooseRandomValue(arr) {
    min = 0;
    max = arr.length;
    return arr[Math.floor(Math.random() * (max - min) + min)];
}

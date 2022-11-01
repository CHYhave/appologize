let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click', function () {
    card.setAttribute("style", "opacity:0");
    let x = document.createElement("audio");
    x.setAttribute("src", "Jurrivh - Lonely Day.mp3");
    x.setAttribute("autoplay", "autoplay");

    let i = 0
    let str = '贝贝对不起，前两天是我不对a我不该因为忙不理你还凶你，不应该冷战，不该在你委屈的时候还忙自己的事a更不应该说气话拉黑删除你a对不起,原谅我好不好a我们和好好不好,我真的知道错了aa-----你的宝'
    let strp = ''

    function print() {
        if (str[i] == 'a') {
            document.getElementById("box").innerHTML = strp + "<br><br>+'|'";
            strp += "<br><br>";
        }
        else {
            strp += str[i];
            box.innerHTML = strp + '|';
        }
        i++;
    }
    setTimeout(() => {
        let printid = setInterval(() => {
            print();
            if (i == str.length)
                clearInterval(printid);
        }, 190);
    }, 5500);
    function appearBackground() {
        setTimeout(() => {
            box.style.opacity = 1
        }, 1500)
    }
    appearBackground()

})

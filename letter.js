let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click', function () {
    card.setAttribute("style", "opacity:0");
    let x = document.createElement("audio");
    x.setAttribute("src", "Jurrivh - Lonely Day.mp3");
    x.setAttribute("autoplay", "autoplay");

    let i = 0
    let str = '鱼鱼对不起，昨天不应该在你不确定被爱的时候胡思乱想，自我封闭。你那时候应该是是缺爱的，对不起没有好好地回应你，我错了鱼鱼，我真诚的向鱼鱼道歉！宝宝，原谅我吧！-----你的猪猪🐷'
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
            if (i == str.length) {
                strp[i - 1] = '';
                document.getElementById("box").innerHTML = strp
                clearInterval(printid);
            }
        }, 190);
    }, 5500);
    function appearBackground() {
        setTimeout(() => {
            box.style.opacity = 1
        }, 1500)
    }
    appearBackground()

})

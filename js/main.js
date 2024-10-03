
let container = document.querySelector('.tasbeh .container')


let sabah = [
     {zekr : "سُبْحَانَ اللهِ(33)" , amount : 0},
     {zekr : "الْحَمْدُ لِلَّـهِ(33)" , amount :0},
     {zekr : "اللهُ أكبر(33)" , amount:0},
     {zekr : "لا إلهَ إلَّا اللهُ، وَحْدَه لا شَريكَ له، له المُلكُ وله الحَمدُ، وهو على كُلِّ شَيءٍ قَديرٌ(1)" , amount:0}
 ]



function setitems(){
    let item =""
    for (let i = 0; i < sabah.length; i++) {
       item += `
         <div class="card">
                <img src="images/tasbeh.jpg" alt="">
                <div class="contain">
                    <b>${sabah[i].zekr}</b>
                    <div class="sbha">
                        <p onclick='count(${i} , ${sabah[i].amount + 1})'>+</p>
                        <span>${sabah[i].amount}</span>
                        <p onclick='count(${i} , ${sabah[i].amount - 1})'>-</p>
                    </div>
                </div>
            </div>
       `
    }
    container.innerHTML = item
}
setitems()



function count(num , counter){
    if(num == 3){
        if(counter >= 0 && counter <= 1){
            sabah[num].amount = counter
        }
    }else{
        if(counter >= 0 && counter <= 33){
            sabah[num].amount = counter
        }
    }
    setitems()
}

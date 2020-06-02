




document.getElementById("encrypt").addEventListener('click',
function ()
{

var orgText = document.getElementById("orgText").value
var shiftFact = Number(document.getElementById("shiftFact").value)
var leng = (orgText.length - 1)
arr = []
i = 0
while (i <= leng) {
    newTxt = orgText.codePointAt(i)+shiftFact
    if (newTxt > 122) {
        arr.push((newTxt-122)+96)
    }
    else if (newTxt > 90 && newTxt < 97) {
        arr.push((newTxt-90)+64)
    }
    else if (shiftFact < 0 && newTxt < 97 && newTxt > 90) {
        arr.push((newTxt-97)+123)
    }
    else if (shiftFact<0 && newTxt < 65) {
        arr.push((newTxt-65)+91)
    }   

    else {
        arr.push(orgText.codePointAt(i)+shiftFact)
    }

 
    console.log(arr)
i++
}
})



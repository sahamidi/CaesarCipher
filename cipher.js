




document.getElementById("encrypt").addEventListener('click',
function ()
{

var orgText = document.getElementById("orgText").value
var shiftFact = Number(document.getElementById("shiftFact").value)
var leng = (orgText.length - 1)
arr = []
i = 0
while (i <= leng) {
    newTxt = orgText.codePointAt(i)+shiftFact  //Take shift factor and add number code for letter
    if (orgText>122 || orgText < 65 || (orgText > 90 && orgText < 97)) {
        arr.push(orgText.codePointAt(i))
    }    
    if (newTxt > 122) {
        arr.push((newTxt-122)+96)              //If number code is greater than end of alphabet for upercase
    }                                          //Wrap around to beginning of lowercase alphabet 
    else if (newTxt > 90 && newTxt < 97) {
        arr.push((newTxt-90)+64)                //If number code is greater than end of alphabet for upercase
    }                                           //Wrap around to beginning of upercase alphabet     
    else if (shiftFact < 0 && newTxt < 97 && newTxt > 90) { 
        arr.push((newTxt-97)+123)               //if shift factor is negative, and initial text and shift factor
    }                                           //puts code outside of alphabet range, then wrap around to end of 
                                                //alphabet going towards negatvie direction for lowercase
    else if (shiftFact<0 && newTxt < 65) {
        arr.push((newTxt-65)+91)                //if shift factor is negative, and initial text and shift factor
    }                                           //puts code outside of alphabet range, then wrap around to end of 
                                                //alphabet going towards negatvie direction for upercase
    else {
        arr.push(orgText.codePointAt(i)+shiftFact)
    }
    i++
console.log(arr)

}

j=1
k=0
while (j <= arr.length)     {
    arr[k] = String.fromCharCode(arr[k])
    console.log(arr)
    k++
    j++
}
})




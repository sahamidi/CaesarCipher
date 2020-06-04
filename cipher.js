
document.getElementById("encrypt").addEventListener('click', //Add event listener to execute encryption
function ()
{

var orgText = document.getElementById("orgText").value  //Get text value from Encryption box
var shiftFact = Number(document.getElementById("shiftFact").value) //Get numerical value from Shift Factor
var leng = (orgText.length - 1)             //Length we want loop to run          
arr = []                                  //Add empty array to be pushed to
i = 0                               
while (i <= leng) {
    newTxt = orgText.codePointAt(i)+shiftFact  //Take shift factor and add number code for letter
    if (orgText.codePointAt(i)>122 || orgText.codePointAt(i) < 65 || (orgText.codePointAt(i) > 90 && orgText.codePointAt(i) < 97)) {
        arr.push(orgText.codePointAt(i))  //Exclude applying shift factor for non alphabetical items
    }    
    else if (shiftFact > 0 && newTxt > 122) {
        arr.push((newTxt-122)+96)              //If number code is greater than end of alphabet for upercase
    }                                          //Wrap around to beginning of lowercase alphabet 
    else if (shiftFact > 0 && newTxt > 90 && orgText.codePointAt(i) <= 90) {
        arr.push((newTxt-90)+64)                //If number code is greater than end of alphabet for upercase
    }                                           //Wrap around to beginning of upercase alphabet     
    else if (shiftFact < 0 && newTxt < 97 && orgText.codePointAt(i) >= 97) { 
        arr.push((newTxt-97)+123)               //if shift factor is negative, and initial text and shift factor
    }                                           //puts code outside of alphabet range, then wrap around to end of 
                                                //alphabet going towards negatvie direction for lowercase
    else if (shiftFact < 0 && newTxt < 65) {
        arr.push((newTxt-65)+91)                //if shift factor is negative, and initial text and shift factor
    }                                           //puts code outside of alphabet range, then wrap around to end of 
                                                //alphabet going towards negatvie direction for upercase
    else {
        arr.push(orgText.codePointAt(i)+shiftFact)
    }
    i++

}

j=1
k=0
while (j <= arr.length)     {           //While loop to take the applied shift factor from above and new text value
                                        //Apply loop until new encrypted values are back to letter number or symbol form                                    
    arr[k] = String.fromCharCode(arr[k])
    console.log(arr)
    k++
    j++
    document.getElementById("inHTML").innerHTML = arr.join('')
}

})




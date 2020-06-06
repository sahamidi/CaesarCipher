'use strict';

document.getElementById("encrypt").addEventListener('click', //Add event listener to execute encryption
function ()
{

const origString = document.getElementById("orgText").value  //Get text value from Encryption box
let shiftFact = Number(document.getElementById("shiftFact").value) //Get numerical value from Shift Factor
let leng = (origString.length - 1)             //Length we want loop to run          
let arr = []                                  //Add empty array to be pushed to
let i = 0                               
    while (i <= leng) {
        let stringValue = origString.codePointAt(i)
        if  (shiftFact > (26+(90-stringValue)) || shiftFact > (26+(122-stringValue))) {

            shiftFact = shiftFact - (Math.floor(shiftFact/26)*26)
        }

        else if (shiftFact<0 && (shiftFact < (-26 + (65-stringValue)) || shiftFact < (-26 +(97-stringValue)))){
            shiftFact = -(shiftFact - (Math.floor(shiftFact/26)*26))
        }   
        
        const newTxt = stringValue+shiftFact  //Take shift factor and add number code for letter

        if (stringValue>122 || stringValue < 65 || (stringValue > 90 && stringValue < 97)) {
            arr.push(stringValue)  //Exclude applying shift factor for non alphabetical items
        }    
        else if (shiftFact > 0 && newTxt > 122) {
            arr.push((newTxt-122)+96)              //If number code is greater than end of alphabet for upercase
        }                                          //Wrap around to beginning of lowercase alphabet 
        else if (shiftFact > 0 && newTxt > 90 && stringValue <= 90) {
            arr.push((newTxt-90)+64)                //If number code is greater than end of alphabet for upercase
        }                                           //Wrap around to beginning of upercase alphabet     
        else if (shiftFact < 0 && newTxt < 97 && stringValue >= 97) { 
            arr.push((newTxt-97)+123)               //if shift factor is negative, and initial text and shift factor
        }                                           //puts code outside of alphabet range, then wrap around to end of 
                                                    //alphabet going towards negatvie direction for lowercase
        else if (shiftFact < 0 && newTxt < 65) {
            arr.push((newTxt-65)+91)                //if shift factor is negative, and initial text and shift factor
        }                                           //puts code outside of alphabet range, then wrap around to end of 
                                                    //alphabet going towards negatvie direction for upercase
        else {
            arr.push(stringValue+shiftFact)
        }

        arr[i] = String.fromCharCode(arr[i])
        console.log(arr)

        document.getElementById("inHTML").innerHTML = arr.join('')
        i++

    }
})


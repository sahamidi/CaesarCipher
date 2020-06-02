
var shiftFact = document.getElementById("shiftFact")



document.getElementById("encrypt").addEventListener('click',
function ()
{

var orgText = document.getElementById("orgText").value
var leng = (orgText.length - 1)
arr = []
i = 0
while (i <= leng) {
    orgText.charCodeAt(i)
arr.push(orgText.codePointAt(i))
console.log(arr)
i++
}
})



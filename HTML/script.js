const result = document.getElementById('result')

const inputText = `
Hallo, dies ist eine
ziemlich lange Zeile, die in Html
aber nicht umgebrochen wird.
<br>
Zwei <br> <br> produzieren zwei Newlines.
Es gibt auch noch das tag <hr> was einen Trenner darstellt.
Zwei <hr> <hr> produzieren zwei Horizontal Rulers.
Achtung mehrere Leerzeichen irritieren
Html genauso wenig wie
mehrere Leerzeilen.
`

const theResult = `
Hallo, dies ist eine ziemlich lange Zeile, die in Html aber nicht umgebrochen
wird.
Zwei

produzieren zwei Newlines. Es gibt auch noch das tag
--------------------------------------------------------------------------------
was einen Trenner darstellt. Zwei
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
produzieren zwei Horizontal Rulers. Achtung mehrere Leerzeichen irritieren Html
genauso wenig wie mehrere Leerzeilen.`

const formatText = (text) =>{
    let formattedText = ''
    // console.log(text)
    let lines = text.split('.')
    for(let i of lines){
        if(i.length >80){
            if(i.includes('<br>')){
                i = i+'\n'
            }
            else if(i.includes('<hr>')){
                i = i.replace('<hr>', '-')
            }
        }
    }
    // console.log(lines.join('.'))
    console.log(lines.join(''))
   
}


// console.log(inputText.split('.'))
formatText(inputText)


// result.textContent = formatText(inputText)
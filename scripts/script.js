import { arrayEmoji } from "./emojiData.js";

let emojiList = ""

arrayEmoji.forEach((item) => {
    emojiList += '<li>' + item.symbol + ' ' + item.title + '<p>Clique para copiar</p>'+ '</li>'
})
list.innerHTML = emojiList


txtSearch.onkeyup = function (e) {
    emojiList = this.value

    let key = new RegExp(emojiList, "i")

    for (let i in arrayEmoji) {
        if (arrayEmoji[i].title.match(key) || arrayEmoji[i].keywords.match(key))
            list.children[i].removeAttribute('style')
        else
            list.children[i].style.display = "none"
    }
}


function run() {
    var emojis = Array.from(input.value);
    var reemoji = emojis.join(String.fromCodePoint(0x200D))
    output.innerText = reemoji;
}

function insert() {
    var cp = parseInt(prompt("U+..."), 16);
    insertTextAtCursor(input, String.fromCodePoint(cp))
    run();
}

// https://stackoverflow.com/questions/7404366/how-do-i-insert-some-text-where-the-cursor-is
function insertTextAtCursor(el, text) {
    var val = el.value, endIndex, range, doc = el.ownerDocument;
    if (typeof el.selectionStart == "number"
            && typeof el.selectionEnd == "number") {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length;
    } else if (doc.selection != "undefined" && doc.selection.createRange) {
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
}
function run() {
    var emojis = Array.from(input.value);
    var reemoji = emojis.join(String.fromCodePoint(0x200D))
    output.innerText = reemoji;
}

function insert() {
    var cp = parseInt(prompt("U+..."), 16);
    input.value += String.fromCodePoint(cp);
    run();
}
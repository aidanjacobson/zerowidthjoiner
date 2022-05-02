function run() {
    var emojis = Array.from(input.value);
    var reemoji = emojis.join(String.fromCodePoint(0x200D))
    output.innerText = reemoji;
}
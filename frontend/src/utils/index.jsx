export const shortenText = (text,n) => {
    if (text.length > n) {
        const shortendText = text.substring(0,n).concat("...");
        return shortendText;
    }
    return text;
}
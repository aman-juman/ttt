export const shortText = (text, length) =>{
    if(text.length > length){
        return text.slice(0, length) + "...";
    }
    return text;
}
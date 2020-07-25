

const splitMultiple = (str, items) => {
    let firstItem = items[0];
    for(let i = 1; i < items.length; i++){
        str = str.split(items[i]).join(firstItem);
    }
    str = str.split(firstItem);
    return str;
}

export default splitMultiple;
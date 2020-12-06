makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

saveStorage = (items) => {
    localStorage.setItem("LIST_TASK", JSON.stringify(items));
}

loadStorage = () => {
    return JSON.parse(localStorage.getItem('LIST_TASK'));
}

listItems = (param = null) => {
    let items = loadStorage();
    if (items == null) items = [];
    return items;
}

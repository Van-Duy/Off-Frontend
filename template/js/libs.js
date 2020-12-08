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



notice = (massege,type) => {
    $.notify({message: massege},{type: type});
}

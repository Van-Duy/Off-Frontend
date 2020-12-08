
// let items = [       // dữ liệu ảo mock data
//     {id: makeid(10) , name: 'Coding', level: 'medium'},
//     {id: makeid(5) , name: 'Sleep', level: 'small'},
// ];

// saveStorage(items);

addItems = (task,level) => {
    let id   = makeid(10);
    let items = listItems();
    items.push({'id':id,'name':task,'level':level});
    saveStorage(items);
    let itemsNew = listItems();
    return itemsNew;
}

setForm = () => {
    elemInputName.value = '';
    elemInputLevel.value = 'small';
}

getItemInFrom =(id) => {
    let number  = -1;
    let arr     = listItems();
    arr.forEach((element) => {
        number++;
        if(id === element.id){
            numberArr = number;
        }
    });
    return arr[numberArr];
}
showItemInForm = (item) => {
    funOpenForm();
    elemInputName.value = item.name;
    elemInputLevel.value = item.level;
    elemInputID.value = item.id;
}

editItem = (id,name,level) => {
    let number  = -1;
    let arr     = listItems();
    arr.forEach((element) => {
        number++;
        if(id === element.id){
            numberArr = number;
        }
    });
    arr.splice(numberArr, {'id':id,'name':name,'level':level});
    saveStorage(arr);
    let items = listItems();
    console.log(items)
}

listItems = (params = null) => {
    let items = loadStorage();

    if(params !== null && params.search !== null){
        items = items.filter((item) => {
            return item.name.includes(params.search);
        });
    }

    if (items == null) items = [];
    return items;
}
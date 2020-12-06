funOpenForm = () => {
    toogleForm('block');
}

funCloseForm = () => {
    toogleForm('none');
}

funEdit = (id) => {
    console.log(id)
}

funDelete = (id) => {
    let number  = -1;
    let check   = '';
    let arr     = listItems();
    let sure = confirm('Bạn có muốn xóa không ?');
    if(sure){
        arr.forEach((element) => {
            number++;
            if(id === element.id){
                check = number;
            }
        });
        arr.splice(check, 1);
        saveStorage(arr);
        let items = listItems();
        showItem(items);
    }
   
}

funSubmitAdd = () => {
    let id   = makeid(10);
    let task = elemInputName.value;
    let level = elemInputLevel.value;
    if(task == ''){
        alert('Name không được rỗng')
    }else{
        let items = listItems();
        items.push({'id':id,'name':task,'level':level});
        saveStorage(items);
        let itemsNew = listItems();
        showItem(itemsNew);
        elemInputName.value = '';
        elemInputLevel.value = 'small';
        funCloseForm();
    }

}
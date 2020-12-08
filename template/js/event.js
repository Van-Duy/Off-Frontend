funOpenForm = () => {
    toogleForm('block');
}

funCloseForm = () => {
    toogleForm('none');
}

funEdit = (id) => {
    let item = getItemInFrom(id);
    showItemInForm(item);
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
        notice('Đã xóa thành công','danger');
    }
   
}

funSubmitAdd = () => {
    let task = elemInputName.value;
    let level = elemInputLevel.value;
    let id = elemInputID.value;

    if(id){
        editItem(id,task,level);
    }else{
        if(task == ''){
            alert('Name không được rỗng')
        }else{
            let itemsNew = addItems(task,level)
            showItem(itemsNew);
            setForm();
            funCloseForm();
            notice('Thêm mới thành công','info');
        }
    }


    

}

funSearch = () => {
    let valueSearch = elemInputSearch.value;
    let items = listItems({
        search:valueSearch
    });
    showItem(items);
}
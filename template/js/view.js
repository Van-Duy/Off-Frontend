showLevel = (name) =>{
    let className = '';
    (name == 'small') ? className ='danger' : className = 'warning';
    return `<span class="label label-`+className+`">` + name +``;
}

showAreaShortName = () =>{
    elemAreaSortName.innerHTML = orderBy.toUpperCase() + "-" + orderDir.toUpperCase();
}

toogleForm = (type) =>{
    elemAreaForm.style.display = type;
}

showItem =(items) =>{
    elemAreaListTask.innerHTML = '';
    let html = '';
    let search = elemInputSearch.value;
    if(items.length == 0) html = '';
    else{
        items.forEach((item,index) => {
            //item.name = item.name.replace(new RegExp(search,'ig'),'<span class="hightlight">');
            html += `<tr>
                        <td class="text-center">`+ (index + 1) +`</td>
                        <td>` + item.name +`</td>
                        <td class="text-center">`+showLevel(item.level)+`</td>
                        <td>
                            <button type="button" class="btn btn-warning" onclick="funEdit('`+item.id+`')">Edit</button>
                            <button type="button" class="btn btn-danger" onclick="funDelete('`+item.id+`')">Delete</button>
                        </td>
                    </tr>`;
        });
    }
    elemAreaListTask.innerHTML = html;
    return html;

}


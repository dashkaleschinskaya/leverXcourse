


let oldArr = persons.item.slice();
let flag_name="ascending";
let flag_department="ascending";
let flag_room="ascending";
export function sort(id) {

    switch (id){
        case "NS":
            if(flag_name==='ascending') {
                flag_department="ascending";
                flag_room="ascending";
                flag_name='descending';
                oldArr.sort(byFieldAsc('name'))
                templateForTable(oldArr)
            } else if(flag_name==='descending'){
                flag_name='none';
                oldArr.sort(byFieldDes('name'))
                templateForTable(oldArr)
            } else if(flag_name==='none'){
                flag_name='ascending';
                templateForTable(persons.item)
            }
            break;
        case "department":
            if(flag_department==='ascending') {
                flag_name="ascending";
                flag_room="ascending";
                flag_department='descending';
                oldArr.sort(byFieldAsc('department'))
                templateForTable(oldArr)
            } else if(flag_department==='descending'){
                flag_department='none';
                oldArr.sort(byFieldDes('department'))
                templateForTable(oldArr)
            } else if(flag_department==='none'){
                flag_department='ascending';
                templateForTable(persons.item)
            }
            break;
        case "room":
            if(flag_room==='ascending') {
                flag_name="ascending";
                flag_department="ascending";
                flag_room='descending';
                oldArr.sort(byFieldAsc('room'))
                templateForTable(oldArr)
            } else if(flag_room==='descending'){
                flag_room='none';
                oldArr.sort(byFieldDes('room'))
                templateForTable(oldArr)
            } else if(flag_room==='none'){
                flag_room='ascending';
                templateForTable(persons.item)
            }
            break;
        default:
            console.log('error')
    }
}

function byFieldAsc(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

function byFieldDes(field) {
    return (a, b) => a[field] < b[field] ? 1 : -1;
}

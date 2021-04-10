export function filterData(data, field){
    return data.filter(item => {
        if(field === 'all'){
            return true;
        }
        return item.field === field;
    })    
}
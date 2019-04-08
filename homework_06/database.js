var data = [{id:1,name:'charles',course:'MWA',grade:95}];

function list(newObj){
    return data;
}


function add(newObj){
    data.push (newObj);
}

function del(id){
    var dataFiltered = data.filter ( (d) => d.id != id )
    data = dataFiltered;
}
 
function get(id){
    return data.filter ( (d) => d.id == id )[0];
}

function update(id,obj){
    var dataFiltered = data.filter ( (d) => d.id == id );

    for ( objFromList of data ){
        
        if( dataFiltered[0].id == objFromList.id ){
            objFromList.name = obj.name;
            objFromList.course = obj.course;
            objFromList.grade = obj.grade;
        }
    }

    
}

module.exports = {add,update,del,list,get};


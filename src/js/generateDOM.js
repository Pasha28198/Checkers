function generatePace(){
    var pace = document.getElementById('board');
    for(var i = 1 ; i <= 8 ;   i++){
        var row = document.createElement('div');
        row.className = 'rows';
        pace.appendChild(row);
        row.id='row_'+i;
        for(var j = 1 ; j <= 8 ; j++){
            var row_id = document.getElementById('row_'+i);
            var col = document.createElement('div');
            col.className = 'cols';
            col.id = (i)*10+j;
            newCol(col.id);
            if (j % 2 != 0 && i % 2 == 0){
                generateCol(col,'black',row_id);
                if(i>3 && i < 6){continue;}
                colPos.active = 1;
                generateCheckers(j,i,col,i < 4 ? 'Black' : 'White',i*10+j);
            }
            else if(j % 2 == 0 && i % 2 !=0 ){
                generateCol(col,'black',row_id);
                if(i>3 && i < 6){continue;}
                colPos.active = 1;
                generateCheckers(j,i,col,i < 4 ? 'Black' : 'White',i*10+j);
            }
            else{generateCol(col,'none',row_id);}
        }
    }
}
function generateCheckers(j,i,col,className,id,clas2){
    var elem = document.createElement('div');
    elem.classList.add(className , i*10+j+'el');
    if(clas2 != undefined){elem.classList.add(clas2);}
    elem.id =i*10+j+'el';
    if(i != 0 && j !=0) {
        colPos[i*10+j].active = 1;
        colPos[col.id].colorIn = className;
        colPos[col.id].idCheckerIN = elem.id;
        newElement(className,id,1,col.id);
        elem.setAttribute('onclick','defineChecker('+'\''+ elem.id+'\''+')');
    }
    col.appendChild(elem);
}

function generateCol(col,color,row_id){
    col.classList.add(color);
    row_id.appendChild(col);
}
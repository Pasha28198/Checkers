var colPos ={},
     elem ={},
    columnId=[],
    step;
    games = {
     'Pasha':{
         stateGame:1,
         countChecker:0,
         col:document.getElementById('first_elements')
     },
     'Dima':{
         stateGame:0,
         countChecker:0,
         col:document.getElementById('second_elements')
     }
    };
function newCol(id){
    colPos[id] = {
        id: id,
        active:0,
        colorIn:'',
        idCheckerIN:0
    }
}
function newElement(color,id,active,InColId){

    if(!(id in elem)){
    elem[id] = {
        id: id,
        active:active,
        color:color,
        InColId:InColId
    }}else{elem[id].InColId = InColId;}
}
function defineChecker(idElements) {

    if(elem[parseInt(idElements)].color == 'White' && games.Pasha.stateGame == 1) {
        if (columnId.length != 0) {
            clean();
        }
        verifeAtackOrStep(idElements, elem[parseInt(idElements)].InColId);
    }
    else if(elem[parseInt(idElements)].color == 'Black' && games.Dima.stateGame == 1){
        if (columnId.length != 0) {
            clean();
        }
        verifeAtackOrStep(idElements,elem[parseInt(idElements)].InColId);
    }
}

function steps(e,id){
        var pos = elem[id].InColId;
        document.getElementById(id+'el').remove();
        var col = document.getElementById(e);
        generateCheckers(id % 10 ,(id - id % 10)/10,col,elem[id].color == 'Black'?'Black':'White',id);
        colPos[e].active = 1;
        colPos[pos].active = 0;
        step = pos;
        clean(1);
    console.log(colPos)
}
function attack(e,id,IdPosAttackChecker){
        var pos = elem[id].InColId;
        var colGame = elem[id].color == 'Black' ? games.Dima.col : games.Pasha.col;
        generateCheckers(0,0,colGame,colPos[IdPosAttackChecker].colorIn,id+'el','dead_checkers');
        document.getElementById(id+'el').remove();
        document.getElementById(colPos[IdPosAttackChecker].idCheckerIN).remove();
        var col = document.getElementById(e);
        elem[parseInt(colPos[IdPosAttackChecker].idCheckerIN)].active = 0 ;
        generateCheckers(id % 10 ,(id - id % 10)/10,col,elem[id].color == 'Black'?'Black':'White',id);
        colPos[pos].active = 0;
        colPos[IdPosAttackChecker].active = 0;
        colPos[e].active = 1;
        step = pos;
        clean(2);
    console.log(colPos)
}
function verifeOnWinner() {
    if (games.Pasha.countChecker == 12) {
        alert('Pasha win');
        window.location.reload();
    } else if (games.Dima.countChecker == 12) {
        alert('Dima win');
        window.location.reload();
    }
    if (games.Pasha.countChecker == 11 && games.Dima.countChecker == 11) {
        alert('Draw');
        window.location.reload();
    }
}
function clean(){
    for(var i = 0 ; i < columnId.length ; i++ ){
        document.getElementById(columnId[i]).classList.remove('attack','maySteps');
        document.getElementById(columnId[i]).removeAttribute('onclick');
    }
    columnId.length = 0;
    if(arguments.length != 0 && games.Pasha.stateGame == 1){
        if(arguments[0] == 2){games.Pasha.countChecker++}
        colPos[step].active = 0;
        colPos[step].colorIn='';
        games.Pasha.stateGame = 0;
        games.Dima.stateGame = 1;
    }
    else if (arguments.length != 0 && games.Dima.stateGame == 1){
        if(arguments[0] == 2){games.Dima.countChecker++}
        colPos[step].active = 0;
        colPos[step].colorIn='';
        games.Pasha.stateGame = 1;
        games.Dima.stateGame = 0;
    }
    verifeOnWinner();
}

function verifeAtackOrStep(idElem,idCol){
    idElem=parseInt(idElem);
    var x = idCol % 10,
        y = (idCol - (idCol % 10))/10;
    document.getElementById(idCol).classList.add('maySteps');
    columnId.push(idCol);
    if(elem[idElem].color == 'Black'){
        markPace(x,y,+idElem,1,'Black',x < 8 ,x < 7,x > 1 ,x > 2);
    }else{
        markPace(x,y,+idElem,-1,'White',x > 1 ,x > 2,x < 8 ,x < 7);
    }
}
function markPace(x,y,idElem,st,color,a,b,c,d){
    if(a){
        if(colPos[(y+1*st)*10+(x+1*st)].active == 0 || colPos[(y+1*st)*10+(x+1*st)].colorIn == ''){
            document.getElementById((y+1*st)*10+(x+1*st)).classList.add('maySteps');
            document.getElementById((y+1*st)*10+(x+1*st)).setAttribute('onclick', 'steps('+(y+1*st)+(x+1*st)+','+idElem+')');
            columnId.push((y+1*st)*10+(x+1*st));
        }else if(b) {
            if ((colPos[(y + 2*st) * 10 + (x + 2*st)].active == 0 || colPos[(y + 2*st) * 10 + (x + 2*st)].colorIn =='') && colPos[(y+1*st)*10+(x+1*st)].colorIn != color) {
                document.getElementById((y + 2*st) * 10 + (x + 2*st)).classList.add('attack');
                document.getElementById((y + 2*st) * 10 + (x + 2*st))
                    .setAttribute('onclick', 'attack('+(y + 2*st)  + (x + 2*st)+
                        ','+idElem+','+(y+1*st)+(x+1*st)+')');
                columnId.push((y + 2*st) * 10 + (x + 2*st));
            }
        }
    }
    if(c) {
        if (colPos[(y + 1*st) * 10 + (x - 1*st)].active == 0 || colPos[(y + 1*st) * 10 + (x - 1*st)].colorIn == '') {
            document.getElementById((y + 1*st) * 10 + (x - 1*st)).classList.add('maySteps');
            document.getElementById((y + 1*st) * 10 + (x - 1*st)).setAttribute('onclick', 'steps('+(y + 1*st)  + (x - 1*st)+','+idElem+')');
            columnId.push((y + 1*st) * 10 + (x - 1*st));
        } else if (d) {
            if ((colPos[(y + 2*st) * 10 + (x - 2*st)].active == 0 || colPos[(y + 2*st) * 10 + (x - 2*st)].colorIn=='' ) && colPos[(y + 1*st) * 10 + (x - 1*st)].colorIn != color) {
                document.getElementById((y + 2*st) * 10 + (x - 2*st)).classList.add('attack');
                document.getElementById((y + 2*st) * 10 + (x - 2*st))
                    .setAttribute('onclick', 'attack('+(y + 2*st) + (x - 2*st)+',' +
                        idElem+','+(y + 1*st)  + (x - 1*st)+')');
                columnId.push((y + 2*st) * 10 + (x - 2*st));
            }
        }
    }
}

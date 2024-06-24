function isGameOver(){
    return Student.life<=0 || Rooms[roomId].actions.length === 0;
}

function restart(){
    document.getElementById('roomTitle').innerHTML='Игра окончена!!!';
    var button =  document.createElement('button');
        button.innerHTML='Попробуешь ещё раз?';
        button.addEventListener('click',function(){
            Student.life = 100;
            Student.money = 0;
            roomId = 'start';
            goToRoom();
        });
        document.getElementById('actions').appendChild(button);
}

function ChangeMoral(){

}

function ChangeLife(){
    Student.life-=Student.moral
}

function goToRoom(){
    var room = Rooms[roomId];
    //document.getElementById('roomTitle').innerHTML=' ';
    //document.getElementById('roomImage').innerHTML=' ';
    //document.getElementById('roomDescription').innerHTML=' ';
    //document.getElementById('life').innerHTML=' ';
    document.getElementById('roomTitle').innerHTML=room.title;
    document.getElementById('roomImage').src=room.image;
    document.getElementById('roomDescription').innerHTML=room.description;
    document.getElementById('life').innerHTML=Student.life;
    document.getElementById('money').innerHTML=Student.money;
    document.getElementById('moral').innerHTML=Student.moral;
    document.getElementById('actions').innerHTML = '';
    if (isGameOver()){
        restart();
        return;
    }
    for (var i=0;i<room.actions.length;i++){
       (function(i){
        var action = room.actions[i];
        var button =  document.createElement('button');
        button.innerHTML=action.title;
        button.addEventListener('click',function(){
            console.log(action.id);
            roomId = action.id;
            if (roomId==='rw' || roomId==='toilet'){
                if (Math.round(Math.random())==1){
                    Student.life-=action.cost;
                } else Student.life+=action.cost;
            } else Student.life-=action.cost;
            Student.life = Math.round(Student.life);
            if (Student.life>100) Student.life=100;
            goToRoom();

        });
        document.getElementById('actions').appendChild(button);

       })(i);
    };
    function chiron(){
        Student.money+=money;
        document.getElementById('money').innerHTML=Student.money;
        document.getElementById('actions').removeChild(chirik);
    }
    
    if(Math.random()<=0.1 && room.canFoundMoney){
        var money = Math.round(Math.random()*100);
        var chirik =  document.createElement('button');
        chirik.innerHTML='Поднять '+money+' монет';
        chirik.addEventListener('click', chiron);
        document.getElementById('actions').appendChild(chirik);
    };
    
    if (room.spendMoney){
        var input = document.createElement('input');
        var buttonn =  document.createElement('button');
        //buttonn.innerHTML=action.title;
        buttonn.addEventListener('click',function(){
            var money = input.value-0;
            var action = spendMoney(money);
            if (action){
                room.actions.push(action);
            } goToRoom();

        });
    }
        
}

var Rooms = {
    start:{
        title:"Комната",
        description:'Что протухло?',
        image:'img/start.png',
        actions:[
            {
                title:'Окно', id:'window', cost:100
            }, {
                title:"Коридор", id:"hall", cost:1
            }]
    },
    window:{
        title:"Окно",
        description:"А может просто потеряться, впрочем как и миллионы..",
        image:'img/window.png',
        actions:[]
    },
    hall:{
        title:"Коридор",
        description:"Тараканье бега! Принимаем ставки!",
        image:'img/hall.png',
        actions:[
            {
                title:'Вахта',
                id:'exit',
                cost:1
            },
            {
                title:'Кухня',
                id:'kitchen',
                cost:-20
            },
            {
                title:'Туалет',
                id:'toilet',
                cost: 5
            },
            {
                title:'Комната',
                id:'start',
                cost:1
            }
        ]
    },

    kitchen:{
        title:"Кухня",
        description:"Всё в кишках, красота!",
        image:'img/kitchen.png',
        actions:[
            {
                title:"Коридор", id:"hall", cost:1
            }
        ]
    },

    toilet:{
        title:"Туалет",
        description:"кккккк",
        image:'img/toilet.png',
        actions:[
            {
                title:"Коридор", id:"hall", cost:1
            }
        ],
        canFoundMoney:true
    },

    exit:{
        title:"Вахта",
        description:"Где пропуск?!",
        image:'img/exit.png',
        actions:[
            {
                title:"УдГУ", id:"udsu", cost:15
            },
            {
                title:"КБ", id:"rw", cost:Math.random()*10
            },
            {
                title:"Коридор", id:"hall", cost:1
            }
        ]
    },

    udsu:{
        title:"УдГУ",
        description:"Точно не контракт..?",
        image:'img/udsu.png',
        actions:[
            {
                title:"Вахта", id:"exit", cost:15
            },
            {
                title:"КБ", id:"rw", cost:Math.random()*10
            }
        ]
    },

    rw:{
        title:"КБ",
        description:"Drink or Die",
        image:'img/rw.png',
        actions:[
            {
                title:"Вахта", id:"exit", cost:15
            },
            {
                title:"УдГУ", id:"udsu", cost:15
            }
        ],
        spendMoney:function(money){
            Student.money-=money;
            //Student.life+=Math.random()*money-money/2;
            if (money>=50){
                return{
                    title:"Выход на свободу",
                    id:'window',
                    cost:1,
                    delete:true
                }
            }
        }
    }


};
var Student={
    life:100,
    money:10,
    moral:100
};
var roomId="start";
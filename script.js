new Vue({
    el: "#app",
    data: {
        show: true,
        player: 100,
        monster: 100,
        logs: []
    },
    methods: {
        attack: function(){
            let point = parseInt(Math.random() * 21);
            this.monster -= point;
            this.addLog({control : "player", text: `Oyuncu Atağı : ${point}`});
            this.monsterAttack();
        },
        specialAttack: function(){
            let point = parseInt(Math.random() * 26);
            this.monster -= point;
            this.addLog({control : "player", text: `Özel Oyuncu Atağı : ${point}`});
            this.monsterAttack();
        },
        firstAid: function(){
            let point = parseInt(Math.random() * 21);
            this.player += point;
            this.addLog({control : "player", text: `İlk Yardım : ${point}`});
            this.monsterAttack();
        },
        giveUp: function(){
            alert("bol şanslar...");
            this.player = 100;
            this.monster = 100;     
            this.logs = [];
        },
        monsterAttack : function(){
            var point = parseInt(Math.random() * 21);
            this.player-=point;
            this.addLog({control : "monster", text: `Canavar Atağı : ${point}`});
        },
        addLog: function(log){
            this.logs.push(log);
        }
    },
    computed: {
        widthPlayer: function(){
            return{
                width: this.player + "%"
            }
        },
        widthMonster: function(){
            return{
                width: this.monster + "%"
            }
        }
    },
    watch : {
        player : function(value){
            if(value <= 0){
                this.player = 0;
                if(confirm("Oyunu KAYBETTİN. Tekrar denemek ister misin?")){
                    this.player = 100;
                    this.monster = 100;
                    this.logs = [];
                }
            } else if(value >= 100) {
                this.player = 100
            }
        },
        monster : function(value){
            if(value <= 0){
                this.monster = 0;
                if(confirm("Oyunu KAZANDIN. Tekrar denemek ister misin?")){
                    this.player = 100;
                    this.monster = 100;
                    this.logs = [];
                }
            }
        }
    }
})
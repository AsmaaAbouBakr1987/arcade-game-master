// Enemies our player must avoid
var Enemy = function(x_location , y_location) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x_location;
    this.y = y_location;

};
let enemy1 = new Enemy(200 , 65);
let enemy2 = new Enemy(50 , 140);
let enemy3 = new Enemy(100, 225);
let allEnemies = [enemy1, enemy2, enemy3];

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 700){
        this.x = 0;
    }else{
    this.x+=200*dt ;
    //console.log(this.x);
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x,y){
    this.sprite = 'images/char-princess-girl.png';
    this.x = x;
    this.y = y;
}
    let GameScore =0;
    Player.prototype.update = function(x,y){
        
        this.render();
    };
    Player.prototype.render = function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    Player.prototype.handleInput = function(e){
        if(e =='left' && this.x > 10){
            console.log(this.x);
            this.x -=20;

        }
        else if(e =='right' && this.x < 400){
            console.log(this.x);
            this.x +=20;

        }
        else if(e =='up' && this.y > 0){
           // console.log(this.y);
            this.y -=20;

        }
        else if(e =='down' && this.y < 400){
            //console.log(this.y);
            this.y +=20;

        }
        this.score();
    };
    Player.prototype.score = function(){
        if(this.y <20 && this.y >= 0){
            GameScore+= 10;
            console.log(GameScore);
            player.y = 400;
            player.x = 200;
            let ScoreTxt = document.getElementById("score");
            ScoreTxt.textContent= GameScore;
        }
    }

let player = new Player(200,400);

let checkCollisions = function(){
    //console.log(player.y);
    if(player.y < 260 && player.y >180){
        //console.log('enemy3 ', enemy3.x, 'player ', player.x );
        if ( player.x >= enemy3.x -40 && player.x <=enemy3.x + 40 ){
            //console.log("true");
            player.y = 400;
            player.x = 200;
        }
    }else if (player.y < 180 && player.y >100){
        if ( player.x >= enemy2.x -40 && player.x <=enemy2.x + 40 ){
            player.y = 400;
            player.x = 200;
        }
    }else if (player.y < 100 && player.y >20){
        if ( player.x >= enemy1.x -40 && player.x <=enemy1.x + 40 ){
            player.y = 400;
            player.x = 200;
        }
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

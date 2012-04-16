
window.onload = function(){

    console.log('starting');

	this.screenWidth = 600;
	this.screenHeight = 400;
	
	initWorld(screenWidth, screenHeight);
	createClouds();	
    
    console.log('ending');
}

function initWorld(screenWidth, screenHeight){
	Crafty.init(screenWidth, screenHeight);
    Crafty.background('rgb(255, 120, 120)');

	Crafty.sprite(32, "/static/img/sprites.png", {
		cloud1: [0, 0],
		cloud2: [1, 0]
	});
    
}

function createClouds(){
	var NOF_CLOUDS = 4;
	for(var i=0; i<NOF_CLOUDS; i++){
		createCloud();
	}
}
function createCloud(){
	Crafty.c("Cloud", {
		init: function(){
			cloudSprite = "cloud1";
			this.addComponent("2D, Canvas, Color, Tween, " + cloudSprite);
			this.x = startX();
			this.y = startY();
			this.w = 50;
			this.h = 50;
			this.color('#FF0000');
			
			this.bind("EnterFrame", function(o, a){
				this.x+=1;
				// TODO: Destroy cloud when it has moved off the screen
				if(this.x > this.screenWidth){
					this.x = start();
				}
				console.log(this.Canvas);
			});
			
			this.bind("Draw", function(o){
				// call the draw method on the entity				
			});
			
			this.bind("Click", function(o){
				console.log('' + o + ' : ' + 'Click');		
			});
			
			function startX(){
				return Math.floor(Math.random()*500)-100;
			}
			function startY(){
				return Math.floor(Math.random()*50)+1;
			}
		}
	});
	
    var cloud = Crafty.e("Cloud", {
		init: function(){
			this.addCompoennt("Box, 2D, DOM, Color, Tween, Cloud");
		}
	});	
	
}
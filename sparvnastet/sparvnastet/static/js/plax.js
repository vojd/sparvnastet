(function(a){function p(a){if((new Date).getTime()<d+c)return;d=(new Date).getTime();var b=f.offset()!=null?f.offset().left:0,i=f.offset()!=null?f.offset().top:0,j=a.pageX-b,k=a.pageY-i;if(j<0||j>f.width()||k<0||k>f.height())return;if(g==true){var l=window.orientation?(window.orientation+180)%360/90:2,m=a.accelerationIncludingGravity,n=l%2==0?-m.x:m.y,o=l%2==0?m.y:m.x;j=l>=2?n:-n;k=l>=2?o:-o;j=(j+h)/2;k=(k+h)/2;if(j<0){j=0}else if(j>h){j=h}if(k<0){k=0}else if(k>h){k=h}}var p=j/(g==true?h:f.width()),q=k/(g==true?h:f.height()),r,l;for(l=e.length;l--;){r=e[l];newX=r.startX+r.inversionFactor*r.xRange*p;newY=r.startY+r.inversionFactor*r.yRange*q;if(r.background){r.obj.css("background-position",newX+"px "+newY+"px")}else{r.obj.css("left",newX).css("top",newY)}}}function o(b){if((new Date).getTime()<d+c)return;if(n()){var e=b.accelerationIncludingGravity,f=e.x,o=e.y;if(k.xArray.length>=5){k.xArray.shift()}if(k.yArray.length>=5){k.yArray.shift()}k.xArray.push(f);k.yArray.push(o);k.xMotion=Math.round((m(k.xArray)-l(k.xArray))*1e3)/1e3;k.yMotion=Math.round((m(k.yArray)-l(k.yArray))*1e3)/1e3;if(k.xMotion>1.5||k.yMotion>1.5){if(h!=10){h=10}}if(k.xMotion>i||k.yMotion>i){j++}else{j=0}if(j>=5){g=true;a(document).unbind("mousemove.plax");a(window).bind("devicemotion",p(b))}else{g=false;a(window).unbind("devicemotion");a(document).bind("mousemove.plax",function(a){p(a)})}}}function n(){return window.DeviceMotionEvent!=undefined}function m(a){return Math.max.apply({},a)}function l(a){return Math.min.apply({},a)}var b=25,c=1/b*1e3,d=(new Date).getTime(),e=[],f=a(window),g=false,h=1,i=.05,j=0,k={xArray:[0,0,0,0,0],yArray:[0,0,0,0,0],xMotion:0,yMotion:0};a.fn.plaxify=function(b){return this.each(function(){var c=-1;var d={xRange:a(this).data("xrange")||0,yRange:a(this).data("yrange")||0,invert:a(this).data("invert")||false,background:a(this).data("background")||false};for(var f=0;f<e.length;f++){if(this===e[f].obj.get(0)){c=f}}for(var g in b){if(d[g]==0){d[g]=b[g]}}d.inversionFactor=d.invert?-1:1;d.obj=a(this);if(d.background){pos=(d.obj.css("background-position")||"0px 0px").split(/ /);if(pos.length!=2){return}x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/);y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/);if(!x||!y){return}d.startX=x[2]||0;d.startY=y[2]||0}else{var h=d.obj.position();d.obj.css({top:h.top,left:h.left,right:"",bottom:""});d.startX=this.offsetLeft;d.startY=this.offsetTop}d.startX-=d.inversionFactor*Math.floor(d.xRange/2);d.startY-=d.inversionFactor*Math.floor(d.yRange/2);if(c>=0){e.splice(c,1,d)}else{e.push(d)}})};a.plax={enable:function(b){a(document).bind("mousemove.plax",function(c){if(b){f=b.activityTarget||a(window)}p(c)});if(n()){window.ondevicemotion=function(a){o(a)}}},disable:function(){a(document).unbind("mousemove.plax");window.ondevicemotion=undefined}};if(typeof ender!=="undefined"){a.ender(a.fn,true)}})(function(){return typeof jQuery!=="undefined"?jQuery:ender}())
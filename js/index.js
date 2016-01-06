$(function(){
	<!--page1-->
	
	var bodyH=document.documentElement.clientHeight;   //1366
	var bodyW=document.documentElement.clientWidth;   //667
	var aHead=document.getElementsByClassName("nav_right")[0].getElementsByTagName("a");
	var oContent=document.getElementById("content");
	var aPage=document.getElementsByClassName("page");
	
	oContent.style.height=bodyH*aPage.length+"px";
	for(var i=0; i<aHead.length; i++){
		aPage[i].style.height=bodyH+"px";
		(function(index){
			aHead[i].onclick=function(){
				moveScroll(index*bodyH,600);
			}
		})(i)		
	}
	var timer=null;
	function moveScroll(iTarget,time){
		var start=document.documentElement.scrollTop||document.body.scrollTop;//不带px  所以运动框架自己再封装
		var dis=iTarget-start;
		var n=0;
		var count=parseFloat(time/30);
		
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			var cur=start+dis*n/count;
			document.documentElement.scrollTop=cur;
			document.body.scrollTop=cur;
			if(n==count){
				clearInterval(timer);
			}	
		},30)
	};
	//显示图片效果  图片运动效果
	(function(){
		var oListApp=document.getElementById('list_app');
		var oStop=document.getElementById('startBtn');
		var arr=["JAVASCRIPT","HTML5","CSS3","JOSNP","JSON"];
		var oTimer=null;
		createLi(0)
		   
		var aAppLi=oListApp.children;
		var len=oListApp.children.length;
		oListApp.style.width=oListApp.children[0].offsetWidth*len+len*10+'px';
		oListApp.style.marginLeft=-oListApp.offsetWidth/2+'px';
		var aPosApp=[];
		
		autoPlay();
		function autoPlay(){
			var aAppLi=oListApp.children;
			var len=oListApp.children.length;
			oListApp.style.width=oListApp.children[0].offsetWidth*len+len*10+'px';
			oListApp.style.marginLeft=-oListApp.offsetWidth/2+'px';
				
			for(var i=0;i<aAppLi.length;i++){
				aPosApp[i]={left:aAppLi[i].offsetLeft,top:aAppLi[i].offsetTop};
				aAppLi[i].style.left=aPosApp[i].left+'px';
				aAppLi[i].style.top=aPosApp[i].top+'px';
			}
			for(var i=0;i<aAppLi.length;i++){
				aAppLi[i].style.position='absolute';
				aAppLi[i].style.margin=0;
				aAppLi[i].style.WebkitTransform="scale(2.5)"; 
				aAppLi[i].style.MozTransform="scale(2.5)"; 
			}
			setTimeout(show,300);
			 function show(){  
				for(var i=0;i<aAppLi.length;i++){      	          
					aAppLi[i].style.transition="0.5s "+i*300+"ms";
					aAppLi[i].style.WebkitTransform="scale(1)";
					aAppLi[i].style.MozTransform="scale(1)";
					aAppLi[i].style.opacity=1;
				}
			}
		}
		var iNow=0;
		oStop.onclick=function (){
		   iNow++;
		   if(iNow==arr.length){
				iNow=0;
		   }
		   oListApp.innerHTML="";         
		   createLi(iNow);
		   autoPlay();
		   
		}
		function createLi(iNow){
			for(var i=0;i<arr[iNow].length;i++){
				var oLi=document.createElement('li');
				oListApp.appendChild(oLi);
				oLi.innerHTML=arr[iNow][i];
				oLi.className='active'+iNow%4;
			}
		}

	// 主页的轮播图 
	var oDivPage=document.getElementById("page");
		 var oUl=getByClass(document,"page1")[0];
		 var oSpan=getByClass(document,"row_bottom")[0].getElementsByTagName("span")[0];
		 var oBtnNext=getByClass(document,"btn_next")[0];
		 var oBtnPrev=getByClass(document,"btn_prev")[0];
		 var now=0;
		 var ready=true;
		 
		 oUl.innerHTML+=oUl.innerHTML;
		 next();
		 oUl.style.width=bodyW*oUl.children.length+"px";
		 for(var i=0; i<oUl.children.length;i++){
			oUl.children[i].style.width=bodyW+"px";
		 }
		 oBtnPrev.onclick=function(){
			now--;
			if(now==-1){
				now=oUl.children.length/2-1;
				oUl.style.left=-oUl.offsetWidth/2+"px";
			}
			move(oUl,{left:-now*bodyW},{duration:800}) 
		};
		 oBtnNext.onclick=function(){
			now++;
			if(now==oUl.children.length/2){
				now=0;
				oUl.style.left=0
			}
			
			move(oUl,{left:-now*bodyW},{duration:800}) 
		};
		 function next(){
				
				move(oSpan,{width:bodyW},{easing:'linear',duration:3000,complete:function(){
					oSpan.style.width=0;
					now++;
					if(now==oUl.children.length){
						now=0;
						oUl.style.left=0
					}
					move(oUl,{left:-now*bodyW},{complete:function(){
						if(ready){
							next();
						}
					}})
				}})
			}
		 oDivPage.onmouseover=function(){
			ready=false;
			clearInterval(oSpan.timer);
			oSpan.style.width=0;
		 };
		oDivPage.onmouseout=function(){
			ready=true;
			next();
		};
	})()
	
	<!--page2-->
	var oDivPage = document.getElementById("page2");
		var oNextP = document.getElementById("nextP");
		var oPrevP = document.getElementById("prevP");
		var oPageF = oDivPage.querySelector(".page_0");
		var oPage1 = oDivPage.querySelector(".page_1");
		var oFront = oDivPage.querySelector(".front");
		var oBack  = oDivPage.querySelector(".back");
		var oPage2 = oDivPage.querySelector(".page_2");
		
		var conut = 0;
		oDivPage.onclick = function(){
			oPage1.style.transition="1s all ease";
			oPage1.style.transform="perspective(800px) rotateY(-180deg)";
			conut++;
		};
		oDivPage.addEventListener("transitionend",function(){
			oPage1.style.transition = "none";
			oPage1.style.transform = "none";
			oPageF.style.backgroundImage = "url(images/book"+conut+".jpg)";
			oFront.style.backgroundImage = "url(images/book"+conut+".jpg)";
			oBack.style.backgroundImage = "url(images/book"+(conut+1)+".jpg)";
			oPage2.style.backgroundImage = "url(images/book"+(conut+1)+".jpg)";
			
	
		},false);
	
	<!--page3-->
	
	//拉勾网效果
	(function(){
		var oUlWk = document.getElementById("ul1");
		var aLi = oUlWk.children;
		
		for(var i = 0; i < aLi.length; i++){
			lagou(aLi[i]);
		}
		function getDir(obj,oEvent){
			var x = oEvent.clientX - (obj.offsetLeft + obj.offsetWidth/2);
			var y = obj.offsetTop + obj.offsetHeight/2 - oEvent.clientY;
			
			// 0左 1下 2右 3 上
			return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
			console.log(Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4)
		}
		
		function lagou(oDiv){
			oDiv.onmouseover = function(ev){
				var oEvent = ev || event;
				var oFrom = oEvent.fromElement || oEvent.relatedTarget;
				if(oDiv.contains(oFrom)){
					return;
				}
				var oSpan = this.children[0];
				var n = getDir(this,oEvent);
				switch(n){
					case 0:
					
					oSpan.style.left = "-200px";
					oSpan.style.top = "0";
					 
					break;
					case 1:
					oSpan.style.left = "0";
					oSpan.style.top = "200px";
					break;
					case 2:
					oSpan.style.left = "200px";
					oSpan.style.top = "0"; 
					break;
					case 3:
					oSpan.style.left = "0";
					oSpan.style.top = "-200px";
					break;
					
				} 
				move(oSpan,{left:0,top:0});
			};
			oDiv.onmouseout = function(ev){
				var oEvent = ev || event;
				
				var oTo = oEvent.toElement || oEvent.relatedTarget;
				if(oDiv.contains(oTo)){
					return;
				}
				var oSpan = this.children[0];
				var n = getDir(this,oEvent);
				
				switch(n){
					case 0:
					move(oSpan,{left:-200,top:0});
					break;
					case 1:
					move(oSpan,{left:0,top:200});
					break;
					case 2:
					move(oSpan,{left:200,top:0});
					break;
					case 3:
					move(oSpan,{left:0,top:-200});
					break;
				} 
			};
		}
	})()
	
	//第3个页面布局
	var oPage3=getByClass(document,"page3")[0];
	oPage3.style.height=bodyH+"px";
	
	var oLeftBox=getByClass(document,"left_box")[0];
	var oIcon=getByClass(document,"icon")[0];
	var aIconBtn=oIcon.getElementsByTagName("a");
	var aList=oLeftBox.children;
	
	oLeftBox.style.height=aList[0].offsetHeight*aList.length+"px";
	
	//最大的布局选项卡
	for(var i=0; i<aIconBtn.length; i++){
		(function(index){
			aIconBtn[i].onclick=function(){
				move(oLeftBox,{top:-index*aList[0].offsetHeight})
				for(var i=0; i<aIconBtn.length; i++){
					aIconBtn[i].className="icon_btn";
				}
				this.className="icon_btn active"
			};
		})(i)
	}
	
	//无缝轮播图效果
	(function(){
		var oLcarrousel = document.getElementById("l_carrousel");
		var oLNext = oLcarrousel.getElementsByTagName("p")[1];
		var oLPrev = oLcarrousel.getElementsByTagName("p")[0];
		var oShowImg=oLcarrousel.getElementsByTagName("ul")[0];
		var aBtnNav =oLcarrousel.getElementsByTagName("ol")[0].children;
		var aShowImg =oShowImg.children;
		var iNow=0;
		var ready=true;
		
		oShowImg.innerHTML+=oShowImg.innerHTML;
		oShowImg.style.width=oShowImg.children[0].offsetWidth*aShowImg.length+"px";
		for(var i=0; i<aBtnNav.length; i++){
			(function(index){
				aBtnNav[i].onclick=function(){
					iNow=index;
					tab();
				};
			})(i)
		}
		function tab(){
			for(var i=0; i<aBtnNav.length; i++){
				aBtnNav[i].className="";
			}
			if(iNow==aBtnNav.length){
				aBtnNav[0].className="active";
			}else{
				aBtnNav[iNow].className="active";
			}
			move(oShowImg,{left:-iNow*oShowImg.children[0].offsetWidth},{complete:function(){
				ready=true;
				if(iNow==aBtnNav.length){
					oShowImg.style.left=0;
					iNow=0;
				}
			}});
		}
		oLcarrousel.onmousemove=function(){
			clearInterval(timer);
		};
		oLcarrousel.onmouseout=function(){
			timer=setInterval(lnext,1000)
		};
		var timer=setInterval(lnext,1000)
		oLNext.onclick=lnext;
		function lnext(){
			if(!ready)return;
			ready=false;
			iNow++;
			tab();
		};
		oLPrev.onclick=function(){
			if(!ready)return;
			ready=false;
			if(iNow==0){
				iNow=aBtnNav.length-1;
				oShowImg.style.left=-oShowImg.offsetWidth/2+"px";
			}else{
				iNow--;
			}
			tab();
		};
	})()
	//淡入淡出效果
	var oRcarrousel = document.getElementById("r_carrousel");
	var oRNext = oRcarrousel.getElementsByTagName("p")[1];
	var oRPrev = oRcarrousel.getElementsByTagName("p")[0];
	var aOpyShow=oRcarrousel.getElementsByTagName("ul")[0].children;
	var aLiBtn =oRcarrousel.getElementsByTagName("ol")[0].children;
	
	for(var i=0; i<aLiBtn.length; i++){
		(function(index){
			aLiBtn[i].onclick=function(){
				for(var i=0; i<aLiBtn.length; i++){
					aLiBtn[i].className="";
					move(aOpyShow[i],{opacity:0},{duration:800})
				}
				this.className="active";
				move(aOpyShow[index],{opacity:1},{duration:800})
			};
		})(i)
	}
	//手风琴
	var oSkin=document.getElementById("slidedeck_frame");
	var aSlidedeck = oSkin.children;
	var aSdckSpan =oSkin.getElementsByTagName("span");
	var aEm = oSkin.getElementsByTagName("em");
	for(var i=0; i<aSlidedeck.length; i++){
		aSlidedeck[i].style.left=i*43+"px";
		(function(index){
			aSlidedeck[i].onmouseover=function(){
				for(var i=0; i<aSlidedeck.length; i++){
					aSdckSpan[i].className="list_nav";
					aEm[i].style.display="none";
					if(i<=index){
						move(aSlidedeck[i],{left:i*43},{duration:1000});
					}else{
						move(aSlidedeck[i],{left:728+(i-1)*43},{duration:1000});
					}
				}
				aSdckSpan[index].className="list_nav active";
				aEm[index].style.display="block";
			};
		})(i)
	}
	//圆运动
	var oBall=document.getElementById("ball");
	var oCenter=getByClass(document,"center")[0];
	var r=oBall.offsetWidth/2;
	var count=12;
	var bl=true;
	
	for(var i=0; i<count; i++){
		var oBallBox=document.createElement("span");
		oBallBox.className='ballbox';
		oBallBox.innerHTML='<img src="images/'+i+'.jpg" />'
		oBall.appendChild(oBallBox);
		
		var aBallBox=oBall.children;
		
		oCenter.onclick=function(){
			if(bl){
				for(var j=0; j<aBallBox.length; j++){
					 ballMove(aBallBox[j],360/count*j)
					 oCenter.innerHTML="给我合上";
					 oCenter.style.backgroundImage="url(images/ball_center1.jpg)"
				}
			}else{
				for(var j=0; j<aBallBox.length; j++){
					 ballMove(aBallBox[j],0);
					 oCenter.innerHTML="点我试试"
					 oCenter.style.backgroundImage="url(images/ball_center.jpg)"
				}
			}
			bl=!bl
		};
		function ballMove(obj,iTarget){
			obj.aBallBox=obj.aBallBox||0;
			var count=Math.round(700/30);
			var start=obj.aBallBox;
			var dis=iTarget-start;
			var n=0;
			
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				n++;
				var a=1-n/count;
				var cur=start+dis*(1-a*a*a);
				
				var a=r+Math.sin(a2r(cur))*r;
				var b=r-Math.cos(a2r(cur))*r;
				
				obj.style.left=a+"px";
				obj.style.top=b+"px";
				obj.aBallBox=cur;
				
				if(n==count){
					clearInterval(obj.timer);
				}
			},30)
		}
	}

	function a2r(n){
		return  n*Math.PI/180;
	}
	//苹果菜单效果
	
	var oApp=document.getElementById("bgapple");
	var aAppImg =oApp.getElementsByTagName("img");
	
	oApp.onmousemove = function(ev){
		var oEvt = ev||event;
		for(var i=0; i<aAppImg.length; i++){

			var a=getPos(aAppImg[i]).left-oEvt.pageX+aAppImg[i].offsetWidth/2;
			var b=getPos(aAppImg[i]).top-oEvt.pageY+aAppImg[i].offsetHeight/2;
			var c=Math.sqrt(a*a+b*b);
			var dis=c;
			
			var scale =1-c/300;
			if(scale<0.5)scale=0.5;
			aAppImg[i].style.width=128*scale+"px";
		}
	};
	function getPos(obj){
		var l=0;
		var t=0;
		while(obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {left:l,top:t}
	}
	

	//拖拽菜单效果
	var oDargDiv = document.getElementById("darg_div");
	var oDargBox = getByClass(document,"darg_box")[0];
	var aDargLi = oDargBox.children;
	var aDargImg = oDargBox.getElementsByTagName("img");
	
	oDargBox.style.width=aDargLi[0].offsetWidth*aDargLi.length+"px";
	//拖动菜单
	oDargBox.onmousedown=function(ev){
		var oEvt=ev||event;
		var disX=oEvt.clientX-oDargBox.offsetLeft;
		document.onmousemove=function(ev){
			var oEvt=ev||event;
			var l=oEvt.clientX-disX;
			if(l>oDargDiv.offsetWidth/2-(0+0.5)*aLi[0].offsetWidth)
				l=oDargDiv.offsetWidth/2-(0+0.5)*aLi[0].offsetWidth;
			if(l<oDargDiv.offsetWidth/2-(aDargLi.length-1+0.5)*aDargLi[0].offsetWidth)
				l=oDargDiv.offsetWidth/2-(aDargLi.length-1+0.5)*aDargLi[0].offsetWidth;
			oDargBox.style.left=l+"px";
			setDargSize();
		};
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
			oDargBox.releaseCapture&&oDargBox.releaseCapture();
		};
		oDargBox.setCapture&&oDargBox.setCapture();
		return false;
	}
	//设定中心点
	setCenter(4);
	function setCenter(n){
		oDargBox.style.left=oDargDiv.offsetWidth/2-(n+0.5)*aDargLi[0].offsetWidth+"px";
	}
	setDargSize();
	function setDargSize(){
		//dis=oDiv.w/2-(ul.left+li.left+li.w/2)
		for(var i=0; i<aDargLi.length; i++){
			var dis=Math.abs(oDargDiv.offsetWidth/2-(oDargBox.offsetLeft+aDargLi[i].offsetLeft+aDargLi[i].offsetWidth/2));
			var scale=1-dis/800;

			if(scale<0.5)scale=0.5;

			//放大每张图片的宽高,margin
			aDargImg[i].style.width=520*scale+"px";
			aDargImg[i].style.height=358*scale+"px";
			aDargImg[i].style.marginLeft=-(aDargImg[i].offsetWidth-aDargLi[i].offsetWidth)/2+"px";
			aDargImg[i].style.marginTop=-(aDargImg[i].offsetHeight-aDargLi[i].offsetHeight)/2+"px";
			aDargImg[i].style.zIndex=parseInt(scale*1000);
			aDargImg[i].style.opacity=scale;
		}
	}
	// 随机交换的效果
	(function(){
		var oUlM = getByClass(document,"moveing")[0];
		var aLiM = oUlM.children;
		var zIndex=1;
	
		var aPos=[];
		for (var i = 0; i < aLiM.length; i++) {
			aPos[i]={left:aLiM[i].offsetLeft,top:aLiM[i].offsetTop,
						width:	aLiM[i].offsetWidth,
						height:	aLiM[i].offsetHeight,
						opacity:1};
			aLiM[i].style.left=aPos[i].left+"px";
			aLiM[i].style.top=aPos[i].top+"px";
		}
	
		for(var i=0; i<aLiM.length; i++){
			aLiM[i].style.position="absolute";
			aLiM[i].style.margin="0";
			darg(aLiM[i]);
			aLiM[i].index=i;
		}
		//封装拖拽
		function darg(obj){
			obj.onmousedown=function(ev){
				var oEvt=ev||event;
				var disX=oEvt.clientX-obj.offsetLeft;
				var disY=oEvt.clientY-obj.offsetTop;
				obj.style.zIndex=zIndex++;
				clearInterval(obj.timer);
				document.onmousemove=function(ev){
					var oEvt=ev||event;
					obj.style.left=oEvt.clientX-disX+"px";
					obj.style.top=oEvt.clientY-disY+"px";
					
					for (var i = 0; i < aLiM.length; i++) {
						aLiM[i].className="";
					};
					var oNear=findMin(obj);
					oNear&&(oNear.className="bd");
				};
				document.onmouseup=function(){
					document.onmousemove=document.onmouseup=null;
					obj.releaseCapture&&obj.releaseCapture();
					var oNear=findMin(obj);
	
					if(oNear){
						var tmp=obj.index;
						obj.index=oNear.index;
						oNear.index=tmp;
	
						move(oNear,aPos[oNear.index])
					}
					move(obj,aPos[obj.index]);
				};
				obj.setCapture&&obj.setCapture();
				return false;
			}
		}
	
		//找最近 
		function findMin(obj){
			var iMin=999999;
			var iIndex=-1;
			for(var i=0; i<aLiM.length; i++){
				if(obj==aLiM[i])continue;
				if(collTest(obj,aLiM[i])){
					var dis=getDis(obj,aLiM[i]);
					if(iMin>dis){
						iMin=dis;
						iIndex=i;
					}
				}
			}
			if(iIndex==-1){
				return null;
			}
			return aLiM[iIndex];
		}
		//算最小距离
		function getDis(obj1,obj2){
			var a=obj1.offsetLeft-obj2.offsetLeft;
			var b=obj1.offsetTop-obj2.offsetTop;
			return Math.sqrt(a*a+b*b);
		}
		//碰撞检测
		function collTest(obj1,obj2){
			var l1 = obj1.offsetLeft;
			var t1 = obj1.offsetTop;
			var r1 = l1 + obj1.offsetWidth;
			var b1 = t1 + obj1.offsetHeight;
			
			
			var l2 = obj2.offsetLeft;
			var t2 = obj2.offsetTop;
			var r2 = l2 + obj2.offsetWidth;
			var b2 = t2 + obj2.offsetHeight;
	
			if(r1<l2||b1<t2||l1>r2||t1>b2){
				return false;
			}else{
				return true;
			}
		}
		//随机换一下
		var oChange= getByClass(document,"change")[0];	
		oChange.onclick=function(){
			aPos.sort(function(){
				return Math.random()-0.5;
			})
			for (var i = 0; i < aLiM.length; i++) {
				aLiM[i].index=i;
				move(aLiM[i],aPos[i]);
			};
		};
		
		//下一页
		var oNextPage=getByClass(document,"nextPage")[0];
		var ready=true;
		oNextPage.onclick=function(){
			if(!ready) return;
			ready=false;
			down();
		};
		
		function down(){
			var i=aLiM.length-1;
			var timer=setInterval(function(){
				(function(index){
					move(aLiM[i],{left:oUlM.offsetWidth/2,top:oUlM.offsetHeight,opacity:0.2,width:10,height:10},{complete:function(){
						//判断第0张跑完了
						if(index==0){//放出来
							up();	
						}
					}});
				})(i);
				
				i--;
				if(i==-1){
					clearInterval(timer);	
				}
			},100);	
		}
		
		function up(){
			var i=aLiM.length-1;
			var timer=setInterval(function(){
				(function(index){
					move(aLiM[i],aPos[i],{complete:function(){
						if(index==0){
							ready=true;	
						}
					}});
				})(i);
				
				i--;
				if(i==-1){
					clearInterval(timer);	
				}
			},100);	
		}
	})()
	
	<!--page4-->
	var oPrev = document.getElementById("prev");
	var oNext = document.getElementById("next");
	var oPageD   = document.getElementById("page4");
	var aLi   = oPageD.children;
	var aSpan = oPageD.getElementsByTagName("span");
	var len   = aLi.length;
	
	var bReady = true;
	var aClass = [];
	for(var i = 0; i < len; i++){
		aClass.push(aLi[i].className);
	}
	oPrev.onclick = function(){
		if(!bReady) return;
		bReady = false;
		aClass.push(aClass.shift());
		tab();
	};
	function tab(){
		for(var i = 0; i < len; i++){
			aLi[i].className = aClass[i];
		}
		var oCur = document.querySelector(".cur");
		var oCurSpan = oCur.children[0].children[1];
		move(oCurSpan,{bottom:0},{duration:1000})
		setTimeout(function(){
			move(oCurSpan,{bottom:-150})
		},2000)
		oCur.addEventListener("transitionend",function(){
			bReady = true;
		},false);	
	}
	oNext.onclick = function(){
		if(!bReady) return;
		bReady = false;
		aClass.unshift(aClass.pop());
		tab();
	};
	
	<!--page6-->
		 var oBox=document.getElementById("curriculum");
		 var oUlInfor=document.getElementById("information");
		 var oMoveBtn = getByClass(document,"move")[0];
		 var aLiMsg=oUlInfor.children;
		 
		 for(var i=0; i<aLiMsg.length; i++){
			aLiMsg[i].style.position="absolute";
			aLiMsg[i].style.top=aLiMsg[i].offsetHeight*i+"px";
		}
		 var i=0;
		 oMoveBtn.onclick = function(){
			oBox.style.height="448px";
			oBox.style.transform="rotate(-360deg)";
			this.style.transform="rotate(-180deg)";
			var timer=setInterval(function(){
				move(aLiMsg[i],{opacity:1})
				aLiMsg[i].style.transition="0.3s all ease";
				aLiMsg[i].style.transform="translate(400px)";
				i++;
				if(i==aLiMsg.length){
					clearInterval(timer);
				}	
			},600)
		};
	
	//旋转的正方体
	(function(){
		var oSquare = getByClass(document,"square")[0];
		var x = 0;
		var y = 0;
		oSquare.onmousedown = function(ev){
			var disX = ev.clientX - y;
			var disY = ev.clientY - x;
			document.onmousemove = function(ev){
				y  = ev.clientX - disX ;
				x  = ev.clientY - disY ;
				
				oSquare.style.transform = "perspective(1000px) rotateX("+-x+"deg) rotateY("+y+"deg)"
			};
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			};	
			return false;
		};
		
		var timer = setInterval(rotateX,30);
		oSquare.onmouseover = function(){
			clearInterval(timer);
		};
		oSquare.onmouseout = function(){
			timer = setInterval(rotateX,30);
		};
		function rotateX(){
			x+=5;
			oSquare.style.transform = "perspective(1000px) rotateX("+-x+"deg)";
			
		};
	})();
})
// JavaScript Document
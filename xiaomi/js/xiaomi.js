	
	{
	let jdflwzs =document.querySelectorAll(".jdflwzl");
	let hezil =document.querySelectorAll(".hezil");
	jdflwzs.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i=0;i<jdflwzs.length;i++){
				jdflwzs[i].classList.remove("active");
				hezil[i].style.display="none";
			}
			ele.classList.add("active");
			hezil[index].style.display="block";
		}
	})	
	}
	// 明星单品
	{	let a=document.querySelector(".danpin-anniu1");
	let b=document.querySelector(".danpin-anniu2");
	let c=document.querySelector(".kuangoo");

	a.onclick =tr;
	function tr(){
		b.classList.remove("active");
		a.classList.add("active");
		c.style.marginLeft="-1240px";
	}
	b.onclick =td;
	function td(){
		b.classList.add("active");
		a.classList.remove("active");
		c.style.marginLeft="0";
	}
	let aa =setInterval(th,3000);
	let i=0;
	function th(){
		i++;
		if(i%2==0){
			tr();
		}else{
			td();
		}
	}
	let d=document.querySelector(".wwwww");
	d.onmouseover=function(){
		clearInterval(aa);
	}
	d.onmouseout=function(){
		aa =setInterval(th,3000);
	}
}
// banner开始
{	let dians=document.querySelectorAll(".lunbodiankuang li");
	let imgs=document.querySelectorAll(".bannerkuang");
	dians.forEach(function(ele,index){
				ele.onclick=function (){
					for(i=0;i<dians.length;i++){
						dians[i].classList.remove("active");
						imgs[i].classList.remove("active");
					}
					ele.classList.add("active");
					imgs[index].classList.add("active");
					now = index;
				}
	})
		var th=setInterval(fn,3000);
			var now=0;
			function fn(dir="r"){
				if(dir==="r"){
					now++;
					if(now===dians.length){
						now=0;
					}
				}else if (dir==="l") { 
					now--;
					if(now=== -1){
						now=dians.length-1;
					}
				}
				for(i=0;i<dians.length;i++){
						dians[i].classList.remove("active");
						imgs[i].classList.remove("active");
					}
					dians[now].classList.add("active");
					imgs[now].classList.add("active");
			}
			let bannerObj=document.querySelector("#banner");
			bannerObj.onmouseover=function (){
				clearInterval(th);
			}
			bannerObj.onmouseout=function (){
			 	th=setInterval(fn,3000);
			}
			let leftobj =document.querySelector(".lunbojian");
			console.log(leftobj);
			let rightobj =document.querySelector(".lunbojian-1");
			leftobj.onclick=function(){
				fn("l")
			};
			rightobj.onclick=function(){
				fn("r")
			};
}	
// 内容部分
// 

//当屏幕滑动超过一个屏幕的高度时候，出现

// 页面加载时候绑定一个函数，监控
window.onload = function(){
	let btn = document.getElementById('back');
	
	let _clientHeight = document.documentElement.clientHeight;
	// 滑动屏幕时执行监控函数
	window.onscroll = function(){
		let toTop = document.body.scrollTop;
		if(toTop >= _clientHeight){
			btn.style.display="block";
		}else{
			btn.style.display="none";
		}
	}
	// 点击按钮执行返回顶部的函数，但一下子返回太突兀了，加间歇调用函数起缓冲作用。
	btn.onclick = function(){
		let timer = setInterval(function(){
			let toTop = document.body.scrollTop;
			let speedTop = toTop/5;
			document.body.scrollTop = toTop - speedTop;
			if(toTop === 0 ){
				clearInterval(timer)
			}
			console.log(timer);
		},30)
	}
}

function off()
{
	document.getElementById("new").innerHTML='' ;
	document.getElementById("goback").innerHTML='' ;
	document.getElementById("dramaintro").innerHTML='';
	document.getElementById("dramabutton").innerHTML='';
	document.getElementById("frame").innerHTML = '';
}function create1()
{
	document.getElementById("new").innerHTML= '<img src="./photo/wakeup.jpg" id="newwindows" />' ;
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《麻醉風暴》<br><span id="English">Wake Up</span></p><p id="introtext">2015年台灣偶像劇。由黃健瑋、吳慷仁、許瑋甯、黃仲崑領銜主演。</p>'
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=wk1() >第一集</a><a href="#" id="partbutton" onclick=wk2() >第二集</a><a href="#" id="partbutton" onclick=wk3() >第三集</a><a href="#" id="partbutton" onclick=wk4() >第四集</a><a href="#" id="partbutton" onclick=wk5() >第五集</a><a href="#" id="partbutton" onclick=wk6() >第六集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/oZnBYUyDp6Y" frameborder="0" allowfullscreen></iframe>';
}

function create2()
{
	document.getElementById("new").innerHTML= '<img src="./photo/bz.jpg" id="newwindows" />';
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《半澤直樹》<br><span id="English">Hanzawa Naoki</span></p><p id="introtext">本劇描寫於泡沫時期入行的銀行員半澤直樹，與銀行內外的「敵人」戰鬥的故事。</p>';
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=bz1() >第一集</a><a href="#" id="partbutton" onclick=bz2() >第二集</a><a href="#" id="partbutton" onclick=bz3() >第三集</a><a href="#" id="partbutton" onclick=bz4() >第四集</a><a href="#" id="partbutton" onclick=bz5() >第五集</a><a href="#" id="partbutton" onclick=bz6() >第六集</a><a href="#" id="partbutton" onclick=bz7() >第七集</a><a href="#" id="partbutton" onclick=bz8() >第八集</a><a href="#" id="partbutton" onclick=bz9() >第九集</a><a href="#" id="partbutton" onclick=bz10() >第十集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/uDz4UZYun7I" frameborder="0" allowfullscreen></iframe>';
	
}
function create3()
{
	document.getElementById("new").innerHTML= '<img src="./photo/bc.jpg" id="newwindows" />';
	document.getElementById("goback").innerHTML= '<a href="#" id="gobacktext" onclick=off() style="text-Decoration: none;">&nbsp;Return&nbsp;</a>' ;
	document.getElementById("dramaintro").innerHTML= '<p id="Chinese">《必娶女人》<br><span id="English">Marry Me, or Not?</span></p><p id="introtext">2015年東森電視自製戲劇系列的第二部作品。由邱澤、柯佳嬿、曾之喬、張懷秋領銜主演。</p>';
	document.getElementById("dramabutton").innerHTML= '<a href="#" id="partbutton" onclick=bc1() >第一集</a><a href="#" id="partbutton" onclick=bc2() >第二集</a><a href="#" id="partbutton" onclick=bc3() >第三集</a><a href="#" id="partbutton" onclick=bc4() >第四集</a><a href="#" id="partbutton" onclick=bc5() >第五集</a><a href="#" id="partbutton" onclick=bc6() >第六集</a><a href="#" id="partbutton" onclick=bc7() >第七集</a><a href="#" id="partbutton" onclick=bc8() >第八集</a><a href="#" id="partbutton" onclick=bc9() >第九集</a><a href="#" id="partbutton" onclick=bc10() >第十集</a><a href="#" id="partbutton" onclick=bc11() >第11集</a><a href="#" id="partbutton" onclick=bc12() >第12集</a><a href="#" id="partbutton" onclick=bc13() >第13集</a><a href="#" id="partbutton" onclick=bc14() >第14集</a><a href="#" id="partbutton" onclick=bc15() >第15集</a><br><p id="attention">記得點擊全螢幕觀看喔！如果是用手機小心流量爆炸！</p>';
	document.getElementById("frame").innerHTML='<iframe width="500" height="300" src="https://www.youtube.com/embed/NRaoWKt6gLw" frameborder="0" allowfullscreen></iframe>';
	
}
function wk1()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4HGkLytSmuP7gaClse" allowfullscreen=""></iframe>';
}
function wk2()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4pTMwwzKCQYmpaDLrG" allowfullscreen=""></iframe>';
}
function wk3()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kRTtOKXiqMxpCGbtntE" allowfullscreen=""></iframe>';
}
function wk4()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/ksnEbMmzmDrqbSbtnuC" allowfullscreen=""></iframe>';
}
function wk5()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3SdaQjiZSM9DwaGhrJ" allowfullscreen=""></iframe>';
}
function wk6()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3wbAF0b592CX9aGZA7" allowfullscreen=""></iframe>';
}
function bz1()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/k5Pf75_NOZE" frameborder="0" allowfullscreen></iframe>';
}
function bz2()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/FdBWVCgMPNo" frameborder="0" allowfullscreen></iframe>';
}
function bz3()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/9IJNDj61ANQ" frameborder="0" allowfullscreen></iframe>';
}
function bz4()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/wJa60GINcCA" frameborder="0" allowfullscreen></iframe>';
}
function bz5()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/vDJsW552tEE" frameborder="0" allowfullscreen></iframe>';
}
function bz6()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/5HKgS9SMvS4" frameborder="0" allowfullscreen></iframe>';
}
function bz7()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/t0cbDz6Dp9k" frameborder="0" allowfullscreen></iframe>';
}
function bz8()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/y34nMEYVXCo" frameborder="0" allowfullscreen></iframe>';
}
function bz9()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/zOOGiKceFWY" frameborder="0" allowfullscreen></iframe>';
}
function bz10()
{
	document.getElementById("frame").innerHTML = '<iframe width="500" height="300" src="https://www.youtube.com/embed/rs83WnF-e-s" frameborder="0" allowfullscreen></iframe>';
}
function bc1()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k9JNUQb1zmVYuKdDfqa" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3RKF5g0xD3hxAdDfs2" allowfullscreen=""></iframe>';
}
function bc2()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1njgZEOu7Ax2mdKfnC" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k7feAnuU1ZRsfbdKfnS" allowfullscreen=""></iframe>';
}
function bc3()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1YCP1qKrNY3gMdRaaE" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2JaZBpkGIA2BHdRaaR" allowfullscreen=""></iframe>';
}
function bc4()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k6xl4bEeqgaVQOdZ1jr" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2INxYjS8ddvTEdZ1jG" allowfullscreen=""></iframe>';
}
function bc5()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2GaRfL8LEYJkze6HQp" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2p7DP2R1rWK4te6HR1" allowfullscreen=""></iframe>';
}
function bc6()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3c5iSL42egMwaedFGK" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kfeGlslDlqmskhedFH8" allowfullscreen=""></iframe>';
}
function bc7()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k5pvMA6xhn55LfejRFd" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3xgLhHmgjhMTSejRFN" allowfullscreen=""></iframe>';
}
function bc8()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kOuZYvsrYmsHXlepBDc" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3TYLdhAy7YV8zepBDE" allowfullscreen=""></iframe>';
}
function bc9()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1yMjp4bWtNv4Peyerf" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k5oC9JmZ3ULzdXeyerG" allowfullscreen=""></iframe>';
}
function bc10()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1JGcCLDqUhFGTeCge1" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/kGVfkw3f2WkW7SeCgek" allowfullscreen=""></iframe>';
}
function bc11()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k26SCa6vkCcfNTeJXF1" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4aC3nzbNfyEiBeJXFf" allowfullscreen=""></iframe>';
}
function bc12()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k4dHEfhdFVNMSUeSIfB" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1W08vioN7zDGweSIg1" allowfullscreen=""></iframe>';
}
function bc13()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k3GNuWaQ5CDGTgf1lCQ" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2MFz0WsOTxvUlf1lDi" allowfullscreen=""></iframe>';
}
function bc14()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k2NhO48ESWEuAIf7yhe" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k11XsRcScMBdc1f7yhH" allowfullscreen=""></iframe>';
}
function bc15()
{
	document.getElementById("frame").innerHTML = '<iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k6hB3kW7mDirDJft11i" allowfullscreen=""></iframe><br><iframe frameborder="0" width="500" height="300" src="http://www.dailymotion.com/embed/video/k1YlxQozQmpF8bftfK2" allowfullscreen=""></iframe>';
}

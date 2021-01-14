let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `
/*我是hy
第一次做个
简陋的
会动的
页面
让开，我要开始xx了！
首先我要准备个div
我加个样式！*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
  
}
/*接下来我把div变成八卦图！！
 * 来开始！！！！
 *首先让他变成圆圈
*/
#div1{
  border-radius:50%;
}
/* 给边框加一些阴影 */
#div1{
  box-shadow: 2.46px 3.15px 4.75px 0.25px rgba(0, 0, 0, 0.77);
  border:none;


}
/* 八卦一黑一白*/
#div1{
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/* 转起来 */
@keyframes x {
  from {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
}
#div1{
  margin-left:-85px;
  animation: x 10s infinite linear;
}
/* 大球加小球！ */
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#FFF;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
/* 完活！ */
`
let string2 = ''
let n = 0

let step = () => {
  setTimeout(() => {
    if (string[n] === '\n') {
      string2 += '<br>'
    } else if (string[n] === ' ') {
      string2 += '&nbsp'
    } else {
      string2 += string[n]
    }

    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    html.scrollTo(0, 9999)
    window.scrollTo(0, 9999)
    if (n + 1 < string.length) {
      n += 1
      step()
    }
  }, 50)
}

step()

// 移动端常见的一些事件
// click
// 连续click的触发有200ms ~ 300ms的延迟
// 连续click的触发有200ms ~ 300ms的延迟
// touch
// touchstart 手指触摸到屏幕会触发 
// touchmove 当手指在屏幕上移动时，会触发
// touchend 当手指离开屏幕时，会触发
// touchcancel 可由系统进行的触发，比如手指触摸屏幕的时候，突然alert了一下，或者系统中其他打断了touch的行为，则可以触发该事件
// 长按的时候无意间触发了浏览器自身的复制文本功能，此时触发了touchcancel事件
//  tap
// tap: 手指碰一下屏幕会触发
// longTap: 手指长按屏幕会触发
// singleTap: 手指碰一下屏幕会触发
// doubleTap: 手指双击屏幕会触发
// swipe
// swipe 手指在屏幕上滑动时会触发
// swipeLeft：手指在屏幕上向左滑动时会触发
// swipeRight：手指在屏幕上向右滑动时会触发
// swipeUp：手指在屏幕上向上滑动时会触发
// swipeDown：手指在屏幕上向下滑动时会触发
// touches记录的是屏幕上全部的触摸对象的信息
// targetTouches记录的是当前DOM节点上全部的触摸对象的信息
// changedTouches记录着触发该次事件的信息，一般长度为1
// 自定义手势事件gesture 目前只是一个概念，使用的时候需封装模拟
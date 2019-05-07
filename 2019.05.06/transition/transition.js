// transition:  [ <transition-property> || <transition-duration> || <transition-timing-function> || <transition-delay> ]
// transition-property 属性
// transition-duration 设置转换发生的持续时间 (转换多个属性时，您可以设置多个持续时间，每个属性一个)
// transition-timing-function 执行曲线(设置转换的移动速度)
// transition-delay 延迟
// 速记 transition: background .2s linear, border-radius 1s ease-in 1s;

// 重要的是要注意，并非所有属性都可以转换，只有具有可识别中间点的属性
// 颜色，字体大小等可以从一个值转换到另一个值，因为它们在彼此之间具有可识别的值
// display，该属性可能无法转换，因为它没有任何中点
// width min-width max-width
// height min-heigth max-height line-height
// color background-color border-color border-radius
// font-size font-weight
// top left right bottom background-position
// padding margin
// text-indent text-shadow vertical-align
// word-spacing letter-spacing
// visibility z-index



// transform (旋转、缩放、移动或倾斜)
// 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
// 移动 translate(x,y) translate3d(x,y,z) translateX(x) translateY(y) translateZ(z) 
// 缩放 scale(x,y)
// 旋转 rotate(angle) rotate3d(x,y,z,angle)
// 倾斜 skew(x-angle,y-angle)
// perspective(n) 为 3D 转换元素定义透视视图



// animation  [ <animation-name> || <animation-duration> || <animation-timing-function> || <animation-delay> || <animation-iteration-count> || <animation-fill-mode> || <animation-play-state> ]
// animation-name
// animation-duration
// animation-timing-function
// animation-delay
// animation-iteration-count 动画迭代 infinite | 整数
// animation-direction 方向 normal | reverse | alternate | alternate-reverse  alternate值将向前播放动画然后向后播放
// animation-play-state 允许分别使用running和paused关键字值播放或暂停动画
// animation-fill-mode 动画填充模式 none，forwards，backwards，和both

// .stage:hover .ball {
//     animation-name: slide;
//     animation-duration: 2s;
//     animation-timing-function: ease-in-out;
//     animation-delay: .5s;
//     animation-iteration-count: infinite;
//     animation-direction: alternate;
//   }
//   .stage:active .ball {
//     animation-play-state: paused;
//   }
// 点击 .stage 时动画停止，鼠标放开，动画继续进行



// text-shadow
// border-radius
// border-top-left-radius
// outline
// outline-offset
// box-shadow
// background-image radial-gradient/radial-gradient(#9ed8d3 2px, transparent 3px)
// background-size
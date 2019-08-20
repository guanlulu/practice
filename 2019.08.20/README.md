* 每个 canvas 初始都是一个白板
* 样式除了宽高，尽量写在画布里，而不是使用 CSS
* `canvas` 标签里如果添加文本，那么当浏览器不支持 `canvas` 时显示文本

* `document.querySelector()` 获取 `canvas `  元素
* 调用它的 `getContext()` 方法获取绘图上下文环境，参数必须为 `2d` 

* getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性

#### 颜色、样式、阴影

| 属性          | 描述                                     |
| ------------- | ---------------------------------------- |
| fillStyle     | 设置或返回用于填充绘画的颜色、渐变或模式 |
| strokeStyle   | 设置或返回用于笔触的颜色、渐变或模式     |
| shadowColor   | 设置或返回用于阴影的颜色                 |
| shadowBlur    | 设置或返回用于阴影的模糊级别             |
| shadowOffsetX | 设置或返回阴影与形状的水平距离           |
| shadowOffsetY | 设置或返回阴影与形状的垂直距离           |

| 方法                   | 描述                                  |
| ---------------------- | ------------------------------------- |
| createLineGradient()   | 创建线性渐变（用在画布内容上）        |
| createPattern()        | 在指定的方向上重复指定的元素          |
| createRadialGradient() | 创建放射状/环形的渐变（用在画布内容上 |
| addColorStop()         | 规定渐变对象中的颜色和停止位置        |

```
context.createLinearGradient(x0,y0,x1,y1)
context.createRadialGradient(x0,y0,r0,x1,y1,r1)
gradient.addColorStop(stop,color)
```

#### 线条样式

| 属性       | 描述                                     |
| ---------- | ---------------------------------------- |
| lineCap    | 设置或返回线条的结束端点样式             |
| lineJoin   | 设置或返回两条线相交时，所创建的拐角类型 |
| lineWidth  | 设置或返回当前的线条宽度                 |
| miterLimit | 设置或返回最大斜接长度                   |

#### 矩形

| 方法         | 描述                         |
| ------------ | ---------------------------- |
| rect()       | 创建矩形                     |
| fillRect()   | 绘制"被填充"的矩形           |
| strokeRect() | 绘制矩形（无填充）           |
| clearRect()  | 在给定的矩形内清除指定的像素 |

```
context.lineCap="butt|round|square"
context.lineJoin="bevel|round|miter"

context.rect(x,y,width,height) // 未填充
context.fillRect(x,y,width,height) // 填充
context.strokeRect(x,y,width,height) // 未填充
context.clearRect(x,y,width,height)
```

#### 路径

| 方法               | 描述                                                    |
| ------------------ | ------------------------------------------------------- |
| fill()             | 填充当前绘图（路径)                                     |
| stroke()           | 绘制已定义的路径                                        |
| beginPath()        | 起始一条路径，或重置当前路径                            |
| moveTo()           | 把路径移动到画布中的指定点，不创建线条                  |
| closePath()        | 创建从当前点回到起始点的路径                            |
| lineTo()           | 添加一个新点，然后在画布中创建从该点到最后指定点的线条  |
| clip()             | 从原始画布剪切任意形状和尺寸的区域                      |
| quadraticCurveTo() | 创建二次贝塞尔曲线                                      |
| bezierCurveTo()    | 创建三次次贝塞尔曲线                                    |
| arc()              | 创建弧/曲线（用于创建圆形或部分圆                       |
| arcTo()            | 创建两切线之间的弧/曲线                                 |
| isPointInPath()    | 如果指定的点位于当前路径中，则返回 true，否则返回 false |

* 一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。
* 您也可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法

```
context.quadraticCurveTo(cpx,cpy,x,y)
context.arc(x,y,r,sAngle,eAngle,counterclockwise)
context.arcTo(x1,y1,x2,y2,r)
```

#### 转换

|      |      |
| ---- | ---- |
|      |      |
|      |      |
|      |      |
|      |      |
|      |      |


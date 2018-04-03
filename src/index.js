import { tween, styler, easing } from 'popmotion'
// 计数器
const counter = document.querySelector('#counter')

tween({
  duration: 1000
}).start(v => {
  counter.innerHTML = v
})

// 圆球滚动
const ball = document.querySelector('#ball')
const ballStyler = styler(ball)
tween({
  from: { x: 0, scale: 1 },
  to: { x: 300, scale: 2 },
  flip: Infinity,
  ease: easing.easeInOut,
  duration: 1000
}).start(ballStyler.set)

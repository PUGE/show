// 解决ios:active触摸不变色
document.body.addEventListener('touchstart',function(){})
document.addEventListener('touchmove', function(e) {
  e.preventDefault()
}, { passive: false })

if (_owo.isMobi) {
  document.body.classList.add('phone')
} else {
  document.body.classList.add('pc')
}
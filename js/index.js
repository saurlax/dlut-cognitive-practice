addEventListener('DOMContentLoaded', () => {
  document.querySelector('.totop').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})

function search() {
  //打开新窗口
  const e = document.querySelector('.search input')
  window.open(`https://www.baidu.com/s?wd=大连理工大学%20${e.value}`)
}
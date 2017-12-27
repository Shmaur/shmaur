<template>
  <div id="app">
    <div class="header">
      <div class="leftLogo">
        <span>shmaur</span>  因为喜欢所有坚持
      </div>
      <ul class="nav">
        <li>不会前端</li>
        <li>不会设计</li>
        <li>不会摄影</li>
        <li>留点留言</li>
        <li>欢迎交友</li>
      </ul>
    </div>
    <div class="announcement">
      <p>公告：这是一个很长很长的公告，很有意义的很帅的一个公告</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import "../static/mains.scss"
export default {
  name: 'app'
}
</script>

<style lang="scss">

</style>

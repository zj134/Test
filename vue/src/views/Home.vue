<template>
  <div style="color: #666;font-size: 20px;">
    <div style="padding-bottom: 20px">
      <b>您好！{{ user.nickname }}</b>
    </div>
    <el-card>
      欢迎使用本系统😄
      <el-divider />
      本系统致力于为农产品找销路，为助农做出自己的一份力量！
      让农民劳有所得，人人都能吃到生态好物！
    </el-card>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    }
  }
}
</script>

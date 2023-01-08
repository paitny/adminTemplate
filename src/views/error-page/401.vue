<template>
  <div class="">
    <CountDown
        msg="您没有权限访问"
        :isLogin="!!$store.getters.userInfo.username"
    >
      <el-icon><Warning /></el-icon>
    </CountDown>
  </div>
</template>

<script setup>
import CountDown from "@/components/CountDown";
import { Warning } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped></style>

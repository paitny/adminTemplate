<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <ProjectCard :featureData="featureData"></ProjectCard>
      </el-col>
      <el-col :span="18">
        <FeatureTab :featureData="featureData"></FeatureTab>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ProjectCard from "./components/ProjectCard";
import FeatureTab from "./components/FeatureTab";
import { getFeature } from "@/api/getData";
import { ref } from "vue";

import {useRouter} from "vue-router";
import {checkAdmin} from "@/api/login";
import {ElMessage} from "element-plus";
const router = useRouter()
const featureData = ref([]);
const getFeatureFn = async () => {
  const { data } = await getFeature();
  featureData.value = data;
};
getFeatureFn();


</script>

<style lang="scss" scoped></style>

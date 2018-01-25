<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="20%">Aside</el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/css/basic.css"></style>

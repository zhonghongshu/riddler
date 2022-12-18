<template>
    <div>
        <el-container >
            <el-header>Hello,Michelle</el-header>
            <el-container>
                <el-aside style="height:100%">
                    <el-menu router>
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-s-tools"></i>信息加密/解密</template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                <el-menu-item index="/Common/CommonPage">通用密钥</el-menu-item>
                                <el-menu-item index="/Private/PrivatePage">私有密钥</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>

                        <el-menu-item index="/Guide"><i class="el-icon-question"></i>使用指南</el-menu-item>
                        <el-menu-item index="/Reach"><i class="el-icon-user-solid"></i>联系作者</el-menu-item>

                    </el-menu>
                </el-aside>
                <el-main style="height:100%">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
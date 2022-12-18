<template>
    <div>
        <h3>目录</h3>
        <el-link href="#_Common" type="primary">通用密钥</el-link>
        <br>
        <el-link href="#_Private" type="primary">私有密钥</el-link>

        <a name="_Common"></a>
        <h3>通用密钥</h3>
        <img src="@/assets/Common.jpg" width="70%">
        <p>1.用户输入文本信息之后，点击加密或者解密按钮使用相关功能</p>
        <p>2.通用密钥中采用系统后台默认设置的密钥，用户输入的所有信息都通过该固定密钥进行加密与解密</p>

        <br>
        <a name="_Private"></a>
        <h3>私有密钥</h3>
        <img src="@/assets/Private.jpg" width="70%">
        <p>1.用户输入文本信息之后，设置8位密码</p>
        <p>2.点击加密或者解密按钮使用相关功能</p>
        <p>3.私有密钥中由用户设置密钥，用户输入的所有信息都通过该密钥进行加密与解密</p>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
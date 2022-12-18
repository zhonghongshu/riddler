<template>
    <div>
        <el-input
                type="textarea"
                :rows="7"
                placeholder="请输入需要加密/解密的文本"
                v-model="input">
        </el-input>
        <el-button type="primary" round @click="getCommonEncrypted(input)">加密</el-button>
        <el-button type="success" round @click="getCommonDecrypted(input)">解密</el-button>
        <el-input
                type="textarea"
                :rows="7"
                v-model="output">
        </el-input>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                input: '',
                output: ' '
            }
        },
        methods:{
            getCommonEncrypted(input){
                const that=this
                axios.post('http://8.130.47.178:8081/Common/CommonEncryptedPage', {
                    in: input
                })
                    .then(function (response) {
                        that.output = response.data.result
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getCommonDecrypted(input){
                const that=this
                axios.post('http://8.130.47.178:8081/Common/CommonDecryptedPage', {
                    in: input
                })
                    .then(function (response) {
                        that.output = response.data.result
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <el-input
                type="textarea"
                :rows="7"
                placeholder="请输入需要加密/解密的文本"
                v-model="input">
        </el-input>
        <el-input type="text"
                  placeholder="请输入8位密钥："
                  v-model="password"
                  maxlength="8"
                  show-word-limit
                  show-password
                  v-on:mouseleave.native="password_alert(password)">
        </el-input>
        <span id="password_err" v-bind:style="styleObject">请输入8位密钥</span><br>
        <el-button type="primary" round @click="getPrivateEncrypted(input,password)">加密</el-button>
        <el-button type="success" round @click="getPrivateDecrypted(input,password)">解密</el-button>
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
                output: '',
                password:'',
                check: false,
                styleObject:{
                    color: 'red',
                    display:'none'
                }
            }
        },
        methods:{
            getPrivateEncrypted(input,password){
                const that=this
                if(this.styleObject.display=='none'){
                    axios.post('http://8.130.47.178:8081/Private/PrivateEncryptedPage', {
                        in: input,
                        psw:password
                    })
                        .then(function (response) {
                            that.output = response.data.result
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            },
            getPrivateDecrypted(input,password){
                const that=this
                if(this.styleObject.display=='none')
                {
                    axios.post('http://8.130.47.178:8081/Private/PrivateDecryptedPage', {
                        in: input,
                        psw:password
                    })
                        .then(function (response) {
                            that.output = response.data.result
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            },
            password_alert(password){
                if(password.length>0 && password.length!=8 ){
                    this.styleObject.display='block'
                }
                else this.styleObject.display='none'
            },
        }
    }
</script>

<style scoped>

</style>
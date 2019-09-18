<template>
  <div class="app">
    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    <br><br>
    <button @click="login">登录</button>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },

        methods : {
            login () {
                var url = this.host + "/login"
                this.$axios
                    .post(url, {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })
                    .then(successResponse => {
                        if (successResponse.data.code === 200) {
                            this.$router.replace({path: '/index'})
                        }
                    })
                    .catch(failResponse => {
                        console.log(failResponse)
                    })
            }
        }

    }
</script>

<style scoped>

</style>

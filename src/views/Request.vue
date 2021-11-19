<template>
    <div>
        <h2>request</h2>
        <button @click="getCookie">获取cookie</button>
        <button @click="getCookie2">获取cookie2</button>
    </div>
</template>

<script>
import request from '../util/request';
export default {
    setup() {

        let getCookie = () => {
            request.get('/getcookie')
            .then(res => {
                console.log('res', res)
            })
        }

        let getCookie2 = () => {
            request.get('http://localhost:9998/getcookie2',
            {
                // baseURL: 'http://localhost:9998'
            })
            .then(res => {
                console.log('res', res)
            })
        }

        return {
            getCookie,
            getCookie2
        }
    }
}
</script>

<style>

</style>
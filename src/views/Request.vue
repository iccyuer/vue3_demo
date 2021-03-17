<template>
    <div>
        <h2>request</h2>
        <button @click="getCookie">获取cookie</button>
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

        return {
            getCookie
        }
    }
}
</script>

<style>

</style>
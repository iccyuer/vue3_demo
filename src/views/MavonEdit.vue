<template>
    <div>
        <h2>mavon-edit</h2>
        <mavon-editor v-model="value"/>
    </div>
</template>

<script>
import request from '../util/request';
import { mavonEditor } from "mavon-editor";
import 'mavon-editor/dist/css/index.css'
export default {
    components: {
        mavonEditor
    },
    setup() {
        return {
            value: ''
        }
    }
}
</script>

<style>

</style>
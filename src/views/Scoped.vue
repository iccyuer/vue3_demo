<template>
    <div class="scoped_wrapper">
        <div class="dismise">dismise</div>
        <!-- <div class="hello">hello</div> -->
        <sc></sc>  
    </div>
</template>

<script>
import sc from "../components/sc.vue";
export default {
    components: { sc }
}
</script>

<style lang="scss" scoped>
.scoped_wrapper{
    color: #000;
    .dismise{
        background: hotpink;
    }
    .hello{
        border: 1px solid #234567;
    }
}
</style>
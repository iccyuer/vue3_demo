<template>
    <div class="">
        <h2>ref</h2>
        <div>
            counter: {{counter}}
            <button @click="add">counter++</button>
            doubleCounter: {{doubleCounter}}
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue'
export default {
    setup() {
        /**
         * 由于在执行 setup 时，组件实例尚未被创建，因此在 setup 选项中没有 this。
         * 这意味着，除了 props 之外，你将无法访问组件中声明的任何属性——本地状态、计算属性或方法
         * setup 选项应该是一个接受 props 和 context 的函数
         */
        const { counter, add, doubleCounter } = counters();

        /**
         * 钩子函数接受一个回调，当钩子被组件调用时，该回调将被执行
         */
        onMounted(() => {
            console.log('onMounted')
        })

        return {
            counter,
            add,
            doubleCounter
        }

        function counters() {
            const counter = ref(0) // 通过ref创建一个响应式引用

            const add = () => {
                console.log(counter) // { value: 0 }
                console.log(counter.value) // 0

                counter.value++
                console.log(counter.value) // 1
            }

            // computed 返回 回调的输出的一个只读的响应式引用
            const doubleCounter = computed(() => counter.value * 2)

            /**
             * watch 参数:
             * 一个我们想要侦听的响应式引用或 getter 函数
             * 一个回调
             * 可选的配置选项
             */
            watch(counter, (newVal, oldVal) => {
                console.log('newVal:', newVal, ' oldVal:', oldVal);
            })

            return {
                counter,
                add,
                doubleCounter
            }
        }
    }
};
</script>

<style>
</style>
<template>
    <div>
        Index
    </div>
</template>

<script>
import IndexModel from 'models/index';

const indexModel = new IndexModel();


export default {
    name: 'IndexPage',
    async mounted() {
        const data = await indexModel.getCourseDatas();
        console.log(data)
    }
}
</script>

<style lang="scss" scoped>
    div {
        margin-top: 3rem;
        color: red;
        // background: black;
    }
</style>
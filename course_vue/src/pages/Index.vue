<template>
    <div>
       <page-header
         :backIconShow="false"
         :listIconShow="true">
       </page-header>
    </div>
</template>

<script>
import PageHeader from 'components/Header';

// import IndexModel from 'models/index';

// const indexModel = new IndexModel();


export default {
    name: 'IndexPage',
    components: {
        PageHeader
    }
}
</script>

<style lang="scss" scoped>
</style>
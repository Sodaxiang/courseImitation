<template>
    <div>List Page</div>
</template>

<script>
import ListModel from 'models/list';

const listModel = new ListModel();

export default {
    name: 'ListPage',
    async mounted(){
        const fieldData = await listModel.getCourseFields(),
              coursesData = await listModel.getCourses('1');

        console.log(fieldData, coursesData)
              
    }    
}
</script>

<style lang="" scoped>
    
</style>
<template>
    <div class="list-icon">
        <router-link to="list">
           <i class="iconfont icon-list" v-show="listIconShow"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HeaderListIcon',
    props: {
        listIconShow: {
            type: Boolean,
            default() {
                return false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .list-icon {
        display: flex;
        width: .44rem;
        height: .44rem;
        justify-content: center;
        align-items: center;
        .iconfont {
            font-size: .25rem;
        }
    }
</style>
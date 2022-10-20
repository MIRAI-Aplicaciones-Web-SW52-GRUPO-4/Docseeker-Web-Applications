<template>
    <div class="backButton">
        <MenuBar></MenuBar>
        <router-link to="/news"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
        <h1>News</h1>
    </div>
    <div class="newContainer">
        <h1 class="newTitle">{{_new.title}}</h1>
        <img class="newImg" :src="_new.image" alt="image new">
        <p class="newText">{{_new.info}}</p>
    </div>
</template>
<script setup>
    import MenuBar from "../../components/MenuBar.vue"
</script>
<script>
    import { useCounterStore } from "../../stores/counter";
    export default {
    data(){
        return{
            imgUrl: null,
            _new: useCounterStore().news
        }
    },
    created() {
        for (let x in this._new){
            if (this._new[x].id == this.$route.params.id){
                this._new = this._new[x];
                useCounterStore().newViewed(x);
                console.log(this._new, "ya esta")
                break;
            }
        }
        this.imgUrl = `../../src/assets/images/${this._new.name} image.jpg`
    }
}
</script>
<style scoped>
    .backButton{
      display:flex;
      align-items: center;
    }
    .newContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
        background-color: #F0F0F0;
        border-radius: 15px;
        border: 1px solid #0093AB;
        width: 70%;
        margin: 0 auto;
        gap: 2rem;
    }
    img{
        border-radius: 15px;
    }
</style>
<template>
    <div>
        <TopNav/>
        <div class="" style="padding-top: 80px;">
            <!-- <h1>Upload</h1> -->
            <ImageUploadBox />
        </div>
    </div>
    <BottomNav />
</template>
<script>
import ImageUploadBox from "@/components/ImageUploadBox.vue";
import BottomNav from "@/components/profile/BottomNav.vue";
import TopNav from "@/components/profile/TopNav.vue";
export default {
    name: "RewardsDetail",
    components: {
        ImageUploadBox,
        BottomNav,
        TopNav,
    },
    data() {
        return {
            pageName: ''
        }
    },
    mounted() {
        let path = this.$route.path;

        // Remove leading and trailing slashes
        path = path.replace(/^\/|\/$/g, '');

        // Replace dashes with spaces
        path = path.replace(/-/g, ' ');

        // Optionally, capitalize the first letter of each word
        // path = path.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        this.pageName = path;
        console.log(this.pageName);
    },
    methods: {
        goback() {
            window.history.back()
        },
    }
}
</script>
<style lang="">

</style>
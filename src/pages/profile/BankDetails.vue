<template>
    <TopNav />
    <div class="container-fluid position-fixed w-100 bg-light" style="z-index: 99;top: 58px;">
        <div class="row border py-3 px-2">
            <div class="col-12 d-flex gap-2 align-items-center">
                <i class="bi bi-chevron-left" @click=goback()></i>
                <span class="text-capitalize">{{ pageName }}</span>
            </div>

        </div>
    </div>
    <div class="container" style="padding-top: 140px;">
        <div class="row">
            <div class="col-md-6">
                
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Bank Details Form
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitForm">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="accountName" placeholder="" v-model="accountName" required>
                                <label for="accountName">Account Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="accountNumber" placeholder="" v-model="accountNumber"
                                    required>
                                <label for="accountNumber">Account Number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="" id="bankName" v-model="bankName" required>
                                <label for="bankName">Bank Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="" id="branch" v-model="branch" required>
                                <label for="branch">Branch</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" placeholder="" id="ifsc" v-model="ifsc" required>
                                <label for="ifsc">IFSC Code</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopNav from "@/components/profile/TopNav.vue";
export default {
    name: "BankDetails",
    components: {
        TopNav
    },
    data() {
        return {
            accountName: '',
            accountNumber: '',
            bankName: '',
            branch: '',
            ifsc: '',
            pageName: '',
        }
    },
    mounted() {
        let path = this.$route.path;
        path = path.replace(/^\/|\/$/g, '');
        path = path.replace(/-/g, ' ');
        this.pageName = path;
        console.log(this.pageName);
    },
    methods: {
        goback() {
            window.history.back();
        },
        submitForm() {
            // Here you can handle form submission, e.g., send data to server
            console.log('Form submitted with data:', this.accountName, this.accountNumber, this.bankName, this.branch, this.ifsc);
            // Example: You can send this data via an AJAX request to your backend
        }
    }
}
</script>
<style lang="">

</style>
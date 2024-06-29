<template>


    <label class="p-2 px-3 fw-bold btn border d-flex justify-content-center gap-3 align-items-center mt-2"
        style="opacity: 80%;" @click="triggerFileUpload">
        <i v-if="!previewUrl" class="bi bi-cloud-arrow-up-fill text-warning fs-4" @click="triggerFileUpload"></i>
        <a v-if="previewUrl" :href="previewUrl" target="_blank" class="">
            <i class="bi bi-filetype-pdf text-danger fs-4"></i></a>
        <p v-if="error" class="text-danger">{{ error }}</p>
        <span>{{ buttonText }}</span>
    </label>
    <input ref="fileInput" type="file" @change="previewFile" style="display: none" accept="application/pdf">
</template>

<script>
export default {
    name: 'PdfUploadBox',
    data() {
        return {
            buttonText: 'Upload Resume Here (PDF Only)',
            previewUrl: '',
            error: ''
        }
    },
    methods: {
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        previewFile(event) {
            this.error = ''; // Reset error message
            const file = event.target.files[0];
            if (!file) {
                return;
            }

            // Ensure the file is a PDF
            if (file.type !== 'application/pdf') {
                this.error = 'File must be a PDF.';
                return;
            }

            // Limit file size to 5MB
            if (file.size > 5 * 1024 * 1024) {
                this.error = 'File size should not exceed 5MB.';
                return;
            }

            this.previewUrl = URL.createObjectURL(file);
            this.buttonText = 'Change File';
        },
        clearFile() {
            this.previewUrl = '';
            this.$refs.fileInput.value = null;
            this.buttonText = 'Upload File';
            this.error = ''; // Reset error message
            this.triggerFileUpload();
        }
    }
}
</script>

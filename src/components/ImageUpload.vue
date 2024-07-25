<template>

    <div class="d-flex flex-column justify-content-center align-items-center w-100">
        <div class="preview-circle d-flex justify-content-center align-item-center rounded">
            <div v-if="!previewUrl" class="my-2">
                <img src="" alt="Product Image" class="preview-image">
            </div>
            <img v-else-if="isImage" :src="previewUrl" alt="preview" class="preview-image">
            <a v-else :href="previewUrl" target="_blank" class="d-flex align-items-center justify-content-center h-100">
                <i class="bi bi-filetype-pdf text-danger"></i>
            </a>
        </div>

        <div class="my-2">
            <label class="btn btn-dark w-100" @click="triggerFileUpload">
                <i class="bi bi-upload me-2"></i> {{buttonText}}
            </label>
            <input class="w-100" ref="fileInput" type="file" @change="previewImage" style="display: none"
                accept="image/*,application/pdf">
            <p v-if="error" class="error-text mt-2">{{ error }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageUploadBox',
    data() {
        return {
            buttonText: 'Upload Images',
            previewUrl: '',
            isImage: true,
            error: '',
            mysteryman: '/img/users/1.png'
        }
    },
    methods: {
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        previewImage(event) {
            this.error = '';
            const file = event.target.files[0];
            if (!file) {
                return;
            }
            if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
                this.error = 'File must be an image or a PDF.';
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                this.error = 'File size should not exceed 5MB.';
                return;
            }
            if (!this.error) {
                this.buttonText = 'change Image';
            }
            this.isImage = file.type.startsWith('image/');
            this.previewUrl = URL.createObjectURL(file);
        },
        clearImage() {
            this.previewUrl = '';
            this.$refs.fileInput.value = null;
            this.isImage = true;
            this.error = '';
            this.triggerFileUpload();
        }
    },
    watch: {
        previewUrl(newValue) {
            this.$emit('image', newValue)
        }
    }
}
</script>

<style scoped>
.preview-circle {
    width: 300px;
    height: 200px;
    background-color: #f8f9fa;
    overflow: hidden;
}

.preview-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}



.error-text {
    color: red;
}
</style>
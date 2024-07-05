<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="border py-4 px-3 d-flex justify-content-center align-items-center gap-3"
                    @click="triggerFileUpload" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave"
                    @drop.prevent="onDrop" :class="{ 'bg-light': isDragging }">
                    <i class="bi bi-cloud-arrow-up-fill fs-1 text-success"></i>
                    <p class="fw-bold mb-0">{{ buttonText }} or drag & drop it here</p>
                    <input ref="fileInput" type="file" @change="previewImage" style="display: none"
                        accept="image/*,application/pdf" multiple>
                </div>
            </div>
            <div class="col-12">
                <div v-if="previewUrls.length">
                    <div class="container mt-3 pb-5">
                        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-2">
                            <div class="col" v-for="(file, index) in previewUrls" :key="index">
                                <div class="card">
                                    <img v-if="file.isImage" :src="file.url" alt="preview" data-bs-toggle="collapse"
                                        :data-bs-target="'#collapseExample' + index" aria-expanded="false"
                                        :aria-controls="'collapseExample' + index" />

                                    <a v-else :href="file.url" target="_blank"
                                        class="d-flex align-items-center justify-content-center btn border rounded"
                                        style="height:100px;width:100px;">
                                        <i class="bi bi-filetype-pdf text-danger" style="font-size:50px"></i>
                                    </a>
                                </div>
                                <div class="collapse w-100" :id="'collapseExample' + index">
                                    <button class="btn btn-danger rounded-0 mt-2 w-100"
                                        @click="deleteImage(index)">Delete</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div v-else class="border py-5">
                    <i class="bi bi-exclamation-diamond-fill text-danger fs-1"></i>
                    <p class="fs-4 fw-bold">No images or file !!</p>
                </div>
                <p v-if="error" class="text-danger">{{ error }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageUploadBox',
    data() {
        return {
            buttonText: 'Upload Images',
            previewUrls: [],
            error: '',
            isDragging: false
        }
    },
    methods: {
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        previewImage(event) {
            this.error = ''; // Reset error message
            const files = Array.from(event.target.files);
            if (!files.length) {
                return;
            }

            this.handleFiles(files);

            if (!this.error) {
                this.buttonText = 'Add Files';
            }
        },
        handleFiles(files) {
            files.forEach(file => {
                // Ensure the file is an image or a PDF
                if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
                    this.error = 'Files must be images or PDFs.';
                    return;
                }

                // Limit file size to 5MB
                if (file.size > 5 * 1024 * 1024) {
                    this.error = 'Each file size should not exceed 5MB.';
                    return;
                }

                const isImage = file.type.startsWith('image/');
                const previewUrl = URL.createObjectURL(file);

                this.previewUrls.push({ url: previewUrl, isImage: isImage, file: file });
            });
        },
        deleteImage(index) {
            this.previewUrls.splice(index, 1);
            if (!this.previewUrls.length) {
                this.buttonText = 'Upload Images';
            }
        },
        onDragOver(event) {
            event.preventDefault();
            this.isDragging = true;
        },
        onDragLeave(event) {
            event.preventDefault();
            this.isDragging = false;
        },
        onDrop(event) {
            event.preventDefault();
            this.isDragging = false;
            const files = Array.from(event.dataTransfer.files);
            this.handleFiles(files);
        }
    },
    watch: {
        previewUrls(newValue) {
            this.$emit('images', newValue.map(fileObj => fileObj.file));
        }
    }
}
</script>

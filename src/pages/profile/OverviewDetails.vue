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
        <div class="accordion my-3" id="accordionSizes">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseSizes" aria-expanded="true" aria-controls="collapseSizes">
                        About Us
                    </button>
                </h2>
                <div id="collapseSizes" class="accordion-collapse collapse show" data-bs-parent="#accordionSizes">
                    <div class="accordion-body row">
                        <div class="col-md-6 mb-4">
                            <div class="card-body">
                                <form @submit.prevent="saveSize">
                                    <div class="mb-3">
                                        <label for="size" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="size" v-model="profile.size"
                                            required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="sizePrice" class="form-label">Value</label>
                                        <input type="text" class="form-control" id="sizePrice" v-model="profile.price"
                                            required>
                                    </div>
                                    <!-- <div class="mb-3">
                                        <label for="position" class="form-label">position</label>
                                        <input type="number" class="form-control" id="position"
                                            v-model="profile.position">
                                        <small><small class="text-secondary">Optional</small></small>
                                    </div> -->
                                    <div class="d-flex justify-content-between">
                                        <button type="button" class="btn btn-secondary"
                                            @click="resetSizeForm">Reset</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div v-for="(size, index) in sizes" :key="index">
                                <div class="d-flex mb-2 w-100">
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div class="d-block d-md-flex  w-100">
                                            <div class="border px-1  py-3 w-100  bg-light border-bottom-0">
                                                <h5 class="mb-0 w-100"> {{ size.size }}</h5>
                                            </div>
                                            <div class="w-100 border px-1">
                                                <p class="mb-0 w-100"> {{ size.price }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-end ms-2">
                                        <button class="  btn btn-sm btn-outline-danger" @click="deleteSize(index)"><i
                                                class="bi bi-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skillset"
                        aria-expanded="true" aria-controls="skillset">
                        Skillset
                    </button>
                </h2>
                <div id="skillset" class="accordion-collapse collapse show" data-bs-parent="#skillset">
                    <div class="accordion-body row">
                        <div class="row mt-5">
                            <div class="col-md-6">
                                <h2>Skillset Form</h2>
                                <form @submit.prevent="addSkill" class="mb-5">
                                    <div class="mb-3">
                                        <label for="skillName" class="form-label">Skill Name</label>
                                        <input type="text" class="form-control" id="skillName" v-model="newSkill.name"
                                            required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="skillLevel" class="form-label">Skill Level (%)</label>
                                        <input type="number" class="form-control" id="skillLevel"
                                            v-model="newSkill.level" min="0" max="100" required>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Add Skill</button>
                                </form>
                            </div>

                            <div class="col-md-6">
                                <h2>Skillset</h2>
                                <div v-for="skill in skills" :key="skill.name" class="mb-3">
                                    <div class="d-flex justify-content-between">
                                        <span>{{ skill.name.toUpperCase() }}</span>
                                        <span>{{ skill.level }}%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" :class="getProgressBarColor(skill.name)"
                                            role="progressbar" :style="{ width: skill.level + '%' }"
                                            :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skillsContactet"
                        aria-expanded="true" aria-controls="Contact">
                        Contact Us
                    </button>
                </h2>
                <div id="Contact" class="accordion-collapse collapse show" data-bs-parent="#Contact">
                    <div class="accordion-body row">
                        <div class="row mt-5">
                            <div class="col-md-6">
                                <h2>Add Contact Icon</h2>
                                <form @submit.prevent="addIcon" class="mb-5">
                                    <div class="mb-3">
                                        <label for="iconName" class="form-label">Icon Name</label>
                                        <input type="text" class="form-control" id="iconName" v-model="newIcon.name"
                                            required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="iconLink" class="form-label">Link</label>
                                        <input type="url" class="form-control" id="iconLink" v-model="newIcon.link"
                                            required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="iconType" class="form-label">Icon Type</label>
                                        <select class="form-select" id="iconType" v-model="newIcon.type" required>
                                            <option value="">Select an icon</option>
                                            <option value="envelope">Email</option>
                                            <option value="phone">Call</option>
                                            <option value="whatsapp">Whatsapp</option>
                                            <option value="map-marker-alt">Location</option>
                                            <option value="facebook-f">Facebook</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="youtube">YouTube</option>
                                            <option value="linkedin-in">LinkedIn</option>
                                            <option value="rupee-sign">Payment</option>
                                            <option value="download">Download</option>
                                            <option value="globe">Website</option>
                                            <option value="address-card">Contact</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Add Icon</button>
                                </form>
                            </div>

                            <div class="col-md-6">
                                <h2>Contact Icons</h2>
                                <div class="row row-cols-2 row-cols-md-4 g-4">
                                    <div v-for="icon in icons" :key="icon.name" class="col text-center">
                                        <div class="icon-circle mb-2">
                                            <a :href="icon.link" target="_blank">
                                                <i class="bi" :class="`bi-${icon.type}`"></i>
                                            </a>
                                        </div>
                                        <p>{{ icon.name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TopNav from "@/components/profile/TopNav.vue";
export default {
    components: {
        TopNav
    },
    data() {
        return {
            profile: {
                size: '',
                price: '',
            },
            sizes: [],
            pageName: '',
            newSkill: {
                name: '',
                level: 0
            },
            skills: [],
            newIcon: {
                name: '',
                link: '',
                type: ''
            },
            icons: []
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
        saveSize(event) {
            event.preventDefault();
            if (this.profile.size && this.profile.price) {
                const newSize = { ...this.profile };

                // If position is provided, add the new size at the specified position
                if (newSize.position !== null && newSize.position !== undefined && newSize.position !== '') {
                    const position = parseInt(newSize.position) - 1; // Subtract 1 from the position to start from 1
                    if (position >= 0 && position < this.sizes.length) { // Check if position is between 0 and sizes.length - 1
                        this.sizes.splice(position, 0, newSize);
                    } else {
                        // If position is out of bounds, add the new size at the end
                        this.sizes.push(newSize);
                    }
                } else {
                    // If position is not provided, add the new size at the end
                    this.sizes.push(newSize);
                }

                this.resetSizeForm();
            } else {
                alert('Please enter a size and price');
            }
        },
        resetSizeForm() {
            this.profile = {
                size: '',
                price: ''
            };
        },
        deleteSize(index) {
            this.sizes.splice(index, 1);
        },
        addSkill() {
            this.skills.push({ ...this.newSkill });
            this.newSkill.name = '';
            this.newSkill.level = 0;
        },
        getProgressBarColor(skillName) {
            const colors = {
                HTML: 'bg-danger',
                CSS3: 'bg-dark',
                JAVASCRIPT: 'bg-primary',
                JQUERY: 'bg-success',
                PHP: 'bg-warning',
                SQL: 'bg-info'
            };
            return colors[skillName.toUpperCase()] || 'bg-secondary';
        },
        addIcon() {
            this.icons.push({ ...this.newIcon });
            this.newIcon.name = '';
            this.newIcon.link = '';
            this.newIcon.type = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.icon-circle a {
    color: #fff;
    font-size: 24px;
}
</style>
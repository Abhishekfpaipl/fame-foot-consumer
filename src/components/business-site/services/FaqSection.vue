<template>
    <div class="my-3 py-3" style="background-color: var(--bg-forth);">
        <div class="container p-md-5 p-3">
            <h1 class="text-center text-capitalize">Frequently asked questions</h1>
            <p class="mb-0 small text-center">Take advantage of curated questions and answers frequently asked by the visitors & business.</p>
            <div class="row row-cols-1 row-cols-md-2 g-2 mt-5">
                <div class="col" v-for="(question, index) in questions" :key="index">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed border-bottom fw-bold" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="'#collapseTwo' + question.id"
                                    aria-expanded="false" :aria-controls="'collapseTwo' + question.id">
                                    Q{{ index + 1 }}.&nbsp;{{ question.question }}
                                </button>
                            </h2>
                            <div :id="'collapseTwo' + question.id" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body text-start">{{ question.answer }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FaqSection',
    props: ['questions'],
}
</script>

<style>
.accordion-button:not(.collapsed) {
    color: black !important;
    background-color: white !important;
    box-shadow: none !important;
}
 
</style>
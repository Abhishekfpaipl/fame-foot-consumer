<template>
    <div class="brandText">
        <div class="container">
            <h3 class="text-center text-capitalize">Goodbye guesswork, hello sales efficiency</h3>
            <p class="text-center text-capitalize mb-4">Transform sales across all channels. Never miss a sales opportunity.</p>
            <div class="row row-cols-1 row-cols-md-2 g-2">
                <div class="col" v-for="(compare, index) in comparison" :key="index">
                    <div class="card" :style="{ backgroundColor: compare.color }">
                        <div
                            class="card-body d-md-flex align-items-start justify-content-start text-center text-md-start">
                            <!-- <h5 class="card-title">Card title</h5> -->
                            <i class="bi fs-3 pe-2" :class="compare.icon"></i>
                            <p class="card-text ms-2">{{ compare.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ComparisonSection",
    data() {
        return {
            comparison: [
                {
                    icon: "bi-question-circle",
                    text: "Your sales people are less productive because they are unsure what to do next.",
                    color: "#F9E5EA"
                },
                {
                    icon: "bi-check-circle",
                    text: "With Saleswik sales people sail smoothly through each day and get more done in less time.",
                    color: "#E4F6DF"
                },
                {
                    icon: "bi-question-circle",
                    text: "Your sales people struggle to score leads and pursue best-fit prospects.",
                    color: "#F9E5EA"
                },
                {
                    icon: "bi-check-circle",
                    text: "With Saleswik sales people can work smarter, spending more time with the right prospects.",
                    color: "#E4F6DF"
                },
                {
                    icon: "bi-question-circle",
                    text: "Without Saleswik Higher turnaround times decrease engagement and threaten sales.",
                    color: "#F9E5EA"
                },
                {
                    icon: "bi-check-circle",
                    text: "With Saleswik Reduce turnaround times and empower your salespeople to connect with prospects faster.",
                    color: "#E4F6DF"
                },
                {
                    icon: "bi-question-circle",
                    text: "Without Saleswik Disconnected digital customer onboarding processes cause high drop-off rates.",
                    color: "#F9E5EA"
                },
                {
                    icon: "bi-check-circle",
                    text: "With Saleswik Enable smooth self-serve and assisted customer and partner onboarding journeys.",
                    color: "#E4F6DF"
                },
                {
                    icon: "bi-question-circle",
                    text: "Without Saleswik Managers are stuck with ineffective processes unless IT can come to their rescue.",
                    color: "#F9E5EA"
                },
                {
                    icon: "bi-check-circle",
                    text: "With Saleswik Sales and marketing managers can optimize processes without touching a single line of code.",
                    color: "#E4F6DF"
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>
<template>
    <div>
        <div class="container my-5">
            <h3 class="text-center ">Our Core Values</h3>
            <p class="text-center container">
                One thing that we've tried to keep consistent through all these years is our core set of values and
                beliefs.
                They have helped us get to where we are today, and they guide us as we grow. We inculcate these
                values
                in
                everything we do - from the littlest of things to the biggest of decisions.
            </p>
            <div class="p-2 row">
                <div v-for="(data, index) in datas" :key="index" class="col-12 col-md-6 g-3">
                    <div class="d-flex align-items-center border p-2">
                        <img :src="data.icon" :alt="data.name" style="width: 8%; filter: grayscale(1);" class="mx-3">
                        <div class=" ms-2">
                            <span class="fw-bold">{{ data.heading }}</span>
                            <p>{{ data.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datas: [
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/think different.svg',
                    heading: 'Think Different',
                    text: 'Random ideas, new suggestions, and challenging the norm are always welcome.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/ownership of work.svg',
                    heading: 'Stay Weird, Be Yourself',
                    text: 'The Souled Store is strictly a judgment-free zone. Just be the best version of yourself.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/respect everyone.svg',
                    heading: 'Respect Everyone',
                    text: 'Treat others how you’d like to be treated, and you have a happy family.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/Growth and learning.svg',
                    heading: 'Ownership Of Work',
                    text: 'Give every task, small or big, your best shot. Always remember- 99% right is 100% wrong.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/stay weird.svg',
                    heading: 'Take Initiative',
                    text: 'Want to change something? Change it. See something that needs fixing? Fix it.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/take initiative.svg',
                    heading: 'Growth & Learning',
                    text: 'Work with various teams and departments and learn something new every day.'
                },
            ],
        }
    }
}
</script>
<style lang="">

</style>
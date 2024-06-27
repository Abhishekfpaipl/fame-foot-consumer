<template>
    <div class="container">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-Rate-tab" data-bs-toggle="tab" data-bs-target="#nav-Rate"
                    type="button" role="tab" aria-controls="nav-Rate" aria-selected="true">
                    Rate Us
                </button>

                <button class="nav-link" id="nav-Promote-tab" data-bs-toggle="tab" data-bs-target="#nav-Promote"
                    type="button" role="tab" aria-controls="nav-Promote" aria-selected="false">
                    Promote Us
                </button>

                <button class="nav-link" id="nav-Reward-tab" data-bs-toggle="tab" data-bs-target="#nav-Reward"
                    type="button" role="tab" aria-controls="nav-Reward" aria-selected="false">
                    Reward Us
                </button>

            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-Rate" role="tabpanel" aria-labelledby="nav-Rate-tab"
                tabindex="0">
                <div class="">
                    <h3 class="text-center bill"><span class="fs-2">~ Rate Us ~</span></h3>
                    <img src="/img/rate2.gif" style="width: 100px;">
                    <div class="rating my-3">
                        <span v-for="star in 5" :key="star" @click="setRating(star)" class="star fs-1">
                            <i :class="star <= rating ? 'bi bi-star-fill' : 'bi bi-star'"></i>
                        </span>
                    </div>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" v-model="reviewText"
                                id="floatingTextarea2" style="height: 50px;"></textarea>
                            <label for="floatingTextarea2" class="text-muted small">Please write your Review</label>
                        </div>
                    </div>
                    <button class="btn btn-warning border mt-3" @click="submitReview">Submit</button>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-Promote" role="tabpanel" aria-labelledby="nav-Promote-tab" tabindex="0">
                <button class="btn btn-dark">Promote Us</button> <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ab veniam ipsam deleniti officiis dolor
                iusto atque expedita in consequatur maiores, quis dicta quos alias similique hic? Impedit enim itaque
                recusandae aperiam dolores. Ipsa rerum temporibus expedita quam porro voluptas accusamus, dignissimos
                vero obcaecati, perspiciatis autem eum explicabo doloremque cupiditate aperiam? Hic esse libero fugit
                temporibus perferendis. Excepturi, ex! Necessitatibus autem ipsum, deserunt neque placeat cumque
                corrupti eum vitae quod iure, amet culpa dolorem pariatur distinctio accusamus obcaecati reprehenderit
                maxime incidunt aliquid nesciunt nobis enim assumenda. Pariatur harum laborum quam ipsa a ab quos libero
                doloribus iure, neque amet et assumenda quaerat obcaecati veritatis suscipit doloremque iusto inventore
                maxime reprehenderit. Repudiandae aliquid enim architecto eveniet laboriosam consequuntur possimus illo
                iure!
            </div>
            <div class="tab-pane fade" id="nav-Reward" role="tabpanel" aria-labelledby="nav-Reward-tab" tabindex="0">
                <button class="btn btn-dark">Reward Us</button> <br>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus perferendis rem a! Natus blanditiis
                aliquid, sapiente quasi libero laborum harum animi repudiandae quod ex dignissimos voluptas sed,
                consectetur, culpa facere aut accusamus sit nesciunt! Illum voluptatibus expedita minima doloremque
                dicta suscipit ipsam iure, harum necessitatibus. Excepturi ratione, commodi soluta vitae dolores nam,
                laborum eum fugit minus numquam quos cupiditate aperiam eligendi ipsam distinctio magni repellendus
                veritatis? Ratione, dolorem perferendis labore nulla error quasi hic deleniti veniam illo modi eaque
                perspiciatis nam fugiat tempore sed repellendus voluptate dignissimos, officia laudantium delectus
                adipisci maiores illum. Blanditiis at incidunt, alias error esse accusamus ducimus magnam tenetur a
                amet. Illum ut repudiandae labore? Numquam debitis rem, ad at voluptatem quo minus vitae vero accusamus?
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "InformationSection",
    data() {
        return {
            rating: 0,
            reviewText: ""
        }
    },
    methods: {
        setRating(star) {
            this.rating = star;
        },
    }
}
</script>
<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;

}

.nav-link.active {
    background-color: black !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    border-radius: 0 !important;
    /* transform: scale(1.2); */
}
</style>
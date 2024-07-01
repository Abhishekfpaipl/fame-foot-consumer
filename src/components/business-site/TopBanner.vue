<template>
    <div>
        <div class="">
            <!-- <div class="d-md-none">
                <img src="/img/mobilebg.jpg" class="position-relative" alt="" style="width:100%;">
                <div class="position-absolute w-50" style="top:24%;left: 25%;
              background:  linear-gradient(90deg, rgba(254,242,159,1) 0%, rgba(210,163,73,1) 50%, rgba(254,242,159,1) 100%);
          -webkit-background-clip: text;
                  background-clip: text;
          -webkit-text-fill-color: transparent;">
                    <h1 class="text-capitalize method1">
                        <span class="fw-bold text-uppercase">Lets Charm</span> <br> Your Fame wih<br><span
                            class="fw-bold text-uppercase">Fameset</span><br>
                    </h1>
                </div>
            </div> -->

            <div class="position-relative" style="width:100%; height: 600px;">
                <img src="/img/deskbg.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="center-content">
                    <h1 class="text-capitalize method1">
                        <span class="fw-bold text-uppercase">Let's Charm</span> <br> Your Fame with<br><span
                            class="fw-bold text-uppercase">Fameset</span><br>
                    </h1>
                    <button class="btn text-dark fw-bold"
                        style="background: linear-gradient(90deg, rgba(254, 242, 159, 1) 0%, rgba(210, 163, 73, 1) 50%, rgba(254, 242, 159, 1) 100%) !important;">Get
                        Started</button>
                </div>
            </div>



        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.method1 {
    background: linear-gradient(90deg, rgba(254, 242, 159, 1) 0%, rgba(210, 163, 73, 1) 50%, rgba(254, 242, 159, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>
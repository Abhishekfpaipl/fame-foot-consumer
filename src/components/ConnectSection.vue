<template>
    <div>
        <!-- <h3 class="text-center bill mt-5 pb-3 text-capitalize"><span class="fs-2">connect us </span></h3> -->
        <!-- <div class="container my-3 py-3">
            <div class="row row-cols-4 g-1">
                <div v-for="(icon, index) in visibleContacts" :key="index" @click="handleIconClick(icon.action)"
                    class="col py-2 d-flex flex-column justify-content-center align-items-center" :class="[
                        { 'border-end': index % 4 === 3 },
                        { 'border-start': index % 4 === 0 },
                        { 'border-bottom': shouldHaveBottomBorder(index) }
                    ]">
                    <div class="rounded-circle border border-5 d-flex align-items-center justify-content-center"
                        style="width: 60px; height: 60px;background: linear-gradient(133deg, rgba(106,106,106,1) 45%, rgba(0,0,0,1) 55%);">
                        <a class="text-white" :href="icon.url" target="_blank">
                            <i :class="icon.icon" class="fs-3"></i>
                        </a>
                    </div>
                    <p class="text-center mb-0 small">{{ icon.name }}</p>
                </div>
            </div>
            <div v-if="contact.length > 8" class="text-end mt-3 small" @click="toggleShowMore">
                {{ showAll ? 'Show Less' : 'Show More' }}
            </div>
            <div v-if="contact.length > 8" class="text-end mt-3" @click="toggleShowMore">
                <i class="bi bi-chevron-down chevron-icon" :class="{ 'rotate-icon': showAll }"></i>
            </div>
        </div> -->
        <div class="container my-3 py-3">
            <div class="row row-cols-4 g-1">
                <div class="d-flex flex-column justify-content-center align-items-center" v-for="(icon, index) in contact" :key="index" @click="handleIconClick(icon.action)">
                    <div class="rounded-circle border border-5 d-flex align-items-center justify-content-center"
                        style="width: 60px; height: 60px;background: linear-gradient(133deg, rgba(106,106,106,1) 45%, rgba(0,0,0,1) 55%);">
                        <a class="text-white" :href="icon.url" target="_blank">
                            <i :class="icon.icon" class="fs-3"></i>
                        </a>
                    </div>
                    <p class="text-center mb-0 small">{{ icon.name }}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "ConnectSections",
    data() {
        return {
            contact: [
                { name: 'Email', icon: 'bi-envelope-fill', action: 'openEmail' },
                { name: 'Call', icon: 'bi-telephone-fill', action: 'openDialer' },
                { name: 'Whatsapp', icon: 'bi-whatsapp', action: 'openWhatsapp' },
                { name: 'Location', icon: 'bi-geo-alt-fill', action: 'openMaps' },
                { icon: 'bi bi-facebook', name: 'Facebook', url: 'https://www.facebook.com/yourpage' },
                { icon: 'bi bi-instagram', name: 'Instagram', url: 'https://www.instagram.com/yourprofile' },
                { icon: 'bi bi-youtube', name: 'YouTube', url: 'https://www.youtube.com/' },
                { icon: 'bi bi-linkedin ', name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile' },
                { name: "Payment", icon: "bi bi-currency-rupee", action: "" },
                { name: "Download", icon: "bi bi-arrow-down-circle-fill", action: "" },
                { name: "Website", icon: "bi bi-globe2", action: "" },
                { name: "Contact", icon: "bi bi-cloud-arrow-down-fill", action: "downloadData" },
            ],
            payments: [
                { name: "Payment", icon: "bi bi-currency-rupee", action: "" },
                { name: "Download", icon: "bi bi-arrow-down-circle-fill", action: "" },
                { name: "Website", icon: "bi bi-globe2", action: "" },
                { name: "Contact", icon: "bi bi-cloud-arrow-down-fill", action: "downloadData" },
            ],
            showAll: false
        }
    },
    computed: {
        visibleContacts() {
            return this.showAll ? this.contact : this.contact.slice(0, 8)
        }
    },
    methods: {
        toggleShowMore() {
            this.showAll = !this.showAll
        },
        shouldHaveBottomBorder(index) {
            const totalVisible = this.visibleContacts.length;
            const isInSecondRow = index >= 4 && index < 8;
            const isInLastRow = index >= totalVisible - 4 && index < totalVisible;

            return (!this.showAll && isInSecondRow) || (this.showAll && isInLastRow);
        },
        handleIconClick(action) {
            const phoneNumber = '+918826658501';
            const emailAddress = 'abhisheknegi042@gmail.com';
            const location = '2nd Floor, Block B1/632, Janakpuri, Delhi, 110058';
            let blob, url, a;

            const vcardContent = `BEGIN:VCARD
            VERSION:3.0
            N:;${phoneNumber};;;
            FN:${phoneNumber}
            TEL;TYPE=CELL:${phoneNumber}
            END:VCARD`;

            switch (action) {
                case 'openEmail':
                    window.location.href = `mailto:${emailAddress}`;
                    break;
                case 'openDialer':
                    window.location.href = `tel:${phoneNumber}`;
                    break;
                // case 'openSMS':
                //   window.location.href = `sms:${phoneNumber}`;
                //   break;
                case 'downloadData':
                    blob = new Blob([vcardContent], { type: 'text/vcard' });
                    url = window.URL.createObjectURL(blob);
                    a = document.createElement('a');
                    a.href = url;
                    a.download = `contact.vcf`;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    break;
                case 'openWhatsapp':
                    window.open(`https://wa.me/${phoneNumber}?text=Hello...`, '_blank');
                    break;
                case 'openMaps':
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
                    break;
                // case 'openQuery':
                //     offcanvasQuery.show();
                //     break;
                default:
                    break;
            }
        },


    },
}
</script>
<style>
.border-end {
    border-right: 1px solid #dee2e6 !important;
}

.border-bottom {
    border-bottom: 1px solid #dee2e6 !important;
}

.rotate-icon {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.bi-chevron-down {
    transition: transform 0.3s ease;
}
</style>
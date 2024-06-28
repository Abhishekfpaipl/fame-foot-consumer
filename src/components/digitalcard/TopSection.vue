<template>
  <!-- <div class="rounded-5 bg-white position-sticky w-75" style="margin-top: -40px;left: 12%; z-index: 9;">
    <div class="position-relative">
      <div class="d-flex justify-content-between align-items-center p-3 px-4 px-md-5 rounded-top-5">
        <span @click="saveContact" class="d-flex flex-column align-items-center">
          <i class="bi bi-download fs-4"></i> 
        </span>
        <span @click="share" class="d-flex flex-column align-items-center">
          <i class="bi bi-share-fill fs-4"></i> 
        </span>
        <a href="#second"><i class="bi bi-telephone-outbound-fill fs-4 text-dark" ></i></a>
      </div>
      <div class="position-absolute end-50 end-md-45" style="width:60px;height: 60px;top: -60px;">
        <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" alt="Logo"
          class="rounded-3" style="width: 100px;">
      </div>
      <div class="d-flex flex-column align-items-center my-2">
        <h3>Business Name</h3>
        <small class="">Sales assistant</small>
        <small class="">B2B service</small>
        <small class="">Bhybrid by Onhoff</small>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 bg-light p-3">
        <img src="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" alt="Logo" class="rounded-3"
          style="width: 200px;">
      </div>
      <div class="col-12 col-md-8 bg-light p-5">
        <div class="d-flex flex-column align-items-center my-2">
          <h3>Business Name</h3>
          <small class="">Sales assistant</small>
          <small class="">B2B service</small>
          <small class="">Bhybrid by Onhoff</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSection",
  data() {
    return {
      contact: [
        { name: 'Email', icon: 'bi-envelope fs-5', action: 'openEmail' },
        { name: 'Call', icon: 'bi-telephone fs-5', action: 'openDialer' },
        { name: 'Business', icon: 'bi-building fs-5', action: '' },
        { name: 'Whatsapp', icon: 'bi-whatsapp fs-5', action: 'openWhatsapp' },
        { name: 'Map', icon: 'bi-geo fs-5', action: 'openMaps' },
        { name: 'Query', icon: 'bi-question-circle fs-5', action: 'openQuery' },
      ],
      name: '',
      email: '',
      query: '',
    }
  },
  methods: {
    handleIconClick(action) {
      const phoneNumber = '+918826658501';
      const emailAddress = 'abhisheknegi042@gmail.com';
      const location = '2nd Floor, Block B1/632, Janakpuri, Delhi, 110058';
      const offcanvasQuery = new window.bootstrap.Offcanvas(document.getElementById('offcanvasQuery'));
      // let blob, url, a;

      // const vcardContent = `BEGIN:VCARD
      // VERSION:3.0
      // N:;${phoneNumber};;;
      // FN:${phoneNumber}
      // TEL;TYPE=CELL:${phoneNumber}
      // END:VCARD`;

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
        // case 'downloadData':
        //   blob = new Blob([vcardContent], { type: 'text/vcard' });
        //   url = window.URL.createObjectURL(blob);
        //   a = document.createElement('a');
        //   a.href = url;
        //   a.download = `contact.vcf`;
        //   a.click();
        //   window.URL.revokeObjectURL(url);
        //   break;
        case 'openWhatsapp':
          window.open(`https://wa.me/${phoneNumber}?text=Hello...`, '_blank');
          break;
        case 'openMaps':
          window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
          break;
        case 'openQuery':
          offcanvasQuery.show();
          break;
        default:
          break;
      }
    },
    saveContact() {
      const contactNumber = '+918826658501';
      const contactName = 'Contact Name'; // Add the contact name here

      // Generate VCF content
      const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactName}
TEL:${contactNumber}
END:VCARD`;

      // Create a blob from the VCF content
      const blob = new Blob([vcfContent], { type: 'text/vcard' });

      // Create a link element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'contact.vcf';

      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    },
    submitQuery() {
      console.log('Submit Query')
      const data = {
        name: this.name,
        email: this.email,
        query: this.query,
      }
      this.$store.dispatch('submitQuery', data)
    },
    share() {
      if (navigator.share) {
        navigator.share({
          title: 'Share this content',
          text: 'Check out this awesome content!',
          url: window.location.href,
        }).then(() => {
          console.log('Successful share');
        }).catch((error) => {
          console.log('Error sharing', error);
        });
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    },
  }
};
</script>
<style>
@media(max-width:768px) {
  .end-md-45 {
    right: 45% !important
  }
}
</style>
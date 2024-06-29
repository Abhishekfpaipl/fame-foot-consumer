<template>
  <div>
    <div class="" style="padding-top:66px; background-color:#125252 ">
      <div class="container mb-3 py-5">
        <label for="categorySelect" class="form-label text-white fs-4">Filter by Category</label>
        <select v-model="selectedCategory" class="form-select" id="categorySelect">
          <option value="">All Categories</option>
          <option v-for="category in categoriesList" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 my-5">
        <div class="col" v-for="(sentence, index) in filteredSentences" :key="index">
          <router-link :to="'/service/' + generateSlug(sentence)" class="card text-decoration-none">
            <div class="card-body py-0" :style="{ backgroundColor: randomColors[index] }">
              <div class="border-bottom border-dark py-1 text-center">
                <i :class="randomArrowIcons[index]" class="fs-4"></i>
              </div>
              <h6 class="card-title text-capitalize pt-3" style="min-height: 6rem;">{{ sentence }}</h6>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"CustomerSentence",
  data() {
    return {
      servicesList: [
        "Lead Tracking Software", " CRM Software", " Sales Automation Software", " Marketing Automation Software", "Lead Generation Software", "Sales Enablement Software", "Customer Engagement Software",
      ],
      categoriesList: [
        'Body Massage Centres', 'Cinema Halls', 'Schools', 'Beauty Spas', 'Dermatologists', 'Hospitals', 'Malls',
        'Gyms', 'Beauty Parlours', 'Estate Agents', 'Banquet Halls', 'ENT Doctors', 'Book Shops', 'Bike On Rent',
        'Sexologist Doctors', 'Neurologists', 'Gynaecologist & Obstetrician Doctors', 'Train Ticket Booking Agents',
        'Travel Agents', 'Paying Guest Accommodations', 'General Physician Doctors', 'Dentists', 'Orthopaedic Doctors',
        'Chemists', 'Motor Training Schools', 'Gastroenterologists', 'Car Rental', 'Salons', 'Courier Services',
        'Dance Classes', 'Pathology Labs', 'Taxi Services', 'Cake Shops', 'AC Repair & Services', 'Mobile Phone Dealers',
        'Pet Shops', 'Dmart', 'Packers And Movers', 'Psychiatrists', 'Dharamshalas', 'Urologist Doctors', 'Bakeries',
        'Bicycle Dealers', 'Coffee Shops', 'Paediatricians', 'Sonography Centres', 'Yoga Classes', 'Hostels',
        'Cardiologists', 'Electrical Shops', 'Skin Care Clinics', 'Diagnostic Centres', 'Homeopathic Doctors',
        'Physiotherapists', 'Photo Studios', 'Plumbers', 'Music Classes', 'Electricians', 'Sports Goods Dealers',
        'Shoe Dealers', 'Hair Stylists', 'Gift Shops', 'Ophthalmologists', 'Car Repair & Services', 'Ayurvedic Doctors',
        'Eye Clinics', 'Restaurants', 'Carpenters', 'Jewellery Showrooms', 'Cooks On Hire', 'Stationery Shops',
        'Nephrologists', 'Caterers', 'Interior Designers', 'Rehabilitation Center', 'Grocery Stores', 'Banks', 'ATM',
        '5 Star Hotels', 'Hotels', 'Resorts', 'Plastic Surgeons', 'Smart Watch Dealers', 'Drug De Addiction Centres'
      ],
      placesList: [
        'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur',
      ],
      title: this.$route.params.id,
      sentences: [],
      randomColors: [],
      randomArrowIcons: [],
      selectedCategory: ''
    };
  },
  mounted() {
    this.generateSentences();
    this.assignRandomColors();
    this.assignRandomIcons();
  },
  methods: {
    generateSentences() {
      this.servicesList.forEach(service => {
        this.placesList.forEach(place => {
          this.categoriesList.forEach(category => {
            const sentence = `We are offering ${service} to ${this.title} from ${category} in ${place}.`;
            this.sentences.push(sentence);
          });
        });
      });
    },
    assignRandomColors() {
      this.randomColors = this.sentences.map(() => this.getRandomLightColor());
    },
    assignRandomIcons() {
      this.randomArrowIcons = this.sentences.map(() => this.getRandomArrowIcon());
    },
    getRandomLightColor() {
      const letters = 'BCDEF'; // Letters corresponding to light colors
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }
      return color;
    },
    getRandomArrowIcon() {
      const arrowIcons = [
        'bi-arrow-up', 'bi-arrow-right', 'bi-arrow-down', 'bi-arrow-left',
        'bi-arrow-up-right', 'bi-arrow-down-right', 'bi-arrow-down-left', 'bi-arrow-up-left'
      ];
      return arrowIcons[Math.floor(Math.random() * arrowIcons.length)];
    },
    generateSlug(sentence) {
      return sentence.toLowerCase().replace(/\s+/g, '-');
    }
  },
  computed: {
    filteredSentences() {
      if (!this.selectedCategory) {
        return this.sentences;
      }
      return this.sentences.filter(sentence => sentence.includes(this.selectedCategory));
    }
  },
  watch: {
    sentences() {
      this.assignRandomColors();
      this.assignRandomIcons();
    },
    selectedCategory() {
      this.assignRandomColors();
      this.assignRandomIcons();
    }
  }
};
</script>
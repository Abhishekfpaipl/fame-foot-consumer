<template>
    <div style="padding-top:66px">
        <div class="container py-4">
            <div class="row">
                <div class="col-12 col-md-6 py-3 text-center px-4 px-md-2">
                    <h1 class="lh-1">Start your free trial.</h1>
                    <p class="text-capitalize">No credit card required, no software to install</p> 
                    <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-0">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-50 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
                        </div>
                        <div class="mt-2 w-50">
                            <select class="form-select py-3" name="CompanyCountry" v-model="selectedCountry"
                                aria-required="true" required="true">
                                <option disabled label="Country/Region" class="text-muted" selected value="">
                                    Country/Region</option>
                                <option v-for="country in countries" :key="country.value" :value="country.value">
                                    {{ country.label }}
                                </option>
                            </select>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                        </div>

                        <div class="form-check text-start ms-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                v-model="agree">
                            <label class="form-check-label small" for="flexCheckDefault">
                                I agree to the <router-link to="/agreement" class="text-dark text-capitalize">terms and
                                    conditions</router-link> and
                                <router-link to="/privacy-policy" class="text-dark text-capitalize">privacy
                                    policy.</router-link>
                            </label>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-danger py-2 fs-5 w-100 rounded-0 text-white" type="submit">Start my
                                free trial</button>
                        </div>
                    </form>

                </div>
                <div class="col-12 col-md-6 p-3"> 
                    <img src="/img/free-trial.svg" class="" style="width:250px; object-fit: contain;" alt="">
                    <p class="text-center mt-4">With your 30 days trial you get</p>
                    <div class="d-flex gap-2 justify-content-center align-items-center" v-for="(link, index) in links"
                        :key="index">
                        <i class="bi bi-check text-success fs-4"></i>
                        <p class="my-1">{{ link }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center py-4 text-white mb-0 position-fixed bottom-0 w-100" style="background-color: var(--bg-primary);">Questions? Talk to an
            expert: 8860012001</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                "Pre-loaded data or upload your own.",
                "Pre-configured processes and reports.",
                "Guided experiences for sales persons.",
                "Online training and live webinars"
            ], 
            countries: [
                { value: "US", label: "United States" },
                { value: "AF", label: "Afghanistan" },
                { value: "AL", label: "Albania" },
                { value: "DZ", label: "Algeria" },
                { value: "AS", label: "American Samoa" },
                { value: "AD", label: "Andorra" },
                { value: "AI", label: "Anguilla" },
                { value: "AQ", label: "Antarctica" },
                { value: "AG", label: "Antigua And Barbuda" },
                { value: "AR", label: "Argentina" },
                { value: "AM", label: "Armenia" },
                { value: "AW", label: "Aruba" },
                { value: "AU", label: "Australia" },
                { value: "AT", label: "Austria" },
                { value: "AZ", label: "Azerbaijan" },
                { value: "BS", label: "Bahamas, The" },
                { value: "BH", label: "Bahrain" },
                { value: "BD", label: "Bangladesh" },
                { value: "BB", label: "Barbados" },
                { value: "BY", label: "Belarus" },
                { value: "BZ", label: "Belize" },
                { value: "BE", label: "Belgium" },
                { value: "BJ", label: "Benin" },
                { value: "BM", label: "Bermuda" },
                { value: "BT", label: "Bhutan" },
                { value: "BO", label: "Bolivia" },
                { value: "BV", label: "Bouvet Is" },
                { value: "BA", label: "Bosnia and Herzegovina" },
                { value: "BW", label: "Botswana" },
                { value: "BR", label: "Brazil" },
                { value: "IO", label: "British Indian Ocean Territory" },
                { value: "BN", label: "Brunei" },
                { value: "BG", label: "Bulgaria" },
                { value: "BF", label: "Burkina Faso" },
                { value: "BI", label: "Burundi" },
                { value: "KH", label: "Cambodia" },
                { value: "CM", label: "Cameroon" },
                { value: "CA", label: "Canada" },
                { value: "CV", label: "Cape Verde" },
                { value: "KY", label: "Cayman Is" },
                { value: "CF", label: "Central African Republic" },
                { value: "TD", label: "Chad" },
                { value: "CL", label: "Chile" },
                { value: "CN", label: "China" },
                { value: "HK", label: "Hong Kong" },
                { value: "MO", label: "Macau" },
                { value: "CX", label: "Christmas Is" },
                { value: "CC", label: "Cocos (Keeling) Is" },
                { value: "CO", label: "Colombia" },
                { value: "KM", label: "Comoros" },
                { value: "CK", label: "Cook Islands" },
                { value: "CR", label: "Costa Rica" },
                { value: "CI", label: "Cote D'Ivoire (Ivory Coast)" },
                { value: "HR", label: "Croatia (Hrvatska)" },
                { value: "CY", label: "Cyprus" },
                { value: "CZ", label: "Czech Republic" },
                { value: "CD", label: "Democratic Republic of the Congo" },
                { value: "DK", label: "Denmark" },
                { value: "DM", label: "Dominica" },
                { value: "DO", label: "Dominican Republic" },
                { value: "DJ", label: "Djibouti" },
                { value: "EC", label: "Ecuador" },
                { value: "EG", label: "Egypt" },
                { value: "SV", label: "El Salvador" },
                { value: "GQ", label: "Equatorial Guinea" },
                { value: "ER", label: "Eritrea" },
                { value: "EE", label: "Estonia" },
                { value: "ET", label: "Ethiopia" },
                { value: "FK", label: "Falkland Is (Is Malvinas)" },
                { value: "FO", label: "Faroe Islands" },
                { value: "FJ", label: "Fiji Islands" },
                { value: "FI", label: "Finland" },
                { value: "FR", label: "France" },
                { value: "GF", label: "French Guiana" },
                { value: "PF", label: "French Polynesia" },
                { value: "TF", label: "French Southern Territories" },
                { value: "MK", label: "F.Y.R.O. Macedonia" },
                { value: "GA", label: "Gabon" },
                { value: "GM", label: "Gambia, The" },
                { value: "GE", label: "Georgia" },
                { value: "DE", label: "Germany" },
                { value: "GH", label: "Ghana" },
                { value: "GI", label: "Gibraltar" },
                { value: "GR", label: "Greece" },
                { value: "GL", label: "Greenland" },
                { value: "GD", label: "Grenada" },
                { value: "GP", label: "Guadeloupe" },
                { value: "GU", label: "Guam" },
                { value: "GT", label: "Guatemala" },
                { value: "GN", label: "Guinea" },
                { value: "GW", label: "Guinea-Bissau" },
                { value: "GY", label: "Guyana" },
                { value: "HT", label: "Haiti" },
                { value: "HM", label: "Heard and McDonald Is" },
                { value: "HN", label: "Honduras" },
                { value: "HU", label: "Hungary" },
                { value: "IS", label: "Iceland" },
                { value: "IN", label: "India" },
                { value: "ID", label: "Indonesia" },
                { value: "IE", label: "Ireland" },
                { value: "IL", label: "Israel" },
                { value: "IT", label: "Italy" },
                { value: "JM", label: "Jamaica" },
                { value: "JP", label: "Japan" },
                { value: "JO", label: "Jordan" },
                { value: "KZ", label: "Kazakhstan" },
                { value: "KE", label: "Kenya" },
                { value: "KI", label: "Kiribati" },
                { value: "KR", label: "Korea, South" },
                { value: "KW", label: "Kuwait" },
                { value: "KG", label: "Kyrgyzstan" },
                { value: "LA", label: "Laos" },
                { value: "LV", label: "Latvia" },
                { value: "LB", label: "Lebanon" },
                { value: "LS", label: "Lesotho" },
                { value: "LR", label: "Liberia" },
                { value: "LI", label: "Liechtenstein" },
                { value: "LT", label: "Lithuania" },
                { value: "LU", label: "Luxembourg" },
                { value: "MG", label: "Madagascar" },
                { value: "MW", label: "Malawi" },
                { value: "MY", label: "Malaysia" },
                { value: "MV", label: "Maldives" },
                { value: "ML", label: "Mali" },
                { value: "MT", label: "Malta" },
                { value: "MH", label: "Marshall Is" },
                { value: "MR", label: "Mauritania" },
                { value: "MU", label: "Mauritius" },
                { value: "MQ", label: "Martinique" },
                { value: "YT", label: "Mayotte" },
                { value: "MX", label: "Mexico" },
                { value: "FM", label: "Micronesia" },
                { value: "MD", label: "Moldova" },
                { value: "MC", label: "Monaco" },
                { value: "MN", label: "Mongolia" },
                { value: "MS", label: "Montserrat" },
                { value: "MA", label: "Morocco" },
                { value: "MZ", label: "Mozambique" },
                { value: "MM", label: "Myanmar" },
                { value: "NA", label: "Namibia" },
                { value: "NR", label: "Nauru" },
                { value: "NP", label: "Nepal" },
                { value: "NL", label: "Netherlands, The" },
                { value: "AN", label: "Netherlands Antilles" },
                { value: "NC", label: "New Caledonia" },
                { value: "NZ", label: "New Zealand" },
                { value: "NI", label: "Nicaragua" },
                { value: "NE", label: "Niger" },
                { value: "NG", label: "Nigeria" },
                { value: "NU", label: "Niue" },
                { value: "NO", label: "Norway" },
                { value: "NF", label: "Norfolk Island" },
                { value: "MP", label: "Northern Mariana Is" },
                { value: "OM", label: "Oman" },
                { value: "PK", label: "Pakistan" },
                { value: "PW", label: "Palau" },
                { value: "PA", label: "Panama" },
                { value: "PG", label: "Papua new Guinea" },
                { value: "PY", label: "Paraguay" },
                { value: "PE", label: "Peru" },
                { value: "PH", label: "Philippines" },
                { value: "PN", label: "Pitcairn Island" },
                { value: "PL", label: "Poland" },
                { value: "PT", label: "Portugal" },
                { value: "PR", label: "Puerto Rico" },
                { value: "QA", label: "Qatar" },
                { value: "CG", label: "Republic of the Congo" },
                { value: "RE", label: "Reunion" },
                { value: "RO", label: "Romania" },
                { value: "RW", label: "Rwanda" },
                { value: "SH", label: "Saint Helena" },
                { value: "KN", label: "Saint Kitts And Nevis" },
                { value: "LC", label: "Saint Lucia" },
                { value: "PM", label: "Saint Pierre and Miquelon" },
                { value: "VC", label: "Saint Vincent And The Grenadines" },
                { value: "WS", label: "Samoa" },
                { value: "SM", label: "San Marino" },
                { value: "ST", label: "Sao Tome and Principe" },
                { value: "SA", label: "Saudi Arabia" },
                { value: "SN", label: "Senegal" },
                { value: "rs", label: "Serbia" },
                { value: "SC", label: "Seychelles" },
                { value: "SL", label: "Sierra Leone" },
                { value: "SG", label: "Singapore" },
                { value: "SK", label: "Slovakia" },
                { value: "SI", label: "Slovenia" },
                { value: "SB", label: "Solomon Islands" },
                { value: "SO", label: "Somalia" },
                { value: "ZA", label: "South Africa" },
                { value: "GS", label: "South Georgia & South Sandwich Is" },
                { value: "ES", label: "Spain" },
                { value: "LK", label: "Sri Lanka" },
                { value: "SR", label: "Suriname" },
                { value: "SJ", label: "Svalbard And Jan Mayen Is" },
                { value: "SZ", label: "Swaziland" },
                { value: "SE", label: "Sweden" },
                { value: "CH", label: "Switzerland" },
                { value: "TW", label: "Taiwan" },
                { value: "TJ", label: "Tajikistan" },
                { value: "TZ", label: "Tanzania" },
                { value: "TH", label: "Thailand" },
                { value: "TL", label: "Timor-Leste" },
                { value: "TG", label: "Togo" },
                { value: "TK", label: "Tokelau" },
                { value: "TO", label: "Tonga" },
                { value: "TT", label: "Trinidad And Tobago" },
                { value: "TN", label: "Tunisia" },
                { value: "TR", label: "Turkey" },
                { value: "TC", label: "Turks And Caicos Is" },
                { value: "TM", label: "Turkmenistan" },
                { value: "TV", label: "Tuvalu" },
                { value: "UG", label: "Uganda" },
                { value: "UA", label: "Ukraine" },
                { value: "AE", label: "United Arab Emirates" },
                { value: "GB", label: "United Kingdom" },
                { value: "UM", label: "United States Minor Outlying Is" },
                { value: "UY", label: "Uruguay" },
                { value: "UZ", label: "Uzbekistan" },
                { value: "VU", label: "Vanuatu" },
                { value: "VA", label: "Vatican City State (Holy See)" },
                { value: "VE", label: "Venezuela" },
                { value: "VN", label: "Vietnam" },
                { value: "VG", label: "Virgin Islands (British)" },
                { value: "VI", label: "Virgin Islands (US)" },
                { value: "WF", label: "Wallis And Futuna Islands" },
                { value: "EH", label: "Western Sahara" },
                { value: "YE", label: "Yemen" },
                { value: "ZM", label: "Zambia" },
                { value: "ZW", label: "Zimbabwe" }
            ],
            selectedJob: '',
            selectedCountry: 'IN',
            selectedEmployee: '',
            agree: false,
        }
    }
}
</script>
<style lang="">

</style>
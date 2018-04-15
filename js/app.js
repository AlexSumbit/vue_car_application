const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    {name: "Ford", model: "Focus", owner: "Richard", year: 2016, phone: "+38 037 022 43 21", image: "https://www.cstatic-images.com/car-pictures/xl/usc60foc123b021001.png"},
    {name: "BMW", model: "5 Series", owner: "Alexander", year: 2017, phone: "+38 037 022 43 21", image: "https://www.bmwusa.com/content/dam/bmwusa/5Series/Sedan/2018/BMW_MY18_5Series_DP_Design_01.png"},
    {name: "Mercedess", model: "S-Class", owner: "Andy", year: 2016, phone: "+38 037 022 43 21", image: "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2018-MB-S-Class-Black.png"},
    {name: "Audi", model: "A5", owner: "Rickey", year: 2015, phone: "+38 037 022 43 21", image: "http://st.motortrend.com/uploads/sites/10/2015/11/2015-audi-a5-premium-coupe-angular-front.png"},
    {name: "Volkswagen", model: "Passat", owner: "Michel", year: 2017, phone: "+38 037 022 43 21", image: "https://samara.saloncentr.ru/assets/components/phpthumbof/cache/image_3781.b95696bb9fc1039b0f2afd4f127ecf66.png"},
];

new Vue({
    el: "#app",
    data: {
        cars: cars,
        car: cars[0],
        selectedCar: 0,
        phoneVisibility: false,
        search: "",
        modalVisibility: false,
        logs: []
    },
    methods: {
        selectCar: function(index) {
            this.phoneVisibility = false;
            this.car = this.cars[index];
            this.selectedCar = index;
        },
        newOrder: function() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Success order ${this.car.name} ${this.car.model}`, 'ok')
            );
        },
        cancelOrder: function() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Cancelled order ${this.car.name} ${this.car.model}`, 'cnl')
            );
        }
    },
    computed: {
        phoneBtnLabel() {
            return this.phoneVisibility ? "Hide phone" : "Show phone";
            
        },
        filteredCars() {
            let self = this;
            let search = this.search.toLowerCase();

            const filtered = this.cars.filter(car => {
                let carString = (car.name + " " + car.model).toLowerCase();
                return carString.search(search) > -1;
            });

            return filtered;
        }
    },
    filters: {
        date: function(value) {
            return value.toLocaleString();
        }
    }
});
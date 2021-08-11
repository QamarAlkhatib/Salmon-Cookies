'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
    '4pm', '5pm', '6pm', '7pm'];

let container = document.getElementById('container');


let Seattle = {
    storeLocation: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    RandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
            this.customerPerHour.push(randCust);
        }
    },

    cookiesEachHour: function () {

        for (let i = 0; i < this.customerPerHour.length; i++) {
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    },

    totaldCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.storeLocation;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} Cookies`;
        }

        let listTotal = document.createElement('li');
        ulEl.appendChild(listTotal);
        listTotal.textContent = `Total:  ${this.totalCookies} Cookies`;

    }

}

Seattle.RandomCustomers();
Seattle.cookiesEachHour();
Seattle.totaldCookies();
Seattle.render();

let Tokyo = {
    storeLocation: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    RandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
            this.customerPerHour.push(randCust);
        }
    },

    cookiesEachHour: function () {

        for (let i = 0; i < this.customerPerHour.length; i++) {
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    },

    totaldCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.storeLocation;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} Cookies`;
        }

        let listTotal = document.createElement('li');
        ulEl.appendChild(listTotal);
        listTotal.textContent = `Total:  ${this.totalCookies} Cookies`;

    }

}
Tokyo.RandomCustomers();
Tokyo.cookiesEachHour();
Tokyo.totaldCookies();
Tokyo.render();

let Dubai = {
    storeLocation: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7, 
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    RandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
            this.customerPerHour.push(randCust);
        }
    },

    cookiesEachHour: function () {

        for (let i = 0; i < this.customerPerHour.length; i++) {
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    },

    totaldCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.storeLocation;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} Cookies`;
        }

        let listTotal = document.createElement('li');
        ulEl.appendChild(listTotal);
        listTotal.textContent = `Total:  ${this.totalCookies} Cookies`;

    }

}
Dubai.RandomCustomers();
Dubai.cookiesEachHour();
Dubai.totaldCookies();
Dubai.render();

let Paris = {
    storeLocation: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3, 
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    RandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
            this.customerPerHour.push(randCust);
        }
    },

    cookiesEachHour: function () {

        for (let i = 0; i < this.customerPerHour.length; i++) {
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    },

    totaldCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.storeLocation;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} Cookies`;
        }

        let listTotal = document.createElement('li');
        ulEl.appendChild(listTotal);
        listTotal.textContent = `Total:  ${this.totalCookies} Cookies`;

    }

}
Paris.RandomCustomers();
Paris.cookiesEachHour();
Paris.totaldCookies();
Paris.render();

let Lima = {
    storeLocation: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6, 
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    RandomCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
            this.customerPerHour.push(randCust);
        }
    },

    cookiesEachHour: function () {

        for (let i = 0; i < this.customerPerHour.length; i++) {
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    },

    totaldCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.storeLocation;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} Cookies`;
        }

        let listTotal = document.createElement('li');
        ulEl.appendChild(listTotal);
        listTotal.textContent = `Total:  ${this.totalCookies} Cookies`;

    }

}
Lima.RandomCustomers();
Lima.cookiesEachHour();
Lima.totaldCookies();
Lima.render();

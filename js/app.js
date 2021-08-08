'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
'4pm', '5pm', '6pm', '7pm', '8pm'];

let Seattle = {
    storeLocation: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,

    RandomCustomers: function(){
        for (let i = 0; i < hours.length; i++){
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
            this.customerPerHour.push(randCust);
        }
    },
    
    cookiesEachHour: function(){
        
        for(let i = 0; i < this.customerPerHour.length; i++){
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    }, 

    totaldCookies: function(){
        for (let i = 0; i < hours.length; i++){
            this.totalCookies += this.cookiesPerHour[i];
        }
    },

}



Seattle.RandomCustomers();
Seattle.cookiesEachHour();
Seattle.totaldCookies();
console.log(Seattle);

let Tokyo = {
    storeLocation: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    
    RandomCustomers: function(){
        for (let i = 0; i < hours.length; i++){
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
            this.customerPerHour.push(randCust);
        }
    },
    
    cookiesEachHour: function(){
        
        for(let i = 0; i < this.customerPerHour.length; i++){
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    }, 

    totaldCookies: function(){
        for (let i = 0; i < hours.length; i++){
            this.totalCookies += this.cookiesPerHour[i];
        }
    }
}

Tokyo.RandomCustomers();
Tokyo.cookiesEachHour();
Tokyo.totaldCookies();
console.log(Tokyo);

let Dubai = {
    storeLocation: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7, 
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    
    RandomCustomers: function(){
        for (let i = 0; i < hours.length; i++){
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
            this.customerPerHour.push(randCust);
        }
    },
    
    cookiesEachHour: function(){
        
        for(let i = 0; i < this.customerPerHour.length; i++){
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    }, 

    totaldCookies: function(){
        for (let i = 0; i < hours.length; i++){
            this.totalCookies += this.cookiesPerHour[i];
        }
    }
}
Dubai.RandomCustomers();
Dubai.cookiesEachHour();
Dubai.totaldCookies();
console.log(Dubai);

let Paris = {
    storeLocation: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3, 
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    
    RandomCustomers: function(){
        for (let i = 0; i < hours.length; i++){
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
            this.customerPerHour.push(randCust);
        }
    },
    
    cookiesEachHour: function(){
        
        for(let i = 0; i < this.customerPerHour.length; i++){
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    }, 

    totaldCookies: function(){
        for (let i = 0; i < hours.length; i++){
            this.totalCookies += this.cookiesPerHour[i];
        }
    }
}
Paris.RandomCustomers();
Paris.cookiesEachHour();
Paris.totaldCookies();
console.log(Paris);


let Lima = {
    storeLocation: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6, 
    customerPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    
    RandomCustomers: function(){
        for (let i = 0; i < hours.length; i++){
            let randCust = Math.ceil(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
            this.customerPerHour.push(randCust);
        }
    },
    
    cookiesEachHour: function(){
        
        for(let i = 0; i < this.customerPerHour.length; i++){
            this.cookiesPerHour.push((Math.ceil(this.customerPerHour[i] * this.avgCookieSale)));
        }
    }, 

    totaldCookies: function(){
        for (let i = 0; i < hours.length; i++){
            this.totalCookies += this.cookiesPerHour[i];
        }
    }
}

Lima.RandomCustomers();
Lima.cookiesEachHour();
Lima.totaldCookies();
console.log(Lima);

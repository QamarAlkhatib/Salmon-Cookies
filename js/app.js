
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
    '4pm', '5pm', '6pm', '7pm'];

function SalmonCookies(loc, minCust, maxCust, avrg) {
    this.loc = loc,
        this.minCust = minCust,
        this.maxCust = maxCust,
        this.avrg = avrg;
    SalmonCookie.push(this);
    this.customerPerHour = [];
    this.cookiesEachHour = [];
    this.totalCookies = 0;
}

let SalmonCookie = [];

let st1 = new SalmonCookies('Seattle', 23, 65, 6.3);
let st2 = new SalmonCookies('Tokyo', 3, 24, 1.2);
let st3 = new SalmonCookies('Dubai', 11, 38, 3.7);
let st4 = new SalmonCookies('Paris', 20, 38, 2.3);
let st5 = new SalmonCookies('Lima', 2, 16, 4.6);


SalmonCookies.prototype.showData = render;

let cookiesTable = document.getElementById('cookiesTable');

function randomCustomer(location) {
    let randNum = Math.floor(Math.random() * (location.maxCust - location.minCust + 1) + location.minCust);
    let total = location.avrg * randNum;
    return Math.round(total);
}

SalmonCookies.prototype.totalDailyCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.totalCookies += this.cookiesEachHour[i];

    }
}

SalmonCookies.prototype.cookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push((Math.ceil(this.customerPerHour[i] * this.avrgCookies)));
    }
}

function createTableHeader() {
    let timeRow = document.getElementById('times-row');

    for (let i = 0; i < hours.length; i++) {
        let timeTable = document.createElement('th');
        timeTable.textContent = hours[i];
        timeRow.appendChild(timeTable);
    }


    let totalHeader = document.createElement('th');
    totalHeader.textContent = 'Total Daily Cookies';
    timeRow.appendChild(totalHeader);
}
createTableHeader();

function render() {
    let sum = 0;
    let locationRow = document.getElementById('locations-and-data');
    let locationName = document.createElement('tr');
    locationName.textContent = this.loc;
    locationName.className = 'locStyle';

    for (let i = 0; i < hours.length; i++) {
        let averageCookies = randomCustomer(this);

        sum += averageCookies;
        this.cookiesEachHour.push(averageCookies);
        let locationData = document.createElement('td');
        locationData.textContent = averageCookies;
        locationName.appendChild(locationData);
        locationRow.appendChild(locationName);
    }

    let showTotal = document.createElement('td');
    showTotal.textContent = sum;
    locationName.appendChild(showTotal);
}

let footerValue;
function createTableFooter() {
    let TotalallCookiesPerHourAndLocation = 0;
    let allCookiesPerHourAndLocation = 0;
    let footerEl = document.createElement('tr');
    footerValue = footerEl;
    cookiesTable.appendChild(footerEl);
    let thEl1 = document.createElement('th');
    footerEl.appendChild(thEl1);
    thEl1.textContent = 'Total';

    for (let i = 0; i < hours.length; i++) {
        let tdEl2 = document.createElement('td');
        for (let j = 0; j < SalmonCookie.length; j++) {
            allCookiesPerHourAndLocation += SalmonCookie[j].cookiesEachHour[i]
        }
        footerEl.appendChild(tdEl2);
        tdEl2.textContent = allCookiesPerHourAndLocation;
        TotalallCookiesPerHourAndLocation += allCookiesPerHourAndLocation;
        allCookiesPerHourAndLocation = 0;
    }
    let tableData5 = document.createElement('td');
    footerEl.appendChild(tableData5);
    tableData5.textContent = TotalallCookiesPerHourAndLocation;
}

function delFooterValue() {
    cookiesTable.removeChild(footerValue);
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', addStore);

function addStore(event) {
    event.preventDefault();
    let storelocs = event.target.storeloc.value;
    let maxorders = event.target.maxorder.value;
    let minorders = event.target.minorder.value;
    let avrgsales = event.target.avrgsale.value;
    let newstore = new SalmonCookies(storelocs, minorders, maxorders, avrgsales)
    newstore.showData();
    delFooterValue();
    createTableFooter()
}

st1.showData();
st2.showData();
st3.showData();
st4.showData();
st5.showData();

createTableFooter()
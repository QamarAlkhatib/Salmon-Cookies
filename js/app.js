'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
'4pm', '5pm', '6pm', '7pm'];

function SalmonCookies(loc, minCust, maxCust, avrg) {
    this.loc = loc,
    this.minCust = minCust,
    this.maxCust = maxCust,
    this.avrg = avrg;
    SalmonCookies.allLocs.push(this);
    this.totalPerHour = [];
  }

  SalmonCookies.allLocs = [];
  
  
 
  let st1 = new SalmonCookies('Seattle', 23, 65, 6.3);
  let st2 = new SalmonCookies('Tokyo', 3, 24, 1.2);
  let st3 = new SalmonCookies('Dubai', 11, 38, 3.7);
  let st4 = new SalmonCookies('Paris', 20, 38, 2.3);
  let st5 = new SalmonCookies('Lima', 2, 16, 4.6);
  
  
  SalmonCookies.prototype.showData = AddcookiesData;
  
  var cookiesTable = document.getElementById('cookiesTable');
  

  function getAvrgCookies(location) {
    var randNum = Math.floor(Math.random() * (location.maxCust - location.minCust + 1) + location.minCust);
    var total = location.avrg * randNum;
    return Math.round(total);
  }
 
  let timeRow = document.getElementById('times-row');
  
  for (let i = 0; i < hours.length; i++) {
    let timeTable = document.createElement('th');
    timeTable.textContent = hours[i];
    timeRow.appendChild(timeTable);
  }
  
  
  var totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total';
  timeRow.appendChild(totalHeader);
  
  
  function AddcookiesData() {
    var sum = 0;
    var locationRow = document.getElementById('locations-and-data');
    var locationName = document.createElement('tr');
    locationName.textContent = this.loc;
    locationName.className = 'column1';
  
    
    for (let i = 0; i < hours.length; i++) {
      let averageCookies = getAvrgCookies(this);
      sum += averageCookies;
      this.totalPerHour.push(averageCookies);
      let locationData = document.createElement('td');
      locationData.textContent = averageCookies;
      locationName.appendChild(locationData);
      locationRow.appendChild(locationName);
    }
  
    let showTotal = document.createElement('td');
    showTotal.textContent = sum;
    locationName.appendChild(showTotal);
  }
  

  st1.showData();
  st2.showData();
  st3.showData();
  st4.showData();
  st5.showData();
 
  

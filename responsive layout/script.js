
// Toggle Menu On Mobile Screen
const menu = document.querySelector('.bx-menu');
const navList = document.querySelector('.nav_list');
const header = document.querySelector('.header')
menu.addEventListener('click', () => {
  navList.classList.toggle("opened_menu");
});


// Show Alert
var createAlertBox;
var alertBox;


const createAlert = (msg,des,type,id) => {
  var elementID = document.getElementById(id);
  elementID.classList.add("AlertBoxContainer")
  var alertBox = `
  <div className="alertbox">
     <h3>${msg}</h3>
     <p>${des}</p>

     
  <div className="close">
  <i class='bx bx-window-close' style="font-size:30px; cursor: pointer; float: right;position: relative; bottom: 40px;" onclick="closeAlert()"></i>
</div>
  </div>
  `;
  var createAlertBox = document.getElementById(id);
  createAlertBox.innerHTML = alertBox;
  if(type === 'error'){
    elementID.style.background = "red";
    elementID.style.color = "#fff";
  }
  else if(type === 'successus'){
    elementID.style.background = "green";
    elementID.style.color = "#fff";
  }
  else if(type === 'warning'){
    elementID.style.background = "yellow";
    elementID.style.color = "#000";
  }
  return alertBox;
}

createAlert('hello','hello how are you','successus','test');

const closeAlert = () => {
  var alertBox = document.getElementsByClassName('AlertBoxContainer');
  alertBox.style.background = 'red'
  alertBox.innerHTML = "";
}

document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    // Replace 'http://your-django-api-endpoint' with your actual Django API endpoint
    fetch('http://127.0.0.1:8000/home/')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(users) {
    const container = document.getElementById('data-container');

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <!-- Add other user properties as needed -->
        `;
        container.appendChild(userCard);
    });
}
var y = 0;
var total = 0;

function openCart() {
  document.getElementById("Cart").style.display = "block";
  document.getElementById("Checkout").style.display = "none";
}

function emptyCart() {
  document.getElementById("EmptyCart").style.opacity = 0;
  document.getElementById("FoodCount").style.opacity = 0;
  document.getElementById("CartFull").style.opacity = 0;
  for (y = 1; y <= 10; y++) {
    var x = "item" + y;
    document.getElementById(x).innerHTML = "";
  }
  y = 0;
  total = 0;
  document.getElementById("total").value = "";
}

function closeCart() {
  document.getElementById("EmptyCart").style.opacity = 0;
  document.getElementById("Cart").style.display = "none";
  document.getElementById("Checkout").style.display = "none";
}

function Checkout() {
  document.getElementById("EmptyCart").style.opacity = 0;
  document.getElementById("InvalidFields").style.opacity = 0;

  if (document.getElementById("item1").innerHTML == "")
    document.getElementById("EmptyCart").style.opacity = 1;
  else
    document.getElementById("Checkout").style.display = "block";
}

function FoodCount() {
  document.getElementById("FoodCount").style.opacity = 1;
  document.getElementById("FoodCount").value = y;
  document.getElementById("total").value = "RM " + total;
  if (y == 10)
    document.getElementById("CartFull").style.opacity = 1;
}

var item1Btn = document.getElementById('item1Btn');
item1Btn.addEventListener('cancel', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 6.00;
  document.getElementById(x).innerHTML = "RM 6.00 Kari Kambing";
  FoodCount();
});

var item2Btn = document.getElementById('item2Btn');
item2Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 8.00;
  document.getElementById(x).innerHTML = "RM 8.00 Nasi Kerabu";
  FoodCount();
});

var item3Btn = document.getElementById('item3Btn');
item3Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 5.00;
  document.getElementById(x).innerHTML = "RM 5.00 Nasi Ayam";
  FoodCount();
});

var item4Btn = document.getElementById('item4Btn');
item4Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 4.00;
  document.getElementById(x).innerHTML = "RM 4.00 Mee Goreng";
  FoodCount();
});

var item5Btn = document.getElementById('item5Btn');
item5Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 4.00;
  document.getElementById(x).innerHTML = "RM 4.00 Rendang";
  FoodCount();
});

var item6Btn = document.getElementById('item6Btn');
item6Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 2.00;
  document.getElementById(x).innerHTML = "RM 2.00 Roti Canai";
  FoodCount();
});

var item7Btn = document.getElementById('item7Btn');
item7Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 5.00;
  document.getElementById(x).innerHTML = "RM 5.00 Shawarma";
  FoodCount();
});

var item8Btn = document.getElementById('item8Btn');
item8Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 8.00;
  document.getElementById(x).innerHTML = "RM 8.00 Shawarma Meal";
  FoodCount();
});

var item9Btn = document.getElementById('item9Btn');
item9Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 3.00;
  document.getElementById(x).innerHTML = "RM 3.00 Falafel";
  FoodCount();
});

var item10Btn = document.getElementById('item10Btn');
item10Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 6.00;
  document.getElementById(x).innerHTML = "RM 6.00 Kabsah";
  FoodCount();
});

var item11Btn = document.getElementById('item11Btn');
item11Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 3.00;
  document.getElementById(x).innerHTML = "RM 3.00 Fries";
  FoodCount();
});

var item12Btn = document.getElementById('item12Btn');
item12Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 5.00;
  document.getElementById(x).innerHTML = "RM 5.00 Beef Burger";
  FoodCount();
});

var item13Btn = document.getElementById('item13Btn');
item13Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 5.00;
  document.getElementById(x).innerHTML = "RM 5.00 Chicken Burger";
  FoodCount();
});

var item14Btn = document.getElementById('item14Btn');
item14Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 8.00;
  document.getElementById(x).innerHTML = "RM 8.00 Chicken Chop";
  FoodCount();
});

var item15Btn = document.getElementById('item15Btn');
item15Btn.addEventListener('click', function () {
  y++;
  var x = "item" + y;
  if (y <= 10) total += 4.00;
  document.getElementById(x).innerHTML = "RM 4.00 Fried Chicken";
  FoodCount();
});

function fillAdminData() {
  document.getElementById('Username').value = adminData.Username;
  document.getElementById('Email').value = adminData.Email;
  document.getElementById('Number').value = adminData.Number;
  document.getElementById('Address').value = adminData.Address;

  if (adminData.CardType == 'VISA')
    document.getElementById('VISA').checked = 'checked';
  if (adminData.CardType == 'MasterCard')
    document.getElementById('MasterCard').checked = 'checked';

  document.getElementById('CardNumber').value = adminData.CardNumber;
  document.getElementById('Month').value = adminData.Month;
  document.getElementById('Year').value = adminData.Year;
  document.getElementById('CardSecurityNum').value = adminData.CardSecurityNum;
}

$('#CardNumber').keyup(function () {
  var foo = $(this).val().split("-").join(""); // remove hyphens
  if (foo.length == 16) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  $(this).val(foo);
});

function pay() {
  document.getElementById("InvalidFields").style.opacity = 0;

  if (document.getElementById('Username').value == "" ||
    document.getElementById('Email').value == "" ||
    document.getElementById('Number').value == "" ||
    document.getElementById('Address').value == "" ||
    document.getElementById('CardNumber').value == "" ||
    document.getElementById('Month').value == "Month" ||
    document.getElementById('Year').value == "Year" ||
    document.getElementById('CardSecurityNum').value == "") {
    document.getElementById("InvalidFields").style.opacity = 1;
    document.getElementById("InvalidFields").innerHTML = "Please fill in all fields!";
  }

  else {
    alert("You have successfully paid RM " + total + "!\nYour food will be delivered to you shortly!\nThank you for using iFoodie!");
    document.getElementById("Checkout").style.display = "none";
    document.getElementById("Cart").style.display = "none";
    emptyCart();
  }
}

function payOffline() {
  document.getElementById("InvalidFields").style.opacity = 0;

  if (document.getElementById('Username').value == "" ||
    document.getElementById('Email').value == "" ||
    document.getElementById('Number').value == "" ||
    document.getElementById('Address').value == "") {
    document.getElementById("InvalidFields").style.opacity = 1;
    document.getElementById("InvalidFields").innerHTML = "Please fill in Username, Email Address, Phone Number and Shipping Address!";
  }

  else {
    alert("You will be charged RM " + total + " on delivery!\nYour food will be delivered to you shortly!\nThank you for using iFoodie!");
    document.getElementById("Checkout").style.display = "none";
    document.getElementById("Cart").style.display = "none";
    emptyCart();
  }
}

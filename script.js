//PRODUCT PAGE//
//IMG COLOR PRODUCT//

const botonImageShoesBlack = document.getElementById("image-product-black");
const botonImageShoesBlue = document.getElementById("image-product-blue");
const botonImageShoesGreen = document.getElementById("image-product-green");

const imgComplete = document.getElementById("img-complete");
const imgPurchase = document.getElementById("img-purchase");

const checkGift = document.getElementById('checkboxGift');
const titleGift = document.getElementById('gifttitle');
const messGift = document.getElementById('giftmessage');
const inputGift = document.getElementById('image-input');
const t1xtGift = document.getElementById('gifttxt1');
const t2xtGift = document.getElementById('gifttxt2');

const changeImages = (color) => {
  const imageMain = document.getElementById("image-main");
  const imageOne = document.getElementById("image-1");
  const imageTwo = document.getElementById("image-2");
  const imageThree = document.getElementById("image-3");

  const title = document.getElementById('title-product');

  const colorTitle = {
    'Azules': 'Blue',
    'Verdes': 'Beige',
    'Negras': 'Black'
  };

  const priceTitle = {
    'Azules': '21.99€',
    'Verdes': '17.99€',
    'Negras': '24.99€'
  }

  const colorPurchase = document.getElementById("purchase-color");
  colorPurchase.innerHTML = "Color:" + " " + colorTitle[color];
  const colorComplete = document.getElementById("complete-color");
  colorComplete.innerHTML = "Color:" + " " + colorTitle[color];
  const offer = document.getElementById('price-product');
  offer.innerHTML = " " + priceTitle[color];
  const priceProd = document.getElementById("priceProd");
  priceProd.innerHTML = " " + priceTitle[color];
  const priceProdd = document.getElementById("priceProdd");
  priceProdd.innerHTML = " " + priceTitle[color];


  imageMain.src = 'assets/Zapatillas' + color + 'Main.jpeg';
  imageOne.src = 'assets/Zapatillas' + color + 'Img1.jpeg';
  imageTwo.src = 'assets/Zapatillas' + color + 'Img2.jpeg';
  imageThree.src = 'assets/Zapatillas' + color + 'Img3.jpeg';

  title.innerHTML = 'Running' + ' ' + colorTitle[color]

};

const changeCompleteImage = (color) => {
  imgComplete.style.backgroundImage = `url("/assets/Zapatillas${color}Main.jpeg")`;
};

const changePurchaseImage = (color) => {
  imgPurchase.style.backgroundImage = `url("/assets/Zapatillas${color}Main.jpeg")`;
};

const changeMainImage = (event) => {
  const newsource = event.src;

  const imageMain = document.getElementById("image-main");
  const oldsource = imageMain.src;

  event.src = oldsource;
  imageMain.src = newsource;
};

botonImageShoesBlue.addEventListener("click", () => {
  changeImages('Azules');
  changeCompleteImage('Azules');
  changePurchaseImage('Azules');
});

botonImageShoesGreen.addEventListener("click", () => {
  changeImages('Verdes');
  changeCompleteImage('Verdes');
  changePurchaseImage('Verdes');
});

botonImageShoesBlack.addEventListener("click", () => {
  changeImages('Negras');
  changeCompleteImage('Negras');
  changePurchaseImage('Negras');
});



//PROFILE PAGE//

const userInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmpassword");

function borrarForm() {
  userInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
};

const borrarBotonForm = document.querySelector(".clearform");
borrarBotonForm.addEventListener("click", borrarForm);

//ADDRESS PAGE//

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const birthday = document.getElementById("birthday");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const postalcode = document.getElementById("postalcode");
const country = document.getElementById("country");
const phone = document.getElementById("phone");
const phonetext = document.getElementById("phonenum");
const nextButton = document.getElementById("nextpageaddress");
const form = document.getElementById("addressForm");


function borrarFormAddress() {
  firstname.value = "";
  lastname.value = "";
  birthday.value = "";
  address1.value = "";
  address2.value = "";
  postalcode.value = "";
  country.value = "";
  phone.value = "";
  phonetext.value = "";
};

const borrarBotonFormAddress = document.querySelector(".clearformaddress");
borrarBotonFormAddress.addEventListener("click", borrarFormAddress);

//ADDRESS PAGE FINISH//

//SHIPMENT PAGE//

const checkboxes = document.querySelectorAll(".freeShipment, .extraShipment, .premiun");
const giftMessageTextarea = document.getElementById("giftmessage");
const borrarFormShip = document.querySelector(".clearformShip");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', function() {
    handleCheckboxSelection(checkbox);
  });
});

borrarFormShip.addEventListener('click', function() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  giftMessageTextarea.value = "";
  document.querySelector(".itsGift").checked = false;
});

function handleCheckboxSelection(selectedCheckbox) {
  checkboxes.forEach((checkbox) => {
    if (checkbox !== selectedCheckbox) {
      checkbox.checked = false;
    };
  });
};


//SIZE AND COLOR TO PURCHASE//
const buyButton = document.querySelector('.button-buy');

buyButton.addEventListener("click", () => {
  let size = document.getElementById('select-size').value;
  let purchasesize = document.getElementById('purchase-size');
  purchasesize.textContent = `Size: ${size}`;
  let completesize = document.getElementById('complete-size');
  completesize.textContent = `Size: ${size}`;

});

//USER INFO TO YOUR ORDER//
const nexttoshipping = document.querySelector('.nexttoshipping');
nexttoshipping.addEventListener("click", () => {
  //NAME//
  let firstname = document.getElementById('firstname').value;
  let lastname = document.getElementById('lastname').value;
  let fullname = document.getElementById('fullname');
  fullname.textContent = `Name: ${firstname} ${lastname}`;
  //ADDRESS//
  let address1 = document.getElementById('address1').value;
  let address2 = document.getElementById('address2').value;
  let postalcode = document.getElementById('postalcode').value;
  let country = document.getElementById('country').value;
  let fulladdress = document.getElementById('fulladdress');
  fulladdress.textContent = `Address: ${address1} ${address2} ${postalcode} ${country}`;
  let prephone = document.getElementById('phonecountry').value;
  let phone = document.getElementById('phonenum').value;
  let fullphone = document.getElementById('fullphone');
  //fullphone.textContent = `Phone: ${prephone} ${phone}`;
  fullphone.textContent = `Phone: ${phone}`;
  let email = document.getElementById('email').value;
  let fullemail = document.getElementById('fullemail');
  let fullemail1 = document.getElementById('fullemail1');
  fullemail1.textContent = `Email Address: ${email}`;
});

////////////////////////////////NAVIGATION/////////////////////////////////////////////
const buttonBuy = document.querySelector('.button-buy');
const nextaddress = document.querySelector('.nexttoaddress');
const nextshipping = document.querySelector('.nexttoshipping');
const nextfinish = document.getElementById('nextToFinish');
const nextthanks = document.querySelector('.nexttothanks');
const profilepagehide = document.getElementById("profile");
const profilenavhide = document.getElementById("navprofile");
const profilefooterhide = document.getElementById("footerprofile");
const productpagehide = document.getElementById("product");
const productfooterhide = document.getElementById("footerproduct");
const addresspagehide = document.getElementById("address");
const addressnavhide = document.getElementById("navaddress");
const addressfooterhide = document.getElementById("footeraddress");
const shippingpagehide = document.getElementById("shipping");
const shippingnavhide = document.getElementById("navshipping");
const shippingfooterhide = document.getElementById("footershipping");
const finishpagehide = document.getElementById("finish");
const finishnavhide = document.getElementById("navfinish");
const finishfooterhide = document.getElementById("footerfinish");
const thankspagehide = document.getElementById("thanks");
const thanksnavhide = document.getElementById("navthanks");
const thanksfooterhide = document.getElementById("footerthanks");
const absoluteMessage = document.getElementById("absoluteMessage");



///NOborrarNOborrarNOborrarNOborrarNOborrarNOborrarNOborrarNOborrarNOborrarNOborrarNOborrar///

// comentar o descomentar para poder trabajar en toda la pagina//

// DEFAULT PAGE VIEW//
productpagehide.style.display = "block";
productfooterhide.style.display = "flex";
profilepagehide.style.display = "none";
profilenavhide.style.display = "none";
profilefooterhide.style.display = "none";
addresspagehide.style.display = "none";
addressnavhide.style.display = "none";
addressfooterhide.style.display = "none";
shippingpagehide.style.display = "none";
shippingnavhide.style.display = "none";
shippingfooterhide.style.display = "none";
finishpagehide.style.display = "none";
finishnavhide.style.display = "none";
finishfooterhide.style.display = "none";
thankspagehide.style.display = "none";
thanksnavhide.style.display = "none";
thanksfooterhide.style.display = "none";
absoluteMessage.style.display = 'none';




//////CLICK FORWARD NAVIGATION CALL FUNCTIONS///////////////////////
//////BUY TO PROFILE /////////////////////
buttonBuy.addEventListener('click', () => {
  activeTime();
  activeMessage();
  buyTOprofile();

});

////NEXT TO ADDRESS///////////////////////
nextaddress.addEventListener('click', () => {
  console.log(userInput.value);
  if (validateUsername() === true && validateEmail() === true && validatePassword() === true) {
    profileTOaddress();
  }

});

////nEXT TO SHIPPING////////////////////
nextshipping.addEventListener('click', () => {

  if (validateFirstName() === true && validateLastName() === true && validateBirthday() === true && validateAddress1() === true && validateAddress2() === true && validatePostal() === true && validateCountry() === true && validatePhone() === true) {
    addressTOshipping();
  }
});

///NEXT TO FINISH //////////////////////
nextfinish.addEventListener('click', () => {
  if (validateShipping() === true) {
    shippingTOfinish();
    clearInterval(tempMessage);
  }
});

///NEXT TO THANKS//////////////////////
const chargedTitle = document.getElementById('chargedTitle');
const chargedGiftMessage = document.getElementById('chargedGiftMessage');
const chargedGiftImage = document.getElementById('chargedGiftImage');
const checkbox = document.getElementById("myCheckbox");
const nextThanks = document.querySelector(".nexttothanks");
nextthanks.addEventListener('click', () => {
  if (!checkbox.checked) {
    alert("Please accept terms and conditions")
  }
  else { finishTOthanks(); };

  chargedTitle.textContent = titleGift.value;
  chargedGiftMessage.textContent = messGift.value;
  // chargedGiftImage.textContent = inputGift.value;
});

// SHOW/HIDE & FORWARD NAVIGATIONS FUNCTIONS ////////////////

function buyTOprofile() {
  window.location.href = '#profile';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "grid";
  profilenavhide.style.display = "block";
  profilefooterhide.style.display = "flex";
  addresspagehide.style.display = "none";
  addressnavhide.style.display = "none";
  addressfooterhide.style.display = "none";
  shippingpagehide.style.display = "none";
  shippingnavhide.style.display = "none";
  shippingfooterhide.style.display = "none";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};
function profileTOaddress() {
  window.location.href = '#address';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "none";
  profilenavhide.style.display = "none";
  profilefooterhide.style.display = "none";
  addresspagehide.style.display = "grid";
  addressnavhide.style.display = "block";
  addressfooterhide.style.display = "flex";
  shippingpagehide.style.display = "none";
  shippingnavhide.style.display = "none";
  shippingfooterhide.style.display = "none";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};
function addressTOshipping() {
  window.location.href = '#shipping';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "none";
  profilenavhide.style.display = "none";
  profilefooterhide.style.display = "none";
  addresspagehide.style.display = "none";
  addressnavhide.style.display = "none";
  addressfooterhide.style.display = "none";
  shippingpagehide.style.display = "grid";
  shippingnavhide.style.display = "block";
  shippingfooterhide.style.display = "flex";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};
function shippingTOfinish() {
  window.location.href = '#finish';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "none";
  profilenavhide.style.display = "none";
  profilefooterhide.style.display = "none";
  addresspagehide.style.display = "none";
  addressnavhide.style.display = "none";
  addressfooterhide.style.display = "none";
  shippingpagehide.style.display = "none";
  shippingnavhide.style.display = "none";
  shippingfooterhide.style.display = "none";
  finishpagehide.style.display = "grid";
  finishnavhide.style.display = "block";
  finishfooterhide.style.display = "flex";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};
function finishTOthanks() {
  window.location.href = '#thanks';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "none";
  profilenavhide.style.display = "none";
  profilefooterhide.style.display = "none";
  addresspagehide.style.display = "none";
  addressnavhide.style.display = "none";
  addressfooterhide.style.display = "none";
  shippingpagehide.style.display = "none";
  shippingnavhide.style.display = "none";
  shippingfooterhide.style.display = "none";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "grid";
  thanksnavhide.style.display = "block";
  thanksfooterhide.style.display = "flex";
};

////////////////////////////////////////////////////
const backtoproduct = document.querySelector('.backtoproduct');
const backtoprofile = document.querySelector('.backtoprofile');
const backtoaddress = document.querySelector('.backtoaddress');
const backtoshipping = document.querySelector('.backtoshipping');

//////CLICK FORWARD NAVIGATION CALL FUNCTIONS///////
backtoproduct.addEventListener('click', () => {
  backTOproduct();
});
backtoprofile.addEventListener('click', () => {
  backTOprofile();
});
backtoaddress.addEventListener('click', () => {
  backTOaddress();
});
backtoshipping.addEventListener('click', () => {
  backTOshipping();
});

// SHOW/HIDE & BACK NAVIGATIONS FUNCTIONS 
function backTOproduct() {
  window.location.href = '#product';
  productpagehide.style.display = "block";
  productfooterhide.style.display = "flex";
  profilepagehide.style.display = "none";
  profilenavhide.style.display = "none";
  profilefooterhide.style.display = "none";
  addresspagehide.style.display = "none";
  addressnavhide.style.display = "none";
  addressfooterhide.style.display = "none";
  shippingpagehide.style.display = "none";
  shippingnavhide.style.display = "none";
  shippingfooterhide.style.display = "none";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};
function backTOprofile() {
  window.location.href = '#profile';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "grid";
  profilenavhide.style.display = "block";
  profilefooterhide.style.display = "flex";
  addresspagehide.style.display = "none";
  addressnavhide.style.display = "none";
  addressfooterhide.style.display = "none";
  shippingpagehide.style.display = "none";
  shippingnavhide.style.display = "none";
  shippingfooterhide.style.display = "none";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};
function backTOaddress() {
  window.location.href = '#address';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "none";
  profilenavhide.style.display = "none";
  profilefooterhide.style.display = "none";
  addresspagehide.style.display = "grid";
  addressnavhide.style.display = "block";
  addressfooterhide.style.display = "flex";
  shippingpagehide.style.display = "none";
  shippingnavhide.style.display = "none";
  shippingfooterhide.style.display = "none";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};
function backTOshipping() {
  window.location.href = '#shipping';
  productpagehide.style.display = "none";
  productfooterhide.style.display = "none";
  profilepagehide.style.display = "none";
  profilenavhide.style.display = "none";
  profilefooterhide.style.display = "none";
  addresspagehide.style.display = "none";
  addressnavhide.style.display = "none";
  addressfooterhide.style.display = "none";
  shippingpagehide.style.display = "grid";
  shippingnavhide.style.display = "block";
  shippingfooterhide.style.display = "flex";
  finishpagehide.style.display = "none";
  finishnavhide.style.display = "none";
  finishfooterhide.style.display = "none";
  thankspagehide.style.display = "none";
  thanksnavhide.style.display = "none";
  thanksfooterhide.style.display = "none";
};

// VALIDATE FUNCTIONS
function validateUsername() {
  const userEntry = document.getElementById("username");
  const userValid = userEntry.value;
  if (userValid.length < 5) {
    userEntry.style.border = '2px solid red';
    alert("Username must have at least 5 characters");
    return false;

  } else if (userValid.length > 20) {
    userEntry.style.border = '2px solid red';
    alert("Username must have max 20 characters.");
    return false;

  } else if (/\s/g.test(userValid)) {
    userEntry.style.border = '2px solid red';
    alert("Username must be without spaces");
    return false;

  } else {
    userEntry.style.border = '0px';
    return true;
  }
};
function validateEmail() {
  let email = document.getElementById('email');
  let validCar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!validCar.test(email.value)) {
    alert('invalid email address');
    email.style.border = '2px solid red';
    return false;
  } else {
    email.style.border = '0px';
    return true;
  };

};
function validatePassword() {
  let newPassword = document.getElementById('password');
  let confirmpassword = document.getElementById('confirmpassword');
  let minNumberofChars = 8;
  let maxNumberofChars = 20;
  let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  if (newPassword.value.length < minNumberofChars || newPassword.value.length > maxNumberofChars) {
    alert("password should contain at least 8 character");
    newPassword.style.border = '2px solid red';
    return false;
  };
  if (!regularExpression.test(newPassword.value)) {
    alert("password should contain a tleast one number, one Uppercase, one lowercase and one special character");
    newPassword.style.border = '2px solid red';
    return false;
  };
  if (newPassword.value !== confirmpassword.value) {
    alert('Confirm password must be the same');
    confirmpassword.style.border = '2px solid red';
  }
  else {
    newPassword.style.border = 'none';
    confirmpassword.style.border = 'none';
    return true;
  };
};
function validateShipping() {
  const checkboxFreeShip = document.getElementById("checkboxFreeShip");
  const checkboxExtra = document.getElementById("checkboxExtra");
  const checkboxPremiun = document.getElementById("checkboxPremiun");
  let price = document.getElementById('price-product');
  let priceVar = document.getElementById('priceVar');
  let priceVarfin = document.getElementById('priceVarfin');
  let totalSUM = document.getElementById('totalSUM');
  let totalSUMfin = document.getElementById('totalSUMfin');
  if (checkboxFreeShip.checked) {
    priceVar.textContent = '0€';
    priceVarfin.textContent = '0€';
    totalSUM.textContent = price.textContent;
    totalSUMfin.textContent = price.textContent;
    return true;
  }
  if (checkboxExtra.checked) {
    priceVar.textContent = '4.99€';
    priceVarfin.textContent = '4.99€';
    let SUM = parseFloat(price.textContent.split('€')) + parseFloat(priceVar.textContent.split('€'));
    let SUMfin = parseFloat(price.textContent.split('€')) + parseFloat(priceVarfin.textContent.split('€'));
    totalSUM.textContent = SUM.toFixed(2) + '€';
    totalSUMfin.textContent = SUMfin.toFixed(2) + '€';
    return true;
  }
  if (checkboxPremiun.checked) {
    priceVar.textContent = '7.99€';
    priceVarfin.textContent = '7.99€';
    let SUM = parseFloat(price.textContent.split('€')) + parseFloat(priceVar.textContent.split('€'));
    totalSUM.textContent = SUM.toFixed(2) + '€';
    let SUMfin = parseFloat(price.textContent.split('€')) + parseFloat(priceVarfin.textContent.split('€'));
    totalSUMfin.textContent = SUMfin.toFixed(2) + '€';
    return true;
  }
  else {
    alert('Select a shipping method');

    return false;

  }
};

function validateFirstName() {
  const firstname = document.getElementById('firstname');
  if (firstname.value.length > 0 && firstname.value.length < 20) {
    firstname.style.border = '0px';
    return true;
  } else {
    alert('First name must have between 1 and 20 characters');
    firstname.style.border = '2px solid red';
    return false;
  }
}
function validateLastName() {
  const lastname = document.getElementById('lastname');
  if (lastname.value.length > 0 && lastname.value.length < 20) {
    lastname.style.border = '0px';
    return true;
  } else {
    alert('Last name must have between 1 and 20 characters');
    lastname.style.border = '2px solid red';
    return false;
  }
}
function validateAddress1() {
  const address1 = document.getElementById('address1');
  if (address1.value.length > 0 && address1.value.length < 50) {
    address1.style.border = '0px';
    return true;
  }
  alert('Address1 must have between 1 and 50 characters');
  address1.style.border = '2px solid red';
  return false;
}
function validateAddress2() {
  const address2 = document.getElementById('address2');
  if (address2.value.length < 50) {
    address2.style.border = '0px';
    return true;
  }
  alert('Address2 max length is 50 characters');
  address2.style.border = '2px solid red';
  return false;
}
function validatePostal() {
  const postal = document.getElementById('postalcode');
  const regex = /^\d{5}$/;
  if (regex.test(postal.value) && postal.value.length === 5) {
    return true;
  }
  alert('Postal code format must be 5 numbers')
  postal.style.border = '2px solid red';
  return false;

}
function validateBirthday() {
  const Valbirthday = document.getElementById("birthday");
  if (Valbirthday.value !== "") {
    return true;
  } else {
    alert("Select your birthday please");
    Valbirthday.style.border = '2px solid red'
    return false;
  }
};
function validateCountry() {
  valCountry = document.getElementById('country');
  if (valCountry.value !== "") {
    valCountry.style.border = '0px';
    return true;
  }
  alert('select a country!')
  valCountry.style.border = '2px solid red';
  return false;

}
function getPhoneCode(country) {
  switch (country) {
    case "andorra":
      return "andorraph";
    case "spain":
      return "spainph";
    case "france":
      return "franceph";
    case "deutchland":
      return "deutchlandph";
    case "greece":
      return "greeceph";
    default:
      return "";
  };
};
function validatePhone() {
  const valPhone = document.getElementById('phonenum');
  const regex = /^\d{9}$/;
  if (regex.test(valPhone.value) && valPhone.value.length === 9) {
    return true;
  }
  alert('Phone number format must be 9 numbers')
  valPhone.style.border = '2px solid red';
  return false;

}


const countrySelect = document.getElementById("country");
const phoneSelect = document.getElementById("phone");

countrySelect.addEventListener("change", function() {
  const selectedCountry = countrySelect.value;
  const phoneCode = getPhoneCode(selectedCountry);
  phoneSelect.value = phoneCode;
});




function activeMessage() {
  const molestar = setInterval(function() { absoluteMessage.style.display = 'block' }, 59000);
  const quitar = setInterval(function() { absoluteMessage.style.display = 'none' }, 5200);
  nextthanks.addEventListener('click', () => {
    clearInterval(molestar);
    clearInterval(quitar);
  });
}
function hideMessage() {
  absoluteMessage.style.display = 'none';
}

//DELIVERY ESTIMATE DATES && TEMP//

const deliveryEstimatesDiv = document.getElementById('delivery-estimates');
const estimatedTimeSpan = document.getElementById('estimated-time');
const radioButtons = document.querySelectorAll('input[type="radio"]');

function showEstimatedTime() {
  const selectedShippingType = document.querySelector('input[type="radio"]:checked').value;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let estimatedTime = '';
  if (selectedShippingType === 'free') {
    estimatedTime = `between ${(day + 3)}/${month} at 9:00h and ${(day + 4)}/${month} at 20:00h`;
  } else if (selectedShippingType === 'extra') {
    estimatedTime = `between ${(day + 2)}/${month} at 9:00h and ${(day + 3)}/${month} at 20:00h`;
  } else if (selectedShippingType === 'premium') {
    estimatedTime = `between ${(day + 1)}/${month} at 9:00h and ${(day + 2)}/${month} at 20:00h`;
  }
  estimatedTimeSpan.textContent = estimatedTime;
};

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', showEstimatedTime);
});
let formattedTime;
let startTime = new Date().getTime();
function activeTime() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  formattedTime = noZero(minutes) + ":" + noZero(seconds);
  document.getElementById("timer").textContent = formattedTime;
  if (formattedTime === '05:00') {
    document.location.reload();
  }
  const totalTime = document.getElementById('totalTime');
  totalTime.textContent = `Your registration took: ${minutes} minutes and ${seconds} seconds`;
}
function noZero(num) {
  return (num < 10) ? "0" + num : num;
}
const tempMessage = setInterval(activeTime, 1000);

////extra funcition/////
function celebrate() {
  let monigote = document.getElementById('velocista');
  let direction = 1;
  let position = 0;
  setInterval(function() {
    position += 5 * 1;
    if (position >= window.innerWidth - monigote.offsetWidth) {
      direction = -1;
    } else if (position <= 0) {
      direction = 1;
    }

    monigote.style.left = position + 'px';
  }, 5);
}
titleGift.style.display = 'none';
messGift.style.display = 'none';
inputGift.style.display = 'none';
t1xtGift.style.display = 'none';
t2xtGift.style.display = 'none';
checkGift.addEventListener('change', () => {
  titleGift.style.display = 'flex';
  messGift.style.display = 'flex';
  inputGift.style.display = 'flex';
  t1xtGift.style.display = 'flex';
  t2xtGift.style.display = 'flex';
  document.getElementById('yourGift').textContent = 'Your Gift Message';
});
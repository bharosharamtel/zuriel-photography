const navlinks = document.querySelectorAll('.navlink');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const form = document.querySelectorAll('#form');
const openFormButton = document.querySelector('#openform');
const closeFormButton = document.querySelector('#closeform');
const openFormButton2 = document.querySelector('#openform2');
const closeFormButton2 = document.querySelector('#closeform2');
const openFormButton3 = document.querySelector('#openform3');
const closeFormButton3 = document.querySelector('#closeform3');
const openFormButton4 = document.querySelector('#openform4');
const closeFormButton4 = document.querySelector('#closeform4');
const openFormButton5 = document.querySelector('#openform5');
const closeFormButton5 = document.querySelector('#closeform5');
const openFormButton6 = document.querySelector('#openform6');
const closeFormButton6 = document.querySelector('#closeform6');

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

if (menuCloseButton) {
    menuCloseButton.addEventListener('click', () => menuOpenButton.click());
}

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        if (document.body.classList.contains('menu-open')) {  
            menuOpenButton.click();
        }
    });
});


openFormButton.addEventListener('click', () => {
    document.body.classList.toggle('form-open');
});

if (closeFormButton) {
    closeFormButton.addEventListener('click', () => openFormButton.click());
}
openFormButton2.addEventListener('click', () => {
    document.body.classList.toggle('form-open2');
});

if (closeFormButton2) {
    closeFormButton2.addEventListener('click', () => openFormButton2.click());
}
openFormButton3.addEventListener('click', () => {
    document.body.classList.toggle('form-open3');
});

if (closeFormButton3) {
    closeFormButton3.addEventListener('click', () => openFormButton3.click());
}
openFormButton4.addEventListener('click', () => {
    document.body.classList.toggle('form-open4');
});

if (closeFormButton4) {
    closeFormButton4.addEventListener('click', () => openFormButton4.click());
}
openFormButton5.addEventListener('click', () => {
    document.body.classList.toggle('form-open5');
});

if (closeFormButton5) {
    closeFormButton5.addEventListener('click', () => openFormButton5.click());
}
openFormButton6.addEventListener('click', () => {
    document.body.classList.toggle('form-open6');
});

if (closeFormButton6) {
    closeFormButton6.addEventListener('click', () => openFormButton6.click());
}

       
const btn = document.getElementById('button');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_8mlfrr8';
   const templateID = 'template_kj80lap';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

document.getElementById('form2')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn2.value = 'Sending...';

   const serviceID = 'service_8mlfrr8';
   const templateID = 'template_kj80lap';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn2.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn2.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

document.getElementById('form3')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn3.value = 'Sending...';

   const serviceID = 'service_8mlfrr8';
   const templateID = 'template_kj80lap';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn3.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn3.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

document.getElementById('form4')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn4.value = 'Sending...';

   const serviceID = 'service_8mlfrr8';
   const templateID = 'template_kj80lap';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn4.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn4.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

document.getElementById('form5')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn5.value = 'Sending...';

   const serviceID = 'service_8mlfrr8';
   const templateID = 'template_kj80lap';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn5.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn5.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

document.getElementById('form6')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn6.value = 'Sending...';

   const serviceID = 'service_8mlfrr8';
   const templateID = 'template_kj80lap';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn6.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn6.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const btn7 = document.getElementById('button7');

document.getElementById('form7')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn7.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5x0dokg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn7.value = 'Email Sended';
      alert('Sent!');
    }, (err) => {
      btn7.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', contactForm);

const mlist = document.getElementById('ml-form');
mlist.addEventListener('submit', mlistForm);

function contactForm(){

    document.getElementById("status").innerText="Loading..."
    let data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,

    }
  
    axios({
        method: 'post',
        url: 'https://compasscek.herokuapp.com/contactform',
        data: data
      })
      .then((response) => {
        console.log(response.data);
        document.getElementById("status").innerText=response.data.message
      }, (error) => {
        console.log(error);
        document.getElementById("status").innerText="Some Error Occured... Please try again"
      });
      
}

function mlistForm(){

    document.getElementById("ml-status").innerText="Loading..."
    let data={
        email:document.getElementById("ml-email").value,
    }
  
    axios({
        method: 'post',
        url: 'https://compasscek.herokuapp.com/mlist',
        data: data
      })
      .then((response) => {
        console.log(response.data);
        document.getElementById("ml-status").innerText=response.data.message
      }, (error) => {
        console.log(error);
        document.getElementById("ml-status").innerText="Some Error Occured... Please try again"
      });
      
}
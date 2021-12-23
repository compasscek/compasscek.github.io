function submitForm(){

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
var Checklogin = 0
// Get the modal
var modal = document.getElementById('id01')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}
function login () {
  user = document.getElementById('user').value
  psw = document.getElementById('psw').value

  if (user == 'test') {
    if (psw == 'test') {
      window.localStorage.setItem('statusLogin', true)
      window.location.replace('index.html')
    }
  }
}

function register () {
   if(document.getElementById('email').value==""){
    window.alert("Pls enter email")
  }
  else if(document.getElementById('retypepass').value==""){
    window.alert("pls type password")
  }
  else if(document.getElementById('typepass').value==""){
    window.alert("pls type repassword")
  }else if (document.getElementById('typepass').value != document.getElementById('retypepass').value) {
    window.alert('Password not match')
  }
 else if (document.getElementById('typepass').value == document.getElementById('retypepass').value) {
    window.localStorage.setItem(document.getElementById('email').value, document.getElementById('typepass').value)
    window.localStorage.setItem('statusLogin', true)
    window.location.replace('index.html')
  }
}

function logout () {
  window.localStorage.clear('statusLogin')
  window.location.replace('index.html')
}

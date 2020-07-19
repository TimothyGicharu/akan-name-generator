$(document).ready(function(){
    $(":input").inputmask();
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            //gender
            var e = form['gender'];
            var gender = e.options[e.selectedIndex].value;
            console.log(gender);

            //date
            var dateSelected = form['dob'].value;
            var splitDob = dateSelected.split("/");

            var DD = splitDob[0];
            var MM = splitDob[1];
            var YY = splitDob[2];

            var dob = new Date(`${MM}/${DD}/${YY}`);
            var dayOfWeek = dob.getDay();

            var akanName = ""
            if(gender == 1){
              //user is male
              akanName = maleNames[dayOfWeek]
            }else{
              //user is female
              akanName = femaleNames[dayOfWeek]
            }

            console.log(dayOfWeek);
            console.log(akanName);


            //show modal
            document.getElementById('nameResult').innerHTML = `Your Akan name is: ${akanName}`
            document.getElementById('nameResult').style.visibility = 'visible';
        

        }
        form.classList.add('was-validated');
      }, false);
    });

    });

    var maleNames = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
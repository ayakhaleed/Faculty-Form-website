function Validate_Form(){
    var fid=document.getElementById("f-id").value;
    var gpa=document.getElementById("gpa").value;
    var mail=document.getElementById("mail").value;
    var pass=document.getElementById("pass").value;
    var dpt=document.getElementById("dpt").value;
    var grade=document.getElementById("grade").value;

    var fname=document.getElementById("Fname").value;
    var lname=document.getElementById("Lname").value;
    var email=document.getElementById("email").value;
    var birthdate=document.getElementById("birthdate").value;
    var nationalid=document.getElementById("nationalid").value;
    var phone=document.getElementById("phone-num").value
    var country=document.getElementById("country").value;
    var city=document.getElementById("city").value;
    var GitHub_Account=document.getElementById("github").value;
    var LinkedIn_Account=document.getElementById("linkedin").value;
    var gender_male=document.getElementById('gender_Male');
    var gender_female=document.getElementById('gender_Female');
    var flag=false;


    
    
    
    
    
    if (fname=="")
    {

        alert("First Name must be filled out!");
        return false;
    }
    if (lname=="")
    {
        alert("Last Name must be filled out!");
        return false;
    }
    if (email=="")
    {
        alert("Email must be filled out!");
        return false;
    }
    if (birthdate=="")
    {
        alert("Birthdate must be filled out!");
        return false;
    }
    if(nationalid=="")
    {
        alert(" National Id must be filled out!");
        return false;

    }



    if(phone=="")
    {
        alert(" Phone Number must be filled out!");
        return false;

    }
    if(country=="")
    {
        alert(" Country must be filled out!");
        return false;

    }


    if(city=="")
    {
        alert(" City must be filled out!");
        return false;

    }

    if(GitHub_Account=="")
        {
            alert(" Your GitHub_Account must be filled out!");
            return false;

        }


    if(LinkedIn_Account=="")
        {
            alert(" your LinkedIn_Account  must be filled out!");
            return false;

        }

    if(gender_male.checked) {
        flag=true;
        }else if(gender_female.checked) {
            flag=true;
        }
    if(flag==false)
    {
        alert("You must Select A gender! ");
    }






    
    if (fid=="")
    {

        alert("Faculty Id must be filled out!");
        return false;
    }
    if (mail=="")
    {
        alert("Faculty Mail must be filled out!");
        return false;
    }
    if (gpa=="")
    {
        alert("GPA must be filled out!");
        return false;
    }
    if (pass=="")
    {
        alert("PassWord must be filled out!");
        return false;
    }
    if(dpt=="")
    {
        alert("you must choose a department!");
        return false;

    }


    
    if (fid.length>8)
    {
        alert("Faculty Id must be 8 bits!");
        return false;
    }
    if (mail.length>25)
    {
        alert("mail must be less than 25 character!");
        return false;
    }
    if (gpa.length>5)
    {
        alert("gpa must be in 5 bits or less!");
        return false;
    }
    if (pass.length>10)
    {
        alert("password length must be 10 or less!");
        return false;
    }
    if (grade>100 ||isNaN(grade) ||grade<0)
    {
        alert("Grade value not valid! Enter Value between 0 and 100");
        return false;
    }

    if (phone.length>11)
    {
        alert("Phone Number must be exact 11 number !");
        return false;
    }

    if (nationalid.length>14)
    {
        alert("National Id must be exact 14 numbers!");
        return false;
    }
}

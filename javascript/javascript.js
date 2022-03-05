
    let mode = document.getElementsByTagName('button');
    let styleMode = document.querySelector("html");
   function ChangeMode() {
     
   // styleMode= classList.toggle('Dark Mode');
      if (mode.textContent == "Dark Mode")
     {
      //mode.value="White Mode";
      mode.textContent ="White Mode"
      styleMode.style.backgroundColor="#1a203a"; 
      document.getElementById("Dark Mode").innerHTML="الوضع العادي";
     
    }
    else
    {
      //mode.value="Dark Mode";
    mode.textContent ="Dark Mode"
    styleMode.style.backgroundColor="#4a343b";
    document.getElementById("Dark Mode").innerHTML="الوضع الليلي";
  }
    }


function validarForm() {
    var nom = document.forms["contact-us"]["name"].value;
    if (nom == "") {
        alert("Escriu el teu nom, siusplau.");
        return false;}
  
        if (document.getElementById("message").value == '')
        {
          alert("Escriu el missatge");
          return false;}
}
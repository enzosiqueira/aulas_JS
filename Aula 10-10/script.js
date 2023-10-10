// Criamos um objeto 'person' para armazenar os dados da pessoa.
const person = {
    // Inicializamos as propriedades do objeto com valores vazios.
    firstName: "",
    lastName: "",
    language: "",
    // Definimos um método 'setDetails' para atualizar as propriedades do objeto com os dados do formulário, funciona como um método construtor.
    setDetails(firstName, lastName, language) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.language = language;
    },
    // Definimos um método 'displayDetails' para exibir os detalhes da pessoa no HTML.
    displayDetails() {
        document.getElementById("displayFirstName").textContent = this.firstName;
        document.getElementById("displayLastName").textContent = this.lastName;
        document.getElementById("displayLanguage").textContent = this.language;
    }
};

// Obtemos uma referência ao formulário HTML com o ID "personForm".
const form = document.getElementById("personForm");

// Adicionamos um evento de escuta para o evento "submit" do formulário.
form.addEventListener("submit", function (e) {
    // Impedimos o comportamento padrão de envio do formulário.
    e.preventDefault();

    // Obtemos os valores dos campos de entrada do formulário.
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const language = document.getElementById("language").value;

    // Chamamos o método 'setDetails' metodo construtor, neste momento estamos construindo o objeto criado
    person.setDetails(firstName, lastName, language);
    
    // Chamamos o método 'displayDetails' do objeto 'person' para exibir os detalhes no HTML.
    person.displayDetails();
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
class validator {
    constructor(){
        this.validations = [

        ]
    }
    //iniciar a validação de todos os campos
    validate (form){
        //pegar todos inputs
        let inputs = form.getElementTagName ('input');

    //transformo uma HTMLCollection -> array
    let input= [...inputs];

    //loop dos inputs  e validações mediante ao que for encontrado
    inputsArray.forEach(function(input) {
    for (let i=0; this.validation.legth > i ; i++) {
        if (input.getAttribute(this.validations[i]) != null){

            //limpando a string para virar um método
            let method = this.validations[i].replace('data-','').replace('-','');

            // valor do input
            let value = input.getAttribute(this.validations[i]);
         
            //invocar o método
            this[method](input,value);
       }
    } 
 }, this);
     
}
   //verifica se um input tem um número  míninimo de caracteres
   minlength(input, minValue) {
       let inputleght = input.value.legth;

       let errorMessage = `O campo presica ter pelo menos ${minValue} caracteres `;

       if (inputleght < minValue){
           console.log(errorMessage);
       }

   }
printMessage(input,msg){
    console.log(errorMessage)

}

}
let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

//evento que dispara as validações
submit.addEventListener('click', function(e) {
 
});
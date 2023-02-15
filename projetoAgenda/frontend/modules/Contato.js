import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    if(nomeInput.value.length > 20) {
      alert('nome só pode ter até 20 caracteres');
      error = true;
    }
    
    if(sobrenomeInput.value !== '' && sobrenomeInput.value.length > 20) {
      alert('Sobrenome só pode ter até 20 caracteres');
      error = true;
    }

    if(emailInput.value !== '' && !validator.isEmail(emailInput.value)) {
      alert('E-mail inválido');
      error = true;
    }

    const numerosRegex = /\d+/g;
    if(telefoneInput.value !== '' && numerosRegex.test(telefoneInput.value)) {
      alert('telefone só pode conter numeros');
      error = true;
    }

    if(!error) el.submit();
  }
}

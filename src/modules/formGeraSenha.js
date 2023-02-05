import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

const geradaSenha = document.querySelector('.gerar-senha');

export default () => {
    geradaSenha.addEventListener('click', () =>{
        senhaGerada.innerHTML = gera()
        console.log(gera());
    })
}
function gera(){
    const senha = geraSenha(
        qtdCaracteres.value, 
        chkMaiusculas.checked, 
        chkMinusculas.checked, 
        chkSimbolos.checked,
        chkNumeros.checked)
    return senha || 'Nada selecionado';
}
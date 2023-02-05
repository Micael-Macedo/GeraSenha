const range = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(range(65, 91));
const geraMinuscula = () => String.fromCharCode(range(97, 123));
const geraNumero = () => String.fromCharCode(range(48, 58));
const simbolos = ',.;^[]{}@#$%¨&*()_=+-?/'
const geraSimbolos = () => simbolos[range(0 , simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, simbolos, numeros){
    const senhaArray = []
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolos())
    }
    return senhaArray.join('').slice(0, qtd);
}

geraSenha(10, true, true, true, true)

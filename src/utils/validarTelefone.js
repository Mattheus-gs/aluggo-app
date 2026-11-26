export default function validarTelefone(telefone) {
  const numeros = telefone.replace(/\D/g, "");
  
  if (numeros.length !== 10 && numeros.length !== 11) {
    return false;
  }

  if (numeros.length === 11 && numeros[2] !== "9") {
    return false;
  }

  return true;
}
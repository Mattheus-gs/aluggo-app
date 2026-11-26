export default function validarDataNascimento(data) {
  if (!data || data.length !== 10) {
    return false;
  }

  const partes = data.split("/");
  if (partes.length !== 3) return false;

  const ano = parseInt(partes[2], 10);

  
  if (ano < 1900) {
    return false;
  }

  return true;
}
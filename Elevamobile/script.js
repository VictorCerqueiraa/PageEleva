// NÚMERO (coloque com DDI +55)
const phone = "5521986962865"; 

function sendWhats(plan) {

  let message = "";

  // DEFINE MENSAGEM DE ACORDO COM O PLANO
  if (plan === "start") {
    message = "Olá, gostaria de saber mais sobre o plano START.";
  }

  if (plan === "growth") {
    message = "Olá, gostaria de saber mais sobre o plano GROWTH.";
  }

  if (plan === "grupo") {
    message = "Olá, gostaria de saber mais sobre o plano GRUPO.";
  }

  // CODIFICA TEXTO PARA URL
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // REDIRECIONA PARA WHATSAPP
  window.open(url, "_blank");
}
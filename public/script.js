// Simulação de envio de pedido de transporte expresso
const expressOrderForm = document.getElementById("express-order-form");
expressOrderForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const recipient = document.getElementById("recipient").value;
  const pickupDate = document.getElementById("pickup-date").value;
  const deliveryAddress = document.getElementById("delivery-address").value;

  // Aqui você poderia implementar a lógica para enviar o pedido para o sistema da transportadora
  console.log(
    `Pedido de transporte expresso enviado para: ${recipient}, coleta em ${pickupDate}, entrega em ${deliveryAddress}`
  );
  alert("Pedido de transporte expresso enviado com sucesso!");
  expressOrderForm.reset();
});

// Simulação de solicitação de serviço de logística reversa
const reverseLogisticsForm = document.getElementById("reverse-logistics-form");
reverseLogisticsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const returnItem = document.getElementById("return-item").value;
  const returnReason = document.getElementById("return-reason").value;
  const returnAddress = document.getElementById("return-address").value;

  // Aqui você poderia implementar a lógica para enviar a solicitação para o sistema da transportadora
  console.log(
    `Solicitação de logística reversa para devolução de ${returnItem} por motivo ${returnReason}, coleta em ${returnAddress}`
  );
  alert("Solicitação de logística reversa enviada com sucesso!");
  reverseLogisticsForm.reset();
});

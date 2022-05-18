function sendMessage(element) {
  let number = prompt("Digite o número:")
  let contentMessage = element.firstElementChild.innerText
  let link = `https://api.whatsapp.com/send?phone=55${number}&text=${contentMessage}`;

  window.open(link);
}

module.export = sendMessage;
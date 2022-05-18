function sendMessage(element) {
  let contentMessage = element.firstElementChild.innerText
  let number = prompt("Digite o número:")

  if (number && contentMessage) {
    let link = `https://api.whatsapp.com/send?phone=55${number}&text=${contentMessage}`;
    window.open(link);
  } else null;
}

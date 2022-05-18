function sendMessage(element) {
  let number = prompt("Digite o número:")
  let contentMessage = element.firstElementChild.innerText
  console.log(contentMessage, number)
}

module.export = sendMessage;
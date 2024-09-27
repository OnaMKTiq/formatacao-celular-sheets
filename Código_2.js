function formatNumbers() {
  // Obtém a planilha ativa
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Obtém o intervalo com dados (ajuste conforme necessário)
  var range = sheet.getRange("A2:A"); // os números da coluna A, a partir da célula A2
  var values = range.getValues();

  // Itera sobre as células do intervalo
  for (var i = 0; i < values.length; i++) {
    var phoneNumber = values[i][0];

    if (phoneNumber) {
      // Remove espaços em branco
      phoneNumber = phoneNumber.toString().trim();
      
      // Passo 1: Adicionar o +55
      if (!phoneNumber.startsWith('+55')) {
        phoneNumber = '+55' + phoneNumber;
      }

      // Passo 2: Analisar o DDD
      var dddPattern = /^\+55(\d{2})(\d+)/; // Expressão regular para capturar DDD e número restante

      // Aplica o regex ao número de telefone
      var match = phoneNumber.match(dddPattern);

      if (match) {
        var ddd = match[1]; // Captura o DDD
        var restOfNumber = match[2]; // Captura o restante do número

        // DDDs que devem manter ou adicionar o 9 (11-19, 21, 22, 24, 27)
        var validDDDs = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27'];

        if (validDDDs.includes(ddd)) {
          // Verifica se o número tem 9 dígitos no início do restante do número
          if (!restOfNumber.startsWith('9')) {
            restOfNumber = '9' + restOfNumber; // Adiciona o 9, se necessário
          }
        } else {
          // Remove o 9 se o DDD não estiver na lista
          if (restOfNumber.startsWith('9')) {
            restOfNumber = restOfNumber.substring(1);
          }
        }

        // Recompõe o número de telefone
        phoneNumber = '+55' + ddd + restOfNumber;
      }
      
      
      // Define o valor formatado na coluna B
      sheet.getRange(i + 2, 2).setValue(phoneNumber); // Ajusta para a coluna B
    }
  }
}

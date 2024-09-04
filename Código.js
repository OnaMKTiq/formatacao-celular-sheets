function formatPhoneNumbers() {
  // Obtém a planilha ativa
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Obtém o intervalo com dados (ajuste conforme necessário)
  var range = sheet.getRange("A2:A"); // Supondo que os números estejam na coluna A, a partir da célula A2
  var values = range.getValues();
  
  // Itera sobre as células do intervalo
  for (var i = 0; i < values.length; i++) {
    var phoneNumber = values[i][0];
    
    if (phoneNumber) {
      // Remove espaços em branco
      phoneNumber = phoneNumber.toString().trim();
      
      // Passo 1: Remove o 0 do final se o número tiver 12 dígitos ou 11 dígitos sem 9 como nono dígito da direita para esquerda
      if (phoneNumber.length === 12 && phoneNumber.endsWith('0')) { 
        phoneNumber = phoneNumber.slice(0, -1); // Remove o último 0
      } else if (phoneNumber.length === 11 && phoneNumber.charAt(phoneNumber.length - 9) !== '9') {
        phoneNumber = phoneNumber.slice(0, -1); // Remove o último 0
      }
      
      // Passo 2: Remove o 9 se for o terceiro dígito da esquerda em números com mais de 10 dígitos
      if (phoneNumber.length > 10 && phoneNumber.charAt(2) === '9') {
        phoneNumber = phoneNumber.slice(0, 2) + phoneNumber.slice(3);
      }
      
      // Passo 3: Adiciona o prefixo +55 se não estiver presente
      if (!phoneNumber.startsWith('+55')) {
        phoneNumber = '+55' + phoneNumber;
      }
      
      // Define o valor formatado na coluna B
      sheet.getRange(i + 2, 2).setValue(phoneNumber); // Ajusta para a coluna B
    }
  }
}

# Formatação de telefones para planilha do Google

### Código para ser utilizado na extensão App Scrips do Google Planilhas, que formata os elementos de uma coluna e os replica em outra coluna formatados.

Código 1 -> O objetivo específico é remover um 0 adicional, garantir que o número não contenha um nono dígito, e adicionar o prefixo +55.

Código 2 -> O objetivo é formatar o número de acordo com o padrão do Kommo. Com +55 e nóno dígito somente em DDDs espécíficos.

### Como usar:

- **Passo 1:** Acessar o Editor de Scripts do Google Sheets, abra seu documento no Google Sheets. No menu superior, clique em Extensões > Apps Script. No editor que abrir, apague qualquer código existente e insira o código fornecido.
- **Passo 2:** No editor do Apps Script, clique em Arquivo > Salvar.
- **Passo 3:** Volte para o Google Sheets. No menu superior, clique em Extensões > Macros > Importar Macro. Na lista de funções que aparece, você verá a função formatNumbers (o nome da função do código). Selecione a função e clique em Adicionar função.
- **Passo 4:** Agora, no menu superior, clique em Extensões > Macros > formatarNumeros. Os números selecionados da coluna A serão formatados conforme a função e replicados na coluna B.
- **Passo 5:** Você pode configurar um atalho para o macro indo em Extensões > Macros > Gerenciar Macros. Atribua um atalho de teclado ou adicione um botão diretamente na planilha para facilitar o acesso.

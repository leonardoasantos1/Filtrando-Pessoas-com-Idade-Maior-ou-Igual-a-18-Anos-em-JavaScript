# Objetivo

<p>
  Este código tem como objetivo demonstrar o uso de arrays, objetos, e o método filter() em JavaScript para filtrar objetos com base em critérios específicos.
</p>

<h2>Estrutura de Dados</h2>

<ol>
  <li>
    pessoas: É um array que armazena objetos representando diferentes pessoas.
  </li>
  <li>
    Cada objeto dentro do array pessoas possui as seguintes propriedades:
    nome: O nome da pessoa.
    idade: A idade da pessoa.
  </li>
</ol>

<h2>
  Funcionamento
</h2>
<ol>
  <li>
    São definidos objetos individuais para representar diferentes pessoas, cada um com um nome e idade específicos.
  </li>
  <li>
    Os objetos são adicionados ao array pessoas utilizando o método push().
  </li>
  <li>
    É criado um novo array chamado maiorOuIgualQueDezoito utilizando o método filter() no array pessoas.
  </li>
  <li>
    O método filter() recebe uma função de callback que verifica se a idade da pessoa é maior ou igual a 18 anos.
  </li>
  <li>
    O array resultante maiorOuIgualQueDezoito contém apenas objetos das pessoas que têm 18 anos ou mais.
  </li>
  <li>
    Por fim, é exibida uma tabela com os dados das pessoas com idade maior ou igual a 18 anos utilizando console.table().
  </li>
</ol>

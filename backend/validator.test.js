// Importa APENAS a função que queremos testar.
const { isValidUserName } = require('./validator');

// Agrupa os testes para a função de validação
describe('Teste de Unidade: Validação de Nome de Usuário', () => {
  
  // Caso de sucesso (Happy Path)
  test('deve retornar TRUE para um nome válido (entre 3 e 50 caracteres)', () => {
    // 🌟 TESTE PURO: Entrada (string) -> Saída (booleano)
    expect(isValidUserName('Alice')).toBe(true);
  });

  // Caso de falha 1: Nome muito curto
  test('deve retornar FALSE para um nome com menos de 3 caracteres', () => {
    expect(isValidUserName('Jo')).toBe(false);
  });
  
  // Caso de falha 2: Lidar com espaços em branco
  test('deve retornar FALSE se o nome for apenas espaços em branco', () => {
    expect(isValidUserName('   ')).toBe(false);
  });

  // Caso de falha 3: Tipo de dado incorreto
  test('deve retornar FALSE se o input não for uma string (ex: null)', () => {
    expect(isValidUserName(null)).toBe(false);
  });
});
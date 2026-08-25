const fs = require('fs');
const assert = require('assert');

// Carrega o arquivo HTML para ser analisado pelo teste
const html = fs.readFileSync('index.html', 'utf8');

console.log("Iniciando a execução dos testes automatizados...");

try {
    // CT-01: Verifica se o título da página está correto (REQ-01)
    assert.ok(
        html.includes('<title>Portal de Qualidade PROZ</title>'),
        "CT-01 FALHOU: O título do portal está incorreto."
    );

    console.log("✅ CT-01 (Verificação de Título) - PASSOU!");

    // CT-02: Verifica se o botão de login existe no código (REQ-02)
    assert.ok(
        html.includes('id="login-btn"'),
        "CT-02 FALHOU: O botão de login não foi encontrado."
    );

    console.log("✅ CT-02 (Verificação do Botão) - PASSOU!");

    console.log("\n🎉 TODOS OS TESTES PASSARAM COM SUCESSO!");

} catch (error) {
    console.error("\n❌ ERRO DETECTADO NO TESTE:");
    console.error(error.message);
    process.exit(1);
}
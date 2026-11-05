# KONEKTA — Demonstração funcional reconstruída

Marketplace demonstrativo de serviços para Angola, integrado na Koreva Technologies.

## Ambientes
- `index.html` — página pública e descoberta inicial.
- `cliente.html` — pesquisa demonstrativa, criação de pedidos, histórico e propostas recebidas.
- `profissional.html` — pedidos disponíveis, envio de propostas e acompanhamento dos serviços contratados.
- `empresas.html` — registo e acompanhamento de pedidos empresariais.
- `admin.html` — indicadores e monitorização demonstrativa.

## Dados e fluxo
`js/store.js` centraliza os dados no `localStorage` do navegador (`konekta.demo.v2`). Cliente, profissional, empresa e administração lêem o mesmo estado. O evento `konekta:updated` actualiza os painéis abertos na mesma janela; o evento `storage` sincroniza separadores diferentes do mesmo navegador.

Fluxo principal: cliente cria pedido → profissional consulta e envia proposta → proposta aparece em «Os meus pedidos» do cliente → cliente aceita → pedido fica contratado → profissional inicia e conclui o serviço.

## Limitações importantes
É uma demonstração front-end. Não inclui backend, autenticação real, envio de notificações, pagamentos, verificação de identidade, chat em tempo real ou sincronização entre dispositivos/utilizadores diferentes. Os perfis e avaliações são fictícios e identificados como demonstrativos. Para produção será necessário backend/API e base de dados central.

## Teste rápido
1. Abrir `konekta/index.html` através de um servidor local ou alojamento web.
2. Abrir a Área do Cliente e criar um pedido. Se escolher «Tenho um valor máximo em mente», o valor passa a obrigatório.
3. Abrir a Área do Profissional no mesmo navegador e enviar uma proposta.
4. Voltar ao Cliente: a proposta deverá aparecer no pedido correspondente.
5. Aceitar a proposta e regressar ao Profissional para iniciar e concluir o serviço.
6. Consultar Empresas e Administração.


## Actualização visual profissional
- Página pública com hierarquia visual reforçada, cartões fotográficos e melhor apresentação de categorias.
- Área do Cliente com destaque visual para criação de pedidos e leitura mais clara dos passos.
- Área do Profissional com apresentação de oportunidades, orientação de perfil e maior foco na proposta de valor.
- Melhorias responsivas para ecrãs pequenos e cartões com estados de interacção.

## Nota sobre fotografias
As fotografias externas são ilustrativas e carregadas a partir dos respectivos sites de origem. Não representam os perfis fictícios da demonstração nem comprovam identidade, experiência ou verificação. Antes de lançamento comercial, substituir por fotografias próprias/autorizadas e guardar os ficheiros localmente com os respectivos consentimentos e licenças.

## Nota de produto
Esta actualização é visual e de experiência front-end. O fluxo de pedidos/propostas existente foi preservado. A aplicação continua demonstrativa e baseada em `localStorage`; autenticação, perfis editáveis, mensagens em tempo real, pagamentos, verificação documental, avaliações verificadas e persistência multiutilizador exigem backend/API e base de dados.


## Correcções visuais v2
- Corrigido o contraste do título "Olá, Carlos!" no painel profissional para branco, com o destaque em dourado.
- Substituída a imagem quebrada do painel profissional por uma fonte fotográfica já utilizada na página pública.
- Reduzido o selo sobre as fotografias da página pública a uma etiqueta pequena, sem cobrir os rostos.
- Reforçada a consistência da identidade visual azul-marinho/dourado entre página pública e painéis.


## Navegação móvel — versão adicional
- Pesquisa no ecrã pequeno reorganizada verticalmente: serviço, localização e botão em linhas independentes.
- Barra inferior fixa com Início, Categorias/atalhos, Cliente, Profissional e Menu.
- Menu móvel permite alternar directamente entre página pública, Área do Cliente e Área do Profissional.
- Painéis Cliente e Profissional recebem botão Menu no cabeçalho e navegação inferior.
- Logótipo e nome KONEKTA com contraste branco sobre cabeçalho azul-marinho.
- Navegação lateral de desktop preservada; em telemóvel passa a menu compacto.

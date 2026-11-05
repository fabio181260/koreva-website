(() => {
    "use strict";

    const text = {
        "Início": "Home", "Empresa": "Company", "Soluções": "Solutions",
        "Projetos": "Projects", "Parcerias": "Partnerships", "Falar connosco": "Talk to us",
        "Tecnologia que": "Technology that", "transforma realidades.": "transforms realities.",
        "Criamos soluções digitais para empresas, projetos e organizações que querem evoluir.": "We create digital solutions for companies, projects and organisations that want to grow.",
        "Explorar soluções": "Explore solutions", "O NOSSO MÉTODO": "OUR METHOD",
        "Toda grande": "Every great", "Solução": "Solution", "começa com um": "starts with a", "problema.": "problem.",
        "Entendemos o seu": "We understand your", "desafio": "challenge", "estratégia": "strategy", "tecnologia": "technology",
        "e usamos a": "and use", "para criar": "to create", "Soluções reais.": "real solutions.",
        "ETAPA 01": "STEP 01", "ETAPA 02": "STEP 02", "ETAPA 03": "STEP 03", "ETAPA 04": "STEP 04",
        "Pesquisa": "Research", "Estratégia": "Strategy", "Tecnologia": "Technology",
        "Compreendemos o contexto, identificamos necessidades e procuramos entender o verdadeiro problema.": "We understand the context, identify needs and seek to uncover the real problem.",
        "Organizamos ideias, prioridades e caminhos para transformar conhecimento em direção.": "We organise ideas, priorities and paths to turn knowledge into direction.",
        "Desenvolvemos ferramentas, sistemas e experiências digitais para transformar estratégia em realidade.": "We develop tools, systems and digital experiences that turn strategy into reality.",
        "Criamos soluções reais, pensadas para gerar valor e acompanhar a evolução de cada projeto.": "We create real solutions designed to generate value and support every project's evolution.",
        "PROBLEMA": "PROBLEM", "SOLUÇÃO": "SOLUTION",
        "SOBRE A KOREVA": "ABOUT KOREVA", "A empresa por trás": "The company behind", "das grandes soluções.": "great solutions.",
        "A Koreva Technologies é uma empresa angolana de tecnologia, especializada em soluções digitais, automação e inovação. Acreditamos no poder da tecnologia para criar oportunidades, simplificar processos e impulsionar o crescimento de empresas e organizações.": "Koreva Technologies is an Angolan technology company specialising in digital solutions, automation and innovation. We believe in technology's power to create opportunities, simplify processes and drive the growth of companies and organisations.",
        "Conheça a nossa empresa": "Discover our company", "Missão": "Mission", "Visão": "Vision", "Valores": "Values",
        "Desenvolver soluções tecnológicas que gerem valor real para os nossos clientes e para a sociedade.": "To develop technology solutions that generate real value for our clients and society.",
        "Ser referência em Angola e na região como uma empresa de tecnologia inovadora, confiável e orientada para o futuro.": "To be a benchmark in Angola and the region as an innovative, reliable, future-focused technology company.",
        "Inovação": "Innovation", "Excelência": "Excellence", "Parceria": "Partnership", "Impacto Social": "Social impact",
        "Anos de experiência": "Years of experience", "Projetos realizados": "Projects delivered", "Clientes satisfeitos": "Satisfied clients",
        "AS NOSSAS SOLUÇÕES": "OUR SOLUTIONS", "Soluções digitais para o seu negócio.": "Digital solutions for your business.",
        "Combinamos tecnologia, criatividade e experiência para impulsionar o seu negócio.": "We combine technology, creativity and experience to move your business forward.",
        "Ver todas as soluções": "View all solutions", "Websites & Plataformas": "Websites & Platforms",
        "Presença digital profissional e soluções sob medida.": "Professional digital presence and tailored solutions.",
        "Automação de Processos": "Process Automation", "Mais eficiência, menos trabalho manual.": "More efficiency, less manual work.",
        "Inteligência Artificial": "Artificial Intelligence", "Soluções inteligentes para melhores decisões.": "Intelligent solutions for better decisions.",
        "Soluções Digitais": "Digital Solutions", "Conteúdo, design e experiências digitais.": "Content, design and digital experiences.",
        "PROJETOS REAIS": "REAL PROJECTS", "O que já construímos.": "What we have built.",
        "Soluções que fazem a diferença e ajudam negócios a evoluir.": "Solutions that make a difference and help businesses evolve.",
        "Ver todos os projetos": "View all projects", "PLATAFORMA DIGITAL": "DIGITAL PLATFORM",
        "Plataforma dedicada ao turismo em Angola, aproximando destinos, experiências e pessoas.": "A platform dedicated to tourism in Angola, bringing destinations, experiences and people closer together.",
        "Ver projeto": "View project", "Visitar website": "Visit website",
        "Website de vendas para apresentar calçados e facilitar o contacto com clientes.": "A sales website that showcases footwear and makes it easier to connect with customers.",
        "PROJETOS LAB": "LAB PROJECTS", "Experimentamos o futuro antes de o construir.": "We explore the future before we build it.",
        "Desenvolvemos conceitos e demonstrações interativas para mostrar o que é possível criar.": "We develop concepts and interactive demonstrations to show what is possible to create.",
        "Ver todos conceitos": "View all concepts", "Explorar conceito": "Explore concept",
        "COMO TRABALHAMOS": "HOW WE WORK", "Um processo simples.": "A simple process.", "Um resultado poderoso.": "A powerful result.",
        "Da compreensão do desafio à evolução da solução, seguimos um método claro, estruturado e orientado para resultados.": "From understanding the challenge to evolving the solution, we follow a clear, structured, results-driven method.",
        "Entender": "Understand", "Compreendemos o desafio e identificamos as necessidades.": "We understand the challenge and identify the needs.",
        "Estruturar": "Structure", "Organizamos as ideias e definimos a melhor estratégia.": "We organise ideas and define the best strategy.",
        "Desenvolver": "Develop", "Transformamos a estratégia em soluções digitais funcionais.": "We turn strategy into functional digital solutions.",
        "Evoluir": "Evolve", "Acompanhamos os resultados e melhoramos continuamente.": "We monitor results and improve continuously.",
        "Não podemos fazer tudo sozinhos.": "We cannot do everything alone.",
        "Trabalhamos com especialistas, empresas e profissionais para construir soluções completas.": "We work with specialists, companies and professionals to build complete solutions.",
        "Ser parceiro da Koreva": "Partner with Koreva", "Empresas": "Companies", "Especialistas": "Specialists",
        "Desenvolvedores": "Developers", "Designers": "Designers", "Parceiros Estratégicos": "Strategic partners",
        "VAMOS COLABORAR": "LET'S COLLABORATE", "Vamos construir algo": "Let's build something",
        "extraordinário juntos.": "extraordinary together.",
        "Acreditamos que as melhores soluções nascem da colaboração. Apresente a sua proposta e descubra como podemos construir algo relevante em conjunto.": "We believe the best solutions are born from collaboration. Share your proposal and discover how we can build something meaningful together.",
        "Nome completo *": "Full name *", "Empresa ou organização": "Company or organisation", "Endereço de e-mail *": "Email address *",
        "Telefone / WhatsApp *": "Phone / WhatsApp *", "Tipo de parceria *": "Partnership type *", "Área de atuação": "Area of activity",
        "Apresente a sua proposta *": "Share your proposal *", "Selecione uma opção": "Select an option",
        "Empresa": "Company", "Especialista": "Specialist", "Desenvolvedor": "Developer", "Designer": "Designer",
        "Parceiro estratégico": "Strategic partner", "Outro": "Other",
        "Autorizo a Koreva Technologies a utilizar os dados fornecidos para analisar e responder à minha proposta de parceria.": "I authorise Koreva Technologies to use the information provided to assess and respond to my partnership proposal.",
        "Enviar por e-mail": "Send by email", "Enviar pelo WhatsApp": "Send via WhatsApp",
        "VAMOS CONSTRUIR ALGO MELHOR": "LET'S BUILD SOMETHING BETTER", "Tem um desafio.": "Have a challenge.",
        "A tecnologia pode resolvê-lo.": "Technology can solve it.", "Vamos conversar sobre a solução certa para o seu negócio.": "Let's talk about the right solution for your business.",
        "Falar com a Koreva": "Talk to Koreva", "Disponível no WhatsApp": "Available on WhatsApp",
        "Tecnologia que transforma realidades.": "Technology that transforms realities.",
        "Tecnologia · Inovação · Confiança": "Technology · Innovation · Trust",
        "Koreva Technologies. Todos os direitos reservados.": "Koreva Technologies. All rights reserved.",
        "DEMONSTRAÇÃO": "DEMO", "DIGITAL FINANCE": "DIGITAL FINANCE", "SEGUROS & AUTOMAÇÃO": "INSURANCE & AUTOMATION",
        "GESTÃO EMPRESARIAL": "BUSINESS MANAGEMENT", "Cliente": "Client", "Transferir": "Transfer",
        "Pagar": "Pay", "Poupança": "Savings", "Investimentos": "Investments", "Câmbio": "Currency exchange", "Segurança": "Security",
        "Clientes": "Clients", "Apólices": "Policies", "Sinistros": "Claims", "Gestão": "Management", "Automação": "Automation", "Indicadores": "Insights",
        "Saldo disponível": "Available balance", "Conta principal": "Main account", "Entradas": "Income", "Saídas": "Outgoings",
        "Movimentos": "Transactions", "Transferir dinheiro": "Transfer money", "Nova transferência": "New transfer",
        "Operação segura e digital": "Secure digital operation", "Destinatário": "Recipient", "Valor": "Amount", "Confirmar": "Confirm",
        "Efetuar pagamento": "Make a payment", "Pagamento digital": "Digital payment", "Processamento imediato": "Immediate processing",
        "Serviço": "Service", "Organizar dinheiro": "Organise money", "Valor poupado": "Amount saved", "Objetivo financeiro": "Financial goal",
        "Objetivos": "Goals", "Progresso": "Progress", "Acompanhar investimentos": "Track investments", "Património investido": "Invested assets",
        "Visão financeira": "Financial overview", "Carteira": "Portfolio", "Evolução": "Evolution", "Produtos": "Products",
        "Câmbio digital": "Digital exchange", "Simulação de câmbio": "Exchange simulation", "Consulta de taxas": "Rate lookup",
        "Moeda": "Currency", "Taxa": "Rate", "Converter": "Convert", "Conta protegida": "Protected account",
        "Estado da conta": "Account status", "Monitorização ativa": "Active monitoring", "Sessões": "Sessions", "Operações": "Operations", "Proteção": "Protection",
        "Gestão de clientes": "Client management", "Clientes ativos": "Active clients", "Base de clientes": "Client base", "Ativos": "Active", "Histórico": "History",
        "Gestão de apólices": "Policy management", "Apólices ativas": "Active policies", "Carteira segurada": "Insured portfolio", "Coberturas": "Coverage", "Estados": "Statuses",
        "Gestão de sinistros": "Claims management", "Processos ativos": "Active cases", "Acompanhamento": "Monitoring", "Processos": "Processes",
        "Gestão empresarial": "Business management", "Operações acompanhadas": "Operations monitored", "Visão operacional": "Operational overview",
        "Processos automatizados": "Automated processes", "Eficiência operacional": "Operational efficiency", "Fluxos": "Flows", "Execuções": "Runs",
        "Desempenho": "Performance", "Visão estratégica": "Strategic overview", "Resultados": "Results",
        "Plataforma financeira digital para pagamentos, poupança, investimentos, câmbio e gestão financeira.": "Digital financial platform for payments, savings, investments, currency exchange and financial management.",
        "Conceito de sistema digital para gestão de clientes, apólices e sinistros.": "Digital system concept for managing clients, policies and claims.",
        "Conceito de sistema para gestão empresarial, automação de processos e acompanhamento de indicadores.": "System concept for business management, process automation and performance monitoring.",
        "Área principal do cliente, com saldo disponível, movimentos recentes e acesso às principais operações financeiras.": "Main client area with available balance, recent transactions and access to key financial operations.",
        "Fluxo de transferência digital entre contas, com identificação do destinatário, valor, confirmação e comprovativo.": "Digital account-to-account transfer flow with recipient identification, amount, confirmation and receipt.",
        "Área para pagamentos digitais, permitindo selecionar o serviço, introduzir o valor e confirmar a operação.": "Digital payments area for selecting a service, entering an amount and confirming the operation.",
        "Espaço dedicado à organização da poupança, permitindo acompanhar objetivos financeiros e valores reservados.": "Dedicated savings area for tracking financial goals and reserved amounts.",
        "Área conceptual para acompanhamento de investimentos, produtos financeiros e evolução do património.": "Conceptual area for tracking investments, financial products and asset growth.",
        "Área para consulta e simulação de câmbio entre diferentes moedas, com apresentação das respetivas taxas.": "Area for checking and simulating currency exchange between different currencies, with their respective rates.",
        "Centro de segurança da conta, com controlo de sessões, operações, proteção da conta e comprovativos.": "Account security centre with control over sessions, operations, account protection and receipts.",
        "Gestão centralizada dos clientes, com informação, histórico e acompanhamento da relação com a seguradora.": "Centralised client management with information, history and insurance relationship monitoring.",
        "Área de gestão das apólices, permitindo consultar dados, estados, coberturas e informações contratuais.": "Policy management area for reviewing data, statuses, coverage and contractual information.",
        "Área para acompanhamento de sinistros, processos, estados e respetiva evolução.": "Area for monitoring claims, cases, statuses and their progress.",
        "Painel de gestão empresarial para acompanhar processos, equipas e operações.": "Business management dashboard for monitoring processes, teams and operations.",
        "Área dedicada à automação de processos e redução de tarefas operacionais repetitivas.": "Area dedicated to process automation and reducing repetitive operational tasks.",
        "Painel de indicadores para acompanhamento de desempenho, métricas e resultados.": "Insights dashboard for monitoring performance, metrics and results.",
        "Demonstração conceptual da solução Koreva.": "Conceptual demonstration of the Koreva solution.",
        "Enviar dinheiro": "Send money", "Fazer um pagamento": "Make a payment", "Entrada": "Income",
        "Pagamento": "Payment", "Transferência": "Transfer", "Enviada": "Sent",
        "ÚLTIMOS MOVIMENTOS": "RECENT TRANSACTIONS", "SEGURANÇA DA CONTA": "ACCOUNT SECURITY",
        "✓ Conta protegida": "✓ Account protected",
        "Autoriza a utilização dos dados para responder à proposta.": "Please authorise the use of your information so we can respond to your proposal.",
        "A abrir o WhatsApp para confirmares o envio da proposta...": "Opening WhatsApp so you can confirm sending your proposal...",
        "O envio por e-mail ainda está a ser configurado. Por enquanto, podes enviar a tua proposta pelo WhatsApp.": "Email delivery is still being configured. For now, you can send your proposal via WhatsApp."
        ,"KAMBA+ / ESPAÇO DE EXPLORAÇÃO": "KAMBA+ / EXPLORATION SPACE",
        "O teu dinheiro. As tuas possibilidades.": "Your money. Your possibilities.",
        "Experimenta decisões financeiras num ambiente seguro e fictício.": "Explore financial decisions in a safe, fictional environment.",
        "Saldo de demonstração": "Demo balance", "Conta conceptual · sem ligação a bancos": "Concept account · no bank connection",
        "Reservado para metas": "Reserved for goals", "poupança conceptual": "conceptual savings", "Movimentos": "Transactions", "nesta sessão de teste": "in this test session",
        "ACÇÕES RÁPIDAS": "QUICK ACTIONS", "O que queres experimentar?": "What would you like to try?",
        "Enviar dinheiro": "Send money", "Simular transferência": "Simulate a transfer", "Pagar serviço": "Pay a service", "Simular pagamento": "Simulate a payment", "Criar futuro": "Build your future", "Explorar objectivos": "Explore goals", "Testar cenários": "Test scenarios", "Ver impacto das escolhas": "See the impact of your choices",
        "ACTIVIDADE": "ACTIVITY", "Movimentos recentes": "Recent activity", "IDEIA KAMBA+": "THE KAMBA+ IDEA", "Decisões pequenas. Futuro diferente.": "Small decisions. A different future.",
        "Explora como uma transferência, um pagamento ou uma poupança altera o teu cenário financeiro fictício.": "Explore how a transfer, payment or savings contribution changes your fictional financial scenario.", "Abrir laboratório": "Open the lab", "Bem-vindo ao laboratório. Todas as operações são fictícias.": "Welcome to the lab. All operations are fictional.",
        "← Voltar ao espaço": "← Back to overview", "TRANSFERÊNCIA SIMULADA": "SIMULATED TRANSFER", "Enviar com intenção.": "Send with intention.", "Experimenta uma transferência entre pessoas fictícias. Nada será enviado de verdade.": "Try a transfer between fictional people. Nothing will actually be sent.",
        "Destinatário fictício": "Fictional recipient", "Referência de conta": "Account reference", "Valor a enviar (Kz)": "Amount to send (Kz)", "Nota (opcional)": "Note (optional)", "Saldo disponível": "Available balance", "Rever transferência": "Review transfer", "Ambiente de demonstração. Não introduzas dados bancários reais.": "Demo environment. Do not enter real banking details.",
        "PAGAMENTOS DE TESTE": "TEST PAYMENTS", "Resolve uma conta fictícia.": "Settle a fictional bill.", "Escolhe um serviço e simula como seria organizar um pagamento.": "Choose a service and simulate a payment.", "Tipo de serviço": "Service type", "Referência fictícia": "Fictional reference", "Valor (Kz)": "Amount (Kz)", "Não existe ligação a fornecedores nem cobrança real.": "No service provider is connected and no real payment is charged.",
        "OBJECTIVOS COM PROPÓSITO": "PURPOSE-DRIVEN GOALS", "Constrói o teu próximo passo.": "Build your next step.", "Define uma meta e experimenta uma contribuição para ver o progresso mudar.": "Set a goal and try a contribution to see your progress change.", "Objectivo de exemplo": "Example goal", "O meu próximo projecto": "My next project", "meta": "goal", "do objectivo alcançado": "of the goal reached", "Contribuir para a meta (Kz)": "Contribute to goal (Kz)", "Nova meta (Kz)": "New goal (Kz)", "Simular contribuição": "Simulate contribution", "Valor movimentado apenas dentro desta simulação local.": "Value moves only within this local simulation.",
        "LABORATÓRIO DE DECISÕES": "DECISION LAB", "Se mudares uma escolha, o que acontece?": "What happens when you change a decision?", "Experimenta cenários sem risco. Ajusta o valor mensal que imaginarias reservar.": "Try risk-free scenarios. Adjust the monthly amount you might set aside.", "Reserva mensal fictícia": "Fictional monthly savings", "Após 6 meses, sem juros": "After 6 months, no interest", "Estimativa ilustrativa, não é recomendação de investimento.": "Illustrative estimate, not investment advice.", "01 / CONSISTÊNCIA": "01 / CONSISTENCY", "Reservar primeiro": "Set money aside first", "Separar uma quantia assim que recebes.": "Set aside an amount as soon as you receive income.", "02 / FLEXIBILIDADE": "02 / FLEXIBILITY", "Adaptar ao mês": "Adapt to the month", "Reduzir a reserva se surgir uma prioridade.": "Reduce the amount if a priority comes up.",
        "CÂMBIO ILUSTRATIVO": "ILLUSTRATIVE CURRENCY EXCHANGE", "Compara valores entre moedas.": "Compare amounts across currencies.", "Taxa fictícia para testar a interface. Não representa uma cotação actual.": "Fictional rate for testing the interface. It is not a current quote.", "Taxa de demonstração": "Demo rate", "Equivalente ilustrativo em USD": "Illustrative equivalent in USD", "Taxa inventada; não utilizar em transacções reais.": "Invented rate; do not use for real transactions.",
        "CENTRO DE TRANSPARÊNCIA": "TRANSPARENCY CENTRE", "Uma experiência segura começa pela clareza.": "A safe experience starts with clarity.", "Este conceito demonstra princípios de privacidade, não protecção bancária real.": "This concept demonstrates privacy principles, not real banking protection.", "Sem ligação bancária": "No bank connection", "Os dados são fictícios e permanecem nesta página.": "The data is fictional and stays on this page.", "Sem autenticação real": "No real authentication", "Nunca pedimos PIN, palavra-passe ou códigos bancários.": "We never ask for a PIN, password or banking codes.", "Operações reversíveis": "Reversible operations", "Podes reiniciar o laboratório quando quiseres.": "You can reset the lab at any time.", "Reiniciar demonstração ↻": "Reset demo ↻",
        "Valor inválido ou superior ao saldo fictício disponível.": "Invalid amount or amount exceeds the available fictional balance.", "Laboratório reiniciado. Os dados continuam a ser fictícios.": "Lab reset. The data remains fictional."
    };

    const attributes = {
        "Abrir menu": "Open menu", "Fechar formulário": "Close form", "Fechar demonstração": "Close demonstration",
        "Koreva Technologies — Início": "Koreva Technologies — Home",
        "Contactar a Koreva pelo WhatsApp": "Contact Koreva on WhatsApp",
        "WhatsApp da Koreva": "Koreva WhatsApp", "Instagram da Koreva Technologies": "Koreva Technologies Instagram",
        "Introduza o seu nome": "Enter your name", "Nome da empresa ou organização": "Company or organisation name",
        "Ex.: Tecnologia, Marketing, Design": "E.g. Technology, Marketing, Design",
        "Descreva a sua experiência, a sua proposta e como gostaria de colaborar com a Koreva Technologies.": "Describe your experience, your proposal and how you would like to collaborate with Koreva Technologies."

    };

    function normalise(value) {
        return value.replace(/\s+/g, " ").trim();
    }

    function translateNode(node) {
        if (node.nodeType !== Node.TEXT_NODE || !node.nodeValue.trim()) return;
        const key = normalise(node.nodeValue);
        if (text[key]) node.nodeValue = text[key];
    }

    function translateTree(root = document.body) {
        if (!root) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                return parent && !/^(SCRIPT|STYLE|TEXTAREA)$/i.test(parent.tagName)
                    ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(translateNode);
        root.querySelectorAll?.("[aria-label], [placeholder], [title]").forEach((element) => {
            ["aria-label", "placeholder", "title"].forEach((name) => {
                const value = element.getAttribute(name);
                if (attributes[value]) element.setAttribute(name, attributes[value]);
            });
        });
    }

    document.documentElement.lang = "en";
    document.title = "Koreva Technologies | Technology that transforms realities";
    translateTree();

    document.querySelector(".footer-bottom")?.insertAdjacentHTML("beforeend",
        '<nav class="koreva-language-selector" aria-label="Language selector"><a href="../index.html" lang="pt-AO">PT</a><a href="index.html" lang="en" aria-current="page">EN</a><span lang="fr" aria-disabled="true" title="French version coming soon">FR</span></nav>');

    const style = document.createElement("style");
    style.textContent = ".koreva-language-selector{display:flex;gap:.45rem;align-items:center;margin-top:1rem;font-size:.72rem;font-weight:700;letter-spacing:.1em}.koreva-language-selector a,.koreva-language-selector span{border:1px solid rgba(255,255,255,.3);border-radius:999px;padding:.35rem .55rem;color:inherit;text-decoration:none}.koreva-language-selector [aria-current=page]{background:#168bff;border-color:#168bff}.koreva-language-selector [aria-disabled=true]{opacity:.45;cursor:not-allowed}";
    document.head.appendChild(style);

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) translateTree(node);
            else translateNode(node);
        }));
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    document.addEventListener("invalid", (event) => {
        const field = event.target;
        if (field.validity.valueMissing) field.setCustomValidity("Please complete this required field.");
        else if (field.validity.typeMismatch) field.setCustomValidity("Please enter a valid email address.");
    }, true);
    document.addEventListener("input", (event) => event.target.setCustomValidity?.(""), true);

    const originalAlert = window.alert.bind(window);
    window.alert = (message) => originalAlert(
        String(message).replace("Por favor, preencha todos os campos obrigatórios.", "Please complete all required fields.")
    );

    const originalOpen = window.open.bind(window);
    window.open = (url, ...args) => {
        if (typeof url === "string" && url.includes("wa.me/")) {
            try {
                const parsed = new URL(url);
                const outgoing = decodeURIComponent(parsed.searchParams.get("text") || "")
                    .replace("Olá Koreva Technologies, gostaria de saber mais sobre os serviços.", "Hello Koreva Technologies, I would like to learn more about your services.")
                    .replace("Olá Koreva Technologies, tenho interesse no serviço:", "Hello Koreva Technologies, I am interested in the service:")
                    .replace("Olá Koreva Technologies.", "Hello Koreva Technologies.")
                    .replace(/Olá,? Koreva Technologies!?/g, "Hello, Koreva Technologies!")
                    .replace("Gostaria de apresentar uma proposta de parceria.", "I would like to submit a partnership proposal.")
                    .replace("DADOS DO INTERESSADO", "CONTACT DETAILS")
                    .replace("Nome:", "Name:").replace("Email:", "Email:").replace("Mensagem:", "Message:")
                    .replace("Empresa/Organização:", "Company/Organisation:")
                    .replace("Telefone:", "Phone:").replace("TIPO DE PARCERIA", "PARTNERSHIP TYPE")
                    .replace("ÁREA DE ATUAÇÃO", "AREA OF ACTIVITY").replace("PROPOSTA", "PROPOSAL")
                    .replace("Não informado", "Not provided").replace("Não informada", "Not provided")
                    .replace("Autorização para tratamento dos dados: Sim", "Authorisation to process data: Yes")
                    .replace("Enviado através do website da Koreva Technologies.", "Sent through the Koreva Technologies website.");
                parsed.searchParams.set("text", outgoing);
                url = parsed.toString();
            } catch (_) {}
        }
        return originalOpen(url, ...args);
    };
})();

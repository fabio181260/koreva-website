/* =========================================================
   KOREVA TECHNOLOGIES
   MAIN.JS — PARTE 1/4
   BASE + MENU + HEADER + SCROLL + ANIMAÇÕES
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* KAMBA+ state initialized before any navigation handler can access it. */
    const kambaDemoState = window.kambaDemoState || {
      balance: 70000, goal: 100000, saved: 30000,
      goals: [{ id: "computer", name: "Comprar um computador", target: 100000, saved: 30000, icon: "💻" }], activeGoalId: "computer",
      profile: null, authMode: "login",
      movements: [
        { title: "Reserva para computador", type: "Depósito na poupança", amount: -30000, reference: "KMB-DEMO-START", date: "Movimento inicial de demonstração" },
        { title: "Saldo inicial de demonstração", type: "Saldo fictício", amount: 100000, reference: "KMB-DEMO-START", date: "Movimento inicial de demonstração" }
      ], pending: null, lastReceipt: null, message: "Bem-vindo ao Kamba+. Todas as operações são fictícias."
    };
    window.kambaDemoState = kambaDemoState;

    console.log(
        "KOREVA TECHNOLOGIES — MAIN.JS iniciou."
    );


    /* =====================================================
       1. ELEMENTOS PRINCIPAIS
    ===================================================== */

    const siteHeader =
        document.getElementById("siteHeader") ||
        document.querySelector(".site-header");


    const menuToggle =
        document.getElementById("menuToggle") ||
        document.querySelector(".menu-toggle");


    const mainNavigation =
        document.getElementById("mainNavigation") ||
        document.querySelector(".main-navigation");


    /* =====================================================
       2. HEADER AO FAZER SCROLL
    ===================================================== */

    function updateHeader() {

        if (!siteHeader) {
            return;
        }


        if (window.scrollY > 30) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================================
       3. MENU MOBILE
    ===================================================== */

    if (
        menuToggle &&
        mainNavigation
    ) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const isOpen =
                    mainNavigation.classList.toggle(
                        "active"
                    );


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );


                document.body.classList.toggle(
                    "menu-open",
                    isOpen
                );

            }
        );


        /* =================================================
           FECHAR MENU AO CLICAR NUM LINK
        ================================================= */

        const menuLinks =
            mainNavigation.querySelectorAll("a");


        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNavigation.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });


        /* =================================================
           FECHAR MENU AO CLICAR FORA
        ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !mainNavigation.contains(
                        event.target
                    ) &&
                    !menuToggle.contains(
                        event.target
                    )
                ) {

                    mainNavigation.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );


        /* =================================================
           FECHAR COM ESC
        ================================================= */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    mainNavigation.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }

            }
        );

    }


    /* =====================================================
       4. NAVEGAÇÃO SUAVE
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                let target = null;


                try {

                    target =
                        document.querySelector(
                            targetId
                        );

                } catch (error) {

                    console.warn(
                        "Koreva: destino inválido:",
                        targetId
                    );

                    return;

                }


                if (!target) {
                    return;
                }


                event.preventDefault();


                const headerHeight =
                    siteHeader
                        ? siteHeader.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    15;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


    /* =====================================================
       5. ANIMAÇÕES AO ENTRAR NO ECRÃ
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            "[data-animate]"
        );


    if (
        animatedElements.length > 0 &&
        "IntersectionObserver" in window
    ) {

        const animationObserver =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(
            function (element) {

                animationObserver.observe(
                    element
                );

            }
        );

    } else {

        animatedElements.forEach(
            function (element) {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       6. ANO AUTOMÁTICO
    ===================================================== */

    document
        .querySelectorAll(
            "[data-current-year]"
        )
        .forEach(
            function (element) {

                element.textContent =
                    new Date().getFullYear();

            }
        );


    /* =====================================================
       7. HEADER — JAVASCRIPT ATIVO
    ===================================================== */

    if (siteHeader) {

        siteHeader.classList.add(
            "js-ready"
        );

    }


    /* =====================================================
       8. ACESSIBILIDADE DO MENU
    ===================================================== */

    if (menuToggle) {

        if (
            !menuToggle.hasAttribute(
                "aria-label"
            )
        ) {

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }


        if (
            !menuToggle.hasAttribute(
                "aria-expanded"
            )
        ) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /* =====================================================
       9. ESTADO JS
    ===================================================== */

    document.documentElement.classList.add(
        "js-enabled"
    );


    console.log(
        "Koreva — PARTE 1 carregada."
    );


    /* =====================================================
       A PARTE 2 CONTINUA AQUI
    ===================================================== */
    /* =========================================================
   KOREVA TECHNOLOGIES
   MAIN.JS — PARTE 2
   NAVEGAÇÃO, SOLUÇÕES, CONTACTO E INTERAÇÕES
========================================================= */


/* =========================================================
   NAVEGAÇÃO ATIVA
========================================================= */

const sections =
document.querySelectorAll(
    "section[id]"
);

const navigationLinks =
document.querySelectorAll(
    ".navigation a[href^='#'], .main-navigation a[href^='#']"
);


if (
sections.length &&
navigationLinks.length
) {

const sectionObserver =
    new IntersectionObserver(
        function (
            entries
        ) {

            entries.forEach(
                function (
                    entry
                ) {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const currentId =
                        entry.target.id;


                    navigationLinks.forEach(
                        function (
                            link
                        ) {

                            const href =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                href ===
                                "#" + currentId
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            } else {

                                link.classList.remove(
                                    "active"
                                );

                            }

                        }
                    );

                }
            );

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(
    function (
        section
    ) {

        sectionObserver.observe(
            section
        );

    }
);

}


/* =========================================================
LINKS DAS SOLUÇÕES
========================================================= */

const solutionLinks =
document.querySelectorAll(
    "[data-service-target]"
);


solutionLinks.forEach(
function (
    link
) {

    link.addEventListener(
        "click",
        function (
            event
        ) {

            event.preventDefault();


            const targetId =
                link.getAttribute(
                    "data-service-target"
                );


            if (
                !targetId
            ) {
                return;
            }


            const target =
                document.getElementById(
                    targetId
                );


            if (
                target
            ) {

                target.scrollIntoView(
                    {
                        behavior: "smooth",
                        block: "start"
                    }
                );

            }

        }
    );

}
);


/* =========================================================
BOTÕES DE CONTACTO
========================================================= */

const contactButtons =
document.querySelectorAll(
    "[data-contact]"
);


contactButtons.forEach(
function (
    button
) {

    button.addEventListener(
        "click",
        function () {

            const contactTarget =
                button.getAttribute(
                    "data-contact"
                );


            if (
                !contactTarget
            ) {
                return;
            }


            const target =
                document.getElementById(
                    contactTarget
                );


            if (
                target
            ) {

                target.scrollIntoView(
                    {
                        behavior: "smooth",
                        block: "start"
                    }
                );

            }

        }
    );

}
);


/* =========================================================
DATA-SCROLL
========================================================= */

const scrollElements =
document.querySelectorAll(
    "[data-scroll]"
);


scrollElements.forEach(
function (
    element
) {

    element.addEventListener(
        "click",
        function (
            event
        ) {

            const targetSelector =
                element.getAttribute(
                    "data-scroll"
                );


            if (
                !targetSelector
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetSelector
                );


            if (
                !target
            ) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView(
                {
                    behavior: "smooth",
                    block: "start"
                }
            );

        }
    );

}
);


/* =========================================================
INTERAÇÃO DOS PROJETOS
========================================================= */

const projectCards =
document.querySelectorAll(
    ".project-card"
);


projectCards.forEach(
function (
    card
) {

    card.addEventListener(
        "mouseenter",
        function () {

            card.classList.add(
                "is-hovered"
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.classList.remove(
                "is-hovered"
            );

        }
    );

}
);


/* =========================================================
WHATSAPP
========================================================= */

const whatsappNumber =
"244949646647";


function openWhatsApp(
message
) {

const text =
    encodeURIComponent(
        message ||
        "Olá Koreva Technologies, gostaria de saber mais sobre os serviços."
    );


const url =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    text;


window.open(
    url,
    "_blank"
);

}


/* =========================================================
BOTÕES COM DATA-WHATSAPP
========================================================= */

const whatsappButtons =
document.querySelectorAll(
    "[data-whatsapp]"
);


whatsappButtons.forEach(
function (
    button
) {

    button.addEventListener(
        "click",
        function (
            event
        ) {

            event.preventDefault();


            const message =
                button.getAttribute(
                    "data-whatsapp"
                );


            openWhatsApp(
                message
            );

        }
    );

}
);


/* =========================================================
LINKS DE SERVIÇO → WHATSAPP
========================================================= */

const serviceRequestLinks =
document.querySelectorAll(
    "[data-service-request]"
);


serviceRequestLinks.forEach(
function (
    link
) {

    link.addEventListener(
        "click",
        function (
            event
        ) {

            event.preventDefault();


            const service =
                link.getAttribute(
                    "data-service-request"
                );


            const message =
                "Olá Koreva Technologies, " +
                "tenho interesse no serviço: " +
                service +
                ".";


            openWhatsApp(
                message
            );

        }
    );

}
);


/* =========================================================
CARTÕES INTERATIVOS
========================================================= */

const interactiveCards =
document.querySelectorAll(
    "[data-interactive]"
);


interactiveCards.forEach(
function (
    card
) {

    card.addEventListener(
        "click",
        function () {

            card.classList.toggle(
                "is-active"
            );

        }
    );

}
);


/* =========================================================
LINKS VAZIOS
========================================================= */

const emptyLinks =
document.querySelectorAll(
    "a[href='#']"
);


emptyLinks.forEach(
function (
    link
) {

    link.addEventListener(
        "click",
        function (
            event
        ) {

            event.preventDefault();

        }
    );

}
);


/* =========================================================
ANIMAÇÃO DOS CARTÕES
========================================================= */

const animatedCards =
document.querySelectorAll(
    ".solution-card, .project-card, .lab-card"
);


if (
animatedCards.length
) {

const cardObserver =
    new IntersectionObserver(
        function (
            entries,
            observer
        ) {

            entries.forEach(
                function (
                    entry
                ) {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    entry.target.classList.add(
                        "is-visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.15
        }
    );


animatedCards.forEach(
    function (
        card
    ) {

        cardObserver.observe(
            card
        );

    }
);

}


/* =========================================================
FIM DA PARTE 2
NÃO COLOCAR });
AINDA.
========================================================= */
/* =========================================================
   KOREVA TECHNOLOGIES
   MAIN.JS — PARTE 3
   KOREVA LAB
   KAMBA+ / INSURANCE / BUSINESSFLOW
========================================================= */


/* =========================================================
   ELEMENTOS DO KOREVA LAB
========================================================= */

const conceptCards =
    document.querySelectorAll(
        ".lab-button[data-concept]"
    );


const conceptModal =
    document.getElementById(
        "conceptDemoModal"
    );


const conceptModalClose =
    document.querySelector(
        ".concept-demo-close"
    );


const conceptSystemNav =
    document.querySelector(
        ".concept-system-nav"
    );


const conceptSystemContent =
    document.querySelector(
        ".concept-system-content"
    );


/* =========================================================
   DADOS DOS CONCEITOS
========================================================= */

const conceptData = {

    /* =====================================================
       KAMBA+
    ===================================================== */

    kamba: {

        name:
            "KAMBA+",

        category:
            "DIGITAL FINANCE",

        status:
            "DEMONSTRAÇÃO",

        description:
            "Plataforma financeira digital para pagamentos, poupança, investimentos, câmbio e gestão financeira.",

        features: {

            cliente: {

                title:
                    "Cliente",

                label:
                    "CLIENTE"

            },

            transferir: {

                title:
                    "Transferir",

                label:
                    "TRANSFERIR"

            },

            pagar: {

                title:
                    "Pagar",

                label:
                    "PAGAR"

            },

            poupar: {

                title:
                    "Poupança",

                label:
                    "POUPANÇA"

            },

            investir: {

                title:
                    "Investimentos",

                label:
                    "INVESTIMENTOS"

            },

            cambio: {

                title:
                    "Câmbio",

                label:
                    "CÂMBIO"

            },

            seguranca: {

                title:
                    "Segurança",

                label:
                    "SEGURANÇA"

            }

        }

    },


    /* =====================================================
       KOREVA INSURANCE
    ===================================================== */

    insurance: {

        name:
            "KOREVA INSURANCE",

        category:
            "SEGUROS & AUTOMAÇÃO",

        status:
            "DEMONSTRAÇÃO",

        description:
            "Conceito de sistema digital para gestão de clientes, apólices e sinistros.",

        features: {

            clientes: {

                title:
                    "Clientes",

                label:
                    "CLIENTES"

            },

            apolices: {

                title:
                    "Apólices",

                label:
                    "APÓLICES"

            },

            sinistros: {

                title:
                    "Sinistros",

                label:
                    "SINISTROS"

            }

        }

    },


    /* =====================================================
       KOREVA BUSINESSFLOW
    ===================================================== */

    businessflow: {

        name:
            "KOREVA BUSINESSFLOW",

        category:
            "GESTÃO EMPRESARIAL",

        status:
            "DEMONSTRAÇÃO",

        description:
            "Conceito de sistema para gestão empresarial, automação de processos e acompanhamento de indicadores.",

        features: {

            gestao: {

                title:
                    "Gestão",

                label:
                    "GESTÃO"

            },

            automacao: {

                title:
                    "Automação",

                label:
                    "AUTOMAÇÃO"

            },

            indicadores: {

                title:
                    "Indicadores",

                label:
                    "INDICADORES"

            }

        }

    }

};


/* =========================================================
   ORDEM DE NAVEGAÇÃO DOS CONCEITOS
========================================================= */

const conceptOrders = {

    kamba: [

        "cliente",
        "transferir",
        "pagar",
        "poupar",
        "investir",
        "cambio",
        "seguranca"

    ],

    insurance: [

        "clientes",
        "apolices",
        "sinistros"

    ],

    businessflow: [

        "gestao",
        "automacao",
        "indicadores"

    ]

};


/* =========================================================
   ESTADO ATUAL DO MODAL
========================================================= */

let currentConcept =
    null;


let currentFeature =
    null;


/* =========================================================
   OBTER DADOS DO CONCEITO
========================================================= */

function getConceptData(
    concept
) {

    return conceptData[
        concept
    ];

}


/* =========================================================
   ABRIR MODAL
========================================================= */

function openConceptModal(
    concept
) {

    const data =
        getConceptData(
            concept
        );


    if (
        !data ||
        !conceptModal
    ) {

        console.warn(
            "Conceito não encontrado:",
            concept
        );

        return;

    }


    currentConcept =
        concept;


    const order =
        conceptOrders[
            concept
        ];


    currentFeature = concept === "kamba" && !kambaDemoState.profile
        ? "auth-login"
        : (order && order.length ? order[0] : null);


    renderConceptInterface();


    /* =====================================================
       ABRIR MODAL
    ===================================================== */

    conceptModal.classList.add(
        "active"
    );


    conceptModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeConceptModal() {

    if (
        !conceptModal
    ) {
        return;
    }


    conceptModal.classList.remove(
        "active"
    );


    conceptModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    document.body.style.overflow =
        "";


    currentConcept =
        null;


    currentFeature =
        null;

}


/* =========================================================
   DESCRIÇÕES DAS FUNCIONALIDADES
========================================================= */

function getFeatureDescription(
    concept,
    feature
) {

    const descriptions = {

        /* ===================================================
           KAMBA+
        =================================================== */

        kamba: {

            cliente:
                "Área principal do cliente, com saldo disponível, movimentos recentes e acesso às principais operações financeiras.",

            transferir:
                "Fluxo de transferência digital entre contas, com identificação do destinatário, valor, confirmação e comprovativo.",

            pagar:
                "Área para pagamentos digitais, permitindo selecionar o serviço, introduzir o valor e confirmar a operação.",

            poupar:
                "Espaço dedicado à organização da poupança, permitindo acompanhar objetivos financeiros e valores reservados.",

            investir:
                "Área conceptual para acompanhamento de investimentos, produtos financeiros e evolução do património.",

            cambio:
                "Área para consulta e simulação de câmbio entre diferentes moedas, com apresentação das respetivas taxas.",

            seguranca:
                "Centro de segurança da conta, com controlo de sessões, operações, proteção da conta e comprovativos."

        },


        /* ===================================================
           INSURANCE
        =================================================== */

        insurance: {

            clientes:
                "Gestão centralizada dos clientes, com informação, histórico e acompanhamento da relação com a seguradora.",

            apolices:
                "Área de gestão das apólices, permitindo consultar dados, estados, coberturas e informações contratuais.",

            sinistros:
                "Área para acompanhamento de sinistros, processos, estados e respetiva evolução."

        },


        /* ===================================================
           BUSINESSFLOW
        =================================================== */

        businessflow: {

            gestao:
                "Painel de gestão empresarial para acompanhar processos, equipas e operações.",

            automacao:
                "Área dedicada à automação de processos e redução de tarefas operacionais repetitivas.",

            indicadores:
                "Painel de indicadores para acompanhamento de desempenho, métricas e resultados."

        }

    };


    if (
        descriptions[concept] &&
        descriptions[concept][feature]
    ) {

        return descriptions[
            concept
        ][
            feature
        ];

    }


    return "Demonstração conceptual da solução Koreva.";

}


/* =========================================================
   PREVIEW DO KAMBA+
========================================================= */

function getKambaPreview(
    feature
) {

    const previews = {

        cliente: {

            eyebrow:
                "KAMBA+ / DIGITAL FINANCE",

            title:
                "Olá, João Manuel",

            value:
                "850.000 Kz",

            label:
                "Saldo disponível",

            secondary:
                "Conta principal",

            metrics: [

                "Entradas",

                "Saídas",

                "Movimentos"

            ]

        },


        transferir: {

            eyebrow:
                "KAMBA+ / OPERAÇÕES",

            title:
                "Transferir dinheiro",

            value:
                "50.000 Kz",

            label:
                "Nova transferência",

            secondary:
                "Operação segura e digital",

            metrics: [

                "Destinatário",

                "Valor",

                "Confirmar"

            ]

        },


        pagar: {

            eyebrow:
                "KAMBA+ / PAGAMENTOS",

            title:
                "Efetuar pagamento",

            value:
                "25.000 Kz",

            label:
                "Pagamento digital",

            secondary:
                "Processamento imediato",

            metrics: [

                "Serviço",

                "Valor",

                "Confirmar"

            ]

        },


        poupar: {

            eyebrow:
                "KAMBA+ / POUPANÇA",

            title:
                "Organizar dinheiro",

            value:
                "320.000 Kz",

            label:
                "Valor poupado",

            secondary:
                "Objetivo financeiro",

            metrics: [

                "Objetivos",

                "Poupança",

                "Progresso"

            ]

        },


        investir: {

            eyebrow:
                "KAMBA+ / INVESTIMENTOS",

            title:
                "Acompanhar investimentos",

            value:
                "1.250.000 Kz",

            label:
                "Património investido",

            secondary:
                "Visão financeira",

            metrics: [

                "Carteira",

                "Evolução",

                "Produtos"

            ]

        },


        cambio: {

            eyebrow:
                "KAMBA+ / CÂMBIO",

            title:
                "Câmbio digital",

            value:
                "EUR / Kz",

            label:
                "Simulação de câmbio",

            secondary:
                "Consulta de taxas",

            metrics: [

                "Moeda",

                "Taxa",

                "Converter"

            ]

        },


        seguranca: {

            eyebrow:
                "KAMBA+ / SEGURANÇA",

            title:
                "Conta protegida",

            value:
                "SEGURA",

            label:
                "Estado da conta",

            secondary:
                "Monitorização ativa",

            metrics: [

                "Sessões",

                "Operações",

                "Proteção"

            ]

        }

    };


    return (
        previews[
            feature
        ] ||
        previews.cliente
    );

}


/* =========================================================
   PREVIEW DO INSURANCE
========================================================= */

function getInsurancePreview(
    feature
) {

    const previews = {

        clientes: {

            eyebrow:
                "KOREVA INSURANCE",

            title:
                "Gestão de clientes",

            value:
                "2.480",

            label:
                "Clientes ativos",

            secondary:
                "Base de clientes",

            metrics: [

                "Clientes",

                "Ativos",

                "Histórico"

            ]

        },


        apolices: {

            eyebrow:
                "KOREVA INSURANCE",

            title:
                "Gestão de apólices",

            value:
                "1.842",

            label:
                "Apólices ativas",

            secondary:
                "Carteira segurada",

            metrics: [

                "Apólices",

                "Coberturas",

                "Estados"

            ]

        },


        sinistros: {

            eyebrow:
                "KOREVA INSURANCE",

            title:
                "Gestão de sinistros",

            value:
                "128",

            label:
                "Processos ativos",

            secondary:
                "Acompanhamento",

            metrics: [

                "Sinistros",

                "Processos",

                "Estados"

            ]

        }

    };


    return (
        previews[
            feature
        ] ||
        previews.clientes
    );

}


/* =========================================================
   PREVIEW DO BUSINESSFLOW
========================================================= */

function getBusinessFlowPreview(
    feature
) {

    const previews = {

        gestao: {

            eyebrow:
                "KOREVA BUSINESSFLOW",

            title:
                "Gestão empresarial",

            value:
                "94%",

            label:
                "Operações acompanhadas",

            secondary:
                "Visão operacional",

            metrics: [

                "Processos",

                "Equipas",

                "Operações"

            ]

        },


        automacao: {

            eyebrow:
                "KOREVA BUSINESSFLOW",

            title:
                "Automação",

            value:
                "68",

            label:
                "Processos automatizados",

            secondary:
                "Eficiência operacional",

            metrics: [

                "Fluxos",

                "Automação",

                "Execuções"

            ]

        },


        indicadores: {

            eyebrow:
                "KOREVA BUSINESSFLOW",

            title:
                "Indicadores",

            value:
                "87%",

            label:
                "Desempenho",

            secondary:
                "Visão estratégica",

            metrics: [

                "KPI",

                "Resultados",

                "Evolução"

            ]

        }

    };


    return (
        previews[
            feature
        ] ||
        previews.gestao
    );

}


/* =========================================================
   PREVIEW GERAL
========================================================= */

function getConceptPreview(
    concept,
    feature
) {

    if (
        concept === "kamba"
    ) {

        return getKambaPreview(
            feature
        );

    }


    if (
        concept === "insurance"
    ) {

        return getInsurancePreview(
            feature
        );

    }


    if (
        concept === "businessflow"
    ) {

        return getBusinessFlowPreview(
            feature
        );

    }


    return null;

}


/* =========================================================
   RENDERIZAR INTERFACE
========================================================= */

function renderConceptInterface() {

    if (
        !currentConcept ||
        !currentFeature ||
        !conceptSystemNav ||
        !conceptSystemContent
    ) {

        return;

    }


    const data =
        getConceptData(
            currentConcept
        );


    const preview =
        getConceptPreview(
            currentConcept,
            currentFeature
        );


    if (
        !data ||
        !preview
    ) {

        return;

    }


    /* =====================================================
       NAVEGAÇÃO
    ===================================================== */

    conceptSystemNav.innerHTML =
        "";


    const order =
        conceptOrders[
            currentConcept
        ] || [];


    order.forEach(
        function (
            featureKey,
            index
        ) {

            const feature =
                data.features[
                    featureKey
                ];


            if (
                !feature
            ) {
                return;
            }


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "concept-system-nav-button";


            if (
                featureKey ===
                currentFeature
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.setAttribute(
                "data-feature",
                featureKey
            );


            button.innerHTML =
                `
                <span>
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                    ${feature.label}
                </strong>
                `;


            button.addEventListener(
                "click",
                function () {

                    currentFeature =
                        featureKey;


                    renderConceptInterface();

                }
            );


            conceptSystemNav.appendChild(
                button
            );

        }
    );


    if (currentConcept === "kamba") {
        const mobileSelect = document.createElement("label");
        mobileSelect.className = "kamba-v2-mobile-nav";
        mobileSelect.innerHTML = `<span>Explorar Kamba+</span><select aria-label="Escolher área Kamba+">${order.map(key => `<option value="${key}" ${key === currentFeature ? "selected" : ""}>${data.features[key].title}</option>`).join("")}</select>`;
        mobileSelect.querySelector("select").addEventListener("change", event => { currentFeature = event.target.value; renderConceptInterface(); });
        conceptSystemNav.appendChild(mobileSelect);
    }

    /* =====================================================
       CONTEÚDO
    ===================================================== */

    const description =
        getFeatureDescription(currentConcept, currentFeature) ||
        (currentFeature === "atividade" ? "Consulta os movimentos desta sessão demonstrativa." :
         currentFeature === "perfil" ? "Perfil fictício do utilizador nesta experiência conceptual." :
         data.description);
/* KAMBA+ — LABORATÓRIO INTERACTIVO (DADOS FICTÍCIOS) */

if (!Array.isArray(kambaDemoState.goals) || !kambaDemoState.goals.length) kambaDemoState.goals = [{ id: "computer", name: "Comprar um computador", target: kambaDemoState.goal || 100000, saved: kambaDemoState.saved || 0, icon: "💻" }];
if (!kambaDemoState.activeGoalId) kambaDemoState.activeGoalId = kambaDemoState.goals[0].id;
function getActiveKambaGoal() { return kambaDemoState.goals.find(g => g.id === kambaDemoState.activeGoalId) || kambaDemoState.goals[0]; }
function syncKambaSavings() { kambaDemoState.saved = kambaDemoState.goals.reduce((sum, goal) => sum + Number(goal.saved || 0), 0); const active = getActiveKambaGoal(); if (active) { kambaDemoState.goal = Number(active.target || 0); } }
window.kambaDemoState = kambaDemoState;
function formatKz(value) { return new Intl.NumberFormat("pt-AO", { maximumFractionDigits: 0 }).format(value) + " Kz"; }
function kambaEscape(value) { return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","\'":"&#39;"}[char])); }
function kambaMovementEmoji(item) {
  const text = `${item?.title || ""} ${item?.type || ""}`.toLowerCase();
  if (/poupan|objectivo|reserva|depósito na poupança/.test(text)) return item.amount < 0 ? "🐷" : "💰";
  if (/transfer/.test(text)) return "💸";
  if (/pagamento|serviço|electricidade|água|internet|propina/.test(text)) return "🧾";
  if (/receb/.test(text)) return "📥";
  if (/saldo inicial/.test(text)) return "👛";
  return item.amount >= 0 ? "📥" : "📤";
}
function renderKambaLab(feature) {
  const balance = formatKz(kambaDemoState.balance);
  const totalWallet = kambaDemoState.balance + kambaDemoState.saved;
  const profile = kambaDemoState.profile || {};
  const displayName = profile.name || "Ana Paula";
  const initials = displayName.trim().split(/\s+/).slice(0,2).map(part => part[0] || "").join("").toUpperCase() || "KP";
  if (!kambaDemoState.profile && !["auth-login", "auth-register", "auth-forgot"].includes(feature)) feature = "auth-login";
  if (["auth-login", "auth-register", "auth-forgot"].includes(feature)) {
    const registering = feature === "auth-register";
    const forgot = feature === "auth-forgot";
    return `<section class="kamba-v3-auth ${registering ? "is-register" : "is-login"}"><div class="kamba-v3-auth-art"><div class="kamba-v3-auth-brand"><span class="kamba-v3-logo-symbol">✦</span><div><strong>Kamba<span>+</span></strong><small>Planeia · Poupa · Conquista</small></div></div><div class="kamba-v3-auth-woman" role="img" aria-label="Ilustração de uma mulher a utilizar a Kamba+"></div><div class="kamba-v3-auth-art-copy"><span>O TEU FUTURO</span><strong>começa aqui!</strong><p>Pequenos passos hoje. Grandes conquistas amanhã.</p></div><div class="kamba-v3-auth-wave"></div></div><div class="kamba-v3-auth-form-panel"><div class="kamba-v3-auth-mini-brand"><span class="kamba-v3-logo-symbol">✦</span><div><strong>Kamba<span>+</span></strong><small>Planeia · Poupa · Conquista</small></div></div><span class="kamba-v2-kicker">A TUA VIDA FINANCEIRA, MAIS SIMPLES</span><h3>${registering ? "Criar conta" : forgot ? "Recuperar acesso" : "Bem-vindo de volta!"}</h3><p class="kamba-v3-auth-intro">${registering ? "Junta-te à Kamba+ e começa a organizar melhor o teu dinheiro." : forgot ? "Introduz o teu e-mail para veres as instruções desta simulação." : "Entra na tua carteira e continua a construir os teus objectivos."}</p>${forgot ? `<form data-kamba-form="auth-forgot"><label>Endereço de e-mail<input name="email" type="email" required autocomplete="email" placeholder="nome@exemplo.com"></label><button class="kamba-v2-primary" type="submit">Recuperar acesso →</button></form><button type="button" class="kamba-v3-auth-switch" data-kamba-auth-switch="login">← Voltar ao login</button>` : `<form data-kamba-form="${registering ? "auth-register" : "auth-login"}">${registering ? `<label>Nome completo<input name="name" required maxlength="70" autocomplete="name" placeholder="Ex.: Ana Paula Manuel"></label>` : ""}<label>Endereço de e-mail<input name="email" type="email" required autocomplete="email" placeholder="nome@exemplo.com"></label>${registering ? `<label>Telefone (opcional)<input name="phone" type="tel" autocomplete="tel" placeholder="Ex.: +244 923 000 000"></label>` : ""}<label>Palavra-passe<span class="kamba-v3-password-wrap"><input name="password" type="password" required minlength="8" autocomplete="${registering ? "new-password" : "current-password"}" placeholder="${registering ? "Cria uma palavra-passe" : "Introduz a tua palavra-passe"}" ${registering ? 'pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}" title="Usa 8+ caracteres, maiúscula, minúscula, número e símbolo."' : ""}><button type="button" data-kamba-show-password aria-label="Mostrar palavra-passe">◉</button></span></label>${registering ? `<label>Confirmar palavra-passe<span class="kamba-v3-password-wrap"><input name="confirmPassword" type="password" required minlength="8" autocomplete="new-password" placeholder="Repete a palavra-passe"><button type="button" data-kamba-show-password aria-label="Mostrar palavra-passe">◉</button></span></label><div class="kamba-v3-password-hint"><strong>A tua palavra-passe deve ter:</strong><span>✓ Pelo menos 8 caracteres</span><span>✓ Uma letra maiúscula e uma minúscula</span><span>✓ Um número e um símbolo</span></div>` : `<div class="kamba-v3-auth-forgot-row"><button type="button" data-kamba-forgot>Esqueceste-te da palavra-passe?</button></div>`}<button class="kamba-v2-primary kamba-v3-auth-submit" type="submit">${registering ? "Criar conta →" : "Iniciar sessão →"}</button></form><div class="kamba-v3-auth-divider"><span></span><small>ou</small><span></span></div><button type="button" class="kamba-v3-auth-switch ${registering ? "is-outline" : "is-outline"}" data-kamba-auth-switch="${registering ? "login" : "register"}">${registering ? "← Voltar ao Login" : "♙  Criar conta"}</button>`}<p class="kamba-v3-auth-disclaimer"><span>✓</span><span><strong>Simulação</strong> · Sem movimentações reais de dinheiro. Os dados não são enviados para um servidor.</span></p></div></section>`;
  }
  const rows = kambaDemoState.movements.slice(0, 4).map((item,index) => `<button type="button" class="kamba-v2-movement kamba-v2-movement-row" data-kamba-movement="${index}"><span class="kamba-v2-movement-icon">${kambaMovementEmoji(item)}</span><span class="kamba-v2-movement-copy"><strong>${kambaEscape(item.title)}</strong><small>${kambaEscape(item.type)}</small></span><strong class="${item.amount >= 0 ? "is-positive" : "is-negative"}">${item.amount >= 0 ? "+" : "−"}${formatKz(Math.abs(item.amount))}</strong></button>`).join("");
  const progress = Math.round(Math.min(100, kambaDemoState.saved / Math.max(1, kambaDemoState.goals.reduce((sum, goal) => sum + Number(goal.target || 0), 0)) * 100));
  const home = `<div class="kamba-v2-dashboard">
    <div class="kamba-v2-appbar"><div class="kamba-v2-appbrand"><span class="kamba-v2-brandmark">K+</span><div><strong>Kamba+</strong><small>Planeia · Poupa · Conquista</small></div></div><button type="button" class="kamba-v2-notification" data-feature="perfil" aria-label="Notificações">🔔<i></i></button><button type="button" class="kamba-v2-avatar" data-feature="perfil" aria-label="Abrir perfil de demonstração">${kambaEscape(initials)}</button></div>
    <div class="kamba-v2-welcome"><div><span class="kamba-v2-kicker">O TEU ESPAÇO FINANCEIRO</span><h3>Olá, ${kambaEscape(displayName)} 👋🏽</h3><p>O teu dinheiro, os teus planos. Vamos conquistar os teus objectivos?</p></div><span class="kamba-v2-welcome-art" aria-hidden="true">✦</span></div>
    <div class="kamba-v2-balance-card"><div><span>Saldo disponível</span><strong>${balance}</strong><small>Dinheiro disponível para utilizar</small></div><span class="kamba-v2-chip">KAMBA+</span><div class="kamba-v2-balance-glow"></div><div class="kamba-v2-balance-summary"><div><span>🐷 Poupanças reservadas</span><strong>${formatKz(kambaDemoState.saved)}</strong></div><div><span>👛 Total da carteira</span><strong>${formatKz(totalWallet)}</strong></div></div></div>
    <div class="kamba-v2-section-title"><div><span class="kamba-v2-kicker">COMEÇA POR AQUI</span><h4>O que gostarias de fazer?</h4></div></div>
    <div class="kamba-v2-action-grid kamba-v2-primary-actions"><button type="button" data-feature="transferir"><span>↗</span><strong>Enviar</strong><small>Transferir dinheiro</small></button><button type="button" data-feature="receber"><span>▦</span><strong>Receber</strong><small>Pedido de pagamento</small></button><button type="button" data-feature="poupar"><span>🎯</span><strong>Poupar</strong><small>Criar um objectivo</small></button></div>
    <div class="kamba-v2-section-title kamba-v2-highlights-heading"><div><span class="kamba-v2-kicker">OS TEUS DESTAQUES</span><h4>Um passo de cada vez 🌟</h4></div></div>
    <button type="button" class="kamba-v2-challenge-card" data-feature="investir"><span class="kamba-v2-challenge-emoji">🏆</span><span class="kamba-v2-challenge-copy"><small>DESAFIO DO MÊS</small><strong>Cria uma reserva de emergência</strong><span>Meta: ${formatKz(50000)}</span><i><b style="width:${Math.min(100,kambaDemoState.saved/50000*100)}%"></b></i><small>${Math.min(100,Math.round(kambaDemoState.saved/50000*100))}% concluído · toca para explorar</small></span><span class="kamba-v2-challenge-arrow">›</span></button>
    <div class="kamba-v2-section-title"><div><span class="kamba-v2-kicker">ACESSO RÁPIDO</span><h4>O teu dinheiro, bem organizado</h4></div></div>
    <div class="kamba-v2-shortcut-grid"><button type="button" data-feature="carteira"><span>👛</span><strong>Carteira</strong><small>Movimentos e comprovativos</small></button><button type="button" data-feature="investir"><span>🧪</span><strong>Kamba Lab</strong><small>Decisões financeiras interactivas</small></button><button type="button" data-feature="analise"><span>📊</span><strong>Resumo financeiro</strong><small>Vê o teu panorama</small></button><button type="button" data-feature="planeamento"><span>🗓️</span><strong>Planear despesas</strong><small>Organiza o teu futuro</small></button></div>
    <p class="kamba-v2-demo-note">✨ SIMULAÇÃO — sem movimentação real de dinheiro.</p><p class="kamba-v2-feedback" role="status">${kambaDemoState.message}</p></div>`;
  const back = `<button type="button" class="kamba-v2-back" data-feature="cliente">← Voltar ao espaço</button>`;
  const draft = kambaDemoState.pending;
  const transferDraft = draft && draft.sourceFeature === "transferir" ? draft : {};
  const paymentDraft = draft && draft.sourceFeature === "pagar" ? draft : {};
  const forms = {
    transferir: `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">TRANSFERÊNCIAS KAMBA+</span><h3>Como queres enviar?</h3><p>Escolhe o método e confirma todos os dados antes de concluir a simulação.</p><form data-kamba-form="transfer"><label>Tipo de transferência<select name="transferMode" id="kambaTransferMode"><option value="kamba" ${transferDraft.typeLabel === "Transferência Kamba Kamba" ? "selected" : ""}>Transferência Kamba Kamba · por número</option><option value="bank" ${transferDraft.typeLabel === "Transferência bancária (IBAN)" ? "selected" : ""}>Transferência bancária · IBAN</option></select></label><label>Nome do destinatário<input name="recipient" required maxlength="48" value="${kambaEscape(transferDraft.recipient)}" placeholder="Ex.: Ana Manuel" autocomplete="off"></label><label id="kambaIdentifierLabel">${transferDraft.identifierLabel === "IBAN" ? "IBAN fictício do destinatário" : "Número Kamba do destinatário"}<input name="identifier" required inputmode="${transferDraft.identifierLabel === "IBAN" ? "text" : "tel"}" pattern="${transferDraft.identifierLabel === "IBAN" ? "[A-Za-z0-9 ]{12,34}" : "[0-9+ ()-]{9,18}"}" value="${kambaEscape(transferDraft.identifier)}" placeholder="${transferDraft.identifierLabel === "IBAN" ? "Ex.: AO06 0000 0000 0000 0000 0" : "Ex.: 923 000 000"}" autocomplete="off"></label><label>Valor a enviar (Kz)<input name="amount" required type="number" min="100" step="100" max="${kambaDemoState.balance}" value="${transferDraft.amount || ""}" placeholder="Ex.: 15000"></label><label>Mensagem (opcional)<input name="note" maxlength="80" value="${kambaEscape(transferDraft.note)}" placeholder="Ex.: Obrigado!"></label><div class="kamba-v2-review"><span>Saldo disponível</span><strong>${balance}</strong></div><button class="kamba-v2-primary" type="submit">Rever dados <span>→</span></button></form><p class="kamba-v2-demo-note">Demonstração fictícia. Não são enviados fundos nem dados para bancos.</p></div>`, 
    pagar: `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">PAGAMENTOS DE TESTE</span><h3>Que serviço queres pagar?</h3><p>Revê o serviço, a referência e o valor antes de confirmar.</p><form data-kamba-form="payment"><label>Tipo de serviço<select name="service"><option>Electricidade</option><option>Água</option><option>Internet</option><option>Televisão</option><option>Propina escolar</option><option>Carregamento de telemóvel</option></select></label><label>Referência fictícia<input name="reference" required maxlength="24" value="${kambaEscape(paymentDraft.identifier)}" placeholder="Ex.: DEMO-2048"></label><label>Valor (Kz)<input name="amount" required type="number" min="100" step="100" max="${kambaDemoState.balance}" value="${paymentDraft.amount || ""}" placeholder="Ex.: 12500"></label><div class="kamba-v2-review"><span>Saldo disponível</span><strong>${balance}</strong></div><button class="kamba-v2-primary" type="submit">Rever pagamento <span>→</span></button></form><p class="kamba-v2-demo-note">Não existe ligação a fornecedores nem cobrança real.</p></div>`, 
    poupar: `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">OS TEUS OBJECTIVOS</span><div class="kamba-v3-goals-heading"><div><h3>Minhas Poupanças</h3><p>Cria uma poupança para cada sonho. Cada objectivo tem o seu próprio progresso.</p></div><button type="button" class="kamba-v3-new-goal" data-feature="nova-poupanca">＋ Nova poupança</button></div><div class="kamba-v3-goal-list">${kambaDemoState.goals.map(g => `<button type="button" class="kamba-v3-goal-list-item ${g.id === kambaDemoState.activeGoalId ? "active" : ""}" data-kamba-select-goal="${kambaEscape(g.id)}"><span class="kamba-v3-goal-list-icon">${kambaEscape(g.icon || "🎯")}</span><span class="kamba-v3-goal-list-copy"><strong>${kambaEscape(g.name)}</strong><small>${formatKz(g.saved)} de ${formatKz(g.target)}</small><i><b style="width:${Math.min(100,Number(g.saved||0)/Math.max(1,Number(g.target||1))*100)}%"></b></i></span><span class="kamba-v3-goal-percent">${Math.round(Math.min(100,Number(g.saved||0)/Math.max(1,Number(g.target||1))*100))}%</span></button>`).join("")}</div><div class="kamba-v2-goal-card kamba-v2-savings-hero"><div class="kamba-v2-savings-illustration" aria-hidden="true"><span>🐷</span><span>${kambaEscape(getActiveKambaGoal().icon || "🎯")}</span></div><div class="kamba-v2-goal-head"><div><span>POUPANÇA INTELIGENTE</span><strong>${kambaEscape(getActiveKambaGoal().name)}</strong></div><span class="kamba-v2-goal-symbol" aria-hidden="true">${kambaEscape(getActiveKambaGoal().icon || "🎯")}</span></div><div class="kamba-v2-goal-amounts"><strong>${formatKz(getActiveKambaGoal().saved)}</strong><span>de ${formatKz(getActiveKambaGoal().target)}</span></div><div class="kamba-v2-progress"><span style="width:${Math.min(100, getActiveKambaGoal().saved / Math.max(1,getActiveKambaGoal().target) * 100)}%"></span></div><p>${Math.round(Math.min(100, getActiveKambaGoal().saved / Math.max(1,getActiveKambaGoal().target) * 100))}% do objectivo alcançado</p><div class="kamba-v2-wallet-totals"><span>Disponível: <strong>${formatKz(kambaDemoState.balance)}</strong></span><span>Total: <strong>${formatKz(totalWallet)}</strong></span></div></div><div class="kamba-v2-savings-actions"><button type="button" class="kamba-v2-primary" data-feature="depositar">＋ Depositar</button><button type="button" class="kamba-v2-secondary" data-feature="retirar">− Retirar</button></div><div class="kamba-v2-savings-tip"><span>💡</span><div><strong>Dica Kamba+</strong><p>Podes retirar dinheiro a qualquer momento, mesmo antes de concluir o objectivo. A poupança é flexível e sem penalizações nesta simulação.</p></div></div><h4>Movimentações</h4><section class="kamba-v2-panel kamba-v2-recent-panel">${kambaDemoState.movements.filter(m => /poupança|objectivo|reserva/i.test(m.type + " " + m.title)).map(item => `<div class="kamba-v2-movement"><span class="kamba-v2-movement-icon">${kambaMovementEmoji(item)}</span><span class="kamba-v2-movement-copy"><strong>${kambaEscape(item.title)}</strong><small>${kambaEscape(item.type)} · ${kambaEscape(item.date || "Demonstração")}</small></span><strong class="${item.amount >= 0 ? "is-positive" : "is-negative"}">${item.amount >= 0 ? "+" : "−"}${formatKz(Math.abs(item.amount))}</strong></div>`).join("") || `<p class="kamba-v2-demo-note">Ainda não existem movimentos de poupança.</p>`}</section></div>`,
    "nova-poupanca": `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">NOVO OBJECTIVO</span><h3>O que queres conquistar?</h3><p>Dá um nome ao teu sonho e define quanto gostarias de juntar. Poderás depositar e retirar dinheiro sempre que precisares.</p><form data-kamba-form="goal-create"><label>Nome da poupança<input name="goalName" required maxlength="60" placeholder="Ex.: Comprar uma mota"></label><label>Valor da meta (Kz)<input name="goalTarget" required type="number" min="1000" step="1000" placeholder="Ex.: 500000"></label><label>Ícone do objectivo<select name="goalIcon"><option value="🎯">🎯 Objectivo geral</option><option value="💻">💻 Computador / tecnologia</option><option value="🏠">🏠 Casa</option><option value="✈️">✈️ Viagem</option><option value="🚗">🚗 Carro / mota</option><option value="🎓">🎓 Estudos</option><option value="🛟">🛟 Reserva de emergência</option></select></label><button class="kamba-v2-primary" type="submit">Criar poupança →</button></form><p class="kamba-v2-demo-note">A nova poupança começa com 0 Kz. O dinheiro só é reservado quando fizeres um depósito simulado.</p></div>`,
    depositar: `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">ADICIONAR À POUPANÇA</span><h3>Quanto queres reservar?</h3><p>O valor será transferido do saldo disponível para o objectivo.</p><div class="kamba-v2-review"><span>Saldo disponível</span><strong>${balance}</strong></div><div class="kamba-v2-review"><span>Poupança actual</span><strong>${formatKz(kambaDemoState.saved)}</strong></div><form data-kamba-form="save"><input type="hidden" name="goalId" value="${kambaEscape(getActiveKambaGoal().id)}"><label>Objectivo<select name="goalIdSelect" disabled><option>${kambaEscape(getActiveKambaGoal().name)}</option></select></label><label>Valor a reservar (Kz)<input name="amount" required type="number" min="100" step="100" max="${kambaDemoState.balance}" placeholder="Ex.: 5000"></label><button class="kamba-v2-primary" type="submit">Rever depósito →</button></form></div>`,
    retirar: `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">RETIRAR DA POUPANÇA</span><h3>O teu dinheiro continua disponível.</h3><p>Escolhe quanto queres devolver à carteira principal.</p><div class="kamba-v2-review"><span>Saldo reservado</span><strong>${formatKz(kambaDemoState.saved)}</strong></div><div class="kamba-v2-review"><span>Saldo disponível actual</span><strong>${balance}</strong></div><form data-kamba-form="withdraw"><input type="hidden" name="goalId" value="${kambaEscape(getActiveKambaGoal().id)}"><p class="kamba-v3-active-goal-label">Objectivo: <strong>${kambaEscape(getActiveKambaGoal().name)}</strong></p><label>Valor a retirar (Kz)<input name="amount" required type="number" min="100" step="100" max="${getActiveKambaGoal().saved}" placeholder="Ex.: 10000"></label><button class="kamba-v2-primary" type="submit">Rever retirada →</button></form><p class="kamba-v2-demo-note">A retirada não elimina o objectivo. O progresso diminui e podes voltar a depositar quando quiseres.</p></div>`,
    investir: `<div class="kamba-v2-workspace">${back}<div class="kamba-v3-lab-hero"><div class="kamba-v3-lab-hero-copy"><span>🧪 KAMBA+ LAB</span><h3>Experimenta. Aprende. Conquista.</h3><p>Um espaço para testar decisões financeiras sem riscos e com valores fictícios.</p></div><div class="kamba-v3-lab-hero-art" aria-hidden="true">💡📚</div></div><div class="kamba-v3-lab-intro"><span class="kamba-v2-kicker">DESAFIOS INTERACTIVOS</span><p>Altera os valores e acompanha os resultados em tempo real.</p></div><section class="kamba-v2-lab-challenge"><span class="kamba-v3-lab-challenge-icon">💰</span><span class="kamba-v2-kicker">DESAFIO 01</span><h4>Organiza o teu orçamento</h4><label>Rendimento mensal fictício (Kz)<input id="kambaBudgetIncome" type="number" min="0" value="250000"></label><label>Despesas essenciais (Kz)<input id="kambaBudgetNeeds" type="number" min="0" value="120000"></label><label>Outras despesas (Kz)<input id="kambaBudgetWants" type="number" min="0" value="60000"></label><label>Poupança pretendida (Kz)<input id="kambaBudgetSave" type="number" min="0" value="30000"></label><div class="kamba-v2-scenario-result"><span>Saldo depois destas decisões</span><strong id="kambaBudgetResult">40.000 Kz</strong><small id="kambaBudgetAdvice">O orçamento fica equilibrado.</small></div></section><section class="kamba-v2-lab-challenge"><span class="kamba-v3-lab-challenge-icon">🎯</span><span class="kamba-v2-kicker">DESAFIO 02</span><h4>Alcança um objectivo</h4><label>Preço do objectivo (Kz)<input id="kambaGoalPrice" type="number" min="0" value="180000"></label><label>Já tens poupado (Kz)<input id="kambaGoalSaved" type="number" min="0" value="30000"></label><label>Prazo (meses)<input id="kambaGoalMonths" type="number" min="1" max="120" value="6"></label><div class="kamba-v2-scenario-result"><span>Reserva mensal necessária</span><strong id="kambaGoalMonthly">25.000 Kz</strong><small id="kambaGoalAdvice">Estimativa sem juros.</small></div></section><section class="kamba-v2-lab-challenge"><span class="kamba-v3-lab-challenge-icon">🛍️</span><span class="kamba-v2-kicker">DESAFIO 03</span><h4>Comprar agora ou esperar?</h4><label>Preço do produto (Kz)<input id="kambaComparePrice" type="number" min="0" value="90000"></label><label>Saldo disponível (Kz)<input id="kambaCompareBalance" type="number" min="0" value="100000"></label><label>Reserva mensal para o objectivo (Kz)<input id="kambaCompareMonthly" type="number" min="0" value="15000"></label><div class="kamba-v2-scenario-result"><span>Se comprares agora, fica</span><strong id="kambaCompareResult">10.000 Kz</strong><small id="kambaCompareAdvice">A comparação é ilustrativa e não constitui aconselhamento financeiro.</small></div></section><p class="kamba-v2-demo-note">Os resultados são educativos e usam apenas valores fictícios. Não são previsões nem recomendações de investimento.</p></div>`,
    cambio: `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">CÂMBIO ILUSTRATIVO</span><h3>Compara valores entre moedas.</h3><p>Taxa fictícia para testar a interface. Não representa uma cotação actual.</p><div class="kamba-v2-scenario"><label>Valor em Kz<input id="kambaFxAmount" type="number" min="0" value="100000"></label><div class="kamba-v2-review"><span>Taxa de demonstração</span><strong>1 USD = 850 Kz</strong></div><div class="kamba-v2-scenario-result"><span>Equivalente ilustrativo em USD</span><strong id="kambaFxResult">117,65 USD</strong><small>Taxa inventada; não utilizar em transacções reais.</small></div></div></div>`,
    seguranca: `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">CENTRO DE TRANSPARÊNCIA</span><h3>Uma experiência segura começa pela clareza.</h3><p>Este conceito demonstra princípios de privacidade, não protecção bancária real.</p><div class="kamba-v2-security-list"><div><span>✓</span><div><strong>Sem ligação bancária</strong><small>Os dados são fictícios e permanecem nesta página.</small></div></div><div><span>✓</span><div><strong>Sem autenticação real</strong><small>Nunca pedimos PIN, palavra-passe ou códigos bancários.</small></div></div><div><span>✓</span><div><strong>Operações reversíveis</strong><small>Podes reiniciar o laboratório quando quiseres.</small></div></div></div><button type="button" class="kamba-v2-secondary" data-kamba-reset>Reiniciar demonstração ↻</button></div>`
  };
  if (feature === "review" && kambaDemoState.pending) {
    const t = kambaDemoState.pending;
    forms.review = `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">PASSO 2 DE 3 · REVISÃO</span><h3>Confirma os dados.</h3><p>Antes de avançar, verifica cuidadosamente os detalhes desta operação fictícia.</p><div class="kamba-v2-confirm-card"><div class="kamba-v2-confirm-icon">↗</div><span>Valor da operação</span><strong class="kamba-v2-confirm-amount">${formatKz(t.amount)}</strong><div class="kamba-v2-confirm-row"><span>Tipo</span><strong>${t.typeLabel}</strong></div><div class="kamba-v2-confirm-row"><span>Destinatário / serviço</span><strong>${t.recipient}</strong></div><div class="kamba-v2-confirm-row"><span>${t.identifierLabel}</span><strong>${t.identifier}</strong></div>${t.note ? `<div class="kamba-v2-confirm-row"><span>Mensagem</span><strong>${t.note}</strong></div>` : ""}<div class="kamba-v2-confirm-row"><span>Saldo depois da simulação</span><strong>${formatKz(t.sourceFeature === "retirar" ? kambaDemoState.balance + t.amount : t.sourceFeature === "poupar" ? kambaDemoState.balance - t.amount : kambaDemoState.balance - t.amount)}</strong></div><div class="kamba-v2-confirm-row"><span>Poupança depois da simulação</span><strong>${formatKz(t.sourceFeature === "retirar" ? kambaDemoState.saved - t.amount : t.sourceFeature === "poupar" ? kambaDemoState.saved + t.amount : kambaDemoState.saved)}</strong></div><p class="kamba-v2-demo-note">Ainda não foi concluída qualquer operação. Podes voltar e corrigir os dados.</p></div><button type="button" class="kamba-v2-primary" data-kamba-step="pin">Os dados estão correctos · Continuar <span>→</span></button><button type="button" class="kamba-v2-secondary kamba-v2-full-button" data-kamba-edit>← Corrigir dados</button></div>`;
  }
  if (feature === "pin" && kambaDemoState.pending) {
    forms.pin = `<div class="kamba-v2-workspace"><button type="button" class="kamba-v2-back" data-kamba-step="review">← Voltar à revisão</button><span class="kamba-v2-kicker">PASSO 3 DE 3 · AUTORIZAÇÃO FICTÍCIA</span><h3>Confirma com um PIN de demonstração.</h3><p>Este PIN é apenas para testar o fluxo visual. Não uses o teu PIN bancário verdadeiro.</p><div class="kamba-v2-pin-card"><div class="kamba-v2-pin-lock">⌑</div><strong>${formatKz(kambaDemoState.pending.amount)}</strong><span>${kambaDemoState.pending.typeLabel} · ${kambaDemoState.pending.recipient}</span><form data-kamba-form="pin"><label>PIN fictício de 4 dígitos<input name="pin" required type="password" inputmode="numeric" pattern="[0-9]{4}" minlength="4" maxlength="4" placeholder="••••" autocomplete="off"></label><button class="kamba-v2-primary" type="submit">Autorizar simulação <span>✓</span></button></form></div></div>`;
  }
  if (feature === "receipt" && kambaDemoState.lastReceipt) {
    const r = kambaDemoState.lastReceipt;
    forms.receipt = `<div class="kamba-v2-workspace kamba-v2-receipt"><div class="kamba-v2-success-mark">✓</div><span class="kamba-v2-kicker">SIMULAÇÃO CONCLUÍDA</span><h3>Operação efectuada com sucesso!</h3><p>O fluxo demonstrativo terminou. Nenhum dinheiro real foi movimentado.</p><div class="kamba-v2-receipt-card"><div class="kamba-v2-receipt-brand"><span class="kamba-v2-brandmark">K+</span><div><strong>Kamba+</strong><small>Comprovativo de demonstração</small></div></div><span class="kamba-v2-receipt-label">Valor simulado</span><strong class="kamba-v2-confirm-amount">${formatKz(r.amount)}</strong><div class="kamba-v2-confirm-row"><span>Operação</span><strong>${r.typeLabel}</strong></div><div class="kamba-v2-confirm-row"><span>Destinatário / serviço</span><strong>${r.recipient}</strong></div><div class="kamba-v2-confirm-row"><span>Referência</span><strong>${r.reference}</strong></div><div class="kamba-v2-confirm-row"><span>Data</span><strong>${r.date}</strong></div><div class="kamba-v2-receipt-stamp">✓ CONFIRMADO · DEMO</div></div><button type="button" class="kamba-v2-primary" data-kamba-receipt-copy>Copiar comprovativo <span>↗</span></button><button type="button" class="kamba-v2-secondary kamba-v2-full-button" data-feature="cliente">Voltar ao início</button></div>`;
  }
  forms.receber = `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">PEDIDO DE PAGAMENTO</span><h3>Recebe com simplicidade.</h3><p>Cria um pedido fictício para mostrar como poderias solicitar um pagamento.</p><div class="kamba-v2-goal-card"><div class="kamba-v2-goal-head"><div><span>O teu código de demonstração</span><strong>KAMBA+ · PEDIDO QR</strong></div><span class="kamba-v2-goal-symbol">▦</span></div><p>Este código é ilustrativo e não pode receber dinheiro real.</p></div><button type="button" class="kamba-v2-primary" data-feature="atividade">Ver movimentos recentes →</button><p class="kamba-v2-demo-note">Nenhum pedido real foi enviado.</p></div>`;
  forms.carteira = `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">A TUA CARTEIRA</span><h3>O teu dinheiro, num só lugar.</h3><div class="kamba-v2-balance-card"><div><span>Saldo disponível</span><strong>${balance}</strong><small>Disponível para utilizar</small></div><div class="kamba-v2-balance-summary"><div><span>🐷 Poupanças reservadas</span><strong>${formatKz(kambaDemoState.saved)}</strong></div><div><span>👛 Total</span><strong>${formatKz(totalWallet)}</strong></div></div></div><div class="kamba-v2-savings-actions"><button type="button" class="kamba-v2-primary" data-feature="transferir">↗ Transferir</button><button type="button" class="kamba-v2-secondary" data-feature="poupar">🎯 Objectivos</button></div><h4>Movimentos recentes</h4><section class="kamba-v2-panel kamba-v2-recent-panel">${rows}</section><button type="button" class="kamba-v2-text-button" data-feature="atividade">Ver todos os movimentos →</button></div>`;
  forms.analise = `<div class="kamba-v2-workspace kamba-v3-analysis">${back}<span class="kamba-v2-kicker">RESUMO FINANCEIRO</span><h3>O teu panorama financeiro.</h3><p>Um resumo ilustrativo do dinheiro disponível e reservado nesta sessão.</p><div class="kamba-v2-analysis-grid"><div><span>👛 Disponível</span><strong>${formatKz(kambaDemoState.balance)}</strong></div><div><span>🐷 Poupado</span><strong>${formatKz(kambaDemoState.saved)}</strong></div><div><span>💰 Total</span><strong>${formatKz(totalWallet)}</strong></div><div><span>🎯 Objectivo concluído</span><strong>${progress}%</strong></div></div><div class="kamba-v3-analysis-goals"><div class="kamba-v3-analysis-section-head"><span>🎯</span><div><strong>Os teus objectivos</strong><small>Acompanha cada conquista</small></div><button type="button" data-feature="poupar">Ver todos →</button></div>${kambaDemoState.goals.map(g => { const pct = Math.round(Math.min(100, Number(g.saved || 0) / Math.max(1, Number(g.target || 1)) * 100)); return `<div class="kamba-v3-analysis-goal"><div class="kamba-v3-analysis-goal-icon">${kambaEscape(g.icon || "🎯")}</div><div class="kamba-v3-analysis-goal-copy"><span>OBJECTIVO DE POUPANÇA</span><strong>${kambaEscape(g.name)}</strong><p>${formatKz(g.saved)} poupados de ${formatKz(g.target)}</p><div class="kamba-v2-progress"><span style="width:${pct}%"></span></div><small>${pct}% concluído</small></div></div>`; }).join("")}</div><button type="button" class="kamba-v2-primary" data-feature="poupar">Gerir poupanças →</button><p class="kamba-v2-demo-note">Valores fictícios para fins de demonstração.</p></div>`;
  forms.planeamento = `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">PLANEAR DESPESAS</span><h3>Prepara o que vem a seguir.</h3><p>Simula uma despesa futura para perceber quanto poderá sobrar no teu saldo.</p><div class="kamba-v2-scenario"><label>Nome da despesa<input id="kambaExpenseName" value="Renda" maxlength="40"></label><label>Valor previsto (Kz)<input id="kambaExpenseAmount" type="number" min="0" value="25000"></label><div class="kamba-v2-scenario-result"><span>Saldo estimado depois da despesa</span><strong id="kambaExpenseResult">${formatKz(kambaDemoState.balance-25000)}</strong><small>Esta simulação não desconta o valor da tua carteira.</small></div></div><p class="kamba-v2-demo-note">🗓️ Planear agora ajuda a evitar surpresas depois.</p></div>`;
  forms.atividade = `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">MOVIMENTOS</span><h3>A tua actividade.</h3><p>Selecciona qualquer movimento para consultar os seus detalhes.</p><section class="kamba-v2-panel kamba-v2-recent-panel">${kambaDemoState.movements.map((item,index) => `<button type="button" class="kamba-v2-movement kamba-v2-movement-row" data-kamba-movement="${index}"><span class="kamba-v2-movement-icon">${kambaMovementEmoji(item)}</span><span class="kamba-v2-movement-copy"><strong>${kambaEscape(item.title)}</strong><small>${kambaEscape(item.type)}</small></span><strong class="${item.amount >= 0 ? "is-positive" : "is-negative"}">${item.amount >= 0 ? "+" : "−"}${formatKz(Math.abs(item.amount))}</strong></button>`).join("")}</section><p class="kamba-v2-demo-note">Histórico local e fictício desta demonstração.</p></div>`;
  if (feature === "movimento" && Number.isInteger(kambaDemoState.selectedMovement) && kambaDemoState.movements[kambaDemoState.selectedMovement]) { const m = kambaDemoState.movements[kambaDemoState.selectedMovement]; forms.movimento = `<div class="kamba-v2-workspace">${back}<span class="kamba-v2-kicker">DETALHES DO MOVIMENTO</span><h3>${kambaEscape(m.title)}</h3><div class="kamba-v2-confirm-card"><span>Valor registado na simulação</span><strong class="kamba-v2-confirm-amount">${m.amount >= 0 ? "+" : "−"}${formatKz(Math.abs(m.amount))}</strong><div class="kamba-v2-confirm-row"><span>Tipo</span><strong>${kambaEscape(m.type)}</strong></div><div class="kamba-v2-confirm-row"><span>Referência</span><strong>${kambaEscape(m.reference || "MOV-DEMO-INICIAL")}</strong></div><div class="kamba-v2-confirm-row"><span>Data</span><strong>${kambaEscape(m.date || "Movimento de exemplo")}</strong></div><div class="kamba-v2-receipt-stamp">REGISTO FICTÍCIO · KAMBA+</div></div><button type="button" class="kamba-v2-secondary kamba-v2-full-button" data-feature="atividade">← Voltar à actividade</button></div>`; }
  forms.perfil = `<div class="kamba-v2-workspace kamba-v3-profile"><span class="kamba-v2-kicker">👤 ESPAÇO PESSOAL</span><h3>O teu perfil</h3><p>Os teus dados e preferências da conta Kamba+.</p><div class="kamba-v3-profile-hero"><div class="kamba-v3-profile-avatar-wrap"><span class="kamba-v2-profile-avatar">${kambaEscape(initials)}</span><span class="kamba-v3-profile-online"></span></div><div class="kamba-v3-profile-hero-copy"><strong>${kambaEscape(displayName)}</strong><small>${kambaEscape(profile.email || "E-mail ainda não definido")}</small><span class="kamba-v3-profile-status">✓ Conta de demonstração activa</span></div><span class="kamba-v3-profile-brand">K+</span></div><div class="kamba-v3-profile-details"><div><span>✉️</span><small>E-mail</small><strong>${kambaEscape(profile.email || "Não indicado")}</strong></div><div><span>📱</span><small>Telefone</small><strong>${kambaEscape(profile.phone || "Não indicado")}</strong></div><div><span>🎂</span><small>Nascimento</small><strong>${kambaEscape(profile.birthDate || "Não indicado")}</strong></div><div><span>🛡️</span><small>Estado da conta</small><strong>Perfil de teste</strong></div></div><div class="kamba-v3-profile-edit-head"><span>✏️</span><div><strong>Editar os teus dados</strong><small>Podes actualizar estas informações quando quiseres.</small></div></div><form data-kamba-form="profile-edit"><label>Nome completo<input name="name" required maxlength="70" value="${kambaEscape(profile.name || displayName)}" autocomplete="name"></label><label>Endereço de e-mail<input name="email" type="email" required maxlength="120" value="${kambaEscape(profile.email || "")}" autocomplete="email"></label><label>Telefone (opcional)<input name="phone" type="tel" maxlength="24" value="${kambaEscape(profile.phone || "")}" placeholder="Ex.: 923 000 000" autocomplete="tel"></label><label>Data de nascimento (opcional)<input name="birthDate" type="date" value="${kambaEscape(profile.birthDate || "")}" autocomplete="bday"></label><button class="kamba-v2-primary" type="submit">💾 Guardar alterações</button></form><div class="kamba-v2-security-list kamba-v3-profile-info"><div><span>🧪</span><div><strong>Conta de demonstração</strong><small>Não está ligada a um banco e não movimenta dinheiro real.</small></div></div><div><span>🔐</span><div><strong>Privacidade e segurança</strong><small>Não uses dados pessoais sensíveis nem palavras-passe de outros serviços.</small></div></div></div><button type="button" class="kamba-v2-secondary kamba-v3-logout" data-kamba-logout>↪ Terminar sessão</button><button type="button" class="kamba-v2-secondary" data-kamba-reset>↻ Reiniciar demonstração</button></div>`;
  const selected = feature === "cliente" ? home : (forms[feature] || home);
  const navActive = key => ({cliente:"inicio",carteira:"carteira",atividade:"movimentos",movimento:"movimentos",analise:"analise",resumo:"analise",perfil:"perfil"}[feature] || "inicio") === key;
  const bottomNav = `<nav class="kamba-v2-bottom-nav" aria-label="Navegação Kamba+"><button type="button" class="${navActive("inicio") ? "active" : ""}" data-feature="cliente"><span>🏠</span><small>Início</small></button><button type="button" class="${navActive("carteira") ? "active" : ""}" data-feature="carteira"><span>👛</span><small>Carteira</small></button><button type="button" class="${navActive("movimentos") ? "active" : ""}" data-feature="atividade"><span>🔄</span><small>Movimentos</small></button><button type="button" class="${navActive("analise") ? "active" : ""}" data-feature="analise"><span>📊</span><small>Análise</small></button><button type="button" class="${navActive("perfil") ? "active" : ""}" data-feature="perfil"><span>👤</span><small>Perfil</small></button></nav>`;
  return `<div class="kamba-v2-mobile-app">${selected}${bottomNav}</div>`;
}
let kambaClientPanel = "";
if (currentConcept === "kamba") kambaClientPanel = renderKambaLab(currentFeature);


    conceptSystemContent.innerHTML =
        `
        <div class="concept-system-header">

            <div>

                <span class="concept-system-category">
                    ${data.category}
                </span>

                <h2>
                    ${data.name}
                </h2>

            </div>

            <span class="concept-system-status">
                ${data.status}
            </span>

        </div>


        <div class="concept-system-preview">

            <div class="concept-preview-top">

                <span>
                    ${preview.eyebrow}
                </span>

            </div>


            <div class="concept-preview-main">

                <h3>
                    ${preview.title}
                </h3>

                <strong>
                    ${preview.value}
                </strong>

                <span>
                    ${preview.label}
                </span>

                <p>
                    ${preview.secondary}
                </p>

                ${kambaClientPanel}

            </div>


           ${
            currentConcept !== "kamba"
            ?
            `
                <div class="concept-preview-metrics">
        
                    ${preview.metrics.map(
                        function(metric) {
        
                            return `
                                <div class="concept-preview-metric">
        
                                    <span>
                                        ${metric}
                                    </span>
        
                                    <strong>
                                        —
                                    </strong>
        
                                </div>
                            `;
        
                        }
                    ).join("")}
        
                </div>
            `
            :
            ""
        }




        <div class="concept-system-description">

            <span>
                ${data.name}
            </span>

            <h3>
                ${(data.features[currentFeature] || { title: currentFeature === "atividade" ? "Actividade" : currentFeature === "perfil" ? "Perfil" : "Kamba+" }).title}
            </h3>

            <p>
                ${description}
            </p>

        </div>
        `;

    if (conceptModal) conceptModal.classList.toggle("kamba-app-mode", currentConcept === "kamba");

}


/* =========================================================
   ATUALIZAR NAVEGAÇÃO DO MODAL
========================================================= */

function updateModalNavigation() {

    renderConceptInterface();

}


/* KAMBA+ — interacções locais, exclusivamente fictícias */
if (conceptSystemContent) {
  conceptSystemContent.addEventListener("click", event => {
    const authSwitch = event.target.closest("[data-kamba-auth-switch]");
    if (authSwitch) { const target = authSwitch.getAttribute("data-kamba-auth-switch"); kambaDemoState.authMode = target === "register" ? "register" : "login"; currentFeature = target === "register" ? "auth-register" : "auth-login"; renderConceptInterface(); return; }
    if (event.target.closest("[data-kamba-forgot]")) { currentFeature = "auth-forgot"; renderConceptInterface(); return; }
    const showPassword = event.target.closest("[data-kamba-show-password]");
    if (showPassword) { const input = showPassword.parentElement.querySelector("input"); if (input) { input.type = input.type === "password" ? "text" : "password"; showPassword.textContent = input.type === "password" ? "◉" : "◎"; } return; }
    if (event.target.closest("[data-kamba-logout]")) { kambaDemoState.authMode = "login"; currentFeature = "auth-login"; renderConceptInterface(); return; }
    const featureButton = event.target.closest("[data-feature]");
    if (featureButton && currentConcept === "kamba") { event.preventDefault(); currentFeature = featureButton.getAttribute("data-feature"); renderConceptInterface(); return; }
    const selectGoalButton = event.target.closest("[data-kamba-select-goal]");
    if (selectGoalButton) { kambaDemoState.activeGoalId = selectGoalButton.getAttribute("data-kamba-select-goal"); syncKambaSavings(); currentFeature = "poupar"; renderConceptInterface(); return; }
    const movementButton = event.target.closest("[data-kamba-movement]");
    if (movementButton) { kambaDemoState.selectedMovement = Number(movementButton.getAttribute("data-kamba-movement")); currentFeature = "movimento"; renderConceptInterface(); return; }
    const stepButton = event.target.closest("[data-kamba-step]");
    if (stepButton) { currentFeature = stepButton.getAttribute("data-kamba-step"); renderConceptInterface(); return; }
    if (event.target.closest("[data-kamba-edit]")) { currentFeature = kambaDemoState.pending?.sourceFeature || "transferir"; renderConceptInterface(); return; }
    if (event.target.closest("[data-kamba-receipt-copy]")) { const r = kambaDemoState.lastReceipt; if (r) { const receiptText = `KAMBA+ · COMPROVATIVO DE DEMONSTRAÇÃO\nOperação: ${r.typeLabel}\nValor: ${formatKz(r.amount)}\nDestino: ${r.recipient}\nReferência: ${r.reference}\nData: ${r.date}\nSIMULAÇÃO — sem movimento de dinheiro real.`; if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(receiptText).then(() => { kambaDemoState.message = "Comprovativo copiado."; }).catch(() => { kambaDemoState.message = receiptText; }); else kambaDemoState.message = receiptText; } return; }
    if (event.target.closest("[data-kamba-reset]")) {
      kambaDemoState.balance = 70000; kambaDemoState.saved = 30000; kambaDemoState.goal = 100000; kambaDemoState.goals = [{ id: "computer", name: "Comprar um computador", target: 100000, saved: 30000, icon: "💻" }]; kambaDemoState.activeGoalId = "computer";
      kambaDemoState.movements = [{title:"Reserva para computador",type:"Depósito na poupança",amount:-30000,reference:"KMB-DEMO-START",date:"Movimento inicial de demonstração"},{title:"Saldo inicial de demonstração",type:"Saldo fictício",amount:100000,reference:"KMB-DEMO-START",date:"Movimento inicial de demonstração"}];
      kambaDemoState.pending = null; kambaDemoState.lastReceipt = null; kambaDemoState.profile = null; kambaDemoState.demoPassword = ""; kambaDemoState.authMode = "login"; kambaDemoState.message = "Laboratório reiniciado. Os dados continuam a ser fictícios."; currentFeature = "cliente"; renderConceptInterface();
    }
  });
  conceptSystemContent.addEventListener("submit", event => {
    const form = event.target.closest("form[data-kamba-form]"); if (!form || currentConcept !== "kamba") return; event.preventDefault();
    const values = new FormData(form), type = form.dataset.kambaForm;
    if (type === "auth-register") {
      const name = String(values.get("name") || "").trim(), email = String(values.get("email") || "").trim().toLowerCase(), password = String(values.get("password") || ""), confirmPassword = String(values.get("confirmPassword") || "");
      if (name.length < 2) { alert("Introduz o teu nome completo."); return; }
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(password)) { alert("A palavra-passe deve ter pelo menos 8 caracteres, uma maiúscula, uma minúscula, um número e um símbolo."); return; }
      if (password !== confirmPassword) { alert("As palavras-passe não coincidem."); return; }
      kambaDemoState.profile = { name, email, phone: String(values.get("phone") || "").trim(), birthDate: "" }; kambaDemoState.demoPassword = password; currentFeature = "auth-login"; kambaDemoState.message = "Conta de demonstração criada. Agora inicia sessão com o teu e-mail e palavra-passe."; alert("Conta de demonstração criada! Agora inicia sessão com o teu e-mail e palavra-passe."); renderConceptInterface(); return;
    }
    if (type === "auth-login") {
      const email = String(values.get("email") || "").trim().toLowerCase(), password = String(values.get("password") || "");
      if (!kambaDemoState.profile || email !== String(kambaDemoState.profile.email || "").toLowerCase() || password !== kambaDemoState.demoPassword) { alert("Não encontrámos essa conta nesta sessão. Cria uma conta de demonstração ou confirma os dados."); return; }
      currentFeature = "cliente"; kambaDemoState.message = "Sessão de demonstração iniciada."; renderConceptInterface(); return;
    }
    if (type === "auth-forgot") { alert("Esta é uma simulação: a recuperação real por e-mail ainda não está ligada a um servidor."); currentFeature = "auth-login"; renderConceptInterface(); return; }
    if (type === "goal-create") {
      const name = String(values.get("goalName") || "").trim(), target = Number(values.get("goalTarget")), icon = String(values.get("goalIcon") || "🎯");
      if (name.length < 2 || !Number.isFinite(target) || target < 1000) { alert("Indica um nome e uma meta de pelo menos 1.000 Kz."); return; }
      const id = "goal-" + Date.now().toString(36); kambaDemoState.goals.push({ id, name, target, saved: 0, icon }); kambaDemoState.activeGoalId = id; syncKambaSavings(); kambaDemoState.message = "Nova poupança criada. Podes fazer o primeiro depósito quando quiseres."; currentFeature = "poupar"; renderConceptInterface(); return;
    }
    if (type === "profile-edit") {
      kambaDemoState.profile = { ...(kambaDemoState.profile || {}), name: String(values.get("name") || "").trim(), email: String(values.get("email") || "").trim().toLowerCase(), phone: String(values.get("phone") || "").trim(), birthDate: String(values.get("birthDate") || "") };
      currentFeature = "perfil"; kambaDemoState.message = "Os dados do perfil foram actualizados nesta sessão."; renderConceptInterface(); return;
    }
    if (type === "pin") {
      const pin = String(values.get("pin") || "");
      if (!/^\d{4}$/.test(pin)) { kambaDemoState.message = "Introduz um PIN fictício de quatro dígitos."; renderConceptInterface(); return; }
      const t = kambaDemoState.pending; if (!t) { currentFeature = "cliente"; renderConceptInterface(); return; }
      if (t.sourceFeature === "retirar" && t.amount > (kambaDemoState.goals.find(g => g.id === t.goalId)?.saved || 0)) { kambaDemoState.message = "O valor ultrapassa a poupança disponível."; currentFeature = "retirar"; kambaDemoState.pending = null; renderConceptInterface(); return; }
      if (t.sourceFeature === "poupar" && t.amount > kambaDemoState.balance) { kambaDemoState.message = "Saldo disponível insuficiente para este depósito."; currentFeature = "depositar"; kambaDemoState.pending = null; renderConceptInterface(); return; }
      if (["transferir","pagar"].includes(t.sourceFeature) && t.amount > kambaDemoState.balance) { kambaDemoState.message = "Saldo fictício insuficiente. Revê o valor."; currentFeature = t.sourceFeature; kambaDemoState.pending = null; renderConceptInterface(); return; }
      if (t.sourceFeature === "poupar") { kambaDemoState.balance -= t.amount; const goal = kambaDemoState.goals.find(g => g.id === t.goalId) || getActiveKambaGoal(); goal.saved += t.amount; kambaDemoState.activeGoalId = goal.id; syncKambaSavings(); }
      else if (t.sourceFeature === "retirar") { const goal = kambaDemoState.goals.find(g => g.id === t.goalId) || getActiveKambaGoal(); goal.saved = Math.max(0, goal.saved - t.amount); kambaDemoState.balance += t.amount; kambaDemoState.activeGoalId = goal.id; syncKambaSavings(); }
      else { kambaDemoState.balance -= t.amount; }
      const ref = "KMB-DEMO-" + Date.now().toString().slice(-8);
      kambaDemoState.movements.unshift({title:t.title, type:t.typeLabel + " · " + ref, amount:t.sourceFeature === "retirar" ? t.amount : -t.amount, reference:ref, date:new Date().toLocaleString("pt-AO")});
      kambaDemoState.lastReceipt = {amount:t.amount,typeLabel:t.typeLabel,recipient:t.recipient,reference:ref,date:new Date().toLocaleString("pt-AO")};
      kambaDemoState.pending = null; kambaDemoState.message = "Operação simulada concluída. Nenhum dinheiro real foi movimentado."; currentFeature = "receipt"; renderConceptInterface(); return;
    }
    const amount = Number(values.get("amount"));
    if (!Number.isFinite(amount) || amount < 100) { kambaDemoState.message = "Introduz um valor válido, igual ou superior a 100 Kz."; renderConceptInterface(); return; }
    if (["transfer","payment","save"].includes(type) && amount > kambaDemoState.balance) { kambaDemoState.message = "O valor ultrapassa o saldo disponível."; renderConceptInterface(); return; }
    if (type === "withdraw" && amount > getActiveKambaGoal().saved) { kambaDemoState.message = "O valor ultrapassa a poupança disponível."; renderConceptInterface(); return; }
    let title = "Operação simulada", typeLabel = "Operação de demonstração", recipient = "", identifier = "", identifierLabel = "Referência", note = "", goal = kambaDemoState.goal;
    if (type === "transfer") {
      recipient = String(values.get("recipient") || "").trim(); identifier = String(values.get("identifier") || "").trim(); note = String(values.get("note") || "").trim();
      const mode = String(values.get("transferMode") || "kamba"), compact = identifier.replace(/[\s()-]/g, "");
      if (recipient.length < 2 || (mode === "kamba" ? !/^\+?\d{9,15}$/.test(compact) : !/^[A-Za-z0-9 ]{12,34}$/.test(identifier))) { kambaDemoState.message = "Confirma o nome e o número Kamba ou IBAN fictício."; renderConceptInterface(); return; }
      typeLabel = mode === "kamba" ? "Transferência Kamba Kamba" : "Transferência bancária (IBAN)"; identifierLabel = mode === "kamba" ? "Número Kamba" : "IBAN"; title = "Transferência para " + recipient;
    } else if (type === "payment") {
      recipient = String(values.get("service") || "Serviço"); identifier = String(values.get("reference") || "").trim(); identifierLabel = "Referência"; note = ""; title = "Pagamento: " + recipient; typeLabel = "Pagamento de serviço";
      if (identifier.length < 3) { kambaDemoState.message = "Introduz uma referência de demonstração válida."; renderConceptInterface(); return; }
    } else if (type === "save") {
      const goalId = String(values.get("goalId") || getActiveKambaGoal().id); const selectedGoal = kambaDemoState.goals.find(g => g.id === goalId) || getActiveKambaGoal();
      recipient = "Objectivo: " + selectedGoal.name; identifier = goalId; identifierLabel = "Objectivo"; goal = selectedGoal.target; title = "Depósito · " + selectedGoal.name; typeLabel = "Depósito na poupança";
    } else if (type === "withdraw") {
      const goalId = String(values.get("goalId") || getActiveKambaGoal().id); const selectedGoal = kambaDemoState.goals.find(g => g.id === goalId) || getActiveKambaGoal();
      recipient = "Da poupança para a carteira · " + selectedGoal.name; identifier = goalId; identifierLabel = "Objectivo"; title = "Retirada · " + selectedGoal.name; typeLabel = "Retirada da poupança";
    }
    kambaDemoState.pending = {sourceFeature: type === "transfer" ? "transferir" : type === "payment" ? "pagar" : type === "withdraw" ? "retirar" : "poupar", amount, title, typeLabel, recipient, identifier, identifierLabel, note, goal, goalId: type === "save" || type === "withdraw" ? String(values.get("goalId") || getActiveKambaGoal().id) : null};
    currentFeature = "review"; renderConceptInterface();
  });
  conceptSystemContent.addEventListener("change", event => {
    if (event.target.id === "kambaTransferMode") { const bank = event.target.value === "bank", label = conceptSystemContent.querySelector("#kambaIdentifierLabel"), input = label?.querySelector("input[name=identifier]"); if (label && input) { label.firstChild.textContent = bank ? "IBAN fictício do destinatário" : "Número Kamba do destinatário"; input.placeholder = bank ? "Ex.: AO06 0000 0000 0000 0000 0" : "Ex.: 923 000 000"; input.pattern = bank ? "[A-Za-z0-9 ]{12,34}" : "[0-9+ ()-]{9,18}"; input.inputMode = bank ? "text" : "tel"; } }
  });
  conceptSystemContent.addEventListener("input", event => {
    const num = id => Math.max(0, Number(conceptSystemContent.querySelector("#" + id)?.value) || 0);
    const setText = (id, value) => { const el = conceptSystemContent.querySelector("#" + id); if (el) el.textContent = value; };
    if (["kambaBudgetIncome","kambaBudgetNeeds","kambaBudgetWants","kambaBudgetSave"].includes(event.target.id)) { const left = num("kambaBudgetIncome") - num("kambaBudgetNeeds") - num("kambaBudgetWants") - num("kambaBudgetSave"); setText("kambaBudgetResult", formatKz(left)); setText("kambaBudgetAdvice", left < 0 ? "Atenção: as despesas e a poupança ultrapassam o rendimento." : left === 0 ? "Todo o rendimento está distribuído." : "O orçamento fica equilibrado; ainda tens margem disponível."); }
    if (["kambaGoalPrice","kambaGoalSaved","kambaGoalMonths"].includes(event.target.id)) { const months = Math.max(1,num("kambaGoalMonths")), missing = Math.max(0,num("kambaGoalPrice")-num("kambaGoalSaved")); setText("kambaGoalMonthly", formatKz(Math.ceil(missing/months))); setText("kambaGoalAdvice", missing === 0 ? "Objectivo atingido no cenário fictício." : "Estimativa sem juros; guarda este valor por mês para alcançar a meta no prazo escolhido."); }
    if (["kambaComparePrice","kambaCompareBalance","kambaCompareMonthly"].includes(event.target.id)) { const price = num("kambaComparePrice"), bal = num("kambaCompareBalance"), monthly = num("kambaCompareMonthly"); setText("kambaCompareResult", formatKz(bal-price)); setText("kambaCompareAdvice", price > bal ? `Faltam ${formatKz(price-bal)}; a ${formatKz(monthly)} por mês, precisarias de cerca de ${monthly ? Math.ceil((price-bal)/monthly) : "—"} mês(es) para completar o valor.` : `Podes pagar no cenário, mas ficarás com ${formatKz(bal-price)} disponíveis.`); }
    if (event.target.id === "kambaMonthly") { const value = Number(event.target.value), label = conceptSystemContent.querySelector("#kambaMonthlyLabel"), total = conceptSystemContent.querySelector("#kambaScenarioTotal"); if (label) label.textContent = formatKz(value); if (total) total.textContent = formatKz(value * 6); }
    if (event.target.id === "kambaFxAmount") { const value = Math.max(0, Number(event.target.value) || 0), result = conceptSystemContent.querySelector("#kambaFxResult"); if (result) result.textContent = new Intl.NumberFormat("pt-AO", {maximumFractionDigits:2}).format(value / 850) + " USD"; }
  });
}

/* =========================================================
   BOTÕES DO KOREVA LAB
========================================================= */

conceptCards.forEach(
    function (
        button
    ) {

        button.addEventListener(
            "click",
            function (
                event
            ) {

                event.preventDefault();
                event.stopPropagation();


                const concept =
                    button.getAttribute(
                        "data-concept"
                    );


                if (
                    !concept
                ) {

                    console.warn(
                        "Botão do Lab sem data-concept."
                    );

                    return;

                }


                openConceptModal(
                    concept
                );

            }
        );

    }
);


/* =========================================================
   BOTÃO FECHAR
========================================================= */

if (
    conceptModalClose
) {

    conceptModalClose.addEventListener(
        "click",
        function () {

            closeConceptModal();

        }
    );

}


/* =========================================================
   FECHAR AO CLICAR FORA
========================================================= */

if (
    conceptModal
) {

    conceptModal.addEventListener(
        "click",
        function (
            event
        ) {

            if (
                event.target ===
                conceptModal
            ) {

                closeConceptModal();

            }

        }
    );

}


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    function (
        event
    ) {

        if (
            event.key ===
            "Escape"
        ) {

            if (
                conceptModal &&
                conceptModal.classList.contains(
                    "is-open"
                )
            ) {

                closeConceptModal();

            }

        }

    }
);


/* =========================================================
   ACESSIBILIDADE
========================================================= */

if (
    conceptModal
) {

    conceptModal.setAttribute(
        "role",
        "dialog"
    );


    conceptModal.setAttribute(
        "aria-modal",
        "true"
    );


    conceptModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   OBSERVADOR DO ESTADO DO MODAL
========================================================= */

if (
    conceptModal
) {

    const modalObserver =
        new MutationObserver(
            function () {

                const isOpen =
                    conceptModal.classList.contains(
                        "is-open"
                    );


                if (
                    isOpen
                ) {

                    document.body.classList.add(
                        "modal-open"
                    );

                } else {

                    document.body.classList.remove(
                        "modal-open"
                    );

                }

            }
        );


    modalObserver.observe(
        conceptModal,
        {
            attributes: true,
            attributeFilter: [
                "class"
            ]
        }
    );

}


/* =========================================================
   FIM DA PARTE 3
   NÃO COLOCAR });
   AINDA.
========================================================= */

/* =========================================================
   KOREVA TECHNOLOGIES
   MAIN.JS — PARTE 4
   CONTACTO, LINKS, DIAGNÓSTICOS E FECHO
========================================================= */


/* =========================================================
   FORMULÁRIO DE CONTACTO
========================================================= */

const contactForm =
    document.querySelector(
        "#contactForm"
    );


if (
    contactForm
) {

    contactForm.addEventListener(
        "submit",
        function (
            event
        ) {

            event.preventDefault();


            const nameField =
                contactForm.querySelector(
                    '[name="name"]'
                );


            const emailField =
                contactForm.querySelector(
                    '[name="email"]'
                );


            const messageField =
                contactForm.querySelector(
                    '[name="message"]'
                );


            const name =
                nameField
                    ? nameField.value.trim()
                    : "";


            const email =
                emailField
                    ? emailField.value.trim()
                    : "";


            const message =
                messageField
                    ? messageField.value.trim()
                    : "";


            if (
                !name ||
                !email ||
                !message
            ) {

                alert(
                    "Por favor, preencha todos os campos obrigatórios."
                );

                return;

            }


            const whatsappMessage =
                "Olá Koreva Technologies." +
                "\n\n" +
                "Nome: " +
                name +
                "\n" +
                "Email: " +
                email +
                "\n\n" +
                "Mensagem:" +
                "\n" +
                message;


            openWhatsApp(
                whatsappMessage
            );


            contactForm.reset();

        }
    );

}


/* =========================================================
   LINKS EXTERNOS
========================================================= */

const externalLinks =
    document.querySelectorAll(
        'a[href^="http://"], a[href^="https://"]'
    );


externalLinks.forEach(
    function (
        link
    ) {

        const href =
            link.getAttribute(
                "href"
            );


        if (
            !href
        ) {
            return;
        }


        if (
            href.includes(
                "wa.me"
            )
        ) {

            return;

        }


        link.setAttribute(
            "target",
            "_blank"
        );


        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    }
);


/* =========================================================
   NAVEGAÇÃO DESKTOP
========================================================= */

function handleDesktopNavigation() {

    if (
        !mainNavigation
    ) {
        return;
    }


    if (
        window.innerWidth > 900
    ) {

        mainNavigation.classList.remove(
            "is-open"
        );


        if (
            menuToggle
        ) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

}


window.addEventListener(
    "resize",
    handleDesktopNavigation
);


handleDesktopNavigation();


/* =========================================================
   GARANTIR ANO ATUAL
========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(
    function (
        element
    ) {

        element.textContent =
            new Date().getFullYear();

    }
);


/* =========================================================
   DIAGNÓSTICO DO KOREVA LAB
========================================================= */

console.log(
    "Koreva Lab carregado."
);


console.log(
    "Conceitos disponíveis:",
    Object.keys(
        conceptData
    )
);


console.log(
    "Botões do Lab encontrados:",
    conceptCards.length
);


/* =========================================================
   VERIFICAÇÃO DOS CONCEITOS
========================================================= */

Object.keys(
    conceptData
).forEach(
    function (
        concept
    ) {

        if (
            !conceptOrders[
                concept
            ]
        ) {

            console.warn(
                "Conceito sem ordem definida:",
                concept
            );

        }

    }
);


/* =========================================================
   ESTADO INICIAL DO MODAL
========================================================= */

if (
    conceptModal
) {

    conceptModal.classList.remove(
        "is-open"
    );


    conceptModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   ESTADO INICIAL DO MENU
========================================================= */

if (
    mainNavigation
) {

    mainNavigation.classList.remove(
        "is-open"
    );

}


/* =========================================================
   JAVASCRIPT TOTALMENTE CARREGADO
========================================================= */

document.documentElement.classList.add(
    "js-loaded"
);


console.log(
    "Koreva Technologies — JavaScript carregado com sucesso."
);


/* =========================================================
   FIM DO MAIN.JS
========================================================= */

});


/* =========================================================
   KOREVA TECHNOLOGIES
   FORMULÁRIO DE PARCERIAS
   WhatsApp + preparação para e-mail
========================================================= */

(function () {

    "use strict";

    function initKorevaPartnershipForm() {

        const form = document.getElementById(
            "korevaPartnershipForm"
        );

        const whatsappButton = document.getElementById(
            "partnershipWhatsAppButton"
        );

        const emailButton = document.getElementById(
            "partnershipEmailButton"
        );

        const status = document.getElementById(
            "partnershipFormStatus"
        );

        // Se o formulário não existir, não interfere no site.
        if (!form || !whatsappButton || !emailButton || !status) {
            return;
        }

        // Número oficial de WhatsApp da Koreva.
        // Altera este valor quando quiseres atualizar o contacto.
        const KOREVA_WHATSAPP = "244949646647";

        // Preparação para a futura integração de e-mail.
        // Ainda não existe um endereço de destino configurado.
        const EMAIL_CONFIGURADO = false;


        /* =================================================
           RECOLHER OS DADOS DO FORMULÁRIO
        ================================================= */

        function obterDadosFormulario() {

            return {
                nome: document.getElementById("partnerName").value.trim(),

                empresa: document.getElementById("partnerCompany").value.trim(),

                email: document.getElementById("partnerEmail").value.trim(),

                telefone: document.getElementById("partnerPhone").value.trim(),

                tipo: document.getElementById("partnerType").value,

                area: document.getElementById("partnerArea").value.trim(),

                mensagem: document.getElementById("partnerMessage").value.trim(),

                consentimento: document.getElementById("partnerConsent").checked
            };

        }


        /* =================================================
           VALIDAR OS DADOS
        ================================================= */

        function validarFormulario() {

            if (!form.checkValidity()) {

                form.reportValidity();

                return false;

            }

            const dados = obterDadosFormulario();

            if (!dados.consentimento) {

                status.textContent =
                    "Autoriza a utilização dos dados para responder à proposta.";

                status.className =
                    "partnership-form-status error";

                return false;

            }

            return true;

        }


        /* =================================================
           ENVIAR PROPOSTA PELO WHATSAPP
        ================================================= */

        whatsappButton.addEventListener("click", function () {

            if (!validarFormulario()) {
                return;
            }

            const dados = obterDadosFormulario();

            const mensagem = [
                "Olá, Koreva Technologies!",
                "",
                "Gostaria de apresentar uma proposta de parceria.",
                "",
                "DADOS DO INTERESSADO",
                "Nome: " + dados.nome,
                "Empresa/Organização: " + (dados.empresa || "Não informado"),
                "E-mail: " + dados.email,
                "Telefone: " + dados.telefone,
                "",
                "TIPO DE PARCERIA",
                dados.tipo,
                "",
                "ÁREA DE ATUAÇÃO",
                dados.area || "Não informada",
                "",
                "PROPOSTA",
                dados.mensagem,
                "",
                "Autorização para tratamento dos dados: Sim",
                "",
                "Enviado através do website da Koreva Technologies."
            ].join("\n");

            const url =
                "https://wa.me/" +
                KOREVA_WHATSAPP +
                "?text=" +
                encodeURIComponent(mensagem);

            status.textContent =
                "A abrir o WhatsApp para confirmares o envio da proposta...";

            status.className =
                "partnership-form-status success";

            window.open(url, "_blank", "noopener,noreferrer");

        });


        /* =================================================
           PREPARAÇÃO PARA ENVIO POR E-MAIL
        ================================================= */

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!validarFormulario()) {
                return;
            }

            if (!EMAIL_CONFIGURADO) {

                status.textContent =
                    "O envio por e-mail ainda está a ser configurado. " +
                    "Por enquanto, podes enviar a tua proposta pelo WhatsApp.";

                status.className =
                    "partnership-form-status notice";

                whatsappButton.focus();

                return;

            }

            // A integração real com o serviço de e-mail
            // será adicionada quando o destino estiver definido.

        });


        /* =================================================
           MENSAGEM INICIAL
        ================================================= */

        status.textContent = "";

        console.log(
            "Koreva Technologies — formulário de parcerias carregado."
        );

    }


    // Compatibilidade com o carregamento da página.
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initKorevaPartnershipForm
        );

    } else {

        initKorevaPartnershipForm();

    }

})();


// =====================================================
// KOREVA — MODAL DE PARCERIAS
// =====================================================

(() => {
    "use strict";

    function initPartnershipModal() {

        const modal = document.getElementById("partnershipFormModal");
        const openButton = document.getElementById("openPartnershipForm");
        const closeButton = document.getElementById("closePartnershipForm");

        if (!modal || !openButton || !closeButton) {
            return;
        }

        let previousFocus = null;

        // ABRIR MODAL
        function openModal() {

            previousFocus = document.activeElement;

            modal.hidden = false;
            modal.setAttribute("aria-hidden", "false");

            document.body.classList.add("partnership-modal-open");

            requestAnimationFrame(() => {
                modal.classList.add("is-open");
                closeButton.focus();
            });
        }

        // FECHAR MODAL
        function closeModal() {

            modal.classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");

            document.body.classList.remove("partnership-modal-open");

            window.setTimeout(() => {

                modal.hidden = true;

                if (
                    previousFocus &&
                    typeof previousFocus.focus === "function"
                ) {
                    previousFocus.focus();
                }

            }, 250);
        }

        // EVENTO DO BOTÃO DE ABERTURA
        openButton.addEventListener("click", openModal);

        // EVENTO DO BOTÃO DE FECHO
        closeButton.addEventListener("click", closeModal);

        // FECHAR AO CLICAR FORA DO CONTEÚDO
        modal.addEventListener("click", (event) => {

            if (event.target === modal) {
                closeModal();
            }

        });

        // FECHAR COM A TECLA ESC
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape" && !modal.hidden) {
                closeModal();
            }

        });
    }

    // INICIALIZAR QUANDO O HTML ESTIVER PRONTO
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initPartnershipModal
        );

    } else {

        initPartnershipModal();

    }

})();

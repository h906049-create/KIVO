// ================================
// KIVO — SCRIPT PRINCIPAL
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🤖 Kivo iniciado.");
    console.log("🚀 Kivo Beta — v1.0.0-beta");


    // ================================
    // ANIMAÇÃO DOS ELEMENTOS
    // ================================

    const elements = document.querySelectorAll(
        ".hero-content, .hero-panel, .feature-card, .beta, .roadmap-item"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";

        setTimeout(() => {

            element.style.transition = "all 0.6s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }, 100 + (index * 100));

    });


    // ================================
    // NAVEGAÇÃO
    // ================================

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(link => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ================================
    // MODAL DE RECURSOS
    // ================================

    const featureCards = document.querySelectorAll(".feature-card");

    const featureModal = document.getElementById("featureModal");
    const modalClose = document.getElementById("modalClose");
    const modalOverlay = document.querySelector(".modal-overlay");

    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalFeatures = document.getElementById("modalFeatures");


    // ================================
    // VERIFICAÇÃO DO MODAL
    // ================================

    if (
        !featureModal ||
        !modalClose ||
        !modalOverlay ||
        !modalIcon ||
        !modalTitle ||
        !modalDescription ||
        !modalFeatures
    ) {

        console.error(
            "❌ Kivo: elementos do modal não foram encontrados."
        );

        return;

    }


    console.log(
        `✅ ${featureCards.length} cards encontrados.`
    );


    // ================================
    // INFORMAÇÕES DOS RECURSOS
    // ================================

    const features = {

        moderacao: {

            icon: "🛡️",

            title: "Moderação",

            description:
                "Ferramentas desenvolvidas para ajudar sua equipe a manter a comunidade segura, organizada e sob controle.",

            items: [
                "Sistema de punições",
                "Gerenciamento de usuários",
                "Ferramentas administrativas",
                "Logs e acompanhamento"
            ]

        },


        gerenciamento: {

            icon: "⚙️",

            title: "Gerenciamento",

            description:
                "Recursos pensados para simplificar o trabalho da equipe e facilitar a administração do servidor.",

            items: [
                "Configuração do servidor",
                "Ferramentas administrativas",
                "Gerenciamento de cargos",
                "Controles centralizados"
            ]

        },


        automacao: {

            icon: "🔧",

            title: "Automação",

            description:
                "Automatize tarefas repetitivas e permita que o Kivo cuide de processos enquanto sua equipe se concentra na comunidade.",

            items: [
                "Respostas automáticas",
                "Sistemas automatizados",
                "Ações baseadas em eventos",
                "Redução de tarefas manuais"
            ]

        },


        evolucao: {

            icon: "🚀",

            title: "Evolução",

            description:
                "O Kivo está em desenvolvimento contínuo, recebendo melhorias, correções e novos sistemas.",

            items: [
                "Atualizações frequentes",
                "Novos comandos",
                "Melhorias de desempenho",
                "Recursos baseados em feedback"
            ]

        }

    };


    // ================================
    // ABRIR MODAL
    // ================================

    function openFeature(featureName) {

        const feature = features[featureName];

        if (!feature) {

            console.error(
                "❌ Recurso não encontrado:",
                featureName
            );

            return;

        }


        // Atualiza ícone

        modalIcon.textContent = feature.icon;


        // Atualiza título

        modalTitle.textContent = feature.title;


        // Atualiza descrição

        modalDescription.textContent =
            feature.description;


        // Limpa lista anterior

        modalFeatures.innerHTML = "";


        // Cria os itens

        feature.items.forEach(item => {

            const element =
                document.createElement("div");

            element.className = "modal-feature";

            element.textContent = item;

            modalFeatures.appendChild(element);

        });


        // Abre modal

        featureModal.classList.add("active");

        document.body.classList.add("modal-open");

        document.body.style.overflow = "hidden";


        console.log(
            "📖 Abrindo recurso:",
            feature.title
        );

    }


    // ================================
    // CLIQUE NOS CARDS
    // ================================

    featureCards.forEach(card => {

        card.addEventListener("click", () => {

            const featureName =
                card.getAttribute("data-feature");

            openFeature(featureName);

        });

    });


    // ================================
    // FECHAR MODAL
    // ================================

    function closeModal() {

        featureModal.classList.remove("active");

        document.body.classList.remove("modal-open");

        document.body.style.overflow = "";

    }


    // Botão X

    modalClose.addEventListener(
        "click",
        closeModal
    );


    // Clique no fundo

    modalOverlay.addEventListener(
        "click",
        closeModal
    );


    // ================================
    // TECLA ESC
    // ================================

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            featureModal.classList.contains("active")
        ) {

            closeModal();

        }

    });


    // ================================
    // FINALIZAÇÃO
    // ================================

    console.log("✅ Sistemas carregados.");
    console.log("🖱️ Cards interativos ativados.");

});
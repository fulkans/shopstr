import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const faqSections = [
    {
      title: "Informações Gerais",
      items: [
        {
          title: "O que é o Shopstr?",
          content:
            "O Shopstr é um marketplace permissionless construído sobre o Nostr que possibilita comércio peer‑to‑peer usando Bitcoin. Ele oferece uma forma segura e privada de comprar e vender itens via Lightning Network e pagamentos com tokens Cashu.",
        },
        {
          title: "O que é Nostr?",
          content:
            "Nostr é um protocolo que permite que você assuma o controle da sua identidade digital e dos seus dados. Ninguém pode impedir você de publicar o que quiser, e você pode usar suas chaves Nostr para entrar em quaisquer aplicativos compatíveis, levando seu conteúdo consigo.",
        },
      ],
    },
    {
      title: "Pagamentos",
      items: [
        {
          title: "Quais métodos de pagamento são aceitos?",
          content:
            "Atualmente, o Shopstr suporta pagamentos em Bitcoin pela Lightning Network e Cashu. Esses meios permitem transações rápidas e com baixas taxas, preservando a sua privacidade.",
        },
        {
          title: "Como reivindico um pagamento em Cashu?",
          content:
            "Você pode reivindicar instantaneamente um token Cashu recebido para o endereço Lightning definido no seu perfil Nostr clicando em ‘reivindicar’ e depois em ‘resgatar’ na página de pedidos. Você também pode receber o token diretamente na carteira Cashu integrada e sacar para uma carteira Lightning externa a qualquer momento, ou copiar e colar o token em uma carteira Cashu externa (como Minibits, Coinos, cashu.me etc.). Definir sua preferência de pagamento para Lightning também automatiza essa etapa para você.",
        },
      ],
    },
    {
      title: "Vendas",
      items: [
        {
          title: "Como começo a vender no Shopstr?",
          content:
            "Para começar a vender, você precisa: 1) Criar uma conta Nostr ou entrar com suas chaves existentes; 2) Configurar seu perfil em configurações; 3) Anunciar seus produtos com descrições e imagens; 4) Começar a receber pedidos!",
        },
        {
          title: "Quais tipos de itens posso vender?",
          content:
            "O Shopstr suporta vários tipos de produtos, incluindo físicos, revenda, trocas, roupas, eletrônicos, colecionáveis e mais. Cada anúncio deve indicar claramente a categoria e eventuais requisitos de envio.",
        },
        {
          title: "Como funciona o envio?",
          content:
            "Os vendedores podem oferecer diferentes opções de envio, incluindo frete grátis, retirada local ou custo adicional de envio. O método e quaisquer restrições devem estar claros em cada anúncio. O cumprimento (envio/entrega) é de responsabilidade do próprio vendedor.",
        },
      ],
    },
    {
      title: "Comunidades",
      items: [
        {
          title: "O que são Comunidades?",
          content:
            "Comunidades são fóruns públicos mantidos pelos vendedores para interagir diretamente com seus clientes. Os vendedores podem publicar anúncios, atualizações e novidades sobre seus produtos, e qualquer usuário pode responder para tirar dúvidas ou dar feedback.",
        },
        {
          title: "Quem pode publicar em uma comunidade?",
          content:
            "Apenas o criador da comunidade e moderadores designados (normalmente o vendedor) podem criar novas publicações principais, chamadas de ‘anúncios’. Isso mantém o feed principal focado em atualizações oficiais.",
        },
        {
          title: "Quem pode responder aos anúncios?",
          content:
            "Qualquer pessoa pode responder a um anúncio. Porém, todas as respostas precisam ser aprovadas por um moderador antes de ficarem visíveis publicamente. Isso ajuda a manter um ambiente seguro e construtivo.",
        },
        {
          title: "Como crio minha própria comunidade?",
          content:
            "Se você é vendedor, pode criar e gerenciar suas comunidades em ‘Configurações’ -> ‘Gerenciar Comunidade’. Lá você cria novas comunidades ou edita as existentes.",
        },
        {
          title: "Posso criar mais de uma comunidade?",
          content:
            "Sim, vendedores podem criar e gerenciar várias comunidades. Você encontra todas as suas comunidades em ‘Configurações’ -> ‘Gerenciar Comunidade’.",
        },
        {
          title: "Como excluo uma comunidade?",
          content:
            "Você pode excluir uma comunidade criada na página ‘Gerenciar Comunidade’, em configurações. Atenção: essa ação é permanente e não pode ser desfeita.",
        },
      ],
    },
    {
      title: "Conta e Privacidade",
      items: [
        {
          title: "Como faço login com uma conta Nostr existente?",
          content:
            "Recomendamos entrar usando uma extensão (Alby, nos2x etc.) ou um bunker (Amber, nsec.app etc.) para manter sua chave privada segura. Também é possível entrar colando sua nsec e definindo uma senha para criptografá‑la e armazená‑la no navegador, mas isso não é recomendado, pois pode expor sua chave privada.",
        },
        {
          title: "Como minhas mensagens e dados ficam privados?",
          content:
            "Todas as mensagens são criptografadas usando o protocolo de mensagens do Nostr, especificamente o NIP‑17. Somente as partes envolvidas veem o que acontece. Seus dados ficam nos relays que você seleciona e não são acessíveis a terceiros.",
        },
        {
          title: "Por que não consigo ver minhas mensagens?",
          content:
            "Se você não consegue ver mensagens de pedidos ou dúvidas, provavelmente é por falta de permissões de criptografia/decodificação NIP‑44 na sua extensão ou bunker. Verifique nas configurações se o NIP‑44 é suportado e aprove as permissões. Se o problema persistir, também é possível visualizar mensagens via apps como 0xchat, Amethyst e outros clientes Nostr que suportem DMs NIP‑17.",
        },
      ],
    },
    {
      title: "Experiência do Cliente",
      items: [
        {
          title: "Existe um sistema de avaliações?",
          content:
            "Sim. O Shopstr implementa o NIP‑85 para avaliações, permitindo que compradores deixem feedback para vendedores e produtos, ajudando a construir confiança no marketplace. Para avaliar, encontre o botão de avaliação ao final da janela de mensagens de um pedido. Comerciantes também podem levar suas avaliações para outros marketplaces que suportem NIP‑85.",
        },
        {
          title: "Como entro em contato com um vendedor?",
          content:
            "Você pode contatar vendedores pelo sistema de mensagens criptografadas do Shopstr. Basta acessar um anúncio e clicar no perfil do vendedor para enviar uma mensagem segura.",
        },
        {
          title: "Posso devolver um item?",
          content:
            "Você pode falar diretamente com o vendedor para solicitar reembolso e iniciar a devolução.",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-light-bg pt-24 dark:bg-dark-bg md:pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-light-text dark:text-dark-text">
          Perguntas Frequentes
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-center text-light-text/80 dark:text-dark-text/80">
          Respostas para as dúvidas mais comuns sobre o uso do Shopstr
        </p>

        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-xl font-semibold text-light-text dark:border-gray-700 dark:text-dark-text">
              {section.title}
            </h2>

            <Accordion
              selectionMode="multiple"
              className="mb-6 px-0"
              variant="bordered"
            >
              {section.items.map((item, itemIndex) => (
                <AccordionItem
                  key={`${sectionIndex}-${itemIndex}`}
                  title={item.title}
                  classNames={{
                    base: "group",
                    title:
                      "text-md font-medium text-light-text dark:text-dark-text",
                    trigger:
                      "py-5 px-3 data-[hover=true]:bg-gray-50 dark:data-[hover=true]:bg-gray-900/50 transition-all rounded-lg",
                    content:
                      "py-2 px-3 text-light-text/90 dark:text-dark-text/90",
                  }}
                >
                  <p className="leading-relaxed text-light-text dark:text-dark-text">
                    {item.content}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

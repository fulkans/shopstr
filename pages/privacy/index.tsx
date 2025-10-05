import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function PrivacyPolicy() {
  const policyContent = [
    {
      title: "Introdução",
      content:
        "O Shopstr está comprometido em proteger sua privacidade. Como um marketplace permissionless, minimizamos a coleta e o processamento de dados para garantir sua privacidade e segurança. Esta política explica nossa abordagem ao tratamento de dados nesse contexto.",
    },
    {
      title: "Informações que Não Coletamos",
      content:
        "Como uma plataforma totalmente permissionless, sem backend centralizado, o Shopstr não coleta nem armazena: informações pessoais de identificação, dados de KYC (Know Your Customer), informações financeiras, rastreamento de uso ou análises de comportamento. Todos os dados permanecem sob controle do usuário por meio do protocolo Nostr e da rede Bitcoin.",
    },
    {
      title: "Dados do Protocolo Nostr",
      content:
        "As comunicações e anúncios via protocolo Nostr são distribuídos pelos relays selecionados e podem incluir: anúncios e metadados de produtos, mensagens públicas e atualizações, mensagens diretas criptografadas (visíveis apenas aos destinatários), e chaves públicas associadas à sua identidade Nostr. Os usuários escolhem a quais relays se conectar, determinando o conteúdo que veem e compartilham.",
    },
    {
      title: "Dados de Bitcoin e Lightning Network",
      content:
        "Todas as transações ocorrem na rede Bitcoin ou na Lightning Network e seguem seus respectivos modelos de privacidade. Isso pode incluir: valores de transação, endereços Bitcoin/Lightning ou pedidos de pagamento e registros com carimbo de data e hora. Transações com Cashu podem fornecer benefícios adicionais de privacidade quando implementadas.",
    },
    {
      title: "Uso do Site",
      content:
        "Nossa interface é estática e não usa cookies ou mecanismos de rastreamento. Quaisquer dados armazenados são mantidos localmente no seu navegador e incluem: chaves locais (se usar armazenamento no navegador), preferências do usuário, seleção de relays e configurações da interface. O Shopstr não tem acesso a essas informações locais.",
    },
    {
      title: "Serviços de Terceiros",
      content:
        "Os usuários podem interagir com: nós da rede Bitcoin e da Lightning Network, relays do Nostr (selecionados por você) e infraestrutura auto‑hospedada. Cada serviço de terceiros possui suas próprias práticas de privacidade. Recomendamos revisar as políticas de privacidade de quaisquer relays ou processadores de pagamento que você utilizar.",
    },
    {
      title: "Medidas de Segurança",
      content:
        "A segurança é mantida por: verificação de código aberto (nossa base é pública), protocolos criptográficos para comunicações seguras, segurança da rede Bitcoin para transações e medidas de segurança no lado do cliente. Os usuários são responsáveis por manter a segurança de suas chaves privadas e carteiras.",
    },
    {
      title: "Direitos e Controle do Usuário",
      content:
        "Como uma plataforma permissionless, os usuários mantêm controle total sobre: chaves privadas e fundos, anúncios de produtos, seleção de relays, preferências de comunicação e armazenamento local de dados. Você pode excluir dados locais a qualquer momento nas configurações do navegador. Devido à natureza distribuída, mensagens e anúncios publicados em relays Nostr podem persistir conforme as políticas de retenção de cada relay.",
    },
    {
      title: "Alterações nesta Política",
      content:
        "Quaisquer atualizações desta política de privacidade serão publicadas nesta página. Como uma plataforma permissionless, mudanças fundamentais no tratamento de dados são improváveis, já que operamos com protocolos abertos e mínima coordenação central.",
    },
    {
      title: "Informações de Contato",
      content:
        "Para questões relacionadas à privacidade, você pode contatar a equipe do Shopstr por nossos canais no Nostr ou pelo repositório no GitHub.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-light-bg pt-24 dark:bg-dark-bg md:pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-light-text dark:text-dark-text">
          Política de Privacidade
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-center text-light-text/80 dark:text-dark-text/80">
          Como o Shopstr protege sua privacidade
        </p>

        <div className="mb-4 text-right text-sm text-light-text/70 dark:text-dark-text/70">
          Última atualização: 2025-04-25
        </div>

        <Accordion
          selectionMode="multiple"
          className="mb-6 px-0"
          variant="bordered"
        >
          {policyContent.map((section, sectionIndex) => (
            <AccordionItem
              key={sectionIndex}
              title={
                <span className="font-medium text-light-text dark:text-dark-text">
                  {section.title}
                </span>
              }
              classNames={{
                base: "group",
                title: "text-md",
                trigger:
                  "py-5 px-3 data-[hover=true]:bg-gray-50 dark:data-[hover=true]:bg-gray-900/50 transition-all rounded-lg",
                content: "py-2 px-3 text-light-text/90 dark:text-dark-text/90",
              }}
            >
              <p className="leading-relaxed text-light-text dark:text-dark-text">
                {section.content}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

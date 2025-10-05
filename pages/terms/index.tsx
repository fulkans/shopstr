import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Tos() {
  const tosContent = [
    {
      title: "1. Natureza da Plataforma",
      content:
        "O Shopstr é um marketplace permissionless que opera sobre os protocolos Nostr e Bitcoin. Não mantemos custódia de fundos, produtos ou comunicações, nem atuamos como intermediário entre compradores e vendedores. A plataforma fornece uma interface para comércio peer‑to‑peer sem autoridade central.",
    },
    {
      title: "2. Seleção de Relays",
      content:
        "Os usuários têm controle total sobre quais relays Nostr se conectam e, consequentemente, quais produtos visualizam. O Shopstr não controla o conteúdo disponível nos diversos relays. Os usuários são responsáveis por configurar suas conexões de relay de acordo com suas preferências e regulamentações locais.",
    },
    {
      title: "3. Responsabilidades do Usuário",
      content:
        "Os usuários devem manter a segurança de suas chaves privadas e carteiras, compreender que transações são irreversíveis, verificar detalhes do vendedor antes de comprar e cumprir as regulamentações locais relativas a comércio, importações e tributação. Os vendedores são responsáveis pela precisão de seus anúncios e pela conformidade legal de seus produtos.",
    },
    {
      title: "4. Itens Proibidos",
      content:
        "Embora o Shopstr não tenha capacidade técnica para impedir anúncios, os usuários concordam em não anunciar ou vender bens ou serviços ilegais, substâncias nocivas, itens falsificados, propriedade roubada, ou quaisquer itens que violem as leis aplicáveis. A natureza comunitária do Nostr permite que os usuários escolham relays alinhados aos seus valores.",
    },
    {
      title: "5. Riscos de Transação",
      content:
        "Os usuários reconhecem que transações peer‑to‑peer possuem riscos inerentes, incluindo, mas não se limitando a: possibilidade de golpes, itens mal representados, complicações de envio e problemas no processamento de pagamentos. O Shopstr não pode intervir em disputas entre compradores e vendedores.",
    },
    {
      title: "6. Diretrizes de Anúncios",
      content:
        "Os anúncios devem conter descrições precisas, imagens claras, informações de preço corretas e detalhes transparentes de envio. Incentiva‑se que os vendedores respondam prontamente a dúvidas e mantenham padrões profissionais de comunicação.",
    },
    {
      title: "7. Requisitos Técnicos",
      content:
        "É necessária uma carteira Bitcoin Lightning compatível e/ou implementação Cashu para as transações. Um par de chaves Nostr é necessário para autenticação e comunicação criptografada. Os usuários devem garantir taxas de rede adequadas e manter conectividade estável com a internet.",
    },
    {
      title: "8. Isenções de Responsabilidade",
      content:
        "O Shopstr não é um serviço de custódia, não pode garantir a qualidade de produtos ou a confiabilidade de vendedores, não pode reverter transações em blockchain e não é responsável por erros do usuário ou perdas decorrentes de má gestão de chaves. Devido à natureza descentralizada da plataforma, o Shopstr não pode remover anúncios de relays do Nostr.",
    },
    {
      title: "9. Resolução de Disputas",
      content:
        "Quaisquer disputas devem ser resolvidas diretamente entre compradores e vendedores. Incentivamos a comunicação clara e honesta. O sistema de avaliações da plataforma ajuda a criar responsabilidade no marketplace, mas o Shopstr não pode impor resoluções ou oferecer reembolsos.",
    },
    {
      title: "10. Modificações",
      content:
        "Estes termos podem ser atualizados periodicamente. Os usuários são responsáveis por revisar alterações. O uso contínuo do Shopstr constitui aceitação dos termos vigentes.",
    },
    {
      title: "Contato",
      content:
        "Dúvidas sobre estes termos podem ser encaminhadas pelos nossos canais no Nostr ou pelo repositório do GitHub.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-light-bg pt-24 dark:bg-dark-bg md:pb-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-light-text dark:text-dark-text">
          Termos de Serviço
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-center text-light-text/80 dark:text-dark-text/80">
          Acordo do usuário e diretrizes de uso do Shopstr
        </p>

        <div className="mb-4 text-right text-sm text-light-text/70 dark:text-dark-text/70">
          Última atualização: 2025-04-25
        </div>

        <Accordion
          selectionMode="multiple"
          className="mb-6 px-0"
          variant="bordered"
        >
          {tosContent.map((section, sectionIndex) => (
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

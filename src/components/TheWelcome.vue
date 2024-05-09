<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      Política de Devoluções
    </template>

    <li>Informações claras sobre políticas de trocas e devoluções.</li>
    <li>Processo simplificado para devolver produtos.</li>
    <li>Garantia de satisfação e reembolso em caso de problemas.</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      Entrega Rápida
    </template>

    <li>Métodos de entrega rápida e eficiente.</li>
    <li>Opções de entrega expressa para clientes com pressa.</li>
    <li>Política de entrega no mesmo dia.</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>
      Variedade de Produtos
    </template>

    <li>Destaque para diferentes categorias de produtos.</li>
    <li>Novidades e lançamentos de produtos.</li>
    <li>Diversidade de marcas e opções para os clientes.</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      Atendimento ao Cliente
    </template>

    <li>Canal de suporte dedicado para clientes.</li>
    <li>Perguntas frequentes (FAQ) para responder dúvidas comuns.</li>
    <li>Formulário de contato e informações de suporte.</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>
      Experiência do Usuário
    </template>

    <li>Interface intuitiva e fácil de navegar.</li>
    <li>Personalização de recomendações de produtos.</li>
    <li>Avaliações e comentários de clientes para guiar compras.</li>
  </WelcomeItem>
</template>

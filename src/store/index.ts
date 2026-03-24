import { createStore } from 'vuex';
import { State, Product } from '../types';

export default createStore<State>({
  state: {
    products: [
      {
        id: '1',
        name: 'TrackFlow',
        shortDescription: 'Plataforma de inteligência logística com rastreamento em tempo real.',
        fullDescription: 'O TrackFlow é a solução definitiva para visibilidade total da sua logística. Monitore cada etapa da entrega, automatize notificações para clientes e reduza em até 40% o volume de suporte relacionado a "onde está meu pedido".',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000',
        category: 'Logística Inteligente',
        plans: [
          { interval: 'monthly', price: 149, savings: '' },
          { interval: 'quarterly', price: 397, savings: 'Economize 12%' },
          { interval: 'annual', price: 1297, savings: 'Economize 28%' }
        ],
        screenshots: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
          'https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1200'
        ],
        features: [
          'Rastreio GPS em Tempo Real',
          'Alertas via WhatsApp/SMS',
          'Dashboard de Performance',
          'Integração com 50+ Carriers',
          'Branding Personalizado',
          'Previsão de Entrega via IA',
          'Gestão de Devoluções',
          'API de Alta Performance'
        ],
        testimonials: [
          { user: 'Mariana Silva', role: 'CEO na LojaExpress', comment: 'O TrackFlow mudou a forma como nossos clientes veem a entrega. O suporte diminuiu drasticamente.', avatar: 'https://i.pravatar.cc/150?u=mariana' },
          { user: 'Carlos Oliveira', role: 'Gerente Logístico', comment: 'A precisão do rastreio é impressionante. A melhor ferramenta que já implementamos.', avatar: 'https://i.pravatar.cc/150?u=carlos' },
          { user: 'Juliana Lima', role: 'E-commerce Manager', comment: 'A página de rastreio personalizada aumentou nossa recompra em 15%. Sensacional!', avatar: 'https://i.pravatar.cc/150?u=juliana' }
        ]
      }
    ],
    selectedProduct: null,
    selectedPlanInterval: 'monthly'
  },
  mutations: {
    SET_SELECTED_PRODUCT(state, product: Product | null) {
      state.selectedProduct = product;
    },
    SET_SELECTED_PLAN_INTERVAL(state, interval: 'monthly' | 'quarterly' | 'annual') {
      state.selectedPlanInterval = interval;
    }
  },
  actions: {
    selectProduct({ commit }, product: Product | null) {
      commit('SET_SELECTED_PRODUCT', product);
      commit('SET_SELECTED_PLAN_INTERVAL', 'monthly'); // Reset to monthly when opening
    },
    setPlanInterval({ commit }, interval: 'monthly' | 'quarterly' | 'annual') {
      commit('SET_SELECTED_PLAN_INTERVAL', interval);
    }
  },
  getters: {
    allProducts: (state) => state.products,
    selectedProduct: (state) => state.selectedProduct,
    selectedPlanInterval: (state) => state.selectedPlanInterval,
    currentProductPlan: (state) => {
      if (!state.selectedProduct) return null;
      return state.selectedProduct.plans.find(p => p.interval === state.selectedPlanInterval) || state.selectedProduct.plans[0];
    }
  }
});

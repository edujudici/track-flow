<template>
  <div class="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#0066FF] selection:text-white overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div class="flex items-center gap-4 group cursor-pointer">
          <div class="w-12 h-12 bg-[#0066FF] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,102,255,0.5)] group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <span class="font-display text-3xl tracking-tighter uppercase italic leading-none">Track<span class="text-[#0066FF]">Flow</span></span>
        </div>
        
        <div class="hidden lg:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.3em] text-white/40">
          <a href="#preview" class="hover:text-[#0066FF] transition-colors relative group">
            Sistema
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066FF] transition-all group-hover:w-full"></span>
          </a>
          <a href="#features" class="hover:text-[#0066FF] transition-colors relative group">
            Recursos
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066FF] transition-all group-hover:w-full"></span>
          </a>
          <a href="#pricing" class="hover:text-[#0066FF] transition-colors relative group">
            Preços
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0066FF] transition-all group-hover:w-full"></span>
          </a>
        </div>

        <button @click="scrollToPricing" class="px-8 py-3.5 bg-[#0066FF] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#0052CC] hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-all active:scale-95">
          Começar Agora
        </button>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <!-- Background Gradients -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#0066FF]/20 blur-[180px] rounded-full animate-pulse"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#00FFFF]/10 blur-[180px] rounded-full animate-pulse" style="animation-delay: 3s"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-7">
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFFF] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#00FFFF]"></span>
              </span>
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-[#00FFFF]">Logística Inteligente 2.0</span>
            </div>
            
            <h1 class="font-display text-7xl md:text-[140px] leading-[0.82] tracking-tighter uppercase italic mb-12">
              Visibilidade <br />
              <span class="text-[#0066FF] drop-shadow-[0_0_30px_rgba(0,102,255,0.3)]">Absoluta.</span>
            </h1>
            
            <p class="text-2xl text-white/50 max-w-2xl mb-16 leading-tight font-medium">
              {{ product.shortDescription }} Reduza o suporte em até 40% e encante seus clientes com transparência total.
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-8">
              <button @click="scrollToPricing" class="w-full sm:w-auto px-12 py-6 bg-[#0066FF] text-white rounded-2xl font-black uppercase tracking-[0.1em] text-lg hover:shadow-[0_0_60px_rgba(0,102,255,0.5)] hover:-translate-y-2 transition-all active:scale-95">
                Ver Planos e Preços
              </button>
              <button @click="scrollToPreview" class="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.1em] text-lg hover:bg-white/10 transition-all">
                Explorar Sistema
              </button>
            </div>
          </div>

          <div class="lg:col-span-5 relative">
            <div class="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-[#0066FF]/20 group">
              <img :src="product.image" class="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000" alt="Dashboard Preview" referrerpolicy="no-referrer" />
              <div class="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 to-transparent pointer-events-none"></div>
            </div>
            
            <!-- Floating Data Card -->
            <div class="absolute -bottom-12 -left-12 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl hidden xl:block animate-float">
              <div class="text-black">
                <div class="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">Status da Frota</div>
                <div class="text-4xl font-black tracking-tighter mb-1">98.4%</div>
                <div class="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                  On-time Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- System Preview Section (Editorial Style) -->
    <section id="preview" class="py-48 bg-white text-black relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-32">
          <div class="lg:col-span-8">
            <span class="text-[11px] font-black uppercase tracking-[0.4em] text-[#0066FF] mb-8 block">Interface do Usuário</span>
            <h2 class="font-display text-7xl md:text-[120px] leading-[0.85] tracking-tighter uppercase italic">
              O Futuro do <br />
              <span class="text-[#0066FF]">Rastreio.</span>
            </h2>
          </div>
          <div class="lg:col-span-4">
            <p class="text-xl text-black/50 font-medium leading-relaxed">
              Uma experiência visualmente rica e tecnicamente superior. Projetada para quem não aceita menos que a perfeição logística.
            </p>
          </div>
        </div>

        <div class="space-y-32">
          <div v-for="(screenshot, idx) in product.screenshots" :key="idx" 
               class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
               :class="idx % 2 === 0 ? '' : 'lg:flex-row-reverse'">
            <div class="lg:col-span-8" :class="idx % 2 === 0 ? 'order-1' : 'lg:order-2'">
              <div class="relative group rounded-[3rem] overflow-hidden shadow-2xl border border-black/5">
                <img :src="screenshot" class="w-full h-auto hover:scale-105 transition-transform duration-1000" referrerpolicy="no-referrer" />
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
            <div class="lg:col-span-4" :class="idx % 2 === 0 ? 'order-2' : 'lg:order-1'">
              <div class="text-6xl font-display text-black/10 mb-6 italic">0{{ idx + 1 }}</div>
              <h3 class="text-4xl font-black uppercase tracking-tighter mb-6">Módulo de {{ idx === 0 ? 'Gestão' : idx === 1 ? 'Análise' : 'Experiência' }}</h3>
              <p class="text-lg text-black/60 font-medium leading-relaxed mb-10">
                {{ idx === 0 ? 'Controle cada pedido com precisão cirúrgica. Visualize rotas, motoristas e status em um mapa interativo de alta performance.' : 
                   idx === 1 ? 'Transforme dados brutos em decisões estratégicas. Identifique gargalos e otimize suas rotas com relatórios automáticos.' : 
                   'Sua marca em destaque. Ofereça uma página de rastreio personalizada que gera confiança e estimula novas compras.' }}
              </p>
              <div class="h-px w-24 bg-[#0066FF]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Marquee -->
    <section id="features" class="py-32 bg-[#0066FF] overflow-hidden">
      <div class="flex whitespace-nowrap animate-marquee">
        <div v-for="n in 2" :key="n" class="flex items-center gap-24 px-12">
          <div v-for="feature in product.features" :key="feature" class="flex items-center gap-6">
            <div class="w-3 h-3 bg-white rounded-full"></div>
            <span class="text-5xl md:text-8xl font-display uppercase italic text-white tracking-tighter">{{ feature }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section (Clean Utility) -->
    <section id="pricing" class="py-48 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-32">
          <h2 class="font-display text-7xl md:text-[120px] leading-[0.85] tracking-tighter uppercase italic mb-8">
            Investimento <br />
            <span class="text-[#0066FF]">Inteligente.</span>
          </h2>
          <p class="text-white/30 text-xl font-medium max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta ao volume da sua operação. Sem taxas ocultas, sem surpresas.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div 
            v-for="plan in product.plans" 
            :key="plan.interval"
            class="relative p-12 rounded-[3.5rem] border transition-all duration-500 flex flex-col group"
            :class="[
              plan.interval === 'quarterly' 
                ? 'bg-[#0066FF] border-[#0066FF] scale-105 z-10 shadow-[0_0_100px_rgba(0,102,255,0.3)]' 
                : 'bg-white/[0.03] border-white/10 hover:border-[#0066FF]/50'
            ]"
          >
            <div v-if="plan.savings" class="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-[11px] font-black text-[#0066FF] rounded-full uppercase tracking-[0.2em] shadow-2xl">
              {{ plan.savings }}
            </div>

            <div class="mb-16">
              <div class="text-[11px] font-black uppercase tracking-[0.3em] mb-6 opacity-40">
                {{ plan.interval === 'monthly' ? 'Mensal' : plan.interval === 'quarterly' ? 'Trimestral' : 'Anual' }}
              </div>
              <div class="flex items-baseline gap-2">
                <span class="text-7xl font-black tracking-tighter">R${{ plan.price }}</span>
                <span class="text-sm opacity-40 font-bold">/mês</span>
              </div>
            </div>

            <ul class="space-y-6 mb-16 flex-grow">
              <li v-for="f in product.features.slice(0, plan.interval === 'monthly' ? 3 : plan.interval === 'quarterly' ? 5 : 6)" :key="f" class="flex items-center gap-4 text-sm font-bold">
                <div class="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                {{ f }}
              </li>
            </ul>

            <button 
              class="w-full py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all active:scale-95"
              :class="[
                plan.interval === 'quarterly' 
                  ? 'bg-white text-[#0066FF] hover:bg-white/90' 
                  : 'bg-[#0066FF] text-white hover:bg-[#0052CC]'
              ]"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials (Brutalist Style) -->
    <section id="testimonials" class="py-48 bg-white text-black border-t border-black/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <h2 class="font-display text-7xl md:text-[120px] leading-[0.85] tracking-tighter uppercase italic">
            Vozes da <br />
            <span class="text-[#0066FF]">Eficiência.</span>
          </h2>
          <div class="text-right">
            <div class="text-5xl font-black tracking-tighter text-[#0066FF]">99.9%</div>
            <div class="text-[11px] font-black uppercase tracking-[0.3em] text-black/30">Satisfação do Cliente</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          <div v-for="t in product.testimonials" :key="t.user" class="p-16 bg-white hover:bg-[#0066FF] hover:text-white transition-all duration-500 group">
            <div class="flex items-center gap-5 mb-12">
              <img :src="t.avatar" class="w-20 h-20 rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div>
                <div class="font-black text-2xl tracking-tighter uppercase italic">{{ t.user }}</div>
                <div class="text-[10px] font-bold uppercase tracking-widest opacity-40">{{ t.role }}</div>
              </div>
            </div>
            <p class="text-3xl font-bold leading-[1.1] tracking-tight italic">"{{ t.comment }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-64 bg-black relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0066FF]/10 blur-[200px] rounded-full"></div>
      </div>
      
      <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 class="font-display text-7xl md:text-[160px] leading-[0.8] tracking-tighter uppercase italic mb-16">
          Pronto para <br />
          <span class="text-[#0066FF]">Escalar?</span>
        </h2>
        <button @click="scrollToPricing" class="px-20 py-8 bg-[#0066FF] text-white rounded-3xl font-black uppercase tracking-[0.2em] text-2xl hover:shadow-[0_0_100px_rgba(0,102,255,0.5)] hover:-translate-y-3 transition-all active:scale-95">
          Ativar TrackFlow
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-24 bg-black border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div class="md:col-span-2">
            <div class="flex items-center gap-4 mb-10">
              <div class="w-10 h-10 bg-[#0066FF] rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span class="font-display text-3xl tracking-tighter uppercase italic">TrackFlow</span>
            </div>
            <p class="text-white/30 text-lg max-w-sm leading-relaxed">
              Redefinindo a logística de última milha com inteligência artificial e visibilidade em tempo real.
            </p>
          </div>
          
          <div>
            <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-white/20 mb-10">Produto</h4>
            <ul class="space-y-6 text-sm font-bold text-white/50">
              <li><a href="#preview" class="hover:text-[#0066FF] transition-colors">Sistema</a></li>
              <li><a href="#features" class="hover:text-[#0066FF] transition-colors">Recursos</a></li>
              <li><a href="#pricing" class="hover:text-[#0066FF] transition-colors">Preços</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-white/20 mb-10">Legal</h4>
            <ul class="space-y-6 text-sm font-bold text-white/50">
              <li><a href="#" class="hover:text-[#0066FF] transition-colors">Privacidade</a></li>
              <li><a href="#" class="hover:text-[#0066FF] transition-colors">Termos</a></li>
              <li><a href="#" class="hover:text-[#0066FF] transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div class="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
            © 2026 TRACKFLOW LOGISTICS. TODOS OS DIREITOS RESERVADOS.
          </div>
          <div class="flex gap-8">
            <div v-for="i in 3" :key="i" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0066FF] transition-colors cursor-pointer">
              <div class="w-4 h-4 bg-white/20 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Product } from './types';

const store = useStore();

const product = computed<Product>(() => store.getters.allProducts[0]);

const scrollToPricing = () => {
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToPreview = () => {
  document.getElementById('preview')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.font-display {
  font-family: 'Anton', sans-serif;
}

html {
  scroll-behavior: smooth;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: #1a1a1a;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #0066FF;
}
</style>

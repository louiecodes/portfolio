<template>
  <section class="min-h-screen flex justify-center items-center">
    <div class="text-white text-center">
      <h1 class="text-5xl font-bold mb-12">{{ randomErrorMessage }}</h1>
      <router-link
        to="/"
        class="relative inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-white transition-all duration-200 bg-gray-900 hover:bg-gray-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-xl"
        >Regresar</router-link
      >
    </div>
  </section>
</template>
<script setup lang="ts">
const quotes = [
  'Error 404: El servidor viajó al futuro y aún no volvió.',
  '¿Probaste apagando y encendiendo la página?',
  'Esta página se fue a tomar mates. Vuelve después… o no.',
  '404: El bug está en otra parte.',
  'Si encuentras esta página, eres developer senior automáticamente.',
  'Misión fallida. Inténtalo de nuevo, soldado.',
  'Nivel 404 desbloqueado: La nada.',
  '¡Has encontrado un error legendario! Muy raro… y muy inútil.',
  'Esta no es la página que estás buscando — Obi-Wan Kenobi',
  '404: Thanos la eliminó con un chasquido.',
  'Sherlock dice que… esta página nunca existió.',
  '¿404? Nunca oí hablar de esa página.',
  '¿Qué es una página 404 y por qué hay tantas?',
  '👾 404: El pixel maestro se perdió en el camino.',
  'Insert coin to continue… (pero no va a funcionar).',
  'Parece que este destino no existe en el mapa.',
  'Esta página funciona en mi máquina.',
  'Aquí debería haber algo genial… pero no lo hay.'
];

const randomErrorMessage = quotes[Math.floor(Math.random() * quotes.length)];
</script>

<template>
  <div class="hero flex flex-row items-center justify-start gap-52">
    <figure>
      <img src="@/assets/img/portrait.png" alt="Photo de Maxime Lemesle" class="h-80 rounded"/>
    </figure>

    <div class="title dark:text-white text-left pr-16">
      <h1 class="text-6xl font-karla font-bold">Moi c'est Maxime,</h1>
      <div class="content mt-4">
        <div class="relative h-16 overflow-hidden">
          <p class="float-left font-karla text-2xl mr-4 leading-10">Je suis</p>
          <ul class="absolute top-0 left-0 pl-24 list-none m-0 animate-change">
            <li
              class="text-accent font-karla text-4xl font-semibold leading-10 pb-6"
            >
              Développeur Front-End
            </li>
            <li
              class="text-secondary font-karla text-4xl font-semibold leading-10 pb-6"
            >
              Développeur Mobile
            </li>
            <li
              class="text-accent font-karla text-4xl font-semibold leading-10 pb-6"
            >
              WebDesigner
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes change {
  0%, 20%, 100% {
    transform: translate3d(0, 0, 0);
  }
  35%, 55% {
    transform: translate3d(0, -33%, 0);
  }
  70%, 90% {
    transform: translate3d(0, -66%, 0);
  }
}

.animate-change {
  animation: change 10s infinite;
}
</style>
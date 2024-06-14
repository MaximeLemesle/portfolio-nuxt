<template>
  <section class="mx-32 my-20 flex flex-col items-center">
    <h1 class="text-6xl font-karla font-bold">ReadMe page</h1>
    <!-- CV -->
    <div class="content flex flex-col items-center w-4/5 m-12">
      <figure class="w-3/6">
        <img src="@/public/cv.png" alt="CV de Maxime" />
      </figure>
      <Button class="mx-auto mt-12" @click="shareCV">Partager mon CV</Button>
    </div>
  </section>
</template>
<script setup>
const shareCV = () => {
  const cvUrl = `${window.location.origin}/cv.png`;
  const title = 'CV de Maxime';
  const text = 'Voici le CV de Maxime.';

  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: cvUrl,
    })
    .then(() => {
      console.log('CV partagé avec succès');
    })
    .catch((error) => {
      console.error('Erreur lors du partage', error);
    });
  } else {
    alert('Le partage Web n\'est pas pris en charge dans ce navigateur.');
  }
};
</script>

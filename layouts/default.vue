<template>
  <div class="view">
    <h1 class="zen">m86 Links</h1>
    <Nuxt />
    <div class="google-ad">
        <p class="zen">スポンサードリンク</p>
        <adsbygoogle :ad-slot="'2670301961'" />
    </div>
    <a href="https://github.com/Chipsnet/link.m86.work/blob/master/PRIVACY.md" class="zen" target="_blank">プライバシーポリシー</a>
  </div>
</template>

<style scoped>
    .zen {
        font-family: 'Zen Kurenaido', sans-serif;
    }

    .view {
        max-width: 1200px;
        margin: 0 auto;
    }

    .google-ad {
        margin: 50px 0;
        text-align: center;
    }
</style>
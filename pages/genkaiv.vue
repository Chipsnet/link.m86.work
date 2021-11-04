<template>
    <div>
        <p class="zen">あなたは<span style="font-size: 1.5em">限界創作村</span>にアクセスしようとしています。<br>
        よろしければ5秒間お待ち下さい。自動的にアクセスします。</p>
        <a href="/" class="zen">アクセスしたいサイトと違う</a>
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            window.location.replace("https://discord.gg/T7twvvH6uB")
        }, 5000);
    }
}
</script>

<style scoped>
    .zen {
        font-family: 'Zen Kurenaido', sans-serif;
    }
</style>
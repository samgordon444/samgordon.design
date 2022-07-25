<template>
  <div class="px-6 lg:px-24 my-[112px] w-full">
    <Header />
    <div class="grid gap-12 lg:gap-24 grid-cols-1 lg:grid-cols-2">
      <li v-for="post of posts.reverse()" class="list-none">
        <!-- <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink> -->
        <div class="relative">
          <div class="absolute z-10 left-2 bottom-2 border border-dark bg-light w-16 h-16 rounded-full">
            <div class="absolute left-1/2 top-1.5 -translate-x-1/2 text-center leading-3 text-[22px]"><span class="text-lg">№.</span><br />{{ post.number }}</div>
          </div>
          <div class="relative pb-[100%] w-full bg-[#ffffff]">
            <img :src="post.image" class="absolute top-1/2 -translate-y-1/2 w-full" />
          </div>
        </div>
      </li>
    </div>
    <div class="pt-24">© Sam Gordon</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
  async asyncData({ $content }) {
    const posts = await $content().fetch();

    return {
      posts,
    };
  },
};
</script>
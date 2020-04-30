<template>
  <div>
    <div v-for="link in links" :key="link.href">
      <slot
        name="link"
        :link="link"
        :bookmark="{
          click: () => bookmark(link)
          }"
        :bookmarked="{
            style: [ !link.bookmarked ? { display: 'none' } : {} ]
            }"
        :unbookmarked="{
            style: [ link.bookmarked ? { display: 'none' } : {} ]
            }"
      ></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    links: { type: Array },
  },
  methods: {
    bookmark(link) {
      link.bookmarked = !link.bookmarked;
    },
  },
};
</script>

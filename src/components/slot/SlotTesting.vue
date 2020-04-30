<template>
  <div class="slot-test">
    <card>
      <h1 slot="header">Special features</h1>
      <div slot="body">
        <h5>Fish and Chips</h5>
        <p>Super delicious tbh.</p>
      </div>
    </card>

    <links-list :links="links">
      <div slot="link" slot-scope="{link, bookmark, bookmarked, unbookmarked}">
        <a :href="link.href">{{link.title}}</a>
        <b-icon-star v-bind="unbookmarked" v-on="bookmark"></b-icon-star>
        <b-icon-star-fill v-bind="bookmarked" v-on="bookmark"></b-icon-star-fill>
      </div>
    </links-list>

    <tags-input v-model="tags"></tags-input>
  </div>
</template>


<script>
import Card from "./Card";
import LinksList from "./LinksList";
import TagsInput from "./TagsInput";

export default {
  name: "HelloWorld",
  components: {
    Card,
    LinksList,
    TagsInput
  },
  data() {
    return {
      links: [
        { title: "Google", href: "https://www.google.com/", bookmarked: true },
        { title: "GitHub", href: "https://github.com/", bookmarked: false }
      ],
      tags: ["Testing", "Design"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

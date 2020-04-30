<template>
    <renderless-tags-input v-model="tags"  @input="(tags) => { $emit('input', tags) }">
      <div slot-scope="{tags, removeTag, inputEvents, inputAttrs}" class="tags-input">
        <span v-for="tag in tags" :key="tag">
          <span>{{tag}}</span>
          <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
        </span>

        <input placeholder="Add tag..." v-on="inputEvents" v-bind="inputAttrs" />
      </div>
    </renderless-tags-input>
</template>

<script>
  export default {
    props: ['value'],
  }
</script>
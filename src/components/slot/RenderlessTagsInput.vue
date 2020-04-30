<script>
export default {
  props: ["value"],
  data() {
    return {
      newTag: ""
    };
  },
  methods: {
    removeTag(tag) {
      this.$emit(
        "input",
        this.value.filter(t => t !== tag)
      );
    },
    addTag() {
      this.$emit("input", [...this.value, this.newTag]);
    }
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.value,
      removeTag: this.removeTag,
      addTag: this.addTag,
      inputEvents: {
        input: e => {
          this.newTag = e.target.value;
        },
        keydown: e => {
          if (e.keyCode === 13) this.addTag();
        }
      },
      inputAttrs: { value: this.newTag }
    });
  }
};
</script>

<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>Find your next job at Cone Corp.</h2>
  </section>
</template>
<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
      actions: ["Build", "Create", "Design", "Code"]
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const currentActionIndex = this.actions.indexOf(this.action) // 0
        const nextActionIndex = (currentActionIndex + 1) % 4
        this.action = this.actions[nextActionIndex]
      }, 3000)
    }
  }
}
</script>

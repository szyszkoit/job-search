<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span
      ><br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Cone Corp.</h2>
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
  computed: {
    actionClasses() {
      return {
        [this.action.toLocaleLowerCase()]: true
      }
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
<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a863;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>

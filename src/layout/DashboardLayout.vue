<template>
  <div>
    <DashboardHeader />
    <FadeTransition :duration="transDuration">
      <router-view />
    </FadeTransition>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import DashboardHeader from "../components/DashboardHeader";
export default {
  name: "DashboardLayout",
  components: {
    FadeTransition,
    DashboardHeader,
  },
  props: {
    transDuration: {
      type: Number,
      default: 300,
    },
  },
};
</script>
<template>
  <svg class="line-chart" :viewBox="viewBox">
    <g transform="translate(0, 10)">
      <path class="line-chart__line" :d="line" />
    </g>
  </svg>
</template>

<script>
import * as _ from "lodash";
import * as d3 from "d3";
export default {
  name: "LineChart",
  props: {
    width: {
      default: 500,
      type: Number,
    },
    height: {
      height: 270,
      type: Number,
    },
    data: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      padding: 60,
      //data: [99, 71, 78, 25, 36, 92],
    };
  },
  computed: {
    lineChartData: {
      get() {
        return this.data.split(",");
      },
    },
    rangeX() {
      const width = this.width - this.padding;
      return [0, width];
    },
    rangeY() {
      const height = this.height - this.padding;
      return [0, height];
    },
    path() {
      const x = d3.scaleLinear().range(this.rangeX);
      const y = d3.scaleLinear().range(this.rangeY);
      d3.axisLeft().scale(x);
      d3.axisTop().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, (d) => d)]);
      return d3
        .line()
        .x((d, i) => x(i))
        .y((d) => y(d));
    },
    line() {
      return this.path(this.lineChartData);
    },
    viewBox() {
      return `${_.min(this.data)} ${_.min(this.data)} ${this.width} ${
        this.height - _.max(this.data)
      }`;
    },
  },
};
</script>

<style lang="sass">
.line-chart
  margin: 25px
  &__line
    fill: none
    stroke: #76BF8A
    stroke-width: 3px
</style>
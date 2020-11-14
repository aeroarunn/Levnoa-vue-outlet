<template>
  <div>
    <div>
      <div>
        <h4>Basic Examples</h4>
        <b-card-group deck>
          <b-card>
            <b-card-text>
              <h2>Simple Line(Path) chart</h2>
              <LineChart
                title="Sample D3 SVG Line Chart"
                :data="lineChartData"
                :width="300"
                :height="200"
              />
            </b-card-text>
            <b-card-footer>
              <b-form
                @submit="onSubmitLineChartData"
                @reset="onReset"
                v-if="showLineChartForm"
              >
                <b-form-group
                  id="input-group-1"
                  label="Line Data:"
                  label-for="input-1"
                  description="provide comma seperated digits"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.lineChartData"
                    type="text"
                    required
                    placeholder="10,20,30,50,40,89..."
                    @keypress="onSubmitLineChartData"
                  ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </b-card-footer>
            <p> Line chart for : <hr> {{ lineChartData }} </p>
          </b-card>

          <b-card
            img-src="https://placekitten.com/1000/300"
            img-alt="Card image"
            img-bottom
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
      <div class="mt-4">
        <h4>Advance Examples</h4>
        <b-card
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-left
          class="mb-3"
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>

        <b-card
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-right
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import lodash from "lodash";
//import { FadeTransition } from "vue-transitions";
import LineChart from "../components/graphics/LineChart";

export default {
  name: "Home",
  components: {
    //FadeTransition,
    LineChart,
  },
  data() {
    return {
      _: lodash,
      lineChartData: "99, 71, 78, 25, 36, 92",
      showLineChartForm: true,
      form: {
        lineChartData: "",
      },
    };
  },
  methods: {
    onSubmitLineChartData() {
      this.lineChartData = this.form.lineChartData //.split(",");
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.lineChartData = "";
      this.lineChartData = "";
      //this.form.name = "";
      //this.form.food = null;
      //this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.showLineChartForm = false;
      this.$nextTick(() => {
        this.showLineChartForm = true;
      });
    },
  },
};
</script>

<style scoped>
</style>
<template>
  <div class="section3-wrapper" @click="toggleModalOff" ref="wrapper">
    <section class="section3 flex column a-center j-center">
      <form class="flex column a-start j-start">
        <h2>New Invoice</h2>
        <div class="flex row a-center j-start">
          <label for="invoiceId">Invoice Id</label>
          <input type="text" id="invoiceId" disabled value="4325" ref="invoiceId" />
        </div>
        <div class="flex row a-center j-start">
          <label for="date">Date</label>
          <input type="date" id="date" ref="date" @input="validateAttribute('date')" />
          <p class="invalid" v-if="dateValid === 0">Value is invalid, please correct!</p>
          <p class="valid" v-if="dateValid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="country">Country</label>
          <select id="country" ref="country" @input="validateAttribute('country')">
            <option value="Country" selected disabled>*Select country*</option>
            <option value="France">France</option>
            <option value="Poland">Poland</option>
            <option value="Spain">Spain</option>
          </select>
          <p class="invalid" v-if="countryValid === 0">Value is invalid, please correct!</p>
          <p class="valid" v-if="countryValid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="zipCode">Zip Code</label>
          <input type="text" id="zipCode" ref="zipCode" @input="validateAttribute('zipCode')" />
          <p class="invalid" v-if="zipCodeValid === 0">Value is invalid, please correct!</p>
          <p class="valid" v-if="zipCodeValid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="total">Total</label>
          <input type="number" id="total" ref="total" @input="validateAttribute('total')" />
          <p class="invalid" v-if="totalValid === 0">Value is invalid, please correct!</p>
          <p class="valid" v-if="totalValid === 1">Value is valid!</p>
        </div>
        <div class="buttons flex row a-center j-start">
          <button type="button" class="btn btn-cancel" @click="TOGGLE_MODAL_OFF">Cancel</button>
          <button type="button" class="btn btn-draft" @click="createInvoice('Draft')">
            Save as draft
          </button>
          <button type="button" class="btn btn-create" @click="createInvoice('Pending')">
            Create invoice
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AddInvoice',
  data() {
    return {
      dateValid: null,
      countryValid: null,
      zipCodeValid: null,
      totalValid: null,
    };
  },
  methods: {
    TOGGLE_MODAL_OFF() {
      this.$store.dispatch('TOGGLE_MODAL_OFF');
    },
    toggleModalOff(event) {
      if (event.target === this.$refs.wrapper) {
        this.$store.dispatch('TOGGLE_MODAL_OFF');
      }
    },
    ADD_INVOICE(status) {
      if (true) {
        const d = new Date(this.$refs.date.value);
        // placeholder for validation process
        this.$store.dispatch('ADD_INVOICE', {
          invoiceId: this.$refs.invoiceId.value,
          date: `${`${`0${d.getDate()}`.slice(-2)}.${`0${d.getMonth() + 1}`.slice(
            -2
          )}.${d.getFullYear()}`}`,
          // d.getDate()}.${d.getMonth()}.${d.getFullYear()}
          country: this.$refs.country.value,
          zipCode: this.$refs.zipCode.value,
          total: this.$refs.total.value,
          status,
        });
        this.$store.dispatch('TOGGLE_MODAL_OFF');
      }
    },
    validateAttribute(attribute) {
      if (attribute === 'date') {
        const d = new Date(this.$refs.date.value);
        const day = d.getDate();
        const month = d.getMonth();
        const year = d.getFullYear(0);
        if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1901 && year <= 2100) {
          this.dateValid = 1;
        } else {
          this.dateValid = 0;
        }
      } else if (attribute === 'country') {
        if (this.$refs.country.value !== 'Country') {
          this.countryValid = 1;
        } else {
          this.countryValid = 0;
        }
      } else if (attribute === 'zipCode') {
        if (this.$refs.zipCode.value.length >= 4 && this.$refs.zipCode.value.length <= 10) {
          this.zipCodeValid = 1;
        } else {
          this.zipCodeValid = 0;
        }
      } else if (
        this.$refs.total.value >= -100000 &&
        this.$refs.total.value <= 100000 &&
        this.$refs.total.value.length > 0
      ) {
        this.totalValid = 1;
      } else {
        this.totalValid = 0;
      }
    },
    validateForm() {
      return this.dateValid && this.countryValid && this.zipCodeValid && this.totalValid;
    },
    createInvoice(status) {
      this.validateAttribute('date');
      this.validateAttribute('country');
      this.validateAttribute('zipCode');
      this.validateAttribute('total');
      if (this.validateForm()) {
        this.ADD_INVOICE(status);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.section3-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.section3 {
  position: absolute;
  width: 700px;
  height: 700px;
  top: 150px;
  left: 40px;
  background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  border: 2px solid $white;
  border-radius: 5px;
  z-index: 99;

  form {
    height: 90%;
    width: 90%;

    h2 {
      font-size: 36px;
      color: $white;
      margin-bottom: 30px;
    }

    div {
      margin-bottom: 20px;
      label {
        color: $white;
        width: 100px;
      }

      input {
        width: 200px;
        padding: 2px 5px;
      }
      select {
        width: 200px;
        padding: 2px 5px;
      }
      p {
        margin-left: 15px;
      }
      .valid {
        color: $green-validation;
      }
      .invalid {
        color: $red-validation;
      }
    }
    .buttons {
      margin-top: 230px;
      width: 100%;

      .btn {
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        font-size: 16px;
        color: $white;
        transition: background-color 0.2s ease-out;
        &:hover {
          cursor: pointer;
        }
        white-space: nowrap;
      }

      .btn-cancel {
        background-color: $red;
        margin-right: 230px;
        &:hover {
          background-color: $red-hover;
        }
      }
      .btn-draft {
        background-color: $dark-gray;
        margin-right: 10px;
        &:hover {
          background-color: $dark-gray-hover;
        }
      }
      .btn-create {
        background-color: $blue;
        &:hover {
          background-color: $blue-hover;
        }
      }
    }
  }
}
</style>

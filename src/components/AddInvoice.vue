<template>
  <div class="section3-wrapper" @click="ToggleModalOff" ref="wrapper">
    <section class="section3 flex column a-center j-center">
      <form class="flex column a-start j-start">
        <h2>New Invoice</h2>
        <div class="flex row a-center j-start">
          <label for="invoiceId">Invoice Id</label>
          <input type="text" id="invoiceId" disabled value="#4325" ref="invoiceId" />
        </div>
        <div class="flex row a-center j-start">
          <label for="date">Date</label>
          <input type="date" id="date" ref="date" />
        </div>
        <div class="flex row a-center j-start">
          <label for="country">Country</label>
          <select id="country" ref="country">
            <option value="Country" selected disabled>*Select country*</option>
            <option value="France">France</option>
            <option value="Poland">Poland</option>
            <option value="Spain">Spain</option>
          </select>
        </div>
        <div class="flex row a-center j-start">
          <label for="zipCode">Zip Code</label>
          <input type="text" id="zipCode" ref="zipCode" />
        </div>
        <div class="flex row a-center j-start">
          <label for="total">Total</label>
          <input type="number" id="total" ref="total" />
        </div>
        <div class="buttons flex row a-center j-start">
          <button type="button" class="btn btn-cancel" @click="TOGGLE_MODAL_OFF">Cancel</button>
          <button type="button" class="btn btn-draft" @click="ADD_INVOICE('Draft')">
            Save as draft
          </button>
          <button type="button" class="btn btn-create" @click="ADD_INVOICE('Pending')">
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
    return {};
  },
  methods: {
    TOGGLE_MODAL_OFF() {
      this.$store.dispatch('TOGGLE_MODAL_OFF');
    },
    ToggleModalOff(event) {
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

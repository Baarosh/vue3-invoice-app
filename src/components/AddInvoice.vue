<template>
  <div class="addinvoice__wrapper" :class="{ getDialog }" @click="toggleDialogByOutClick" ref="wrapper">
    <section class="addinvoice flex column a-center j-center">
      <form class="flex column a-start j-start">
        <h2>New Invoice</h2>
        <div class="flex row a-center j-start">
          <label for="addinvoice__invoiceId">Invoice Id</label>
          <input type="text" id="addinvoice__invoiceId" disabled v-model="invoice.invoiceId.value" />
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__invoiceDate">Invoice Date</label>
          <input type="date" id="addinvoice__invoiceDate" v-model="invoice.invoiceDate.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.invoiceDate.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.invoiceDate.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientName">Client Name</label>
          <input type="text" id="addinvoice__clientName" v-model="invoice.clientName.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.clientName.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientName.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientEmail">Client Email</label>
          <input type="email" id="addinvoice__clientEmail" v-model="invoice.clientEmail.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.clientEmail.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientEmail.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientStreetAddress">Client Street Address</label>
          <input type="text" id="addinvoice__clientStreetAddress" v-model="invoice.clientStreetAddress.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.clientStreetAddress.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientStreetAddress.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientCity">Client City</label>
          <input type="text" id="addinvoice__clientCity" v-model="invoice.clientCity.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.clientCity.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientCity.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientZipCode">Client Zip Code</label>
          <input type="text" id="addinvoice__clientZipCode" v-model="invoice.clientZipCode.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.clientZipCode.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientZipCode.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientCountry">Client country</label>
          <select id="addinvoice__clientCountry" v-model="invoice.clientCountry.value">
            <option value="Country" selected disabled>*Select country*</option>
            <option value="France">France</option>
            <option value="Poland">Poland</option>
            <option value="Spain">Spain</option>
          </select>
          <p class="addinvoice__invalid-value" v-if="invoice.clientCountry.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientCountry.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__clientNote">Client Note</label>
          <textarea id="addinvoice__clientNote" v-model="invoice.clientNote.value" cols="30" rows="10"></textarea>
          <p class="addinvoice__invalid-value" v-if="invoice.clientNote.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.clientNote.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__paymentTerms">Payment Terms</label>
          <select id="addinvoice__paymentTerms" v-model="invoice.paymentTerms.value">
            <option value="Country" selected disabled>*Select terms*</option>
            <option value="Payment30">Payment in 30 days</option>
            <option value="Payment60">Payment in 60 days</option>
          </select>
          <p class="addinvoice__invalid-value" v-if="invoice.paymentTerms.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.paymentTerms.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__paymentDueDate">Payment Due Date</label>
          <input type="date" id="addinvoice__paymentDueDate" v-model="invoice.paymentDueDate.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.paymentDueDate.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.paymentDueDate.valid === 1">Value is valid!</p>
        </div>
        <div class="flex row a-center j-start">
          <div v-for="item in invoice.invoiceItemList" :key="item.itemId" class="">
            <label for="addinvoice__itemName">Item Name</label>
            <input type="text" id="addinvoice__itemName" v-model="item.itemName.value" />
            <p class="addinvoice__invalid-value" v-if="item.itemName.valid === 0">Value is invalid, please correct!</p>
            <p class="addinvoice__valid-value" v-if="item.itemName.valid === 1">Value is valid!</p>

            <label for="addinvoice__itemQuantity">Item Quantity</label>
            <input type="number" id="addinvoice__itemQuantity" v-model="item.itemQuantity.value" />
            <p class="addinvoice__invalid-value" v-if="item.itemQuantity.valid === 0">
              Value is invalid, please correct!
            </p>
            <p class="addinvoice__valid-value" v-if="item.itemQuantity.valid === 1">Value is valid!</p>

            <label for="addinvoice__unitPrice">Unit Price</label>
            <input type="text" id="addinvoice__UnitPrice" disabled v-model="item.unitPrice.value" />
            <p class="addinvoice__invalid-value" v-if="item.unitPrice.valid === 0">Value is invalid, please correct!</p>
            <p class="addinvoice__valid-value" v-if="item.unitPrice.valid === 1">Value is valid!</p>

            <label for="addinvoice__itemTotal">Item Total</label>
            <input type="text" id="addinvoice__itemTotal" disabled v-model="item.itemTotal.value" />
            <p class="addinvoice__invalid-value" v-if="item.itemTotal.valid === 0">Value is invalid, please correct!</p>
            <p class="addinvoice__valid-value" v-if="item.itemTotal.valid === 1">Value is valid!</p>
          </div>
        </div>
        <div class="flex row a-center j-start">
          <label for="addinvoice__invoiceTotal">Total</label>
          <input type="number" id="addinvoice__invoiceTotal" v-model="invoice.invoiceTotal.value" />
          <p class="addinvoice__invalid-value" v-if="invoice.invoiceTotal.valid === 0">
            Value is invalid, please correct!
          </p>
          <p class="addinvoice__valid-value" v-if="invoice.invoiceTotal.valid === 1">Value is valid!</p>
        </div>
        <div class="addinvoice__buttons flex row a-center j-start">
          <button type="button" class="addinvoice__button_item addinvoice__button_item-cancel" @click="toggleModal">
            Cancel
          </button>
          <button
            type="button"
            class="addinvoice__button_item addinvoice__button_item-draft"
            @click="createInvoice('Draft')"
          >
            Save as draft
          </button>
          <button
            type="button"
            class="addinvoice__button_item addinvoice__button_item-create"
            @click="createInvoice('Pending')"
          >
            Create invoice
          </button>
        </div>
      </form>
    </section>
    <div v-if="getDialog" class="addinvoice__confirm_wrapper">
      <div class="addinvoice__confirm" :class="{ getDialog }">
        <h3>Do you want to abandon the form? <br />Invoice will not be saved.</h3>
        <div>
          <button type="button" class="addinvoice__button_item addinvoice__button_item-leave" @click="leaveNewInvoice">
            Yes
          </button>
          <button type="button" class="addinvoice__button_item addinvoice__button_item-stay" @click="toggleDialog">
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'addinvoice__wrapper',
  data() {
    return {
      invoice: {
        invoiceId: { value: null, valid: null },
        invoiceDate: { value: null, valid: null },
        clientName: { value: null, valid: null },
        clientEmail: { value: null, valid: null },
        clientStreetAddress: { value: null, valid: null },
        clientCity: { value: null, valid: null },
        clientZipCode: { value: null, valid: null },
        clientCountry: { value: null, valid: null },
        clientNote: { value: null, valid: null },
        paymentTerms: { value: null, valid: null },
        paymentDueDate: { value: null, valid: null },
        invoiceItemList: [
          {
            itemId: { value: 0, valid: null },
            itemName: { value: 0, valid: null },
            itemQuantity: { value: 0, valid: null },
            unitPrice: { value: 0, valid: null },
            itemTotal: { value: 0, valid: null },
          },
        ],
        invoiceTotal: { value: 0, valid: null },
        invoiceStatus: { value: null, valid: null },
      },
      grayBackground: false,
    };
  },
  computed: {
    ...mapGetters(['getDialog']),
  },
  methods: {
    ...mapActions(['toggleModal', 'toggleDialog', 'addInvoice']),
    toggleDialogByOutClick(event) {
      if (event.target === this.$refs.wrapper) {
        this.toggleDialog();
      }
    },
    leaveInvoice() {
      this.toggleDialog();
      this.toggleModal();
    },
    addInvoice() {
      if (this.validateForm()) {
        this.addInvoice({});
        this.toggleModal();
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
        this.addInvoice(status);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.addinvoice__wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.addinvoice {
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

      .addinvoice__button_item {
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

      .addinvoice__button_item-cancel {
        background-color: $red;
        margin-right: 230px;
        &:hover {
          background-color: $red-hover;
        }
      }
      .addinvoice__button_item-draft {
        background-color: $dark-gray;
        margin-right: 10px;
        &:hover {
          background-color: $dark-gray-hover;
        }
      }
      .addinvoice__button_item-create {
        background-color: $blue;
        &:hover {
          background-color: $blue-hover;
        }
      }
    }
  }
}

.addinvoice__confirm_wrapper {
  z-index: 9999;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .addinvoice__confirm {
    z-index: 9999;
    position: absolute;
    width: 600px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
    background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
    border: 2px solid $white;
    border-radius: 5px;
  }

  h3 {
    font-size: 24px;
    color: $white;
    text-align: center;
  }

  div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    width: 80%;

    .addinvoice__button_item {
      padding: 5px 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 10px;
      padding: 10px 100px;
      font-size: 16px;
      color: $white;
      transition: background-color 0.2s ease-out;
      &:hover {
        cursor: pointer;
      }
    }

    .addinvoice__button_item-leave {
      background-color: $red;
      &:hover {
        background-color: $red-hover;
      }
    }
    .addinvoice__button_item-stay {
      background-color: $dark-gray;
      &:hover {
        background-color: $dark-gray-hover;
      }
    }
  }
}

.toggleDialog {
  background: $black-transparent;
}
</style>

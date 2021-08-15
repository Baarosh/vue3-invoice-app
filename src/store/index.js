import { createStore } from 'vuex';
import itemDatabase from './dict';
import router from '../router/index';

export default createStore({
  state: {
    invoices: [],
    filterCountry: 'Country',
    filterStatus: 'Status',
    sortingAttribute: 'date',
    sortingOrder: 'asc',
    modal: false,
    dialog: false,
    activeInvoice: null,
    editInvoice: null,
    itemDatabase: itemDatabase(),
  },
  getters: {
    getInvoicesFiltered(state, getters) {
      const invoicesSorted = getters.getInvoicesSorted;
      if (state.filterCountry !== 'Country' && state.filterStatus !== 'Status') {
        return invoicesSorted.filter(
          (invoice) =>
            invoice.clientCountry.value === state.filterCountry && invoice.invoiceStatus.value === state.filterStatus
        );
      }
      if (state.filterCountry !== 'Country') {
        return invoicesSorted.filter((invoice) => invoice.clientCountry.value === state.filterCountry);
      }
      if (state.filterStatus !== 'Status') {
        return invoicesSorted.filter((invoice) => invoice.invoiceStatus.value === state.filterStatus);
      }
      return invoicesSorted;
    },
    getInvoicesSorted(state) {
      if (state.sortingOrder === 'asc') {
        if (state.sortingAttribute === 'invoiceId') {
          return state.invoices.sort((a, b) => {
            if (a.invoiceId.value < b.invoiceId.value) return -1;
            if (a.invoiceId.value > b.invoiceId.value) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'date') {
          // ZROBIC POPRAWNIE
          return state.invoices.sort((a, b) => {
            if (a.invoiceDate.value < b.invoiceDate.value) return -1;
            if (a.invoiceDate.value > b.invoiceDate.value) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'country') {
          return state.invoices.sort((a, b) => {
            if (a.clientCountry.value < b.clientCountry.value) return -1;
            if (a.clientCountry.value > b.clientCountry.value) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'zipCode') {
          return state.invoices.sort((a, b) => {
            if (a.clientZipCode.value < b.clientZipCode.value) return -1;
            if (a.clientZipCode.value > b.clientZipCode.value) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'total') {
          return state.invoices.sort((a, b) => a.invoiceTotal.value - b.invoiceTotal.value);
        }
        if (state.sortingAttribute === 'status') {
          return state.invoices.sort((a, b) => {
            if (a.invoiceStatus.value < b.invoiceStatus.value) return -1;
            if (a.invoiceStatus.value > b.invoiceStatus.value) return 1;
            return 0;
          });
        }
        return state.invoices;
      }

      if (state.sortingAttribute === 'invoiceId') {
        return state.invoices.sort((a, b) => {
          if (a.invoiceId.value < b.invoiceId.value) return 1;
          if (a.invoiceId.value > b.invoiceId.value) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'date') {
        // ZROBIC POPRAWNIE
        return state.invoices.sort((a, b) => {
          if (a.invoiceDate.value < b.invoiceDate.value) return 1;
          if (a.invoiceDate.value > b.invoiceDate.value) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'country') {
        return state.invoices.sort((a, b) => {
          if (a.clientCountry.value < b.clientCountry.value) return 1;
          if (a.clientCountry.value > b.clientCountry.value) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'zipCode') {
        return state.invoices.sort((a, b) => {
          if (a.clientZipCode.value < b.clientZipCode.value) return 1;
          if (a.clientZipCode.value > b.clientZipCode.value) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'total') {
        return state.invoices.sort((a, b) => b.invoiceTotal.value - a.invoiceTotal.value);
      }
      if (state.sortingAttribute === 'status') {
        return state.invoices.sort((a, b) => {
          if (a.invoiceStatus.value < b.invoiceStatus.value) return 1;
          if (a.invoiceStatus.value > b.invoiceStatus.value) return -1;
          return 0;
        });
      }
      return state.invoices;
    },
    getDialog(state) {
      return state.dialog;
    },
    getModal(state) {
      return state.modal;
    },
    getActiveInvoice(state) {
      return state.activeInvoice;
    },
    getEditInvoice(state) {
      return state.editInvoice;
    },
    getItemDatabase(state) {
      return state.itemDatabase;
    },
  },
  mutations: {
    setFilterCountry(state, payload) {
      state.filterCountry = payload;
    },
    setFilterStatus(state, payload) {
      state.filterStatus = payload;
    },
    setSorting(state, payload) {
      state.sortingAttribute = payload.sortingAttribute;
      state.sortingOrder = payload.sortingOrder;
    },
    toggleDialog(state) {
      state.dialog = !state.dialog;
    },
    toggleModal(state) {
      state.modal = !state.modal;
    },
    addInvoice(state, payload) {
      state.invoices.push(payload);
      state.editInvoice = null;
      state.activeInvoice = null;
    },
    setActiveInvoice(state, payload) {
      const foundInvoice = state.invoices.filter((invoice) => invoice.invoiceId.value === Number(payload));
      if (foundInvoice.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        state.activeInvoice = foundInvoice[0];
      }
    },
    setInvoiceStatus(state, payload) {
      const activeInvoice = state.invoices.findIndex(
        (inv) => inv.invoiceId.value === state.activeInvoice.invoiceId.value
      );

      if (activeInvoice !== -1) {
        state.invoices[activeInvoice].invoiceStatus.value = payload;
        state.activeInvoice = state.invoices[activeInvoice];
      }
    },
    modifyInvoice(state) {
      state.editInvoice = state.activeInvoice;
      router.push({ name: 'Home' });
      state.modal = true;
    },
    unsetActiveInvoice(state) {
      state.editInvoice = null;
      state.activeInvoice = null;
    },
  },
  actions: {
    setFilterCountry(context, payload) {
      context.commit('setFilterCountry', payload);
    },
    setFilterStatus(context, payload) {
      context.commit('setFilterStatus', payload);
    },
    setSorting(context, payload) {
      context.commit('setSorting', payload);
    },
    toggleDialog(context) {
      context.commit('toggleDialog');
    },
    toggleModal(context) {
      setTimeout(() => {
        context.commit('toggleModal');
      }, 100);
    },
    addInvoice(context, payload) {
      setTimeout(() => {
        context.commit('addInvoice', payload);
      }, 400);
    },
    setActiveInvoice(context, payload) {
      context.commit('setActiveInvoice', payload);
    },
    setInvoiceStatus(context, payload) {
      context.commit('setInvoiceStatus', payload);
    },
    modifyInvoice(context) {
      context.commit('modifyInvoice');
    },
    unsetActiveInvoice(context) {
      context.commit('unsetActiveInvoice');
    },
  },
});

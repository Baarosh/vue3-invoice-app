import { createStore } from 'vuex';

export default createStore({
  state: {
    invoices: [
      {
        invoiceId: 8531,
        invoiceDate: '05.11.2021',
        clientName: null,
        clientEmail: null,
        clientStreetAddress: null,
        clientCity: null,
        clientZipCode: '51-514',
        clientCountry: 'France',
        clientComment: null,
        paymentTerms: null,
        paymentDueDate: null,
        invoiceItemList: [
          {
            itemName: null,
            itemQuantity: 0,
            itemPrice: 0,
            itemTotal: 0,
          },
        ],
        invoiceTotal: 500,
        invoiceStatus: 'Pending',
      },
      {
        invoiceId: 8532,
        invoiceDate: '21.11.2021',
        clientName: null,
        clientEmail: null,
        clientStreetAddress: null,
        clientCity: null,
        clientZipCode: '63-514',
        clientCountry: 'Spain',
        clientComment: null,
        paymentTerms: null,
        paymentDueDate: null,
        invoiceItemList: [
          {
            itemName: null,
            itemQuantity: 0,
            itemPrice: 0,
            itemTotal: 0,
          },
        ],
        invoiceTotal: 45,
        invoiceStatus: 'Paid',
      },
      {
        invoiceId: 8533,
        invoiceDate: '22.11.2021',
        clientName: null,
        clientEmail: null,
        clientStreetAddress: null,
        clientCity: null,
        clientZipCode: '98-514',
        clientCountry: 'France',
        clientComment: null,
        paymentTerms: null,
        paymentDueDate: null,
        invoiceItemList: [
          {
            itemName: null,
            itemQuantity: 0,
            itemPrice: 0,
            itemTotal: 0,
          },
        ],
        invoiceTotal: 3000,
        invoiceStatus: 'Paid',
      },
      {
        invoiceId: 8534,
        invoiceDate: '15.11.2021',
        clientName: null,
        clientEmail: null,
        clientStreetAddress: null,
        clientCity: null,
        clientZipCode: '53-514',
        clientCountry: 'France',
        clientComment: null,
        paymentTerms: null,
        paymentDueDate: null,
        invoiceItemList: [
          {
            itemName: null,
            itemQuantity: 0,
            itemPrice: 0,
            itemTotal: 0,
          },
        ],
        invoiceTotal: 1000,
        invoiceStatus: 'Pending',
      },
    ],
    filterCountry: 'Country',
    filterStatus: 'Status',
    sortingAttribute: 'date',
    sortingOrder: 'asc',
    modal: false,
    dialog: false,
    activeInvoice: null,
    editInvoice: false,
  },
  getters: {
    getInvoicesFiltered(state, getters) {
      const invoicesSorted = getters.getInvoicesSorted;
      if (state.filterCountry !== 'Country' && state.filterStatus !== 'Status') {
        return invoicesSorted.filter(
          (invoice) => invoice.clientCountry === state.filterCountry && invoice.invoiceStatus === state.filterStatus
        );
      }
      if (state.filterCountry !== 'Country') {
        return invoicesSorted.filter((invoice) => invoice.clientCountry === state.filterCountry);
      }
      if (state.filterStatus !== 'Status') {
        return invoicesSorted.filter((invoice) => invoice.invoiceStatus === state.filterStatus);
      }
      return invoicesSorted;
    },
    getInvoicesSorted(state) {
      if (state.sortingOrder === 'asc') {
        if (state.sortingAttribute === 'invoiceId') {
          return state.invoices.sort((a, b) => {
            if (a.invoiceId < b.invoiceId) return -1;
            if (a.invoiceId > b.invoiceId) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'date') {
          // ZROBIC POPRAWNIE
          return state.invoices.sort((a, b) => {
            if (a.invoiceDate < b.invoiceDate) return -1;
            if (a.invoiceDate > b.invoiceDate) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'country') {
          return state.invoices.sort((a, b) => {
            if (a.clientCountry < b.clientCountry) return -1;
            if (a.clientCountry > b.clientCountry) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'zipCode') {
          return state.invoices.sort((a, b) => {
            if (a.clientZipCode < b.clientZipCode) return -1;
            if (a.clientZipCode > b.clientZipCode) return 1;
            return 0;
          });
        }
        if (state.sortingAttribute === 'total') {
          return state.invoices.sort((a, b) => a.invoiceTotal - b.invoiceTotal);
        }
        if (state.sortingAttribute === 'status') {
          return state.invoices.sort((a, b) => {
            if (a.invoiceStatus < b.invoiceStatus) return -1;
            if (a.invoiceStatus > b.invoiceStatus) return 1;
            return 0;
          });
        }
        return state.invoices;
      }

      if (state.sortingAttribute === 'invoiceId') {
        return state.invoices.sort((a, b) => {
          if (a.invoiceId < b.invoiceId) return 1;
          if (a.invoiceId > b.invoiceId) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'date') {
        // ZROBIC POPRAWNIE
        return state.invoices.sort((a, b) => {
          if (a.invoiceDate < b.invoiceDate) return 1;
          if (a.invoiceDate > b.invoiceDate) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'country') {
        return state.invoices.sort((a, b) => {
          if (a.clientCountry < b.clientCountry) return 1;
          if (a.clientCountry > b.clientCountry) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'zipCode') {
        return state.invoices.sort((a, b) => {
          if (a.clientZipCode < b.clientZipCode) return 1;
          if (a.clientZipCode > b.clientZipCode) return -1;
          return 0;
        });
      }
      if (state.sortingAttribute === 'total') {
        return state.invoices.sort((a, b) => b.invoiceTotal - a.invoiceTotal);
      }
      if (state.sortingAttribute === 'status') {
        return state.invoices.sort((a, b) => {
          if (a.invoiceStatus < b.invoiceStatus) return 1;
          if (a.invoiceStatus > b.invoiceStatus) return -1;
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
    activeInvoice(state) {
      return state.activeInvoice;
    },
    getEditInvoice(state) {
      return state.editInvoice;
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
    },
    setActiveInvoice(state, payload) {
      const foundInvoice = state.invoices.filter((invoice) => invoice.invoiceId === parseInt(payload, 10));
      if (foundInvoice.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        state.activeInvoice = foundInvoice[0];
      }
      return {
        invoiceId: 0,
        date: 'undefined',
        country: 'undefined',
        zipCode: 'undefined',
        total: 0,
        status: 'undefined',
      };
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
  },
});

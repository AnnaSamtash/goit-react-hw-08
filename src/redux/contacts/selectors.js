import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts
      .filter(contact =>
        contact.name?.toLowerCase().includes(filters.name?.toLowerCase())
      )
      .filter(contact => contact.number?.includes(filters.number));
  }
);

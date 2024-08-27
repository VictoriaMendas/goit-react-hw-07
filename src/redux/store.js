import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";

const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});


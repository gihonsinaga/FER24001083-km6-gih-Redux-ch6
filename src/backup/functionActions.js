import { setSearchTerm } from "./functionReducers";

export const handleSearch = (searchTerm) => (dispatch) => {
  dispatch(setSearchTerm(searchTerm));
};

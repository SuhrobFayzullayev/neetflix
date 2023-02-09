import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeProps = {
  id?: number | string;
  title?: string;
  overview?: string;
  poster_path?: string;
  video?: boolean | [];
  check?:boolean
};

const initialState: TypeProps[] = [];
export const yourFavoritePlayLists = createSlice({
  name: "yourFavoritePlayLists",
  initialState,
  reducers: {
    addPlayList: (state, action: PayloadAction<TypeProps>) => {
      if (!state.some((movie) => movie.id == action.payload.id))
        state.push(action.payload);
    },
    removePlayList: (state, action: PayloadAction<TypeProps>) =>
      state.filter((movie) => movie.id !== action.payload.id),
  },
});

export const { addPlayList, removePlayList } = yourFavoritePlayLists.actions;
export default yourFavoritePlayLists.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://jsonplaceholder.typicode.com/";

export const fetchUsers = createAsyncThunk("slice/fetchUsers", async () => {
  const result = await fetch(`${baseURL}users`).then((res) => res.json());
  return result;
});

export const fetchPosts = createAsyncThunk("slice/fetchPosts", async () => {
  const result = await fetch(`${baseURL}posts`).then((res) => res.json());
  return result;
});

export const fetchAlbums = createAsyncThunk("slice/fetchAlbums", async () => {
  const result = await fetch(`${baseURL}albums`).then((res) => res.json());
  return result;
});

const initialState = {
  users: [],
  posts: [],
  albums: [],
};

export const slice = createSlice({
  name: "fetchAPI",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.albums = action.payload;
      });
  },
});

// export const {} = slice.actions;

export default slice.reducer;

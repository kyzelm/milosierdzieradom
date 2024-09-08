import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    news: null,
    nextNewsPage: 1,
    newsPending: false,
    photos: null,
    nextPhotosPage: 1,
    photosPending: false,
    announcements: null,
    intentions: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {
        addNextNews(state, action) {
            if (state.news === null) {
                state.news = action.payload;
            } else if (action.payload === -1) {
                state.news = -1;
            } else if (state.news.length !== state.nextNewsPage * 12) {
                state.news = [...state.news, ...action.payload];
                state.news = state.news.filter((news, index, self) =>
                        index === self.findIndex((t) => (
                            t.id === news.id
                        ))
                );
            }

            state.nextNewsPage++;
        },
        setNewsPending(state, action) {
            state.newsPending = action.payload;
        },
        addNextPhotos(state, action) {
            if (state.photos === null) {
                state.photos = action.payload;
            } else if (action.payload === -1) {
                state.photos = -1;
            } else if (state.photos.length !== state.nextPhotosPage * 6) {
                state.photos = [...state.photos, ...action.payload];
                state.photos = state.photos.filter((photo, index, self) =>
                        index === self.findIndex((t) => (
                            t.id === photo.id
                        ))
                );
            }

            state.nextPhotosPage++;
        },
        setPhotosPending(state, action) {
            state.photosPending = action.payload;
        },
        setAnnouncements(state, action) {
            state.announcements = action.payload;
        },
        setIntentions(state, action) {
            state.intentions = action.payload;
        },
    }
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
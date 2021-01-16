import { createStore } from "vuex";
import axios from "axios";
import firebase from "../firebase";

const refDatabase = firebase.database().ref("/blocks");

export default createStore({
  state: {
    сonstructorBlocks: [],
    comments: [],
    isLoadComments: false,
    isLoadBlocks: true,
  },
  getters: {
    isEmptyBlocks: (state) => state.сonstructorBlocks.length === 0,
  },
  actions: {
    getComments: async ({ commit }) => {
      commit("setStatusLoaderComments", true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?_limit=42"
      );
      commit("setStatusLoaderComments", false);

      commit("setComments", data);
    },

    initConnectionToFireBase: ({ state, commit }) => {
      refDatabase.on("value", (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const correctData = Object.values(data);
          localStorage.setItem("blocks", JSON.stringify(correctData));
          commit("setBlocks", correctData);
        }

        commit("setStatusLoaderBlocks", false);
      });

      refDatabase.on("child_removed", () => {
        if (state.сonstructorBlocks.length === 1) {
          commit("setBlocks", []);
        }
      });
    },

    updateBlock: (_, data) => {
      refDatabase.child(data.ID).update(data);
    },

    deleteBlock: (_, ID) => {
      refDatabase.child(ID).remove();
    },

    createBlock: (_, data) => {
      const ID = new Date().getTime().toString();

      refDatabase.child(ID).set({
        ...data,
        ID,
      });
    },
  },
  mutations: {
    setBlocks: (state, blocks) => {
      state.сonstructorBlocks = blocks;
    },
    setComments: (state, comments) => {
      state.comments = comments;
    },
    setStatusLoaderBlocks: (state, status) => {
      state.isLoadBlocks = status;
    },
    setStatusLoaderComments: (state, status) => {
      state.isLoadComments = status;
    },
  },
});

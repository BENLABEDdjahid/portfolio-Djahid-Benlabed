// On importe createSlice de la bibliothèque redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// On initialise l'état initial de notre slice
const initialState = {
  reviews: [
    {
      name: "Unknown",
      review: "J'avais le plaisir de travailler avec Benlabed Djahid :)",
    },
  ],
  editingIndex: null, // Index de la revue en cours d'édition (null si aucune n'est en cours d'édition)
};

// On crée notre slice
const reviewSlice = createSlice({
  name: "review", // Le nom de notre slice
  initialState, // On utilise l'état initial défini plus haut
  reducers: {
    // Un reducer pour ajouter une revue
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },

    // Un reducer pour commencer l'édition d'une revue
    editReview: (state, action) => {
      state.editingIndex = action.payload.id;
    },

    // Un reducer pour sauvegarder les modifications apportées à une revue
    saveReview: (state, action) => {
      state.reviews[state.editingIndex].review = action.payload;
      state.editingIndex = null;
    },

    // Un reducer pour supprimer une revue
    deleteReview: (state, action) => {
      state.reviews.splice(action.payload, 1);
    },
  },
});

// On exporte les actions générées par createSlice
export const { addReview, editReview, deleteReview, saveReview } =
  reviewSlice.actions;

// On exporte le reducer généré par createSlice
export default reviewSlice.reducer;

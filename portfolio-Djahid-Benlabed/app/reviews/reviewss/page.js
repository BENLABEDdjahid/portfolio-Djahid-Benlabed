"use client";

import { useState } from "react";
import "./Reviews.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteReview, editReview, saveReview, addReview } from "@/redux/feature/review";

function Page() {
  const reviews = useSelector((state) => state.review.reviews);
  const editingIndex = useSelector((state) => state.review.editingIndex);
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [newReview, setNewReview] = useState({ name: "", review: "" });

  const handleEditReview = (index) => () => {
    dispatch(editReview({ id: index }));
    setData(reviews[index].review);
  };

  const handleAddReview = () => {
    if (newReview.name && newReview.review) {
      dispatch(addReview(newReview));
      setNewReview({ name: "", review: "" });
    }
  };

  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <h2>{review.name}</h2>
          {editingIndex === index ? (
            <>
              <textarea
                className="review-input"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button
                className="review-button"
                onClick={() => dispatch(saveReview(data))}
              >
                Sauvegarder
              </button>
            </>
          ) : (
            <>
              <p>{review.review}</p>
              <button
                className="review-button"
                onClick={handleEditReview(index)}
              >
                Modifier
              </button>
            </>
          )}
          <button
            className="review-button-supp"
            onClick={() => dispatch(deleteReview(index))}
          >
            Supprimer
          </button>
        </div>
      ))}

      <div className="add-review">
        <h2>Ajouter un nouveau témoignage</h2>
        <input
          type="text"
          placeholder="Nom"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          className="review-input"
        />
        <textarea
          placeholder="Témoignage"
          value={newReview.review}
          onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
          className="review-input"
        />
        <button className="review-button" onClick={handleAddReview}>
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default Page;

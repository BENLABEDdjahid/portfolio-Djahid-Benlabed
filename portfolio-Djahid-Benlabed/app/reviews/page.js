"use client";

import { useState } from "react";
import "./ReviewsPage.css";
import Link from "next/link";

function ReviewsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion

  // Fonction pour simuler la connexion
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="reviews-page">
      {!isLoggedIn ? (
        <>
          <h1 className="text-t">Login</h1>
          <nav>
            <Link href="/reviews/login" className="reviews-link">
              Login
            </Link>
            <Link href="/reviews/inscription" className="reviews-link">
              Inscription
            </Link>
          </nav>
        </>
      ) : (
        <>
          <h1 className="text-t">Témoignages</h1>
          <nav>
            <Link href="/reviews/reviews/Tem" className="reviews-link">
              Voir les témoignages
            </Link>
            <Link href="/reviews/setreviews/Tem" className="reviews-link">
              Ajouter un témoignage
            </Link>
          </nav>
        </>
      )}

     
    </div>
  );
}

export default ReviewsPage;

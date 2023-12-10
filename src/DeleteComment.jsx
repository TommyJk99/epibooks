const deleteComment = (commentId) => {
  setIsLoading(true);

  fetch(`https://striveschool-api.herokuapp.com/api/comment/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNkMTA0MzYzZjE1ODAwMTQxMTg0NmYiLCJpYXQiOjE2OTg1MDA2NzUsImV4cCI6MTY5OTcxMDI3NX0.mNHBJaDLhswTMmHsN1KK6_6zVPXQwaEyehYgw3I0bFI",
    },
  })
    .then((response) => {
      if (!response.ok) {
        // Gestisci l'errore
        throw new Error("Error deleting the comment");
      }
      return response.json();
    })
    .then(() => {
      // Aggiornamento della UI, ad esempio, rimuovendo il commento dalla lista
      setComments(comments.filter((comment) => comment._id !== commentId));
    })
    .catch((error) => {
      console.error("There was an error!", error);
    })
    .finally(() => {
      setIsLoading(false); // Nasconde lo spinner
    });
};

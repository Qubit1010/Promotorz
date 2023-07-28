// favoriteVoteAPI.js (favoriteVote data retrieval)
async function fetchFavoriteVoteSegmentData() {
  try {
    const response = await fetch(
      "https://promo-show-backend-default-rtdb.firebaseio.com/dashboard-favorite-calender.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const favoriteVoteSegmentData = await response.json();
    return Object.values(favoriteVoteSegmentData);
  } catch (error) {
    throw error;
  }
}

const favoriteVoteSegmentloadedData = await fetchFavoriteVoteSegmentData();
console.log(favoriteVoteSegmentloadedData);

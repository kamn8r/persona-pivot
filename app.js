document.addEventListener('DOMContentLoaded', () => {
  const adsDiv = document.getElementById('ads');
  const newsDiv = document.getElementById('news');

  // Simulated data for ads and news
  const ads = ['Ad1', 'Ad2', 'Ad3'];
  const news = ['News1', 'News2', 'News3'];

  // Display ads and news
  adsDiv.innerHTML = `Ads: ${ads.join(', ')}`;
  newsDiv.innerHTML = `News: ${news.join(', ')}`;
});

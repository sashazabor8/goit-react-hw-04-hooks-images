const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '33110097-e31e2273406f912ac77c7c325';
const searchParams = new URLSearchParams({
  key: MY_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

function fetchPixabay(imageName, page = 1) {
  return fetch(`${BASE_URL}?q=${imageName}&page=${page}&${searchParams}`).then(
    res => {
      if (res.ok) return res.json();
      return Promise.reject(new Error(`No image named ${imageName}`));
    }
  );
}

const api = {
  fetchPixabay,
};

export default api;

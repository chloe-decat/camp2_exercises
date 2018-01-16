function fakeFetch() {
  return Promise.resolve({
    json: function() {
      return Promise.resolve({latitude: 50.62925, longitude: 3.057256});
    }
  });
}

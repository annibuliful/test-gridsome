const axios = require("axios");

module.exports = function(api) {
  api.loadSource(async store => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const contentType = store.addContentType({
      typeName: "blogs",
      route: "/blog/:slug"
    });

    data.map(item => {
      contentType.addNode({
        id: item.id.toString(),
        title: item.title,
        content: item.body
      });
    });
  });
};

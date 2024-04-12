	function loadData() {
  const element = document.querySelector("div#content");

  getPosts().then(posts => {
    const template = getTemplate(posts);

    element.innerHTML = template;
  });
}

async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);

  return await response.json();
}

function getTemplate(posts) {
  const rows = posts.map(postToRowView).join("");

  return `<table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Body</th>
      </tr>
    </thead>

    <tbody>${rows}</tbody>
  </table>`;
}

function postToRowView(post) {
  return `<t>
    <td>${post.title}</td>
    <td>${post.body}</td>
  </tr>`;
}

loadData();

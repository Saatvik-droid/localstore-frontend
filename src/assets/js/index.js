function selector(selector) {
  var element = document.getElementById(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`${selector} does not exist`);
  }
}

function onCLick(el) {
  console.log(`${el.innerText}`);
}

function fetchFiles() {
  var list = selector("main-container");
  var postData = {
    path: "",
  };
  var headers = new Headers({
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  fetch("http://127.0.0.1:8080  ", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: headers,
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

window.onload = () => {
  fetchFiles();
};


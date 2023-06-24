// Promise

function doAsync(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.error = () => reject(xhr.statusText);
    xhr.send();
  });
}
doAsync("https://httpbin.org/get")
  .then((value) => {
    console.log("success", value);
    return doAsync("https://httpbin.org/get");
  })
  .then((value2) => {
    console.log("value2", value2);
  })
  .catch((error) => {
    console.error(error);
  });

// Xử lý lỗi

function doAsync(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.error = () => reject(xhr.statusText);
    xhr.send();
  });
}
doAsync("https://httpbin.org/get")
  .then((value) => {
    console.log("success", value);
    throw Error("call api fail");
    return doAsync("https://httpbin.org/get");
  })
  .then((value2) => {
    console.log("value2", value2);
  })
  .catch((error) => {
    console.error(error);
  });

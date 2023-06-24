console.log("1");
function doAsync(url, onSuccess, onError) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = () => onSuccess(xhr.responseText);
  xhr.onerror = () => onError(xhr.statusText);
  xhr.send();
}
console.log("2");
doAsync(
  "https://httpbin.org/get",
  (value) => {
    console.log("success", value);
  },
  (error) => {
    console.error("error", error);
  }
);

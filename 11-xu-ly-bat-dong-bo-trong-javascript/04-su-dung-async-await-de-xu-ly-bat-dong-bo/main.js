function doAsync(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.error = () => reject(xhr.statusText);
    xhr.send();
  });
}

async function run() {
  try {
    const value1 = await doAsync("https://httpbin.org/get");
    console.log("value 1", value1);
    throw Error("call api fail");
    const value2 = await doAsync("https://httpbin.org/ip");
    console.log("value 2", value2);
  } catch (error) {
    console.error(error);
  }
}

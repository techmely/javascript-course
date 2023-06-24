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
    const result = await Promise.all([
      doAsync("https://httpbin.org/get"),
      doAsync("https://httpbin.org/ip"),
      doAsync("https://httpbin.org/headers"),
    ]);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();

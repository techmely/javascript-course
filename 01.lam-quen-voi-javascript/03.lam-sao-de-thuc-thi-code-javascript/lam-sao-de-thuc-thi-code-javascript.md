Dưới đây là một ví dụ về file HTML đơn giản để thực thi mã JavaScript:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Thực thi JavaScript trong HTML</title>
  </head>
  <body>
    <h1>Thực thi JavaScript trong HTML</h1>
    <button onclick="myFunction()">Nhấn vào đây</button>
    <p id="demo"></p>
    
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Xin chào, đây là ví dụ về thực thi mã JavaScript trong HTML!";
      }
    </script>
  </body>
</html>
```

Trong ví dụ này, chúng ta có một nút bấm và một thẻ p để hiển thị kết quả. Khi nút được nhấn, hàm myFunction được gọi, và kết quả sẽ được hiển thị trong thẻ p.

Bạn có thể lưu ví dụ trên dưới định dạng tệp HTML và mở nó bằng trình duyệt web để thực thi mã JavaScript.

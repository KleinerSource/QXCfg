var body = $response.body;
var url = $request.url;

if (url.indexOf('/forum') != -1) {
$done({body});
} else {

var clearJS = `
    <script>
     $(function(){
        $(".ad-list").remove();
      });
    </script>
`;
body = body.replace("</body>", clearJS + '\n</body>'); // 注入清空任务相关JS
$done({body});
}

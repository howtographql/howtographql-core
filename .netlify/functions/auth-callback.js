exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    header: {
      "Content-Type": "text/html"
    },
    body: `
              <html>
                  <body>
                      <script>
                        function getParameterByName(name, url_string) {
                          var url = new URL(url_string);
                          var c = url.searchParams.get("code");    
                          return c;
                        }
                        
                        (function Callback() {
                          let githubCode = getParameterByName("code", window.location.href);
                          console.log(githubCode)
                          let targetWindow = window.opener;
                          targetWindow.postMessage(githubCode, "*");
                        })()
                      </script>
                  </body>
              </html>
          `
  });
};

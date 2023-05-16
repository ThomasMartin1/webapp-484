import View from "../components/view";

export default function Messages() {
  var x = false;
  return (
    <>
      <View>
        <div>messages page</div>
       <div> 
        
        if (x === false) {
          return (
            <>
              <Navbar />
              <div className="container vh-100">
                <div className="card p-4 m-4 w-50 mx-auto">
                  <h1>Want to join our messaging platform?</h1>
                  <p>Press the button below to submit your profile for admission to the messaging function.
                    You should get a confirmation email within 24 hours.
                  </p>
                  <button>
                    <p className="ms-1 d-inline">Submit Your Request</p>
                  </button>
                </div>
              </div>
            </>
          );
        }
        return (
          <>
            <Navbar />
            {/* {children} */}
            <script defer src="https://widget-js.cometchat.io/v3/cometchatwidget.js"></script>
            <div id="cometchat"></div>
            <script>
            window.addEventListener('DOMContentLoaded', (event) => {
              CometChatWidget.init({
                "appID": "239213f10f696ed0",
                "appRegion": "US",
                "authKey": "81d5fdffdb61315389ce9780500cf643f77e3a15"
              }).then(response => {
                console.log("Initialization completed successfully");
                //You can now call login function.
                CometChatWidget.login({
                  "uid": "12345"
                }).then(response => {
                  CometChatWidget.launch({
                    "widgetID": "c6970aa0-d5fb-465f-a31d-fbb80f4b71b2",
                    "target": "#cometchat",
                    "roundedCorners": "true",
                    "height": "600px",
                    "width": "800px",
                    "defaultID": 'superhero1', //default UID (user) or GUID (group) to show,
                    "defaultType": 'user' //user or group
                  });
                }, error => {
                  console.log("User login failed with error:", error);
                  //Check the reason for error and take appropriate action.
                });
              }, error => {
                console.log("Initialization failed with error:", error);
                //Check the reason for error and take appropriate action.
              });
            });
            </script>
            
          </>
        );</div>

      </View>

    </>
  );
}

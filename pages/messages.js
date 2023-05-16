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
        };
        return (
          <>
            <Navbar />
            {/* {children} */}
          <button onclick="window.location.href = 'chat.html';">Click here to chat!</button>
          </>
        );
      </div>

      </View>

    </>
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".buy-now-button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const itemId = button.getAttribute("data-item-id");
      const pageOverlay = document.querySelector(".page-overlay");
      
      // Show the spinner overlay
      function showSpinner() {
        pageOverlay.style.display = "flex";
      }

      // Hide the spinner overlay
      function hideSpinner() {
        pageOverlay.style.display = "none";
      }

      // Show the spinner overlay and perform AJAX call
      function rotateSpinnerFor5Seconds() {
        showSpinner();

        // Make AJAX call using Frappe AJAX
        frappe.call({
          method: "library.www.subscription.index.create_subscription",
          args: {
            email_id: frappe.session.user,
            itemId: itemId
          },
          callback: function (response) {
            hideSpinner(); // Hide the spinner overlay
            // Handle response from the server
            console.log(response.message);
           
              console.log("Before navigation");
              window.location.href = "/orders/" + encodeURIComponent(response.message);
              console.log("After navigation");

          }
        });
      }

      // Start rotating spinner when button is clicked
      rotateSpinnerFor5Seconds();
    });
  });
});

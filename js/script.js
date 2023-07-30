$(document).ready(function() {
	$("form").submit(function() { return false; });
  // Event listener for form submission when the button is clicked
$("#submitButton").click(function() {
	validateInputs();
});

  // Event listener for input fields to remove error state
  $("#dayInput, #monthInput, #yearInput").on("input", function() {
    removeErrorState($(this));
  });

  function removeErrorState(input) {
    const inputId = input.attr("id");
    input.removeClass("error");
    input.removeAttr("style");
    $("#" + inputId + "ErrorMessage").html("");
    $("label[for='" + inputId + "']").removeClass("label-error");
  }

  function validateInputs() {
    const validationRules = {
      dayInput: { min: 1, max: 31, field: "day", errorMsg: "Must be a valid day" },
      monthInput: { min: 1, max: 12, field: "month", errorMsg: "Must be a valid month" },
      yearInput: { min: 1900, max: new Date().getFullYear(), field: "year", errorMsg: "Must be in the past" }
    };

    let hasErrors = false;

    // Clear previous error messages and remove 'error' class
    $("input").removeClass("error");
    $("label").removeClass("label-error");

    for (const inputId in validationRules) {
      const { min, max, errorMsg } = validationRules[inputId];
      const input = $("#" + inputId);
      const inputValue = input.val().trim();
      const errorElement = $("#" + inputId + "ErrorMessage");

      if (inputValue === "") {
        displayErrorMessage(errorElement, "This field is required");
        applyErrorStyle(input);
        hasErrors = true;
      } else {
        const intValue = parseInt(inputValue);
        if (isNaN(intValue) || intValue < min || intValue > max) {
          displayErrorMessage(errorElement, errorMsg);
          applyErrorStyle(input);
          hasErrors = true;
        }
      }
    }

    // Display error messages or submit the form
    if (hasErrors) {
      return;
    } else {
      // Submit the form
      $("#ageForm").submit();
    }
  }

  function displayErrorMessage(errorElement, errorMessage) {
    errorElement.html(errorMessage);
  }

  function applyErrorStyle(input) {
    input.addClass("error");
    input.css("color", "#ff7a7a");
    const label = $("label[for='" + input.attr("id") + "']");
    label.addClass("label-error");
  }

});

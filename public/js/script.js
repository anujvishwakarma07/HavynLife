// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  // Flash Alert Auto-dismiss
  const alerts = document.querySelectorAll('.custom-alert');
  alerts.forEach(alert => {
    // Set timeout to match the progress bar animation (5s)
    setTimeout(() => {
      const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
      if (bsAlert) {
        // Add hiding class for custom animation
        alert.classList.add('hiding');
        setTimeout(() => {
          bsAlert.close();
        }, 300); // Wait for slide out animation
      }
    }, 5000);
  });
})()
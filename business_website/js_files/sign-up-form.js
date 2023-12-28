document.addEventListener("DOMContentLoaded", function () {
    form_elements = document.getElementsByTagName('input');

    function fullyHideLabel(label) {
        label.style.opacity = 0;
    }

    function hideLabel(label) {
        label.style.opacity = 0.1;
    }

    function showLabel(label) {
        label.style.opacity = 1;
    }

    Array.from(form_elements).forEach(elem => {
        const labelForElement = document.querySelector(`label[for="${elem.id}"]`);

        elem.addEventListener('focus', function () {
            if (elem.value.trim() === '') {
                hideLabel(labelForElement);
            }
        });

        elem.addEventListener('blur', function () {
            if (elem.value.trim() === '') {
                showLabel(labelForElement);
            }
        });

        elem.addEventListener('input', function () {
            if (elem.value.trim() !== '') {
                fullyHideLabel(labelForElement);
            } else {
                showLabel(labelForElement);
            }
        });
    });

    function checkFormValidity() {
        let allFieldsFilled = true;

        Array.from(form_elements).forEach(elem => {
            if (elem.hasAttribute('required') && elem.value.trim() === '') {
                allFieldsFilled = false;
            }
        });

        return allFieldsFilled;
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        if (checkFormValidity()) {
            // Use SweetAlert2 for a sleek confirmation dialog
            Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to sign up.',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, Sign Up',
                confirmButtonColor: '#007bff', // Set the desired button color
                cancelButtonText: 'No, Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    // User clicked "Yes"
                    window.location.href = 'index.html';
                } else {
                    // User clicked "No" or closed the dialog
                    // You can choose to do something else or simply return
                }
            });
        }
    });
});
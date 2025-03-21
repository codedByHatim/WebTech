document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');
    const successMessage = document.getElementById('success-message');
    
    // Function to validate full name
    function validateFullName() {
        const fullNameInput = document.getElementById('full-name');
        const errorElement = document.getElementById('full-name-error');
        const nameRegex = /^[A-Za-z ]+$/;
        
        if (!fullNameInput.value.trim()) {
            showError(fullNameInput, errorElement, 'Full name is required');
            return false;
        } else if (!nameRegex.test(fullNameInput.value)) {
            showError(fullNameInput, errorElement, 'Please enter a valid name (letters only)');
            return false;
        } else {
            hideError(fullNameInput, errorElement);
            return true;
        }
    }
    
    // Function to validate email
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const errorElement = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailInput.value.trim()) {
            showError(emailInput, errorElement, 'Email is required');
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, errorElement, 'Please enter a valid email address');
            return false;
        } else {
            hideError(emailInput, errorElement);
            return true;
        }
    }
    
    // Function to validate phone number
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const errorElement = document.getElementById('phone-error');
        const phoneRegex = /^[0-9]{10,15}$/;
        
        if (!phoneInput.value.trim()) {
            showError(phoneInput, errorElement, 'Phone number is required');
            return false;
        } else if (!phoneRegex.test(phoneInput.value)) {
            showError(phoneInput, errorElement, 'Please enter a valid phone number (10-15 digits)');
            return false;
        } else {
            hideError(phoneInput, errorElement);
            return true;
        }
    }
    
    // Function to validate address
    function validateAddress() {
        const addressInput = document.getElementById('address');
        const errorElement = document.getElementById('address-error');
        
        if (!addressInput.value.trim()) {
            showError(addressInput, errorElement, 'Address is required');
            return false;
        } else {
            hideError(addressInput, errorElement);
            return true;
        }
    }
    
    // Function to validate card number
    function validateCardNumber() {
        const cardNumberInput = document.getElementById('card-number');
        const errorElement = document.getElementById('card-number-error');
        const cardRegex = /^[0-9]{16}$/;
        
        if (!cardNumberInput.value.trim()) {
            showError(cardNumberInput, errorElement, 'Card number is required');
            return false;
        } else if (!cardRegex.test(cardNumberInput.value)) {
            showError(cardNumberInput, errorElement, 'Please enter a valid 16-digit card number');
            return false;
        } else {
            hideError(cardNumberInput, errorElement);
            return true;
        }
    }
    
    // Function to validate expiry date
    function validateExpiryDate() {
        const expiryInput = document.getElementById('expiry-date');
        const errorElement = document.getElementById('expiry-date-error');
        const expiryRegex = /^(0[1-9]|1[0-2])\/20[2-9][0-9]$/;
        
        if (!expiryInput.value.trim()) {
            showError(expiryInput, errorElement, 'Expiry date is required');
            return false;
        } else if (!expiryRegex.test(expiryInput.value)) {
            showError(expiryInput, errorElement, 'Please enter a valid expiry date (MM/YYYY)');
            return false;
        } else {
            // Check if the date is in the future
            const [month, year] = expiryInput.value.split('/');
            const expiryDate = new Date(year, month - 1);
            const currentDate = new Date();
            
            if (expiryDate <= currentDate) {
                showError(expiryInput, errorElement, 'Expiry date must be in the future');
                return false;
            } else {
                hideError(expiryInput, errorElement);
                return true;
            }
        }
    }
    
    // Function to validate CVV
    function validateCVV() {
        const cvvInput = document.getElementById('cvv');
        const errorElement = document.getElementById('cvv-error');
        const cvvRegex = /^[0-9]{3}$/;
        
        if (!cvvInput.value.trim()) {
            showError(cvvInput, errorElement, 'CVV is required');
            return false;
        } else if (!cvvRegex.test(cvvInput.value)) {
            showError(cvvInput, errorElement, 'Please enter a valid 3-digit CVV');
            return false;
        } else {
            hideError(cvvInput, errorElement);
            return true;
        }
    }
    
    // Function to show error
    function showError(inputElement, errorElement, message) {
        inputElement.classList.add('input-error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Function to hide error
    function hideError(inputElement, errorElement) {
        inputElement.classList.remove('input-error');
        errorElement.style.display = 'none';
    }
    
    // Add input event listeners for real-time validation
    document.getElementById('full-name').addEventListener('input', validateFullName);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('phone').addEventListener('input', validatePhone);
    document.getElementById('address').addEventListener('input', validateAddress);
    document.getElementById('card-number').addEventListener('input', validateCardNumber);
    document.getElementById('expiry-date').addEventListener('input', validateExpiryDate);
    document.getElementById('cvv').addEventListener('input', validateCVV);
    
    // Format card number input
    document.getElementById('card-number').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 16);
    });
    
    // Format expiry date input
    document.getElementById('expiry-date').addEventListener('input', function(e) {
        let input = e.target.value.replace(/\D/g, '');
        if (input.length > 2) {
            e.target.value = input.substring(0, 2) + '/' + input.substring(2, 6);
        } else {
            e.target.value = input;
        }
    });
    
    // Format CVV input
    document.getElementById('cvv').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
    });
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isAddressValid = validateAddress();
        const isCardValid = validateCardNumber();
        const isExpiryValid = validateExpiryDate();
        const isCVVValid = validateCVV();
        
        // Submit if all validations pass
        if (isNameValid && isEmailValid && isPhoneValid && isAddressValid && 
            isCardValid && isExpiryValid && isCVVValid) {
            // Show success message
            successMessage.style.display = 'block';
            // Reset form
            form.reset();
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
});
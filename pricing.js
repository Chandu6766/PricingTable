// Currency and unit customization
const currencySymbol = '$';
const unit = 'USD';

// Update prices and units based on currency and unit preferences
document.querySelectorAll('.plan').forEach(plan => {
    const price = plan.getAttribute('data-price');
    plan.querySelector('.price').textContent = currencySymbol + price;
    plan.querySelector('.unit').textContent = unit + '/month';
});

// Interactive toggles
document.querySelectorAll('.toggle-label').forEach(toggleLabel => {
    toggleLabel.addEventListener('click', () => {
        toggleLabel.querySelector('input[type="checkbox"]').checked = !toggleLabel.querySelector('input[type="checkbox"]').checked;
    });
});
// script.js

function initAppModals() {
    // --- 1. Requests Modal Elements ---
    const requestsModal = document.getElementById("requestsModal");
    const openRequestsBtn = document.getElementById("view-more-requests");
    const closeRequestsBtn = document.getElementById("close-modal");

    // --- 2. Help & Support Modal Elements ---
    const supportModal = document.getElementById("supportModal");
    const openSupportBtn = document.getElementById("action-help-support");
    const closeSupportBtn = document.getElementById("close-support-modal");
    const timeSelect = document.getElementById("support-time-select");
    const requestCallBtn = document.getElementById("btn-request-call");
    const successToast = document.getElementById("support-success-msg");

    // Open All Requests Modal
    if (requestsModal && openRequestsBtn && closeRequestsBtn) {
        openRequestsBtn.addEventListener("click", function (event) {
            event.preventDefault();
            requestsModal.style.display = "flex";
        });

        closeRequestsBtn.addEventListener("click", function () {
            requestsModal.style.display = "none";
        });
    }

    // Open Help & Support Modal
    if (supportModal && openSupportBtn) {
        openSupportBtn.addEventListener("click", function (event) {
            event.preventDefault();
            if (timeSelect) timeSelect.selectedIndex = 0;
            if (requestCallBtn) requestCallBtn.disabled = true;
            supportModal.style.display = "flex";
        });
    }

    // Close Help & Support Modal
    if (supportModal && closeSupportBtn) {
        closeSupportBtn.addEventListener("click", function () {
            supportModal.style.display = "none";
        });
    }

    // Close modals on clicking backdrop
    window.addEventListener("click", function (event) {
        if (event.target === requestsModal) {
            requestsModal.style.display = "none";
        }
        if (event.target === supportModal) {
            supportModal.style.display = "none";
        }
    });

    // Dropdown change logic (Enable button when a slot is chosen)
    if (timeSelect && requestCallBtn) {
        timeSelect.addEventListener("change", function () {
            if (timeSelect.value !== "") {
                requestCallBtn.disabled = false;
            } else {
                requestCallBtn.disabled = true;
            }
        });
    }

    // Submit Call Request Logic
    if (requestCallBtn && supportModal) {
        requestCallBtn.addEventListener("click", function (event) {
            event.preventDefault();
            supportModal.style.display = "none";

            if (successToast) {
                successToast.classList.add("show");
                setTimeout(() => {
                    successToast.classList.remove("show");
                }, 3000);
            }
        });
    }
}

// Ensure execution safe for all script load scenarios
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAppModals);
} else {
    initAppModals();
}
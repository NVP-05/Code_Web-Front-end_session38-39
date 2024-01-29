const steps = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentStep = 0;

function updateButtons() {
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

function updateSteps() {
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
    updateButtons();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
    updateButtons();
  }
}

nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);

updateButtons();

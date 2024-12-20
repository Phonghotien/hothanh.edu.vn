const pageMainTest = document.querySelector("main.main-test-page");
if (pageMainTest) {
  const stepsJs = document.querySelector(".stepJs");

  if (stepsJs) {
    let currentStep = 0;
    const steps = stepsJs.querySelectorAll(".stepPanel");
    const testGuideContinue = stepsJs.querySelector(".testGuideCountinue");
    const testStart = stepsJs.querySelector(".testStart");
    const totalSteps = steps.length;
    let currentAudio = null;
    function isLastStep() {
      return currentStep === totalSteps - 1;
    }

    function checkRequiredInputs(stepPanel) {
      const requiredInputs = stepPanel.querySelectorAll(
        "input[type='checkbox'].required"
      );
      if (requiredInputs.length === 0) return true;
      return Array.from(requiredInputs).every((input) => input.checked);
    }

    function updateStep() {
      steps.forEach((step, index) => {
        step.classList.remove("active");
        if (index === currentStep) {
          step.classList.add("active");
        }
      });

      const currentStepPanel = steps[currentStep];

      handleAudioPlayback(currentStepPanel);
      if (isLastStep()) {
        testGuideContinue.classList.add("none");
        testStart.classList.remove("invisible");
      } else {
        if (checkRequiredInputs(currentStepPanel)) {
          testGuideContinue.classList.remove("disabled");
        } else {
          testGuideContinue.classList.add("disabled");
        }
      }
    }
    function handleAudioPlayback(stepPanel) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      const audio = stepPanel.querySelector("audio.controlAudioJs");
      if (audio) {
        currentAudio = audio;
        audio.play();
        audio.addEventListener("ended", function () {
          audio.currentTime = 0;
          audio.play();
        });
      } else {
        currentAudio = null;
      }
    }
    function nextStep() {
      if (currentStep < totalSteps - 1) {
        currentStep++;
        updateStep();
      }
    }
    steps.forEach((step) => {
      const checkboxes = step.querySelectorAll(
        "input[type='checkbox'].required"
      );
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          updateStep();
        });
      });
    });

    if (testGuideContinue) {
      testGuideContinue.addEventListener("click", function () {
        if (!this.classList.contains("disabled")) {
          nextStep();
        }
      });
    }

    updateStep();
  }
  const audios = document.querySelectorAll("audio.controlAudioJs");
  console.log(audios.length);
  const volumeControl = document.getElementById("volumeControl");
  const volumeIcon = document.getElementById("volumeIcon");
  if (volumeControl) {
    audios.forEach((audio) => {
      audio.volume = volumeControl.value;
    });
    function updateSliderBackground(value) {
      const percentage = value * 100;
      volumeControl.style.background = `linear-gradient(to right, #2b3789 ${percentage}%, #ddd ${percentage}%)`;
    }
    function updateVolumeIcon(volume) {
      if (volume == 0) {
        volumeIcon.innerHTML = '<i class="fa-light fa-volume-xmark"></i>';
      } else {
        volumeIcon.innerHTML = '<i class="fa-light fa-volume"></i>';
      }
    }
    if (volumeControl) {
      volumeControl.addEventListener("input", function () {
        const volume = volumeControl.value;
        audios.forEach((audio) => {
          audio.volume = volume;
        });

        updateVolumeIcon(volume);
        updateSliderBackground(volume);
      });
      updateVolumeIcon(volumeControl.value);
      updateSliderBackground(volumeControl.value);
    }
  }
}

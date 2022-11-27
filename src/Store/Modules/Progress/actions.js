export function setLoadingProgress(loading){
  return {
    type: 'LOADING-BUTTON-PROGRESS',
    loading
  }
}

export function setLoadingProgressSteps(loading){
  return {
    type: 'LOADING-PROGRESS-STEPS',
    loading
  }
}

export function setTotalStepsProgress(steps){
  return {
    type: 'SET-TOTAL-STEPS-PROGRESS',
    steps
  }
}

export function setStepProgress(step){
  return{
    type: 'SET-STEP-PROGRESS',
    step
  }
}
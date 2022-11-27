export default function progress(state = {
  loading: false,
  step: 1,
  totalStep: 1
}, action) {
  switch(action.type){
    case 'LOADING-BUTTON-PROGRESS':       
      return {         
        loading: action.loading
      }
    case 'LOADING-PROGRESS-STEPS':       
      return {    
        ...state,     
        loading: action.loading
      }
    case 'SET-TOTAL-STEPS-PROGRESS':         
      return { ...state,
        step: action.steps.step,
        totalStep: action.steps.totalStep,
      }
    case 'SET-STEP-PROGRESS':       
      return { ...state,
        step: action.step,
      }
    default:
      return state;
  }
}

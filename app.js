function app(){

  // / Your javascript goes here
  //
  const bellIcon = document.getElementById("bellIcon");
  const bellContainer = document.getElementById("alertContainer");
  const profileBtn = document.getElementById("profileBtn")
  const   dropdownProfile = document.getElementById('dropdownProfile')
  const chechkBoxBtn = document.querySelector("#shopping-item-checkbox");
  const notCompletedIcon = document.querySelector("#not-completed-icon");
  const CompletedIcon = document.querySelector("#completed-icon");
  const loadingSpinnerIcon = document.querySelector("#loading-spinner-icon");
const  chechkBoxBtnStatus = document.querySelector("#shopping-item-check-box-status");
  const HIDDEN_CLASS = "hidden";
  const  MARKED_AS_DONE_CLASS = 'checkbox-done';

  // /click event for alert/
  bellIcon.addEventListener("click", () => {
    bellContainer.style.display == "none"
      ? (bellContainer.style.display = "block")
      : (bellContainer.style.display = "none");
  });
  
  // /click event for dropdown menu/
  profileBtn.addEventListener("click", () => {
  
        dropdownProfile.style.display == "none"
      ? (dropdownProfile.style.display = "block")
      : (dropdownProfile.style.display = "none")
  });
  

  function handleMarkAsDone() {
      notCompletedIcon.classList.add(HIDDEN_CLASS)
  loadingSpinnerIcon.classList.remove(HIDDEN_CLASS);

  chechkBoxBtnStatus.ariaLabel = 'Loading please wait';
  
  
  setTimeout(() =>{
    loadingSpinnerIcon.classList.add(HIDDEN_CLASS)
    CompletedIcon.classList.remove(HIDDEN_CLASS) 


    chechkBoxBtn.ariaLabel = chechkBoxBtn.ariaLabel.replace("as done", "as not done");

    chechkBoxBtnStatus.ariaLabel = 'successfully done uploading';
    chechkBoxBtn.classList.add( MARKED_AS_DONE_CLASS);
  }, 3000);
  }
 

  

  function handleMarkDoneOrNotDone() {
  const markedAsDone = chechkBoxBtn.classList.contains(MARKED_AS_DONE_CLASS)
  if(markedAsDone){
    handleMarkAsNotDone();
   }else{
    handleMarkAsDone();
   }
  
  };
  function handleMarkAsNotDone (){
    CompletedIcon.classList.add(HIDDEN_CLASS)
    loadingSpinnerIcon.classList.remove(HIDDEN_CLASS)
    chechkBoxBtn.ariaLabel = chechkBoxBtn.ariaLabel.replace("as not done", "as done")
    chechkBoxBtnStatus.ariaLabel = 'successfully done '
    setTimeout (() =>{
loadingSpinnerIcon.classList.add(HIDDEN_CLASS)

notCompletedIcon.classList.remove(HIDDEN_CLASS)
    }, 3000)
      }
  chechkBoxBtn.addEventListener("click", handleMarkDoneOrNotDone)
  

  chechkBoxBtn.addEventListener('click', ()=>{

    const accordionCollaps = document.querySelector('.accordion-collaps')
    const mobileAccordChild = document.querySelector('.mobile-accord-child')
setTimeout(()  =>{
  mobileAccordChild.style.display = 'none'
}, 3000)

  })


}

app()
const chechkBoxBtn = document.querySelector("#shopping-item-checkbox");
chechkBoxBtn.addEventListener('click', () =>{
  const addProduct = document.querySelector('.add-product')
  console.log()
})
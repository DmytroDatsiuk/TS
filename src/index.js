import AccountMenegment from './createAuthentitification';

const authentification = new AccountMenegment();

const refs = {
  profile: document.querySelector('.profile'),
  buttonBox: document.querySelector('.btnBox'),
  buttonSignIn: document.querySelector('.signInButton'),
  buttonSignUp: document.querySelector('.signUpButton'),
  formSignUp: document.querySelector('.formSignUp'),
  formSignIn: document.querySelector('.formSignIn'),
  signOut: document.querySelector('.signOut'),
  removeAccount: document.querySelector('.removeAccount'),
};

refs.buttonSignIn.addEventListener('click', onSignInButtonClick);
refs.buttonSignUp.addEventListener('click', onSignUpButtonClick);
refs.formSignUp.addEventListener('submit', onSignUpFormSubmit);
refs.formSignIn.addEventListener('submit', onSignInFormSubmit);
refs.signOut.addEventListener('click', onSignOutClick);
refs.removeAccount.addEventListener('click', onRemoveClick);

authentification.auth();
authentification.db();
authentification.checkStatusAcc();

function onSignInButtonClick(e) {
  e.preventDefault();

  if (!refs.formSignUp.classList.value.includes('visually-hidden')) {
    refs.formSignUp.classList.add('visually-hidden');
    refs.buttonSignUp.classList.remove('signActive');
  }
  refs.formSignIn.classList.remove('visually-hidden');
  refs.buttonSignIn.classList.add('signActive');
}

function onSignUpButtonClick(e) {
  e.preventDefault();
  if (!refs.formSignIn.classList.value.includes('visually-hidden')) {
    refs.formSignIn.classList.add('visually-hidden');
    refs.buttonSignIn.classList.remove('signActive');
  }
  refs.formSignUp.classList.remove('visually-hidden');
  refs.buttonSignUp.classList.add('signActive');
}

function onSignUpFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  authentification.setEmailAndPassword(email.value, password.value);

  const signUpUser = async () => {
    try {
      const createAcc = await authentification.createUser();

      refs.buttonBox.classList.add('visually-hidden');
      refs.profile.classList.remove('visually-hidden');
      refs.formSignUp.classList.add('visually-hidden');
      refs.buttonSignUp.classList.remove('signActive');

      authentification.hasAccountTrueOrFalse(true);
      authentification.online(true);
      authentification.writeToDataBase();
      authentification.state.user = createAcc.user;

      return createAcc;
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };
  signUpUser();

  refs.signOut.addEventListener('click', onSignOutClick);
  refs.removeAccount.addEventListener('click', onRemoveClick);
}

function onSignInFormSubmit(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  authentification.setEmailAndPassword(email.value, password.value);

  const signIn = async () => {
    try {
      const loginUser = await authentification.login();
      authentification.state.user = loginUser.user;
      authentification.online(true);

      refs.buttonBox.classList.add('visually-hidden');
      refs.profile.classList.remove('visually-hidden');
      refs.formSignIn.classList.add('visually-hidden');
      refs.buttonSignIn.classList.remove('signActive');
      authentification.hasAccountTrueOrFalse(true);

      authentification.writeToDataBase();

      ;

      return loginUser;
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };
  signIn();

  refs.signOut.addEventListener('click', onSignOutClick);
  refs.removeAccount.addEventListener('click', onRemoveClick);
}

function onSignOutClick(e) {
  e.preventDefault();

  authentification.logOut();
  authentification.online(false);

  refs.buttonBox.classList.remove('visually-hidden');
  refs.profile.classList.add('visually-hidden');

  refs.signOut.removeEventListener('click', onSignOutClick);
  refs.removeAccount.removeEventListener('click', onRemoveClick);
  authentification.writeToDataBase();

  ;
}

function onRemoveClick(e) {
  e.preventDefault();

  const removeAccount = async () => {
    try {
      const removeUser = await authentification.deleteAccount();

      refs.buttonBox.classList.remove('visually-hidden');
      refs.profile.classList.add('visually-hidden');

      ;

      return removeUser;
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };
  authentification.hasAccountTrueOrFalse(false);
  authentification.online(false);
  authentification.writeToDataBase();
  removeAccount();

  refs.signOut.removeEventListener('click', onSignOutClick);
  refs.removeAccount.removeEventListener('click', onRemoveClick);
}

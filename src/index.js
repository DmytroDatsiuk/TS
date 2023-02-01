import { async } from '@firebase/util';
import AccountMenegment from './createAuthentitification';

const authentification = new AccountMenegment();

const refs = {
  profile: document.querySelector('.profile'),
  buttonBox: document.querySelector('.btnBox'),
  buttonSignIn: document.querySelector('.signInButton'),
  buttonSignUp: document.querySelector('.signUpButton'),
  formSignUp: document.querySelector('.formSignUp'),
  formSignIn: document.querySelector('.formSignIn'),
  boxSignIn: document.querySelector('.boxSignIn'),
  boxSignUp: document.querySelector('.boxSignUp'),
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

  if (!refs.boxSignUp.classList.value.includes('visually-hidden')) {
    refs.boxSignUp.classList.add('visually-hidden');
    refs.buttonSignUp.classList.remove('signActive');
  }
  refs.boxSignIn.classList.remove('visually-hidden');
  refs.buttonSignIn.classList.add('signActive');
}

function onSignUpButtonClick(e) {
  e.preventDefault();
  if (!refs.boxSignIn.classList.value.includes('visually-hidden')) {
    refs.boxSignIn.classList.add('visually-hidden');
    refs.buttonSignIn.classList.remove('signActive');
  }
  refs.boxSignUp.classList.remove('visually-hidden');
  refs.buttonSignUp.classList.add('signActive');
}

function onSignUpFormSubmit(e) {
  e.preventDefault();

  const { email, password, google, facebook, gitHub } =
    e.currentTarget.elements;

  authentification.setEmailAndPassword(email.value, password.value);

  if (e.submitter === google) {
    return googleLogin();
  }
  if (e.submitter === facebook) {
    return facebookLogin();
  }
  if (e.submitter === gitHub) {
    return gitHubLogin();
  }
  signUpUser();
}

function onSignInFormSubmit(e) {
  e.preventDefault();

  const { email, password, google, facebook, gitHub } =
    e.currentTarget.elements;

  authentification.setEmailAndPassword(email.value, password.value);

  if (e.submitter === google) {
    return googleLogin();
  }

  signIn();
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
}

function onRemoveClick(e) {
  e.preventDefault();

  const removeAccount = async () => {
    try {
      const removeUser = await authentification.deleteAccount();

      refs.buttonBox.classList.remove('visually-hidden');
      refs.profile.classList.add('visually-hidden');

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

async function signUpUser() {
  try {
    const createAcc = await authentification.createUser();
    console.log(createAcc.user);
    authentification.state.user = createAcc.user;
    authentification.online(true);
    authentification.hasAccountTrueOrFalse(true);
    authentification.writeToDataBase();

    refs.profile.classList.remove('visually-hidden');
    refs.buttonSignIn.classList.remove('signActive');
    refs.buttonBox.classList.add('visually-hidden');
    refs.boxSignUp.classList.add('visually-hidden');

    refs.signOut.addEventListener('click', onSignOutClick);
    refs.removeAccount.addEventListener('click', onRemoveClick);

    return createAcc; 
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
}

async function signIn() {
  try {
    const loginUser = await authentification.login();

    authentification.state.user = loginUser.user;
    authentification.online(true);
    authentification.hasAccountTrueOrFalse(true);
    authentification.writeToDataBase();

    refs.profile.classList.remove('visually-hidden');
    refs.buttonSignIn.classList.remove('signActive');
    refs.buttonBox.classList.add('visually-hidden');
    refs.boxSignIn.classList.add('visually-hidden');

    refs.signOut.addEventListener('click', onSignOutClick);
    refs.removeAccount.addEventListener('click', onRemoveClick);

    return loginUser;
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
  }
}

async function googleLogin() {
  try {
    const signWithGoogle = await authentification.loginWithGoogle();
    authentification.state.user = signWithGoogle.user;

    settingByLoginWithSocial();

    return signWithGoogle;
  } catch (error) {
    console.log(error);
  }
}

async function facebookLogin() {
  try {
    const signWithFacebook = await authentification.loginWithFacebook();
    authentification.state.user = signWithFacebook.user;

    settingByLoginWithSocial();

    return signWithGoogle;
  } catch (error) {
    console.log(error);
  }
}

async function gitHubLogin() {
  try {
    const signWithGitHub = await authentification.loginWithGitHub();
    authentification.state.user = signWithGitHub.user;

    settingByLoginWithSocial();

    return signWithGoogle;
  } catch (error) {
    console.log(error);
  }
}

function settingByLoginWithSocial() {
  authentification.online(true);
  authentification.hasAccountTrueOrFalse(true);
  authentification.writeToDataBase();

  refs.profile.classList.remove('visually-hidden');
  refs.buttonSignIn.classList.remove('signActive');
  refs.buttonSignUp.classList.remove('signActive');

  refs.buttonBox.classList.add('visually-hidden');

  if (!refs.boxSignIn.classList.value.includes('visually-hidden')) {
    refs.boxSignIn.classList.add('visually-hidden');
  } else {
    refs.boxSignUp.classList.add('visually-hidden');
  }

  refs.signOut.addEventListener('click', onSignOutClick);
  refs.removeAccount.addEventListener('click', onRemoveClick);
}

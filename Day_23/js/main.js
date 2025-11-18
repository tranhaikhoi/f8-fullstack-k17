// Lấy element
const formResgister = document.getElementById("formResgister");
const userNameEl = document.getElementById("userName");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const passwordConfirEl = document.getElementById("passwordConfir");

// Lưu lại class gốc của input

const userNameBaseClass = userNameEl.className;
const emailBaseClass = emailEl.className;
const passwordBaseClass = passwordEl.className;
const passwordConfirBaseClass = passwordConfirEl.className;

// Username error + check
const userNameErrorIcon = document.getElementById("userNameErrorIcon");
const userNameErrorText = document.getElementById("userNameErrorText");
const userNameCheck = document.getElementById("userNameCheck");

// Email error + check
const emailErrorIcon = document.getElementById("emailErrorIcon");
const emailErrorText = document.getElementById("emailErrorText");
const emailCheck = document.getElementById("emailCheck");

// Password error + check
const passwordErrorIcon = document.getElementById("passwordErrorIcon");
const passwordErrorText = document.getElementById("passwordErrorText");
const passwordCheck = document.getElementById("passwordCheck");

// Confirm password error + check
const passwordConfirErrorIcon = document.getElementById(
  "passwordConfirErrorIcon"
);
const passwordConFirErrorText = document.getElementById(
  "passwordConFirErrorText"
);
const passwordConfirCheck = document.getElementById("passwordConfirCheck");

// Mật khẩu và xác nhận mật khẩu không khớp
const passwordConFirErrorNext = document.getElementById(
  "passwordConFirErrorNext"
);

// Hàm kiểm tra email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//  SUBMIT VALIDATION

formResgister.addEventListener("submit", (e) => {
  e.preventDefault();

  // USERNAME
  if (!userNameEl.value.trim()) {
    userNameErrorText.className = "text-red-600";
    userNameErrorIcon.className = "";
    userNameCheck.className = "hidden";
    userNameEl.className = userNameBaseClass + " border-red-500";
  } else {
    userNameErrorText.className = "hidden";
    userNameErrorIcon.className = "hidden";
    userNameCheck.className = "";
    userNameEl.className = userNameBaseClass;
  }

  // EMAIL
  if (!emailEl.value.trim()) {
    emailErrorText.className = "text-red-600";
    emailErrorIcon.className = "";
    emailCheck.className = "hidden";
    emailEl.className = emailBaseClass + " border-red-500";
  } else if (!validateEmail(emailEl.value)) {
    emailErrorText.className = "text-red-600";
    emailErrorIcon.className = "";
    emailCheck.className = "hidden";
    emailEl.className = emailBaseClass + " border-red-500";
  } else {
    emailErrorText.className = "hidden";
    emailErrorIcon.className = "hidden";
    emailCheck.className = "";
    emailEl.className = emailBaseClass;
  }

  // PASSWORD
  if (!passwordEl.value.trim()) {
    passwordErrorText.className = "text-red-600";
    passwordErrorIcon.className = "";
    passwordCheck.className = "hidden";
    passwordEl.className = passwordBaseClass + " border-red-500";
  } else {
    passwordErrorText.className = "hidden";
    passwordErrorIcon.className = "hidden";
    passwordCheck.className = "";
    passwordEl.className = passwordBaseClass;
  }

  // PASSWORD CONFIRMATION
  if (!passwordConfirEl.value.trim()) {
    passwordConFirErrorText.className = "text-red-600";
    passwordConFirErrorNext.className = "hidden";
    passwordConfirErrorIcon.className = "";
    passwordConfirCheck.className = "hidden";
    passwordConfirEl.className = passwordConfirBaseClass + " border-red-500";
  } else if (passwordEl.value !== passwordConfirEl.value) {
    passwordConFirErrorText.className = "hidden";
    passwordConFirErrorNext.className = "text-red-600";
    passwordConfirErrorIcon.className = "";
    passwordConfirCheck.className = "hidden";
    passwordConfirEl.className = passwordConfirBaseClass + " border-red-500";
  } else {
    passwordConFirErrorText.className = "hidden";
    passwordConFirErrorNext.className = "hidden";
    passwordConfirErrorIcon.className = "hidden";
    passwordConfirCheck.className = "";
    passwordConfirEl.className = passwordConfirBaseClass;
  }
});

//  REALTIME VALIDATION

// Username realtime
userNameEl.addEventListener("input", () => {
  if (!userNameEl.value.trim()) {
    userNameErrorText.className = "text-red-600";
    userNameErrorIcon.className = "";
    userNameCheck.className = "hidden";
    userNameEl.className = userNameBaseClass + " border-red-500";
  } else {
    userNameErrorText.className = "hidden";
    userNameErrorIcon.className = "hidden";
    userNameCheck.className = "";
    userNameEl.className = userNameBaseClass;
  }
});

// Email realtime
emailEl.addEventListener("input", () => {
  const value = emailEl.value.trim();

  if (!value) {
    emailErrorText.className = "text-red-600";
    emailErrorIcon.className = "";
    emailCheck.className = "hidden";
    emailEl.className = emailBaseClass + " border-red-500";
    return;
  }

  if (!validateEmail(value)) {
    emailErrorText.className = "text-red-600";
    emailErrorIcon.className = "";
    emailCheck.className = "hidden";
    emailEl.className = emailBaseClass + " border-red-500";
  } else {
    emailErrorText.className = "hidden";
    emailErrorIcon.className = "hidden";
    emailCheck.className = "";
    emailEl.className = emailBaseClass;
  }
});

// Password realtime
passwordEl.addEventListener("input", () => {
  if (!passwordEl.value.trim()) {
    passwordErrorText.className = "text-red-600";
    passwordErrorIcon.className = "";
    passwordCheck.className = "hidden";
    passwordEl.className = passwordBaseClass + " border-red-500";
  } else {
    passwordErrorText.className = "hidden";
    passwordErrorIcon.className = "hidden";
    passwordCheck.className = "";
    passwordEl.className = passwordBaseClass;
  }
});

// Password Confirmation realtime
passwordConfirEl.addEventListener("input", () => {
  if (!passwordConfirEl.value.trim()) {
    passwordConFirErrorText.className = "text-red-600";
    passwordConFirErrorNext.className = "hidden";
    passwordConfirErrorIcon.className = "";
    passwordConfirCheck.className = "hidden";
    passwordConfirEl.className = passwordConfirBaseClass + " border-red-500";
    return;
  }
  // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp không?
  if (passwordEl.value !== passwordConfirEl.value) {
    passwordConFirErrorText.className = "hidden";
    passwordConFirErrorNext.className = "text-red-600";
    passwordConfirErrorIcon.className = "";
    passwordConfirCheck.className = "hidden";
    passwordConfirEl.className = passwordConfirBaseClass + " border-red-500";
  } else {
    passwordConFirErrorNext.className = "hidden";
    passwordConFirErrorText.className = "hidden";
    passwordConfirErrorIcon.className = "hidden";
    passwordConfirCheck.className = "";
    passwordConfirEl.className = passwordConfirBaseClass;
  }
});

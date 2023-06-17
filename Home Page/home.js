// CHAT DROPDOWN

let chatButton = document.querySelectorAll(".part_bottom .button");
let dropdown = document.querySelectorAll(".part_bottom .dropdown");

for (let i = 0; i < chatButton.length; i++) {
  chatButton[i].onclick = function (e) {
    dropdown[i].classList.toggle('active');
    e.stopPropagation();
  }
  window.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown[i].classList.remove('active');
  })
}

let allChats = document.querySelector(".part_bottom .dropdown .all_chats");
let friendsChat = document.querySelector(".part_bottom .dropdown .friends");
let groupChat = document.querySelector(".part_bottom .dropdown .groups");
let unreadChat = document.querySelector(".part_bottom .dropdown .unread");
let archivedChat = document.querySelector(".part_bottom .dropdown .archived");
let peopleBlock = document.querySelector(".people_block");
let contactBlock = document.querySelectorAll(".contact_block");
let contactBlock2 = document.querySelectorAll(".contact_block_2");

allChats.onclick = () => {
  peopleBlock.innerHTML = " ";
  contactBlock2.forEach(function (item) {
    peopleBlock.appendChild(item);
  })
  chatButton.innerHTML = "All Chats";
}

friendsChat.onclick = () => {
  peopleBlock.innerHTML = " ";
  chatButton.innerHTML = "Friends";
  contactBlock.forEach(function (item) {
    if (item.classList.contains("fri")) {
      peopleBlock.appendChild(item);
    }
  })
}

groupChat.onclick = () => {
  peopleBlock.innerHTML = " ";
  chatButton.innerHTML = "Groups";
  contactBlock.forEach(function (item) {
    if (item.classList.contains("group")) {
      peopleBlock.appendChild(item);
    }
  })
}

unreadChat.onclick = () => {
  peopleBlock.innerHTML = " ";
  chatButton.innerHTML = "Unread";
  contactBlock.forEach(function (item) {
    if (item.classList.contains("unr")) {
      peopleBlock.appendChild(item);
    }
  })
}

archivedChat.onclick = () => {
  peopleBlock.innerHTML = " ";
  chatButton.innerHTML = "Archived";
  contactBlock.forEach(function (item) {
    if (item.classList.contains("arch")) {
      peopleBlock.appendChild(item);
    }
  })
}

// SETTING DROPDOWN

let settingButton = document.querySelectorAll(".all .chats .settings_block .part_top .icon_block .fa-ellipsis-v");
let settingDropdown = document.querySelectorAll(".all .chats .settings_block .part_top .icon_block .dropdown");

for (let i = 0; i < settingButton.length; i++) {
  settingButton[i].onclick = function (e) {
    settingDropdown[i].classList.toggle('active_2');
    e.stopPropagation();
  }
  window.addEventListener("click", function (e) {
    e.stopPropagation();
    settingDropdown[i].classList.remove('active_2');
  })
}

let newChat = document.querySelectorAll(".settings_block .part_top .icon_block .dropdown .new_chat");
let settingsModal = document.querySelector(".settings_modal");
let closeSettingsModal = document.querySelector(".settings_modal .settings_modal_content .title .close");

for (let i = 0; i < newChat.length; i++) {
  newChat[i].onclick = () => {
    settingsModal.style.display = "flex";
  }
}
closeSettingsModal.onclick = () => {
  settingsModal.style.display = "none";
}
settingsModal.onclick = function (event) {
  if (event.target == settingsModal) {
    settingsModal.style.display = "none";
  }
}

// NOTIFIC MODAL

let bellNotific = document.querySelectorAll(".fa-bell");
let notificModal = document.querySelector(".notification_modal");
let closeModal = document.querySelector(".notification_modal .modal_content .title .close");

for (let i = 0; i < bellNotific.length; i++) {
  bellNotific[i].onclick = function () {
    notificModal.style.display = "flex";
  }
}
closeModal.onclick = function () {
  notificModal.style.display = "none";
}
notificModal.onclick = function (event) {
  if (event.target == notificModal) {
    notificModal.style.display = "none";
  }
}

// INVITES MODAL

let inviteChat = document.querySelectorAll(".all .chats .settings_block .part_top .icon_block .dropdown .invite_others");
let invitesModal = document.querySelector(".invites_modal");
let closeInvitesModal = document.querySelector(".invites_modal .invites_modal_content .title .close");
let inviteClose = document.querySelector(".invites_modal .invites_modal_content .close_send .invite_close");

for (let i = 0; i < inviteChat.length; i++) {
  inviteChat[i].onclick = () => {
    invitesModal.style.display = "flex";
  }
}
closeInvitesModal.onclick = () => {
  invitesModal.style.display = "none";
}
inviteClose.onclick = () => {
  invitesModal.style.display = "none";
}
invitesModal.onclick = function (event) {
  if (event.target == invitesModal) {
    invitesModal.style.display = "none";
  }
}

// MAIN SEARCH 

let mainSection = document.querySelectorAll(".main_section");
let mainSearch = document.querySelector("main .main_section .main_header .main_settings .main_search");
let mainSearchPart = document.querySelector("main .main_section .main_search_part");

mainSearch.onclick = function repeat() {
  mainSearchPart.style.marginTop = '70px';
  mainSearch.onclick = () => {
    mainSearchPart.style.marginTop = '0';
    mainSearch.onclick = () => {
      repeat();
    }
  }
}

let mainContainer = document.querySelectorAll(".main_container");
let friendSmsData = document.querySelectorAll(".name_block .name_box .data");
let friendSms = document.querySelectorAll(".name_block .sms_block .sms");
let lockIcon = document.querySelectorAll(".fa-lock");
let mainEllipsis = document.querySelector(".main_ellipsis");
let ellipsisDropdown = document.querySelector(".ellipsis_dropdown");

mainEllipsis.onclick = function (e) {
  ellipsisDropdown.classList.toggle('active_3');
  e.stopPropagation();
}
window.addEventListener('click', function (e) {
  e.stopPropagation();
  ellipsisDropdown.classList.remove('active_3');
})

let messageAddDropdown = document.querySelector(".message_add_dropdown");
let faPlusSquare = document.querySelector(".fa-plus-square");

faPlusSquare.onclick = function (e) {
  messageAddDropdown.classList.toggle('active_3');
  e.stopPropagation();
}
window.addEventListener('click', function (e) {
  e.stopPropagation();
  messageAddDropdown.classList.remove('active_3');
})

// INFO SECTION START

let infoSection = document.querySelector(".info_section");
let infoClose = document.querySelector(".info_close");
let viewInfo = document.querySelector(".view_info");

viewInfo.onclick = function () {
  infoSection.style.display = 'block';
}
infoClose.onclick = function () {
  infoSection.style.display = 'none';
}

let userInfo = document.querySelector(".user_information");
let userTitle = document.querySelector(".user_information .user_title");

userTitle.onclick = function repeat() {
  userInfo.style.height = '63px';
  userTitle.onclick = () => {
    userInfo.style.height = '248px';
    userTitle.onclick = () => {
      repeat();
    }
  }
}

let lastMedia = document.querySelector(".last_media");
let mediaTitle = document.querySelector(".media_title");

mediaTitle.onclick = function repeat() {
  lastMedia.style.height = '63px';
  mediaTitle.onclick = () => {
    lastMedia.style.height = '176px';
    mediaTitle.onclick = () => {
      repeat();
    }
  }
}

// ACCOUNT SECTION

let accountBtn = document.querySelectorAll(".account_part .btn");
let publicDropdown = document.querySelectorAll(".account_part .public_dropdown")

for (let i = 0; i < accountBtn.length; i++) {
  accountBtn[i].onclick = function (e) {
    publicDropdown.forEach((item) => item.classList.remove('active'));
    publicDropdown[i].classList.add('active');
    e.stopPropagation();
  }
  window.addEventListener("click", function (e) {
    e.stopPropagation();
    publicDropdown[i].classList.remove('active');
  })
}

let userSettingsBtn = document.querySelector(".user_ellipsis");
let userDropdown = document.querySelector(".user_dropdown");

userSettingsBtn.onclick = function (e) {
  userDropdown.classList.toggle('active');
  e.stopPropagation();
}
window.addEventListener("click", function (e) {
  e.stopPropagation();
  userDropdown.classList.remove('active');
})

// FOOTER

let translateSection = document.querySelectorAll(".translate_modal");
let translateClose = document.querySelectorAll(".translate_close");
let footerNav = document.querySelectorAll(".footer_nav");
let allModal = document.querySelectorAll(".all_modal");

for (let i = 0; i < footerNav.length; i++) {
  footerNav[i].onclick = () => {
    footerNav.forEach((item) => item.classList.remove('active_footer'));
    footerNav[i].classList.add('active_footer');
    allModal.forEach((item) => item.classList.remove('footer_modal_active'));
    allModal[i].classList.add('footer_modal_active');
  }
  translateClose[i].onclick = function () {
    footerNav.forEach((item) => item.classList.remove('active_footer'));
    allModal.forEach((item) => item.classList.remove('footer_modal_active'));
  }
  translateSection[i].onclick = function (event) {
    if (event.target === translateSection[i]) {
      footerNav.forEach((item) => item.classList.remove('active_footer'));
      allModal.forEach((item) => item.classList.remove('footer_modal_active'));
    }
  }
}

let generalLanguage = document.querySelectorAll(".general_language");
let dropdownTranslate = document.querySelectorAll(".language_block .dropdown");

for (let i = 0; i < generalLanguage.length; i++) {
  generalLanguage[i].onclick = function (e) {
    dropdownTranslate.forEach((item) => item.classList.remove("active"));
    dropdownTranslate[i].classList.add('active');
    e.stopPropagation();
  }
  window.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownTranslate[i].classList.remove('active');
  })
}

let buttonNote = document.querySelector(".note_btn");
let newNoteModal = document.querySelector(".new_note_modal");
let newNoteClose = document.querySelector(".new_note_close");
let newNoteCloseTwo = document.querySelector(".close_note");

buttonNote.onclick = function () {
  newNoteModal.style.display = "flex";
}
newNoteClose.onclick = function () {
  newNoteModal.style.display = "none";
}
newNoteCloseTwo.onclick = function () {
  newNoteModal.style.display = "none";
}
newNoteModal.onclick = function (event) {
  if (event.target == newNoteModal) {
    newNoteModal.style.display = "none";
  }
}

let buttonTask = document.querySelector(".clipboard_modal .task_btn");
let newTaskModal = document.querySelector(".new_task_modal");
let newTaskClose = document.querySelector(".new_task_close");
let newTaskCloseTwo = document.querySelector(".close_task");

buttonTask.onclick = () => {
  newTaskModal.style.display = "flex";
}
newTaskClose.onclick = () => {
  newTaskModal.style.display = "none";
}
newTaskCloseTwo.onclick = () => {
  newTaskModal.style.display = "none";
}
newTaskModal.onclick = function (event) {
  if (event.target == newTaskModal) {
    newTaskModal.style.display = "none";
  }
}

let chatButtonNote = document.querySelector(".filter_search .all_notes");
let dropdownNote = document.querySelector(".filter_search .dropdown");

chatButtonNote.onclick = function (e) {
  dropdownNote.classList.toggle('active');
  e.stopPropagation();
}
window.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownNote.classList.remove('active');
})

let buttonClipboard = document.querySelector(".clipboard_block .all_notes");
let dropdownClipboard = document.querySelector(".clipboard_block .dropdown");

buttonClipboard.onclick = function (e) {
  dropdownClipboard.classList.toggle('active');
  e.stopPropagation();
}
window.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownClipboard.classList.remove('active');
})

let checkboxTodo = document.querySelectorAll(".todo_checkbox");
let checkboxText = document.querySelectorAll(".checkbox_text");
let editTaskModal = document.querySelector(".edit_task_modal");
let editTaskClose = document.querySelector(".edit_task_close");
let editTaskCloseTwo = document.querySelector(".close_edit");

for (let i = 0; i < checkboxTodo.length; i++) {
  checkboxTodo[i].onclick = function repeat() {
    checkboxTodo[i].style.background = '#665DFE';
    checkboxTodo[i].innerHTML = '✓';
    checkboxText[i].style.cssText = 'color: #ADB5BD; text-decoration: line-through;';
    checkboxTodo[i].onclick = () => {
      checkboxTodo[i].style.background = 'white';
      checkboxTodo[i].innerHTML = '';
      checkboxText[i].style.cssText = 'color: white; text-decoration: none;';
      checkboxTodo[i].onclick = () => {
        repeat();
      }
    }
  }

  checkboxText[i].onclick = () => {
    editTaskModal.style.display = 'flex';
  }
  editTaskClose.onclick = () => {
    editTaskModal.style.display = 'none';
  }
  editTaskCloseTwo.onclick = () => {
    editTaskModal.style.display = 'none';
  }
  editTaskModal.onclick = function (event) {
    if (event.target == editTaskModal) {
      editTaskModal.style.display = "none";
    }
  }
}

let notesEllips = document.querySelector(".notes_content .footer_ellips");
let personDropdown = document.querySelector(".person_dropdown");

notesEllips.onclick = (e) => {
  personDropdown.classList.toggle('active');
  e.stopPropagation();
}
window.addEventListener("click", function (e) {
  e.stopPropagation();
  personDropdown.classList.remove('active');
})

let labelElem = document.querySelectorAll(".label_elem");
let labelBall = document.querySelectorAll(".label_ball");

for (let i = 0; i < labelElem.length; i++) {
  labelElem[i].onclick = function repeat() {
    labelBall[i].style.cssText = 'position: relative; left: 13px; background-color: white;';
    labelElem[i].style.background = '#665DFE';
    labelElem[i].onclick = () => {
      labelBall[i].style.cssText = 'position: relative; left: 0px; background-color: rgb(179, 179, 179);';
      labelElem[i].style.background = 'white';
      labelElem[i].onclick = () => {
        repeat();
      }
    }
  }
}

// MEDIA JS

let main1 = document.querySelector(".main_1");
let mainArrowBack = document.querySelector(".main_1 .main_arrow");
let con2 = document.querySelectorAll(".con2");
let userName = document.querySelectorAll(".main_info .contact_name .name");
let userOnline = document.querySelectorAll(".main_info .contact_name .online");
let userImg = document.querySelectorAll(".main_info .img");
let welcomeMain = document.querySelector(".welcome_main");

for (let i = 0; i < con2.length; i++) {
  con2[i].onclick = () => {
    main1.classList.add('main_1_media');
    mainArrowBack.onclick = () => {
      main1.classList.remove('main_1_media');
    }
    welcomeMain.style.display = "none";
    mainSection[0].classList.remove('inactive_main_section');
    userImg.forEach((item) => item.classList.remove('active_img'));
    userImg[i].classList.add('active_img');
    userName.forEach((item) => item.classList.remove('active_name'));
    userName[i].classList.add('active_name');
    userOnline.forEach((item) => item.classList.remove('active_name'));
    userOnline[i].classList.add('active_name');
    mainContainer.forEach((item) => item.classList.remove('active_main'));
    mainContainer[i].classList.add('active_main');
    con2.forEach((item) => item.classList.remove('active_contact_block'));
    con2[i].classList.add('active_contact_block');
    friendSms.forEach((item) => item.classList.remove('active_contact_text'));
    friendSms[i].classList.add('active_contact_text');
    friendSmsData.forEach((item) => item.classList.remove('active_contact_text'));
    friendSmsData[i].classList.add('active_contact_text');
    lockIcon.forEach((item) => item.classList.add('active_contact_text'));
    lockIcon[i].classList.remove('active_contact_text');
  }
}

let navJs = document.querySelectorAll(".nav_js");
let chatJs = document.querySelectorAll(".chat_js");
let mainJs = document.querySelectorAll(".main_js");

for (let i = 0; i < navJs.length; i++) {
  navJs[i].onclick = () => {
    navJs.forEach((item) => item.classList.remove('active_nav'));
    navJs[i].classList.add('active_nav');
    chatJs.forEach((item) => item.classList.remove('active_chats'));
    chatJs[i].classList.add('active_chats');
    mainJs.forEach((item) => item.classList.remove('active_main_2'));
    mainJs[i].classList.add('active_main_2');
  }
}
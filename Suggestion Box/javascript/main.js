addPostBtn = document.querySelector(".addpost");
suggestions = document.querySelector(".suggestions")
postTitle = document.querySelector(".posttitle");
postContent = document.querySelector(".postcontent");
postCount = document.querySelector(".postCount");
tagsList = document.querySelector(".tagsList"); 

let tags = ['Students', 'Teachers', 'Schedule', 'Rules', 'Ideas', 'Misc.']

let postCounter = 0; 
postCount.textContent = postCounter + " Posts";

//generate tag checklist

for (let i = 0; i <= tags.length-1; i++) {
    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkboxContainer");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("id", "cb" + i);
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.setAttribute("for", "cb" + i);
    label.textContent = `${tags[i]}`;
    const br = document.createElement("br");
    checkboxContainer.append(checkbox, label);
    if (i === tags.length-1) {tagsList.append(checkboxContainer);}
    else {tagsList.append(checkboxContainer, br);}    
}

//back to top button

let calcScrollValue = () => {
  let scrollProgress = document.querySelector(".progress");
  let progressValue = document.querySelector(".progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #262626 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//post creation

addPostBtn.addEventListener("click", () => {
    const postLayout = document.createElement("div");
    postLayout.classList.add("postLayout");
        const leftContainer = document.createElement("div");
        leftContainer.classList.add("leftContainer");
          const voteContainer = document.createElement("div");
          voteContainer.classList.add("voteContainer");
            let upButton = document.createElement("img");
                upButton.classList.add("upButton");
                upButton.src = "images/uparrow.png";
            let counter = document.createElement("p");
            counter.classList.add("counter");
                let count = 0;
            let downButton = document.createElement("img");
                downButton.classList.add("downButton");
                downButton.src = "images/downarrow.png";
        const contentContainer = document.createElement("div");
        contentContainer.classList.add("contentContainer");
            let titleInput = document.createElement("p");
            titleInput.classList.add("titleInput");
            let contentInput = document.createElement("p");
            contentInput.classList.add("contentInput");
        const empty1 = document.createElement("div");
        empty1.classList.add("empty1");
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("infoContainer");
            const tagsContainer = document.createElement("div");
            tagsContainer.classList.add("tagsContainer");
                let postTags = ['students', 'teachers', 'schedule', 'rules', 'ideas', 'misc'];
            const group = document.createElement("div");
            group.classList.add("group");
              let publicationDate = document.createElement("p"); publicationDate.textContent = "- Posted " + (new Date(Date.now())).toString();             publicationDate.textContent = publicationDate.textContent.replace("GMT-0500 (Eastern Standard Time)", ""); 
              const weekdays = ['Mon ', 'Tue ', 'Web ', 'Thu ', 'Fri ', 'Sat ', 'Sun '];
              const months = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'May ', 'Jun ', 'Jul ', 'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '];
              for (let i = 0; i < weekdays.length; i++) {
                publicationDate.textContent = publicationDate.textContent.replace(weekdays[i], "");
              }
              for (let i = 0; i < months.length; i++) {
                publicationDate.textContent = publicationDate.textContent.replace(months[i], `${i}/`);
              }
              publicationDate.textContent = publicationDate.textContent.slice(0, -9);
              publicationDate.textContent = publicationDate.textContent.replace(' 202', '/202');
              publicationDate.classList.add("publicationDate");
              const authorContainer = document.createElement("div");
              authorContainer.classList.add("authorContainer");
                const username = document.createElement("p");
                username.classList.add("username");
                username.textContent = "anonymous";
                const picture = document.createElement("img");
                picture.classList.add("picture");
                picture.src = "images/defaultpfp.png";
        const empty2 = document.createElement("div");
        empty2.classList.add("empty2");
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("commentContainer");
            const commentsContainer = document.createElement("div");
              let comments = [];
            const commentBtnContainer = document.createElement("div");
              const showCommentBtn = document.createElement("p");
              showCommentBtn.classList.add("showCommentBtn");
              showCommentBtn.textContent = `Show ${comments.length - 2} more comments`;
              const addCommentBtn = document.createElement("p");
              addCommentBtn.classList.add("addCommentBtn");
              addCommentBtn.textContent = "add comment";
        const hr = document.createElement("hr");


    leftContainer.append(voteContainer); voteContainer.append(upButton, counter, downButton)
    contentContainer.append(titleInput, contentInput);
    for (let i = 0; i < postTags.length; i++) {
      const tag = document.createElement("p");
      tag.classList.add("tag");
      tag.textContent = postTags[i];
      tagsContainer.append(tag);
    }
    infoContainer.append(tagsContainer, group); group.append(publicationDate, authorContainer); authorContainer.append(username, picture);
    //loadComments
    postLayout.append(leftContainer, contentContainer, empty1, infoContainer, empty2, commentContainer);

    upButton.addEventListener("click", () => {count += 1;   counter.textContent = count;});
    downButton.addEventListener("click", () => {count -= 1;   counter.textContent = count;});
    counter.textContent = count;
    postCounter += 1; postCount.textContent = postCounter + (postCounter === 1 ? " Post" : " Posts");
    titleInput.textContent = "Lorem Ipsum Dolor Sit Amet"; contentInput.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae cumque ea accusantium fuga recusandae sint corrupti quis. Molestiae amet eligendi inventore qui sit consequatur id quasi mollitia deserunt quisquam! Magnam quisquam quod similique eius dicta neque accusamus non! Voluptates earum reiciendis magni quidem officia minima officiis cupiditate. Rerum ab maxime nihil minus inventore temporibus, quisquam voluptatibus porro consequatur corporis!"
    // titleInput.textContent = postTitle.value; contentInput.textContent = postContent.value;



    suggestions.append(postLayout, hr);


});

function loadComments() {
  for (let i = 0; i < Math.min(comments.length, 2); i++) {
    const comment = document.createElement("p"); 
    comment.textContent = comments[i]; 
    commentsContainer.append(comment);
  }
  if (comments.length > 2) {
    commentBtnContainer.append(showCommentBtn);
  }
  else {
    commentBtnContainer.append(addCommentBtn);
  }
  commentContainer.append(commentBtnContainer);
  showCommentBtn.addEventListener("click", () => {
    commentBtnContainer.removeChild(showCommentBtn);
    for (let i = 2; i < comments.length; i++) {
      const comment = document.createElement("p"); 
      comment.textContent = comments[i]; 
      commentsContainer.append(comment);
    }
    commentBtnContainer.append(addCommentBtn);
  });
  addCommentBtn.addEventListener("click", () => {
  comments.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
  loadComments();});
}

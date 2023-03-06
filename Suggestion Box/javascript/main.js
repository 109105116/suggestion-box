addPostBtn = document.querySelector(".addpost");
suggestions = document.querySelector(".suggestions")
postTitle = document.querySelector(".posttitle");
postContent = document.querySelector(".postcontent");
postCount = document.querySelector(".postCount");
tagsList = document.querySelector(".tagsList"); 

let tags = ['All', 'Students', 'Teachers', 'Schedule', 'Rules', 'Ideas', 'Misc.']

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
                // const addTagBtn = document.createElement("img");
                // addTagBtn.classList.add("addTagBtn");
                // addTagBtn.src = "images/tag.png";
                // const tagBackground = document.createElement("img");
                // tagBackground.src = "images/tag.png";
                // addTagBtn.append(tagBackground);
                // let tagList = [addTagBtn];
            let publicationDate = document.createElement("p"); publicationDate.textContent = "- Posted " +(new Date(Date.now())).toString().replace("GMT-0500 (Eastern Standard Time)", "");
            publicationDate.classList.add("publicationDate");
            const authorContainer = document.createElement("div");
            authorContainer.classList.add("tagsContainer");
        const empty2 = document.createElement("div");
        empty2.classList.add("empty2");
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("commentContainer");
            let comments = [];
            let addCommentBtn = document.createElement("a");
            addCommentBtn.classList.add("addCommentBtn");
            addCommentBtn.textContent = "add comment";
            addCommentBtn.href = "suggestion";
        const hr = document.createElement("hr");


    leftContainer.append(upButton, counter, downButton);
    contentContainer.append(titleInput, contentInput);
    
    // for (tag of tagList) {tagsContainer.append(tag);}
    infoContainer.append(tagsContainer, publicationDate, authorContainer); 
    commentContainer.append(comments, addCommentBtn);
    postLayout.append(leftContainer, contentContainer, empty1, infoContainer, empty2, commentContainer);

    upButton.addEventListener("click", () => {count += 1;   counter.textContent = count;});
    downButton.addEventListener("click", () => {count -= 1;   counter.textContent = count;});
    counter.textContent = count;
    postCounter += 1; postCount.textContent = postCounter + (postCounter === 1 ? " Post" : " Posts");
    titleInput.textContent = "Lorem Ipsum Dolor Sit Amet"; contentInput.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae cumque ea accusantium fuga recusandae sint corrupti quis. Molestiae amet eligendi inventore qui sit consequatur id quasi mollitia deserunt quisquam! Magnam quisquam quod similique eius dicta neque accusamus non! Voluptates earum reiciendis magni quidem officia minima officiis cupiditate. Rerum ab maxime nihil minus inventore temporibus, quisquam voluptatibus porro consequatur corporis!"
    // titleInput.textContent = postTitle.value; contentInput.textContent = postContent.value;
    // addTagBtn.addEventListener("click", createTag());

    

    suggestions.append(postLayout, hr);
});
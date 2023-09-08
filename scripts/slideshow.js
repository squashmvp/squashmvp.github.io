let fileNumber = [1, 1, 1, 1];
folderNumber = 0;
ext = 0;
const folderName = ["Art", "DFUShip", "Nature", "Ai"];
  maxFileCount = [81, 27, 55, 65];
  imageType = [".png", ".jpg"];
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_1 = document.getElementById("ss-img-1");
  img_2 = document.getElementById("ss-img-2");
  img_3 = document.getElementById("ss-img-3");
  img_4 = document.getElementById("ss-img-4");
  prev_0 = document.getElementById("prev-0");
  prev_1 = document.getElementById("prev-1");
  prev_2 = document.getElementById("prev-2");
  prev_3 = document.getElementById("prev-3");
  next_0 = document.getElementById("next-0");
  next_1 = document.getElementById("next-1");
  next_2 = document.getElementById("next-2");
  next_3 = document.getElementById("next-3");

prev_0.addEventListener("click", function () {
  let i = fileNumber[0];
  ext = 0;
  folderNumber = 0;
  i = i - 1;
  if (i < 1) {
    i = maxFileCount[0];
  }
  fileNumber[0] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_1.src = imgLink
});

next_0.addEventListener("click", function () {
  let i = fileNumber[0];
  ext = 0;
  folderNumber = 0;
  i = i + 1;
  if (i > maxFileCount[0]) {
    i = 1;
  }
  fileNumber[0] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_1.src = imgLink;
});

prev_1.addEventListener("click", function () {
  let i = fileNumber[1];
  ext = 0;
  folderNumber = 1;
  i = i - 1;
  if (i < 1) {
    i = maxFileCount[1];
  }
  fileNumber[1] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_2.src = imgLink
});

next_1.addEventListener("click", function () {
  let i = fileNumber[1];
  ext = 0;
  folderNumber = 1;
  i = i + 1;
  if (i > maxFileCount[1]) {
    i = 1;
  }
  fileNumber[1] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_2.src = imgLink;
});

prev_2.addEventListener("click", function () {
  let i = fileNumber[2];
  ext = 1;
  folderNumber = 2;
  i = i - 1;
  if (i < 1) {
    i = maxFileCount[2];
  }
  fileNumber[2] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_3.src = imgLink
});

next_2.addEventListener("click", function () {
  let i = fileNumber[2];
  ext = 1;
  folderNumber = 2;
  i = i + 1;
  if (i > maxFileCount[2]) {
    i = 1;
  }
  fileNumber[2] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_3.src = imgLink;
});

prev_3.addEventListener("click", function () {
  let i = fileNumber[3];
  ext = 0;
  folderNumber = 3;
  i = i - 1;
  if (i < 1) {
    i = maxFileCount[3];
  }
  fileNumber[3] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_4.src = imgLink
});

next_3.addEventListener("click", function () {
  let i = fileNumber[3];
  ext = 0;
  folderNumber = 3;
  i = i + 1;
  if (i > maxFileCount[3]) {
    i = 1;
  }
  fileNumber[3] = i;
  imgLink = `imgs/${folderName[folderNumber]}/${fileNumber[folderNumber]}${imageType[ext]}`;
  img_4.src = imgLink;
  console.log(imgLink)
});


// Missing images
  // AI (17,18,19,20)
  // Art (7, 8, 9, 10, 11, 17, 18, 22, 23, 24, 25,
  // 26, 27, 29, 31)

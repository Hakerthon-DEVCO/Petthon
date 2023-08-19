// document.addEventListener('DOMContentLoaded', function () {
//   const itemsContainer = document.querySelector('.items');
//   const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 개수
//   const paginationButtons = document.querySelectorAll('.page-btn');
//   const prevButton = document.querySelector('.page-prev-btn');
//   const nextButton = document.querySelector('.page-next-btn');
//   let currentPage = 1; // 현재 페이지 번호
//   let totalItems = itemsContainer.children.length; // 전체 아이템 개수
//   let totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수

  // 초기 페이지 표시
  updatePage(currentPage);

  // 페이지 버튼 클릭 시 이벤트 처리
  // paginationButtons.forEach(button => {
  //     button.addEventListener('click', () => {
  //         if (button.classList.contains('page-btn')) {
  //             currentPage = parseInt(button.textContent);
  //             updatePage(currentPage);
  //         }
  //     });
  // });

  // 이전 버튼 클릭 시 이벤트 처리
  // prevButton.addEventListener('click', () => {
  //     currentPage--;
  //     if (currentPage < 1) {
  //         currentPage = totalPages;
  //     }
  //     updatePage(currentPage);
  // });

  // 다음 버튼 클릭 시 이벤트 처리
  // nextButton.addEventListener('click', () => {
  //     currentPage++;
  //     if (currentPage > totalPages) {
  //         currentPage = 1;
  //     }
  //     updatePage(currentPage);
  // });

  // function updatePage(page) {
  //     for (let i = 0; i < totalItems; i++) {
  //         if (i >= (page - 1) * itemsPerPage && i < page * itemsPerPage) {
  //             itemsContainer.children[i].style.display = 'block';
  //         } else {
  //             itemsContainer.children[i].style.display = 'none';
  //         }
  //     }

      // 페이지 버튼 활성화/비활성화 처리
//       paginationButtons.forEach(button => {
//           button.classList.remove('active');
//       });
//       paginationButtons[page - 1].classList.add('active');
//   }
// });

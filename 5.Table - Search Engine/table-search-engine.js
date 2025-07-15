function solve() {
   const tdUsers = document.getElementsByTagName('td');
   const searchField = document.getElementById('searchField').value.toLowerCase();  

   for (const user of tdUsers) {
      let parentUserTr = user.parentElement;
      if (parentUserTr.style.backgroundColor === "yellow") {
         parentUserTr.style.backgroundColor = '';
      }
   }

   for (const user of tdUsers) {
      let parentUserTr = user.parentElement;
      let userDetail = user.textContent.toLowerCase();
      if (userDetail.includes(searchField)) {
         parentUserTr.style.backgroundColor = "yellow";
      }
   }
}
function solve() {
   const ulTowns = document.getElementById('towns');
   const liTowns = ulTowns.getElementsByTagName('li');
   const searchTown = document.getElementById('searchText').value.toLowerCase();
   const result = document.getElementById('result');

   let matches = 0;
   for (let town of liTowns) {
     let townName = town.textContent.toLowerCase();
      if (townName.includes(searchTown)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   result.textContent = `${matches} matches found`;
}
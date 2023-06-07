const mainContainer = document.querySelector('.main-container');

  function addInfoItem(btn) {
    btn.addEventListener('click', function() {
      const infoItemsDiv = this.parentElement.nextElementSibling;
      const newField = document.createElement('div');
      newField.className = 'field';
      newField.innerHTML = '<label class="field-name" style="display: inline-block; width: 200px;">Item Info Name</label><label class="field-value" style="display: inline-block; width: 200px;" type="text">20194853</label><button class="delete-field-btn">Delete</button>';

      infoItemsDiv.appendChild(newField);
      const deleteFieldBtn = newField.querySelector('.delete-field-btn');
      deleteFieldBtn.addEventListener('click', function() {
        const confirmDelete = confirm('Are you sure you want to delete this field?\n Trần Thế Thinh 20194853');
        if (confirmDelete) {
          newField.remove();
        }
      });
    });
  }

  function addBox() {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.innerHTML = '<h2 class="box-title" >Group Item_20194853</h2>&nbsp;&nbsp;&nbsp;<button class="delete-box-btn">Delete</button><div class="button-group"><button class="add-info-btn">Add info item</button><button class="add-group-btn">Add group item</button></div><div class="info-items"></div>';
    mainContainer.appendChild(newBox);

    
    const newAddInfoBtn = newBox.querySelector('.add-info-btn');
    addInfoItem(newAddInfoBtn);

    const newAddGroupBtn = newBox.querySelector('.add-group-btn');
    newAddGroupBtn.addEventListener('click', addBox);

    const newBoxTitle = newBox.querySelector('.box-title');
    newBoxTitle.addEventListener('dblclick', function() {
      this.contentEditable = true;
      this.focus();
    });
    const deleteBoxBtn = newBox.querySelector('.delete-box-btn');
    deleteBoxBtn.addEventListener('click', function() {
      const confirmDelete = confirm('Are you sure you want to delete this group item?\nTrần Thế Thinh 20194853');
      if (confirmDelete) {
        newBox.remove();
      }
    });
  }

  const addInfoBtns = document.querySelectorAll('.add-info-btn');
  const addGroupBtns = document.querySelectorAll('.add-group-btn');

  addInfoBtns.forEach(addInfoItem);

  addGroupBtns.forEach(btn => {
    btn.addEventListener('click', addBox);
  });

  mainContainer.addEventListener('dblclick', editHandler);

  function editHandler(event) {
    const target = event.target;
    if (target.matches('.box-title, .field-name, .field-value')) {
      target.contentEditable = true;
      target.focus(); 
    }
  }
  
  mainContainer.addEventListener('blur', function(event) {
    event.target.contentEditable = false;
  });
  
  mainContainer.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.target.contentEditable = false;
      mainContainer.addEventListener('dblclick', editHandler);
    }  
  });

  function createPDF() {
    html2canvas($('#right-content')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("20194853.pdf");
        }
    });
}
  
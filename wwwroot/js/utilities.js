utilities={
    tempRemoveNotice: (element, type)=>{
        const form = element.parentNode
        demo.showSwal(type,null).then(isConfirm => isConfirm?form.submit():null)
    },

    removeNotice: (element, type)=>{
        const form = element.parentNode
        demo.showSwal(type,null).then(isConfirm => isConfirm?form.submit():null)
    },
    
    setCbxValues(list,selector){
        let renderPoint = $(selector);
        renderPoint.html('');
        
        if(list.length > 0){
            list.forEach(e=>{
                let option = document.createElement('option');
                option.setAttribute('value',e.id);
                option.innerText = e.className;
                renderPoint.append(option);    
            });
            //Render "none" option
            let option = document.createElement('option');
            option.setAttribute('value',-1);
            option.innerText = 'None';
            renderPoint.append(option);    
            
        } else {
            let option = document.createElement('option');
            option.setAttribute('Disabled',null);
            option.innerText = 'Empty';
            renderPoint.append(option);
        }
        
        renderPoint.selectpicker('refresh');     
    },
    
    logout: (url)=>{
        demo.showSwal('warning-message-and-confirmation',null).then(isConfirm => isConfirm?window.location.href = url:null)
    },

    loadingModel: ()=>{
        swal({
            title: 'Loading...',
            type: 'info',
            showConfirmButton: false
            // showCancelButton: true,
            // confirmButtonClass: 'btn btn-success',
            // cancelButtonClass: 'btn btn-danger',
            // confirmButtonText: 'Xác nhận',
            // cancelButtonText: 'Huỷ',
            // buttonsStyling: false
        })
    },

    initDataTableFooter: (table, indexArray)=>{
        table.DataTable({
            "pagingType": "full_numbers",
            initComplete: function () {
                this.api().columns().every(function () {
                    const column = this;  
                    $( 'input', column.footer() ).on( 'keyup change clear', function () {
                        if ( column.search() !== this.value ) {
                            column
                                .search( this.value )
                                .draw();
                        }
                    });
                });

                this.api().columns(indexArray).every(function () {
                    const column = this;  
                    const select = $('<select class="selectpicker" data-style="btn btn-primary btn-round" title="Lọc"><option value=""></option></select>')
                        .appendTo($(column.footer()).empty())
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
    
                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw();
                        });
    
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>')
                    });
                });
            }
        });
    }
}
  // let form_array = localStorage.getItem("previews") ? JSON.parse(localStorage.getItem("previews")) : [];
                // $('.container .forms-sect').each(function (i, e) {
                //     let tab_id = $(e).attr('id');
                //     let row_length = $(e).find('tbody tr').length;
                //     let row_names = '';
                //     for (let i = 0; i < row_length; i++) {
                //         let row_name = $(e).find('tbody tr:nth-child(' + (i + 1) + ') td div').text();
                //         row_names = row_names + row_name + ",";
                //     }
                //     let column_length = $(e).find('thead tr th div').length;
                //     let column_names = '';
                //     for (let j = 0; j < column_length; j++) {
                //         let column_name = $(e).find('thead tr th:nth-child(' + (j + 2) + ') div').text();
                //         column_names = column_names + column_name + ',';
                //     }
                //     let input_type = $(e).find('tbody tr td input').attr('type');
                //     if (input_type !== undefined) {
                //         var input_len = $(e).find('tbody input').length;
                //         var input_ty = input_type;
                //     }
                //     else {
                //         var input_len = $(e).find('tbody select').length;
                //         var input_ty = undefined;
                //     }
                //     let table_info = {
                //         input_types: input_ty,
                //         input_lenghts: input_len,
                //         row_na: row_names,
                //         column_na: column_names,
                //         table_id: tab_id
                //     }

                //     form_array.push(table_info);
                //     localStorage.setItem('previews', JSON.stringify(form_array));
                // });
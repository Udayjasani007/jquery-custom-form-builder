$(document).ready(function () {



    $('.container').find('.preview_form').css('display', 'flex');

    var ids = localStorage.getItem("ids") ? JSON.parse(localStorage.getItem("ids")) : [];
    var array = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    $('.tabs > li').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('id');

        if ($this.hasClass('active')) {
        } else {
            $this.closest('.category').find('.tabs > li, .content .list').removeClass('active');
            $('.content .list[data-tab="' + $theTab + '"], .tabs > li[id="' + $theTab + '"]').addClass('active');
        }
    });

    $(function () {
        $("#draggable2").draggable({
            revert: "invalid",
            helper: "clone",
        });

        $("#droppable ").droppable({
            classes: {
                "ui-droppable-active": "ui-state-active",
                "ui-droppable-hover": "ui-state-hover"
            },
        });

    });

    $("#droppable").droppable({

        activeClass: "active",
        hoverClass: "hover",
        drop: function (event, ui) {
            var $y = $("<div class='forms-sect'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                "<div class='table_title'>" +
                "<input type='text' id='' class='.t_input' value='Type a question'>" +
                "</div>" +
                "<table class='form-sec'>" +
                " <thead>" +
                "<tr>" +
                "<th>" + "</th>" +
                "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b1' name='b1' disabled>" + "b1" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b2' name='b2'disabled>" + "b2" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b3' name='b3'disabled>" + "b3" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                "<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                "</button>" + "</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>" +
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a0'>" + "service" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a1'>" + "Cleanliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a2'>" + "Responsiveness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a3'>" + "Freindliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                "</tr>" +
                "<tr>" + "<th class='add_section_row'>" + "<button class='add_sec_row'>" + "&plus; add row" +
                "</button>" + "</th>" + "</tr>" +
                "</tbody>" +
                "</table>" + "</div>" + "</div>");
            $(this).closest('.container').find('.switch input').removeAttr('disabled');
            $(".table-drop").append($y);
            $(".table-drop  .forms-sect").each(function (i, e) {
                $(this).parent().attr("id", i);
                $(this).attr("id", "table_" + i);
                $(this).find(".table_title > input").attr("id", i);
                $(this).find(".add_elements").attr("id", "table-pop" + i);
                $(this).find(".parents").find("").attr("id", "table-pop" + i);
                $(this).find(".form-sec").attr('id', 'table_id' + i);
                $(this).find('th').each(function (i, e) {
                    $(this).attr('data-attr', 'b' + i);
                    var t = $(this).attr('data-attr');
                });
                $(this).find("th:last-child").removeAttr('data-attr');
                $(this).find('tbody tr').each(function (i, e) {
                    $(this).attr('data-attr', 'a' + i);

                    var r = $(this).attr('data-attr');
                    $(this).find('td').each(function (i, e) {
                        let r = $(this).closest('tr').attr('data-attr');
                        $(this).attr('data-attr', r + 'b' + i);
                    });

                });
                $(this).find('tbody tr:last-child()').removeAttr("data-attr");
                let td_length = $(e).find('tbody tr td').length;
                let tr_length = $(e).find('tbody tr').length;
                let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                for (let i = 1; i < tr_length; i++) {
                    for (let j = 0; j <= td_length; j++) {
                        let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                        if (td_attr !== undefined) {
                            let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                            let td_atr = td_attr.replace(tr_attr, '');
                            if (input_type !== undefined) {
                                $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                            }
                        }
                    }
                }
            });
        }
    });

    $(document).mouseup(function (e) {

        let form_sect = $('.forms-sect');
        let side_navs = $('.sidenavs');
        if (!form_sect.is(e.target) && form_sect.has(e.target).length === 0) {
            if (!side_navs.is(e.target) && side_navs.has(e.target).length === 0) {
                $(form_sect).find('.add_elements').css('display', 'none');
                // $(form_sect).find('.form-section').css('box-shadow', 'none');
                $(form_sect).find('.remove_elements').css('display', 'none');
            }
        }
    });

    $(document).on('click', '.forms-sect', function () {
        $(this).parents('.container').find('.forms-sect').each(function (i, e) {
            let add_element = $(e).css('display');
            let take_tab_id = $(this).attr('id');
            take_tab_id = take_tab_id.replace('table_', '');
            let take_tab_idd = $(e).attr('id');
        });
        $(this).find('.add_elements').css('display', 'flex');
        // $(this).find('.form-section').css('box-shadow', '0px 0px 0px 2px #0293e2');
        $(this).find('.remove_elements').css('display', 'flex');
    });
    $(document).on('focusout', '.container .forms-sect', function (e) {
        $(this).find('thead tr th div').each(function (i, e) {
            let th_length = $(e).closest('thead').find('tr th').length;
            if (th_length > 3) {
                let th_remove = $(e).text();
                if (th_remove == '') {
                    let th_attr = $(e).closest('th').attr('data-attr');
                    $(e).parents('.forms-sect').find('tbody tr td').each(function (i, e) {
                        let td_attr = $(e).attr('data-attr');
                        let tr_attr = $(e).closest('tr').attr('data-attr');
                        let tr_attr_op = td_attr.replace(tr_attr, '');
                        if (th_attr == tr_attr_op) {
                            $(e).remove();
                        }
                    });
                    $(e).closest('th').remove();
                }
            }
        });

        $(this).find('tbody tr td:first-child()').each(function (i, e) {
            let a = $(e).find('div').text();
            if (a == '') {
                let div_len = $(e).closest('tbody').find('tr').length;
                console.log(div_len);
                if (div_len > 2) {
                    $(e).closest('tr').remove();
                }
            }
        });
    });

    $(document).on('click', ".add_elements", function () {
        $(this).closest('.container').find('.sidenavs .select_require select option:selected').prop('selected', false);
        $(this).closest('.container').find(`.sidenavs .select_require select option[value = "No" ]`).prop('selected', true);
        // $(this).closest('.container').find('.switch input').removeAttr('disabled');
        let input_types = $(this).closest('.forms-sect').find('tbody tr td input').attr('type');
        if (input_types !== undefined) {
            if (input_types == 'radio') {
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .radio-box-sec').addClass('changetheme');
            }
            else if (input_types == 'checkbox') {
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .check-box-sec').addClass('changetheme');
            }
            else if (input_types == 'text') {
                // $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme h5').css('color', '#000');
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .text-btn-sec').addClass('changetheme');
                // $(this).parents('.container').find('.sidenavs .input-type .text-btn-sec h5').css('color', '#fff');

            }
            else if (input_types == 'number') {
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .number-sec').addClass('changetheme');
            }
            else { }
        }
        else {
            $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
            $(this).parents('.container').find('.sidenavs .input-type .drop-down-sec').addClass('changetheme');
        }

        var tableid = $(this).parents(".forms-sect").attr("id");
        var navindex = +tableid.replace("table_", "");
        $(this).parents("body").find(".sidenavs").attr("id", "sidenavs_" + navindex);
        $(this).parents(".container").find(".rows textarea").attr("id", "rows" + navindex);
        $(this).parents(".container").find(".columns textarea").attr("id", "columns" + navindex);
        let select_value = $(this).closest('.conatiner').find('.select_require select').attr("id", navindex);
        var inputid = $(this).parents(".forms-sect").find(".table_title input").attr("id");
        $(this).parents("body").find(".sidenavs .table_ti").attr("id", "tab_" + navindex);
        $(this).parents("body").find(".sidenavs .select_require select").attr("id", "select_" + navindex);
        var sidenav_id = $(this).parents(".container").find(".input-form-name input").attr("id", "input_form" + navindex);
        var side_id = $(this).parents(".container").find(".input-form-name input").attr("id");
        sidenav_id = side_id.replace("input_form", "");
        let tabs_titles = $(this).parents('.forms-sect').find('.table_title input').val();
        let side_navid = $(this).parents('.container').find('.sidenavs').attr('id');
        let tab_id_input = $(this).parents('.forms-sect').find('.table_title input').attr('id');
        let side_nav_id = side_navid.replace('sidenavs_', '');
        let replaceData = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
        if (replaceData.length !== 0) {
            let replace = replaceData[navindex].requirements;
            if (replace !== undefined) {
                $(this).closest('.container').find('.sidenavs .select_require select option:selected').prop('selected', false);
                $(this).closest('.container').find(`.sidenavs .select_require select option[value = "${replace}" ]`).prop('selected', true);
            }
        }

        if (tab_id_input == side_nav_id) {
            $(this).closest('.container').find('.sidenavs .input-form-name input').val(tabs_titles);
        }
        $(this).closest('.container').find('.select_require option[1]:selected');
        $(this).parents('.forms-sect').find('tbody tr td:first-child()').each(function (i, e) {
            let a = $(e).find('div').text();
            if (a == '') {
                let div_len = $(e).closest('tbody').find('tr').length;
                console.log(div_len);
                if (div_len > 2) {
                    $(e).closest('tr').remove();
                }
            }
        });

        $('.select_require select').on('change', function (e) {
            let select_id = $(this).attr('id');
            var flag = true;
            $(this).parents('.container').find('.forms-sect').each(function (i, e) {
                var tab_id = $(e).attr('id');
                var sidenavs_id = $(e).closest('.container').find('.sidenavs').attr('id');
                select_i = select_id.replace('select_', '');
                tab_i = tab_id.replace('table_', '');
                // console.log(tab_id);
                var select_value = $(e).parents('.container').find('.select_require select option:selected').val();
                if (select_i == tab_i) {
                    const itemObj = {
                        sidenavsId: sidenavs_id,
                        requirements: select_value,
                        tab_ids: tab_id
                    }

                    $(array).each((i, e) => {
                        if (e.tab_ids == tab_id) {
                            e.requirements = select_value;
                            let replaceData = JSON.parse(localStorage.getItem("items")) || [];
                            replaceData[i].requirements = e.requirements;
                            localStorage.setItem('items', JSON.stringify(replaceData));
                            flag = false;
                        }
                    });

                    if (flag) {
                        array.push(itemObj);
                        localStorage.setItem("items", JSON.stringify(array));
                    }

                }
            });
        });



        $(this).parents('.forms-sect').find('thead tr th div').each(function (i, e) {
            let th_length = $(e).closest('thead').find('tr th').length;
            if (th_length > 3) {
                let th_remove = $(e).text();
                if (th_remove == '') {
                    let th_attr = $(e).closest('th').attr('data-attr');
                    $(e).parents('.forms-sect').find('tbody tr td').each(function (i, e) {
                        let td_attr = $(e).attr('data-attr');
                        let tr_attr = $(e).closest('tr').attr('data-attr');
                        let tr_attr_op = td_attr.replace(tr_attr, '');
                        if (th_attr == tr_attr_op) {
                            $(e).remove();
                        }
                    });
                    $(e).closest('th').remove();
                }
            }
        });

        const title_value = {
            id: inputid,
            sidenavid: sidenav_id
        };

        flag = true;

        $(ids).each(function (i, e) {
            if (inputid == e.id) {
                flag = false;
            }
        });
        if (flag) {
            ids.push(title_value);
            localStorage.setItem("ids", JSON.stringify(ids));
        }

        $(".forms-sect .table_title input").keypress(function (e) {
            let txt = $(this).val() + e.key;
            let tab_id = $(this).attr("id");
            let input_form_id = $(this).parents(".container").find(".input-form-name input").attr("id");
            let sidenav_input_id = +input_form_id.replace("input_form", "");
            if (tab_id == sidenav_input_id) {
                $(this).parents('.container').find(".input-form-name input").val(txt);
            }
        });

        $(".input-form-name input").keypress(function (e) {
            let input_form_id = 0;
            let txt = $(this).val() + e.key;
            let tab_id = $(this).parents(".container").find(".forms-sect .table_title input").attr("id");

            input_form_id = $(this).attr("id");
            input_form_i = +input_form_id.replace("input_form", "");

            $(this).parents(".container").find(".forms-sect").each(function (i, e) {
                let form_id = $(this).attr("id");
                let form_i = +form_id.replace("table_", "");
                if (form_i == input_form_i) {
                    $(this).find(".table_title input").val(txt);
                }
            });

        });


        let row_name = '';
        $(this).parents('.forms-sect').find('tbody tr td:first-child()').each(function (i, e) {
            row_name += $(e).text();
            row_name = row_name.split('✕').join(",");
        });

        row_name = row_name.split(",");
        row_name = row_name.toString().split(",").join("\n").trim();

        let row_input = inputid.replace('table_', '');
        $(this).closest('.container').find('.sidenavs').each(function (i, e) {
            let row_text_area_input = $(e).attr('id');
            row_text_area_input = row_text_area_input.replace('sidenavs_', '');
            if (row_input == row_text_area_input) {
                $(e).find('.rows textarea').val('');
                $(e).find('.rows textarea').val(row_name);
            }
        });
        let column_name = '';
        $(this).parents('.forms-sect').find('thead tr th').each(function (i, e) {
            column_name += $(e).text();
            column_name = column_name.split('✕').join(",");
        });

        column_name = column_name.split(",");
        column_name = column_name.filter(e => e !== ' + add column');
        column_name = column_name.toString().split(",").join("\n");

        let column_input = inputid.replace('table_', '');
        $(this).closest('.container').find('.sidenavs').each(function (i, e) {
            let row_text_area_input = $(e).attr('id');
            row_text_area_input = row_text_area_input.replace('sidenavs_', '');
            if (column_input == row_text_area_input) {
                $(e).find('.columns textarea').val('');
                $(e).find('.columns textarea').val(column_name);
            }
        });

    });


    $(document).on('click', ".remove_elements", function () {
        $(this).closest('.forms-sect').remove();
    });

    $(".in-box").click(function () {
        $(this).parents('.input-type').find('.input-box, .changetheme').removeClass('changetheme');
        $(this).addClass('changetheme');
    });

    $('.radio-box-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();
        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="radio" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }
        let td_length = $(this).parents('.container').find(`#table_id${side_} tbody tr td`).length;
        let tr_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let input_type = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td input`).attr('type');
        for (let i = 1; i < tr_length; i++) {
            for (let j = 0; j <= td_length; j++) {
                let td_attr = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child(${j})`).attr('data-attr');
                if (td_attr !== undefined) {
                    let tr_attr = ($(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} )`).attr('data-attr'));
                    let td_atr = td_attr.replace(tr_attr, '');
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child( ${j} ) input`).attr('value', td_atr);
                }
            }
        }
    });

    $('.check-box-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();
        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="checkbox" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;

        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;

        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');

            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }
        let td_length = $(this).parents('.container').find(`#table_id${side_} tbody tr td`).length;
        let tr_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let input_type = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td input`).attr('type');
        for (let i = 1; i < tr_length; i++) {
            for (let j = 0; j <= td_length; j++) {
                let td_attr = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child(${j})`).attr('data-attr');
                if (td_attr !== undefined) {
                    let tr_attr = ($(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} )`).attr('data-attr'));
                    let td_atr = td_attr.replace(tr_attr, '');
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child( ${j} ) input`).attr('value', td_atr);
                }
            }
        }
    });

    $('.text-btn-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;

        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();

        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="text" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }


    });

    $('.number-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        console.log(sidenavs_id);
        let side_ = sidenavs_id.replace('sidenavs_', '');
        console.log(side_);
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        console.log(form_sec);

        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();
        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="number" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        console.log(row_length);
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        console.log(button_len);
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            console.log(row_name);
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }


    });

    $('.drop-down-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        if (($(this).parents('.container').find(`#table_id${side_} tr td select`).length >= 1)) {
        }
        else {
            $(this).parents('.container').find(`#table_id${side_} tr td`).append(`<select name="" id="" disabled>
        <option value="0">...</option>
        <option value="1">Yes</option>
        <option value="2">No</option>
        </select>`);
            $(this).parents('.container').find(`#table_id${side_} tr td:first-child() select`).remove();
        }

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) select`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }

    });

    $('.sidenavs .rows textarea').bind('input propertychange', function (e) {
        let get_sidenavid = $(this).closest('.sidenavs').attr('id');
        get_sidenavid = get_sidenavid.replace('sidenavs_', '');
        let textarea_val = $(this).val().split('\n');
        let textarealen = textarea_val.length;

        $('.container').find('.forms-sect').each(function (i, e) {
            let tab_id = $(e).attr('id');
            tab_id = tab_id.replace('table_', '');
            if (tab_id == get_sidenavid) {
                let input_type = $(e).find('tbody tr:first-child() td:nth-child(2) input').attr('type');
                let td_len = $(e).find('tbody tr:first-child() td').length;
                $(e).find('tbody tr').each(function (i, e) {
                    $(e).find('td div').text(textarea_val[i]);
                    $(e).remove();
                });
                let name_attr = 'a0';
                let name_at = 'a';
                for (let i = 0; i < textarealen; i++) {
                    $(e).find(`tbody`).append("<tr data-attr=" + name_attr + ">" +
                        "<td data-attr=''>" + "<div class='input-type' format='text'contenteditable='true' data-name=" + name_at + ">" + "" + textarea_val[i] + "" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                        "</tr>");
                    var th_total_length = $(e).find('thead th div').length;
                    for (let j = 0; j < th_total_length; j++) {
                        if (input_type !== undefined) {
                            $(e).find('tbody *[data-attr=' + name_attr + ']').append("<td>" + "<input type=" + input_type + " disabled>" + "</td>");
                        }
                        else {
                            $(e).find('tbody *[data-attr=' + name_attr + ']').append(`<td> <select id='' disabled>
                            <option value="0">...</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                            </select> </td>`);
                        }
                    }
                    for (let k = 0; k <= td_len; k++) {
                        let th_attr = $(e).find('thead th:nth-child(' + (k) + ')').attr('data-attr');
                        let tr_attr = $(e).find('tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
                        let td_attr = tr_attr + th_attr;
                        $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ')').attr('data-attr', td_attr);
                        if (input_type !== undefined) {
                            $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ') input').attr('name', name_at);
                        }
                        else {
                            $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ') select').attr('name', name_at);
                        }
                    }

                    let name_attrs = +name_attr.replace('a', '');
                    name_attrs += 1;
                    name_attr = 'a' + name_attrs;
                    name_at = nextChar(name_at);
                }

                console.log($(e).find(`tbody tr`).length);
                $(e).find('tbody tr:last-child()').after('<tr><th class="add_section_row"><button class="add_sec_row">+ add row</button></th></tr>');
                let td_length = $(e).find('tbody tr td').length;
                let tr_length = $(e).find('tbody tr').length;
                // let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                for (let i = 1; i < tr_length; i++) {
                    for (let j = 0; j <= td_length; j++) {
                        let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                        if (td_attr !== undefined) {
                            let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                            let td_atr = td_attr.replace(tr_attr, '');
                            if (input_type !== undefined) {
                                $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                            }

                        }
                    }
                }
            }
        });
    });

    $('.sidenavs .select_require select ').bind('click', function () {
        let sidenav_id = $(this).parents('.sidenavs').attr('id');
        sidenav_id = sidenav_id.replace('sidenavs_', '');
        let val = $(this).parents('.container').find('.sidenavs .select_require option:selected').val();
        $(this).parents('.container').find('.forms-sect').each(function (i, e) {
            let tab_id = $(e).attr('id');
            tab_id = tab_id.replace('table_', '');
            if (sidenav_id == tab_id) {
                let input_type = $(e).find('tbody tr:first-child() td:last-child() input').attr('type');

                if (val == 'No') {
                    if (input_type !== undefined) {
                        $(e).find('tbody tr td input').removeAttr('required');
                    }
                    else {
                        $(e).find('tbody tr td select').removeAttr('required');
                    }
                }

                else if (val == 'Require an answer on Every row') {
                    $(e).find('tbody tr').each(function (i, e) {
                        if (input_type == 'radio' || input_type == 'checkbox') {
                            let check_length = $(e).find('td input:checked').length;
                            if (check_length < 1) {
                                // console.log('dnasdjas');
                            }
                            else {
                                // console.log(check_length, '>>>>>');
                            }
                        }
                        else if (input_type == 'text' || input_type == 'number') {
                            let text_count = 0;
                            $(e).find('td input').each(function (i, e) {
                                let a = $(e).val();
                                if (a !== '') {
                                    // console.log(a);
                                    text_count++;
                                }
                                else {

                                }
                            });
                            // console.log(text_count);
                        }
                        else {
                            var count = 0;
                            $(e).find('td select').each(function (i, e) {
                                if ($(e)[0].selectedIndex <= 0) {
                                    // console.log("not");
                                }
                                else {
                                    // console.log("yes");
                                    count++;
                                }
                                // console.log(count);
                            });
                        }
                    });
                }

                else if (val == 'Require at least one answer') {
                    $(e).find('tbody').each(function (i, e) {
                        if (input_type == 'radio' || input_type == 'checkbox') {
                            if ($(e).find('tr td input[type=radio]') || $(e).find('tr td input[type=radio]')) {
                                var count = 0;
                                $(e).find('tr td input:checked').each(function (i, e) {
                                    let check_length = $(e).length;
                                    if (check_length < 1) {
                                        console.log("sidsjadjdlsjdlajsd");
                                    }
                                    else {
                                        count++;
                                    }
                                });
                                console.log(count, '>>>>>');
                            }
                        }
                        else if (input_type == 'text' || input_type == 'number') {
                            let text_count = 0;
                            $(e).find('tr td input').each(function (i, e) {
                                let a = $(e).val();
                                if (a !== '') {
                                    console.log(a);
                                    text_count++;
                                }
                                else {

                                }
                            });
                            console.log(text_count);
                        }
                        else {
                            var counts = 0;
                            if ($(e).find("tr td select")[0].selectedIndex <= 0) {

                            }
                            else {
                                counts++;
                            }
                            console.log(counts, '>>>>>>');
                        }
                    });
                }

                else if (val == 'Require an answer in every cell') {
                    if (input_type !== undefined) {
                        $(e).find('tbody tr td input').attr('required', 'true');
                    }
                    else {
                        $(e).find('tbody tr td select').attr('required', 'true');
                    }
                }

            }
        });
    });

    $('.sidenavs .columns textarea').bind('input propertychange', function (e) {
        let get_sidenavid = $(this).closest('.sidenavs').attr('id');
        get_sidenavid = get_sidenavid.replace('sidenavs_', '');
        let textarea_val = $(this).val().split('\n');
        var textarealen = textarea_val.length;

        $('.container').find('.forms-sect').each(function (i, e) {
            let tab_id = $(e).attr('id');
            tab_id = tab_id.replace('table_', '');
            if (tab_id == get_sidenavid) {
                let td_attr_len = $(e).find('tbody tr:first-child() td input').length;
                let input_type = $(e).find('tbody tr:first-child() td:nth-child(2) input').attr('type');
                console.log(input_type);
                let name_atr = 'a';
                $(e).find('thead tr th div').each(function (i, e) {
                    $(e).text(textarea_val[i]);
                    $(e).closest('tr').find('th').has('div').remove();
                });
                let th_attr = $(e).find('thead tr th:first-child()').attr('data-attr');
                let th_atr = th_attr;
                for (let i = 0; i < textarealen; i++) {
                    th_atr = +th_atr.replace('b', '');
                    th_atr += 1;
                    th_atr = 'b' + th_atr;
                    $(e).find(`thead tr th:last-child()`).before(`<th data-attr=${th_atr}><div class='input-type' format='text'contenteditable='true' data-name='' name=''>${textarea_val[i]}</div><span class='close-btns'>&#x2715;</span></th>`);
                }
                $(e).find('tbody tr').each(function (i, e) {
                    if (input_type !== undefined) {
                        $(e).find('td input').each(function (i, e) {
                            $(e).closest('td').remove();
                        });
                    }
                    else {
                        $(e).find('td select').each(function (i, e) {
                            $(e).closest('td').remove();
                        });
                    }

                    for (let i = 0; i < textarealen; i++) {
                        if (input_type !== undefined) {
                            $(e).find('td:first-child()').after("<td>" + "<input type=" + input_type + " disabled>" + "</td>");
                        }
                        else {
                            $(e).find('td:first-child()').after(`<td> <select id='' disabled>         
                            <option value="0">...</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option> 
                            </select> </td>`);
                        }
                    }
                    var textare = $(this).find('td').length;
                    console.log(textare);

                    for (let i = 0; i <= textare; i++) {
                        console.log(textare);
                        let tr_atr = $(e).attr('data-attr');
                        console.log(tr_atr);
                        let th_attr = $(e).closest('.forms-sect').find('thead tr th:nth-child(' + (i) + ')').attr('data-attr');
                        console.log(th_attr);
                        let make_td_attr = tr_atr + th_attr;
                        $(e).find('td:nth-child(' + i + ')').attr('data-attr', make_td_attr);
                        if (input_type !== undefined) {
                            $(e).find('td:nth-child(' + i + ') input').attr('name', name_atr);
                        }
                        else {
                            $(e).find('td:nth-child(' + i + ') select').attr('name', name_atr);
                        }
                    }
                    name_atr = nextChar(name_atr);
                });
                let td_length = $(e).find('tbody tr td').length;
                let tr_length = $(e).find('tbody tr').length;
                for (let i = 1; i < tr_length; i++) {
                    for (let j = 0; j <= td_length; j++) {
                        let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                        if (td_attr !== undefined) {
                            let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                            let td_atr = td_attr.replace(tr_attr, '');
                            if (input_type !== undefined) {
                                $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                            }

                        }
                    }
                }
            }
        });
    });

    let full_array = JSON.parse(localStorage.getItem("total_array")) || [];
    $(full_array).each(function (i, e) {
        let form_sect_id = full_array[i].forms_sect;
        let table_title = full_array[i].table_ti;
        let select_require = full_array[i].select_requir;
        let input_type = full_array[i].input_typee;
        let td_length = full_array[i].input_td_length;
        let select_length = full_array[i].select_input_length;
        let td_div_name = full_array[i].td_div_names;
        let th_div_name = full_array[i].th_div_names;
        let tr_th_length = full_array[i].tr_th_length;
        var yy = $("<div class='forms-sect' id='table_" + form_sect_id + "'>" + "<div class='form-section'>" +
            "<div class='table_title'>" +
            "<h3>" + table_title + "</h3>" +
            "</div>" +
            "<table class='form-sec'>" +
            " <thead>" +
            "<tr>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>" +
            "</table>" + "<p class=error_message>" + "</p>" + "<p class=success_message>" + "</p>" + "</div>" + "</div>");
        $('.container .table_dropping').append(yy);
        // $('.container .table_dropping .form-section').css('box-shadow', 'unset');
        for (let i = 0; i < tr_th_length; i++) {
            $('.table_dropping #table_' + form_sect_id + ' thead tr').append("<th data-attr='" + th_div_name[i].data_attr + "'>" + "<div class='input-type' format='text name='" + th_div_name[i].name + "'>" + "" + th_div_name[i].name + "" + "</div>" + "</th>");
        }
        $('.table_dropping #table_' + form_sect_id + ' thead tr th:first-child div').remove();
        for (let i = 0; i < td_div_name.length; i++) {
            $('.table_dropping #table_' + form_sect_id + ' tbody').append(`<tr data-attr='${td_div_name[i].data_attr}'><td><div class='input-type' format='text' name='${td_div_name[i].data_attr}'>${td_div_name[i].name}</div></td></tr>`);
        }
        for (let i = 0; i < td_div_name.length; i++) {
            if (input_type !== undefined) {
                for (let j = 0; j < td_length; j++) {
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><input type='${input_type}' name ='' value =''></td>`);
                }
            }
            else {
                for (let j = 0; j < select_length; j++) {
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><select name="" id="">
                    <option value="0">...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </select></td>`);
                }
            }
        }
        for (let i = 0; i < td_div_name.length; i++) {
            let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
            for (let j = 0; j <= td_length; j++) {
                let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ')').attr('data-attr', tr_attr + th_attr);
            }
        }
        for (let i = 0; i < td_div_name.length; i++) {
            let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    for (let j = 1; j <= td_length; j++) {
                        let tabs_titles = 'table_' + form_sect_id;
                        let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('value', th_attr);
                    }
                }
                else if (input_type == 'text' || input_type == 'number') {
                    for (let j = 1; j <= td_length; j++) {
                        let tabs_titles = 'table_' + form_sect_id;
                        let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                    }
                }
            }
            else {
                for (let j = 1; j <= select_length; j++) {
                    let tabs_titles = 'table_' + form_sect_id;
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') select').attr('name', tabs_titles + tr_attr);
                }
            }
        }

    });
});

$(document).on('click', '.on_submit', function () {
    $('.container .preview_section .back_home').css('display', 'flex');
    $('.container .json_sec').css('display', 'block');

    let len = $('.table_dropping .forms-sect').length;
    for (let i = 0; i < len; i++) {
        let full_array = JSON.parse(localStorage.getItem("total_array")) || [];
        let select_condition = JSON.stringify(full_array[i].select_requir);
        input_type = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td:last-child() input').attr('type');
        if (select_condition.match("No")) {
        }
        else if (select_condition.match("Require an answer on Every row")) {

            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    var cod1 = 0;
                    var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        var count1 = 0;
                        let check_length = $(e).find('td input:checked').length;
                        if (check_length >= 1) {
                            count1 = count1 + 1;
                        }
                        else {
                        }
                        if (count1 >= 1) {
                            cod1 = cod1 + 1;
                        }
                    });
                    if (cod1 < tr_len1) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('select atleast one answer from every row');
                    }
                    else {
                        console.log("else cod1 < tr_len1");
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }

                else if (input_type == 'text' || input_type == 'number') {
                    var tr_len = 0;
                    var cod = 0;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        tr_len = tr_len + 1;
                        var count = 0;
                        var tdinput = 0;
                        $(e).find('td input').each(function (i, e) {
                            tdinput++;
                            let check_val = $(e).val();
                            if (check_val == '') {
                                count = count + 1;
                            }
                            else {
                            }
                        });

                        if (count < tdinput) {
                            cod = cod + 1;
                        }
                    });

                    if (cod < tr_len) {
                        console.log('saflsf');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('select atleast one answer from every row');
                    }
                    else {
                        console.log('shgdsghdf');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                    let con = 0;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').each(function (i, e) {
                        let check_val = $(e).val();
                        if (check_val == '') {
                            con = con + 1;
                        }
                    });
                }
            }

            else {
                $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                    let count = 0;
                    let counts = 0;

                    $(e).find('td select').each(function (i, e) {
                        counts++;
                        if ($(e)[0].selectedIndex <= 0) {
                            count++;
                        }
                        else {
                            console.log('hello');
                        }
                    });
                    if (count >= counts) {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                        $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer from every row');
                    }
                    else {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                    }
                });
            }
        }
        else if (select_condition.match("Require at least one answer")) {
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        let count = 0;
                        let checklength = $(e).find('tr td input:checked').length;
                        if (checklength < 1) {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                            $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                        }
                        else {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                        }
                    });
                }
                else if (input_type == 'text' || input_type == 'number') {
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        let count = 0;
                        let input_length = $(e).find('tr td input').length;
                        $(e).find('tr').each(function (i, e) {
                            $(e).find('td').each(function (i, e) {
                                if ($(e).find('input').val() == '') {
                                    count = count + 1;
                                }
                            })
                        });
                        if (count >= input_length) {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                            $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                        }
                        else {
                            console.log('sdkjfhdf');
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                        }
                    });
                }
            }
            else {
                $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                    let count = 0;
                    let selects = 0;
                    $(e).find('tr td select').each(function (i, e) {
                        selects++;
                        if ($(e)[0].selectedIndex <= 0) {
                            count++;
                        }
                        else {

                        }
                    });
                    if (count >= selects) {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                        $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                    }
                    else {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                    }

                });
            }
        }
        else if (select_condition.match("Require an answer in every cell")) {
            if (input_type !== undefined) {
                if (input_type == 'radio') {
                    var cod1 = 0;
                    var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        var count1 = 0;
                        let check_length = $(e).find('td input:checked').length;
                        if (check_length >= 1) {
                            count1 = count1 + 1;
                        }
                        else {
                        }
                        if (count1 >= 1) {
                            cod1 = cod1 + 1;
                        }
                    });
                    if (cod1 < tr_len1) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                    }
                    else {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }
                else if (input_type == 'checkbox') {
                    var cod1 = 0;
                    var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        var count1 = 0;
                        let check_length = $(e).find('td input:checked').length;
                        let check_box_length = $(e).find('td input').length;
                        console.log(check_box_length);
                        if (check_length >= check_box_length) {
                            count1 = count1 + 1;
                        }
                        else {
                        }
                        if (count1 >= 1) {
                            cod1 = cod1 + 1;
                        }
                    });
                    if (cod1 < tr_len1) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                    }
                    else {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }
                else if (input_type == 'text' || input_type == 'number') {
                    var tr_len2 = 0;
                    var td_len = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').length;
                    var count2 = 0;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        tr_len2 = tr_len2 + 1;
                        var tdinput2 = 0;
                        $(e).find('tr td').each(function (i, e) {
                            $(e).find('input').each(function (i, e) {
                                tdinput2++;
                                let check_val2 = $(e).val();
                                if (check_val2 !== '') {
                                    count2 = count2 + 1;
                                }

                            });

                        });
                    });
                    if (count2 !== td_len) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                    }
                    else {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }
            }
            else {
                $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                    let count = 0;
                    let selects = 0;
                    $(e).find('tr td select').each(function (i, e) {
                        selects++;
                        if ($(e)[0].selectedIndex <= 0) {
                        }
                        else {
                            count++;
                        }
                    });
                    console.log(selects);
                    if (count < selects) {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                        $(e).closest('.forms-sect').find('.error_message').text('select all answers');
                    }
                    else {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                    }
                });
            }
        }
        else {
        }
    }
    let count = 0;
    $('.table_dropping .forms-sect').each(function (i, e) {
        let dis_css = $(e).find('.error_message').css('display');
        if (dis_css == 'block') {
            count = count + 1;
        }
    });
    let length = $('.table_dropping .forms-sect').length;
    if (count > 0) {
        $('.s_message').css({ 'display': 'none' });
    }
    else if (length == 1) {
        $('.s_message').css({ 'display': 'block', 'text-align': 'center' });
        $('.s_message').text('Form filled successfully');
        $('.err_message').css({ 'display': 'none' });
        localStorage.removeItem('array');
        let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];

        $('.table_dropping .forms-sect').each(function (i, e) {

            let th_names = [];
            let tr_names = [];
            let tab_id = $(e).attr('id');
            console.log(tab_id);
            let flag = true;
            let input_type = $(e).find('tbody tr td input').attr('type');
            $(e).find('thead th div').each(function (i, e) {
                let th_name = $(e).text();
                th_names.push(th_name);
            });
            $(e).find('tbody tr div').each(function (i, e) {
                let tr_name = $(e).text();
                tr_names.push(tr_name);
            });
            console.log(tr_names);
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    let selected_input = [];
                    $(e).find('tbody tr td input:checked').each(function (i, e) {
                        let select_input = $(e).attr('value');
                        let select_attr = $(e).closest('td').attr('data-attr');
                        let select_input_attr = {
                            input_value: select_input,
                            td_input_attr: select_attr
                        };
                        selected_input.push(select_input_attr);
                    });

                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: selected_input,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }
                else if (input_type == 'text' || input_type == 'number') {
                    let inputs_val = [];
                    $(e).find('tbody tr td input').each(function (i, e) {
                        let input_val = $(e).val();
                        let td_attr = $(e).closest('td').attr('data-attr');
                        if (input_val !== '') {
                            let input_attr = {
                                input_value: input_val,
                                td_input_attr: td_attr
                            }
                            inputs_val.push(input_attr);
                        }
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: inputs_val,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }

            }
            else {
                let selected_val = [];
                $(e).find('tbody tr td select').each(function (i, e) {
                    if ($(e)[0].selectedIndex <= 0) {

                    }
                    else {
                        let select_val = $(e).find('option:selected').text();
                        let select_td_attr = $(e).closest('td').attr('data-attr');
                        let select_arr = {
                            select_value: select_val,
                            selected_td_attr: select_td_attr
                        }
                        selected_val.push(select_arr);
                    }
                });
                let full_arrs = {
                    th__names: th_names,
                    td__names: tr_names,
                    selects: selected_val,
                    table_id: tab_id
                }
                table_store.push(full_arrs);
                localStorage.setItem('array', JSON.stringify(table_store));
            }
        });
        console.log(table_store);
    }
    else {
        $('.s_message').css({ 'display': 'block', 'text-align': 'center' });
        $('.s_message').text('Forms filled successfully');
        $('.err_message').css({ 'display': 'none' });
        localStorage.removeItem('array');
        let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];

        $('.table_dropping .forms-sect').each(function (i, e) {

            let th_names = [];
            let tr_names = [];
            let tab_id = $(e).attr('id');
            console.log(tab_id);
            let input_type = $(e).find('tbody tr td input').attr('type');
            $(e).find('thead th div').each(function (i, e) {
                let th_name = $(e).text();
                th_names.push(th_name);
            });
            $(e).find('tbody tr div').each(function (i, e) {
                let tr_name = $(e).text();
                tr_names.push(tr_name);
            });
            console.log(tr_names);
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    let selected_input = [];
                    $(e).find('tbody tr td input:checked').each(function (i, e) {
                        let select_input = $(e).attr('value');
                        let select_attr = $(e).closest('td').attr('data-attr');
                        let select_input_attr = {
                            input_value: select_input,
                            td_input_attr: select_attr
                        };

                        selected_input.push(select_input_attr);
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: selected_input,
                        table_id: tab_id
                    }

                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));

                }
                else if (input_type == 'text' || input_type == 'number') {
                    let inputs_val = [];
                    $(e).find('tbody tr td input').each(function (i, e) {
                        let input_val = $(e).val();
                        let td_attr = $(e).closest('td').attr('data-attr');
                        if (input_val !== '') {
                            let input_attr = {
                                input_value: input_val,
                                td_input_attr: td_attr
                            }
                            inputs_val.push(input_attr);
                        }
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: inputs_val,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }
            }
            else {
                let selected_val = [];
                $(e).find('tbody tr td select').each(function (i, e) {
                    if ($(e)[0].selectedIndex <= 0) {
                    }
                    else {
                        let select_val = $(e).find('option:selected').text();
                        let select_td_attr = $(e).closest('td').attr('data-attr');
                        let select_arr = {
                            select_value: select_val,
                            selected_td_attr: select_td_attr
                        }
                        selected_val.push(select_arr);
                    }
                });
                let full_arrs = {
                    th__names: th_names,
                    td__names: tr_names,
                    selects: selected_val,
                    table_id: tab_id
                }
                table_store.push(full_arrs);
                localStorage.setItem('array', JSON.stringify(table_store));
            }

        });

    }

});

$(document).on('click', '.json-btn', function () {
    let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];
    console.log(table_store);
    let y = $(`<div class="json_table">
    <table class="json_tab">
    <thead>
    <tr>
    <th colspan='3'>Table Info</th>
    <th colspan='2'>Filled Inputs</th>
    </tr>
      <tr>
      <th>Table Id</th>
      <th>Row Names</th>
      <th>Column Names</th>
        <th>Input Value</th>
        <th>Input Attribute</th>
      </tr>
</thead>
<tbody>
</tbody>
    </table>
  </div>`);
    $(this).parents('.json_sec').find('.json_table').remove();
    $(this).after(y);
    // $(this).parents('.json_sec').find('.json_table tbody')
    table_len = $(this).parents('.container').find('.table_dropping .forms-sect').length;
    console.log(table_len);
    for(let i = 0; i < table_len; i++){
        let input_len = $(table_store[i].inputs).length;
        console.log(input_len);
        let input_val = '';
        let input_attr = '';
        let input_type = $(this).parents('.container').find('.table_dropping .forms-sect:nth-child('+(i+1)+') tbody tr td input').attr('type');
        console.log(input_type);
        if(input_type !== undefined){
            for(let j = 0; j < input_len; j++){
                input_val = input_val +"<br>" + table_store[i].inputs[j].input_value;
                input_attr = input_attr +"<br>" + table_store[i].inputs[j].td_input_attr;
            }
            let row_names_len =  $(table_store[i].td__names).length;
            let row_name = '';
            for(let l = 0; l < row_names_len; l++){
                row_name = row_name + "<br>" + table_store[i].td__names[l];
            }
            let column_names_len =  $(table_store[i].th__names).length;
            let column_name = '';
            console.log(column_names_len);
            for(let m = 0; m < column_names_len; m++){
                column_name = column_name + "<br>" + table_store[i].th__names[m];
            }
            console.log(column_name);
    
            $(this).parents('.json_sec').find('.json_table tbody').append(`<tr>
            <td>${table_store[i].table_id}</td>
            <td>${row_name}</td>
            <td>${column_name}</td>
            <td>${input_val}</td>
            <td>${input_attr}</td>
            </tr>`);
        }
        else{
            let select_len = $(table_store[i].selects).length;
            console.log(select_len);
            let select_val = '';
            let select_attr = '';
            for(let j = 0; j < select_len; j++){
                select_val = select_val +"<br>" + table_store[i].selects[j].select_value;
                select_attr = select_attr +"<br>" + table_store[i].selects[j].selected_td_attr;
            }
            console.log(select_val);
            console.log(select_attr);
            let row_names_len =  $(table_store[i].td__names).length;
            let row_name = '';
            for(let l = 0; l < row_names_len; l++){
                row_name = row_name + "<br>" + table_store[i].td__names[l];
            }
            let column_names_len =  $(table_store[i].th__names).length;
            let column_name = '';
            console.log(column_names_len);
            for(let m = 0; m < column_names_len; m++){
                column_name = column_name + "<br>" + table_store[i].th__names[m];
            }
            console.log(column_name);
    
            $(this).parents('.json_sec').find('.json_table tbody').append(`<tr>
            <td>${table_store[i].table_id}</td>
            <td>${row_name}</td>
            <td>${column_name}</td>
            <td>${select_val}</td>
            <td>${select_attr}</td>
            </tr>`);
        }

    }
});

$(document).on('click', '.switch', function () {
    let disabled_attr = $(this).closest('.container').find('.switch input').prop('disabled');
    console.log(disabled_attr);
    if (disabled_attr == true) {

    }
    else {
        console.log('hello');
        let total_array = [];

        $(this).parents('.container').find('.forms-sect').each(function (i, e) {
            let table_id = $(e).attr('id');
            let table_title = $(e).find('.table_title input').val();
            let select_id = $('.container').find('.sidenavs .select_require select').attr('id');
            console.log(select_id);
            table_id = table_id.replace('table_', '');


            let input_type = $(e).find('tbody tr td input').attr('type');
            if (input_type !== undefined) {
                var td_length = $(e).find('tbody tr:first-child() td input').length;
            }
            else {
                var td_length = $(e).find('tbody tr:first-child() td select').length;
            }
            let tds_length = $(e).find('tbody tr:first-child() td select').length;
            let th_length = $(e).find('thead tr th').length;
            let th_names = [];
            let dataAttr = '';
            let value = '';

            $(e).find('thead tr th').each(function (_i, e) {
                dataAttr = $(e).attr('data-attr');
                value = $(e).find('div').text();
                let th_obj = {
                    name: value,
                    data_attr: dataAttr
                }
                th_names.push(th_obj);
            });
            let td_attr = '';
            let td_val = '';
            let td_names = [];
            $(e).find('tbody tr').each(function (i, e) {
                td_attr = $(e).attr('data-attr');
                td_val = $(e).find('td:first-child() div').text();
                let td_obj = {
                    name: td_val,
                    data_attr: td_attr
                }
                td_names.push(td_obj);
            });
            let replaceData = JSON.parse(localStorage.getItem("items")) || [];
            // let repl = replaceData[i].requirements;
            if (replaceData.length === 0 ) {
                var replace = "No";
                console.log("no");
            }
            else {
                var replace = replaceData[i].requirements;
                console.log(replace);
            }
            let full_array = {
                forms_sect: table_id,
                table_ti: table_title,
                select_requir: replace,
                input_typee: input_type,
                input_td_length: td_length,
                select_input_length: tds_length,
                tr_th_length: th_length,
                th_div_names: th_names,
                td_div_names: td_names,
            }
            total_array.push(full_array);

            $(e).find('thead tr th span').remove();
            $(e).find('thead tr th div').removeAttr('contenteditable');
            $(e).find('thead tr .add_section').remove();
            $(e).find('thead tr th:last-child()').css('writing-mode', 'horizontal-tb');
            $(e).find('tbody tr td span').remove();
            $(e).find('tbody tr td div').removeAttr('contenteditable');
            $(e).find('tbody tr th').closest('tr').remove();
            $(e).find('.add_elements').remove();
            $(e).find('.remove_elements').remove();
            // $(e).find('.form-section').css('box-shadow', 'none !important');
            $(e).find('.form-sec').css('max-width', '100%');
        });
        localStorage.setItem("total_array", JSON.stringify(total_array));
        window.location.replace("form.html");
    }

});
$(document).on('click', '.add_element', function () {
    let x = window.matchMedia("(max-width: 575px)");

    if (x.matches) {
        $(".sidenav").css({ "transform": "translateX(0)" });
    }
    else {
        $(".sidenav").css({ "transform": "translateX(0)" });
    }
});

$(document).on('click', '.sidenav .closebtn', function () {
    $(".sidenav").css({ "transform": "translateX(-400px)" });
});

$(document).on('click', '.add_elements', function () {
    let x = window.matchMedia({ "max-width": "575px" });
    if (x.matches) {
        $(".sidenavs").css({ "transform": "translateX(0)" });
    }
    else {
        let a = $(".sidenavs").css("transform");
        if (a == 'matrix(1, 0, 0, 1, 400, 0)') {
            $(".sidenavs").css({ "transform": "translateX(0)" });
        }
        else {
            $(".sidenavs").css({ "transform": "translateX(400px)" });
        }
    }
});

$(document).on('click', '.sidenavs .closebtn', function () {
    $(".sidenavs").css({ "transform": "translateX(400px)" });
});

$(document).on('click', '.add_sec', function () {

    let data_atr = $(this).parents(".form-sec").find("thead th:nth-last-child(2) div").attr('name');
    let name_atr = nextChar(data_atr);

    if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=radio]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='radio' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=checkbox]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='checkbox' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=text]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='text' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=number]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='number' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() select').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><select name='${name_atr}' id='' disabled>
        <option value="0">...</option>
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
        </select></td>`);
    }

    let row_size = $(this).parents('.form-sec').find('tbody tr').length - 1;
    for (let i = 0; i <= row_size; i++) {
        let column_name = $(this).parents('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-last-child(2) input').attr('name');
        $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ") td:last-child() input").attr('name', column_name);
    }

    let last_th_attr = $(this).parents(".form-sec").find("thead tr th:nth-last-child(2)").attr("data-attr");
    let take_num = (+last_th_attr.replace("b", "")) + 1;
    let create_attr = 'b' + take_num;
    $(this).parents('.form-sec').find("thead tr th:last-child()").before(`<th><div class='input-type' format='text'contenteditable='true' data-name='${create_attr}' name='${create_attr}'>${create_attr}</div><span class='close-btns'>&#x2715;</span></th>`);
    $(this).parents('.form-sec').find("thead tr th:nth-last-child(2)").attr("data-attr", create_attr);
    let last_td_attr = $(this).parents(".form-sec").find('tbody tr').length;
    let td_atr = last_td_attr - 1;

    for (let i = 0; i <= td_atr; i++) {
        let row_index = $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ")").attr('data-attr');
        let column_index = $(this).parents(".form-sec").find("thead tr:first-child() th:nth-last-child(2)").attr('data-attr');
        let create_attr = row_index + column_index;
        $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ") td:last-child()").attr("data-attr", create_attr);
    }
    let td_length = $(this).parents(".form-sec").find('tbody tr td').length;
    let tr_length = $(this).parents(".form-sec").find('tbody tr').length;
    let input_type = $(this).parents(".form-sec").find('tbody tr:first-child() td input').attr('type');
    for (let i = 1; i < tr_length; i++) {
        for (let j = 0; j <= td_length; j++) {
            let td_attr = $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
            if (td_attr !== undefined) {
                let tr_attr = ($(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                let td_atr = td_attr.replace(tr_attr, '');
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                    }
                    else if (input_type == 'text' || input_type == 'number') {
                        // $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                    }
                }
                else {
                    // $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') select').attr('value', td_atr);
                }
            }
        }
    }
});

$(document).on('click', '.add_sec_row', function () {
    let radio_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=radio]").length;
    let check_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=checkbox]").length;
    let text_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=text]").length;
    let numb_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=number]").length;
    let select_length = $(this).parents('.form-sec').find("tbody tr:first-child() select").length;
    console.log(select_length);
    let data_atr = $(this).parents(".form-sec").find("tbody tr:nth-last-child(2)").attr('data-attr');
    let name_ = $(this).parents('.form-sec').find("tbody tr:nth-last-child(2) td:last-child() input").attr('name');
    let name_select = $(this).parents('.form-sec').find("tbody tr:nth-last-child(2) td:last-child() select").attr('name');

    if (name_ != undefined) {
        var name_atr = nextChar(name_);
        console.log(name_atr);
    }
    else if (name_select != undefined) {
        var name_atr = nextChar(name_select);
        console.log(name_atr);
    }
    data_atr = +data_atr.replace("a", "") + 1;
    data_atr = data_atr.toString();
    let string = 'a';
    string = string.concat(data_atr);

    $(this).parents(".form-sec").find("tbody tr:last-child()").before("<tr>" +
        "<td data-attr=''>" + "<div class='input-type' format='text'contenteditable='true' data-name=" + string + ">" + string + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
        "</tr>");
    $(this).parents(".form-sec").find('tbody tr:nth-last-child(2)').attr('data-attr', string);
    let radio_ = $(this).parents('.form-sec').find('tbody tr:first-child() input[type=radio]').length;
    console.log('radiobox', radio_);
    if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=radio]').length > 0) {
        for (let i = 0; i < radio_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='radio' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=checkbox]').length > 0) {
        for (let i = 0; i < check_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='checkbox' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=text]').length > 0) {
        for (let i = 0; i < text_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='text' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=number]').length > 0) {
        for (let i = 0; i < numb_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='number' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find(`tbody tr:first-child() select`).length > 0) {
        console.log("hellodfgrdgrdgdrg");
        for (let i = 0; i < select_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<select name=" + string + " id='' disabled>" +
                    "<option value='0'>" + "..." + "</option>" +
                    "<option value='Yes'>" + "Yes" + "</option>" +
                    "<option value='No'>" + "No" + "</option>" +
                    + "</select>" + "</td>");
        }
    }

    let take_row_length = $(this).parents(".form-sec").find("tbody tr:first-child() td").length;
    for (let o = 0; o <= take_row_length; o++) {
        let t = $(this).parents(".form-sec").find("tbody tr:nth-last-child(3) td:nth-child(" + o + ")").attr("data-attr");
        let row_index = $(this).parents(".form-sec").find("tbody tr:nth-last-child(2)").attr('data-attr');
        let column_index = $(this).parents(".form-sec").find("thead tr:first-child() th:nth-child(" + o + ")").attr('data-attr');
        create_data_attr = row_index + column_index;
        $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:nth-child(" + o + ")").attr("data-attr", create_data_attr);
    }
    let td_length = $(this).parents(".form-sec").find('tbody tr td').length;
    let tr_length = $(this).parents(".form-sec").find('tbody tr').length;
    let input_type = $(this).parents(".form-sec").find('tbody tr:first-child() td input').attr('type');
    for (let i = 1; i < tr_length; i++) {
        for (let j = 0; j <= td_length; j++) {
            let td_attr = $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
            if (td_attr !== undefined) {
                let tr_attr = ($(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                let td_atr = td_attr.replace(tr_attr, '');
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                    }
                }
                else {

                }
            }
        }
    }
});

$(document).on('click', 'tr td .close-btn', function () {
    let tr_total_length = $(this).parents('tbody').find('tr').length;
    console.log(tr_total_length);
    if (tr_total_length <= 2) {
    }
    else {
        $(this).closest('tr').remove();
    }
});

$(document).on('click', '.close-btns', function () {
    let th_total_length = $(this).closest('tr').find('th').length;
    console.log(th_total_length);
    if (th_total_length <= 3) {
    }
    else {
        let radio_len = $(this).closest('.form-sec').find('tbody tr').length;
        let radio_length = radio_len - 1;
        console.log(radio_length);

        let td_radio = $(this).closest(".form-sec").find("tbody tr:first-child() td").length;
        console.log(td_radio);
        for (let i = 1; i <= radio_length; i++) {
            console.log("hello");
            let th_attr = $(this).parents("th").attr("data-attr");
            console.log(th_attr);
            for (let j = 1; j <= td_radio; j++) {
                let td_rad = $(this).closest('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr("data-attr");
                console.log(td_rad);
                let search_result = td_rad.search(th_attr);
                console.log(search_result);
                if (search_result == -1) {
                }
                else {
                    $(this).closest('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').remove();
                    break;
                }
            }
        }
        $(this).closest('th').remove();
    }
});

$(document).on('click', '.back_home', function () {
    window.location.replace("index.html");
    localStorage.clear();
});

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

















































































$(document).ready(function () {

    $('.container').find('.preview_form').css('display', 'flex');

    var ids = localStorage.getItem("ids") ? JSON.parse(localStorage.getItem("ids")) : [];
    var array = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    $('.tabs > li').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('id');

        if ($this.hasClass('active')) {
        } else {
            $this.closest('.category').find('.tabs > li, .content .list').removeClass('active');
            $('.content .list[data-tab="' + $theTab + '"], .tabs > li[id="' + $theTab + '"]').addClass('active');
        }
    });

    $(function () {
        $("#draggable2").draggable({
            revert: "invalid",
            helper: "clone",
        });

        $("#droppable").droppable({
            classes: {
                "ui-droppable-active": "ui-state-active",
                "ui-droppable-hover": "ui-state-hover"
            },
        });
    });

    $(document).on('click', '.preview_forms', function () {

        $.ajax({
            url: "index.html", success: function (result) {
                $("body").html(result);
                $('body meta').remove();
                $('body link').remove();
                $('body script').remove();
 
                $(function () {
                    $("#draggable2").draggable({
                        revert: "invalid",
                        helper: "clone",

                    });

                    $("#droppable ").droppable({
                        classes: {
                            "ui-droppable-active": "ui-state-active",
                            "ui-droppable-hover": "ui-state-hover",
                            activeClass: "active",
                            hoverClass: "hover",

                            drop: function (event, ui) {
                                var $y = $("<div class='forms-sect'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                                    "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                                    "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                                    "<div class='table_title'>" +
                                    "<input type='text' id='' class='.t_input' value='Type a question'>" +
                                    "</div>" +
                                    "<table class='form-sec'>" +
                                    " <thead>" +
                                    "<tr>" +
                                    "<th>" + "</th>" +
                                    "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b1' name='b1' disabled>" + "b1" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                                    "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b2' name='b2'disabled>" + "b2" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                                    "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b3' name='b3'disabled>" + "b3" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                                    "<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                                    "</button>" + "</th>" +
                                    "</tr>" +
                                    "</thead>" +
                                    "<tbody>" +
                                    "<tr>" +
                                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a0'>" + "service" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a1'>" + "Cleanliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a2'>" + "Responsiveness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                                    "</tr>" +
                                    "<tr>" +
                                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a3'>" + "Freindliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                                    "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                                    "</tr>" +
                                    "<tr>" + "<th class='add_section_row'>" + "<button class='add_sec_row'>" + "&plus; add row" +
                                    "</button>" + "</th>" + "</tr>" +
                                    "</tbody>" +
                                    "</table>" + "</div>" + "<p class='.error_message'>" + "</p>" + "</div>");
                                console.log('kjdfhsdkjsdkjfkjfhjkfhns');

                                $(this).closest('.container').find('.switch input').removeAttr('disabled');
                                $(".table-drop").append($y);
                                $(".table-drop  .forms-sect").each(function (i, e) {
                                    $(this).parent().attr("id", i);
                                    $(this).attr("id", "table_" + i);
                                    $(this).find(".table_title > input").attr("id", i);
                                    $(this).find(".add_elements").attr("id", "table-pop" + i);
                                    $(this).find(".parents").find("").attr("id", "table-pop" + i);
                                    $(this).find(".form-sec").attr('id', 'table_id' + i);
                                    $(this).find('th').each(function (i, e) {
                                        $(this).attr('data-attr', 'b' + i);
                                        var t = $(this).attr('data-attr');
                                    });
                                    $(this).find("th:last-child").removeAttr('data-attr');
                                    $(this).find('tbody tr').each(function (i, e) {
                                        $(this).attr('data-attr', 'a' + i);

                                        var r = $(this).attr('data-attr');
                                        $(this).find('td').each(function (i, e) {
                                            let r = $(this).closest('tr').attr('data-attr');
                                            $(this).attr('data-attr', r + 'b' + i);
                                        });

                                    });
                                    $(this).find('tbody tr:last-child()').removeAttr("data-attr");
                                    let td_length = $(e).find('tbody tr td').length;
                                    let tr_length = $(e).find('tbody tr').length;
                                    let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                                    for (let i = 1; i < tr_length; i++) {
                                        for (let j = 0; j <= td_length; j++) {
                                            let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                                            if (td_attr !== undefined) {
                                                let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                                                let td_atr = td_attr.replace(tr_attr, '');
                                                if (input_type !== undefined) {
                                                    $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        },
                    });
                });
                let forms_array = localStorage.getItem("total_array") ? JSON.parse(localStorage.getItem("total_array")) : [];
                console.log(forms_array);
                $(forms_array).each(function (i, e) {
                    let forms_sect_id = forms_array[i].forms_sect;
                    let tab_title = forms_array[i].table_ti;
                    let select_require = forms_array[i].select_requir;
                    let input_type = forms_array[i].input_typee;
                    let input_td_len = forms_array[i].input_td_length;
                    let td_div_names = forms_array[i].td_div_names;
                    let th_div_names = forms_array[i].th_div_names;
                    let tr_len = forms_array[i].td_div_names.length;
                    let th_len = forms_array[i].th_div_names.length;
                    // console.log(forms_sect_id,tab_title,select_require,input_type,input_td_len,td_div_names,th_div_names);
                    console.log(forms_sect_id);

                    let form_table = $("<div class='forms-sect' id='table_" + forms_sect_id + "'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                        "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                        "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                        "<div class='table_title'>" +
                        "<input type='text' id='" + forms_sect_id + "' class='.t_input' value='" + tab_title + "'>" +
                        "</div>" +
                        "<table class='form-sec' id = 'table_id" + forms_sect_id + "'>" +
                        " <thead>" +
                        "<tr>" +
                        "</tr>" +
                        "</thead>" +
                        "<tbody>" +
                        "</tbody>" +
                        "</table>" + "</div>" + "<p class='.error_message'>" + "</p>" + "</div>");
                    $('.table-drop').append(form_table);
                    for (let u = 0; u < th_len; u++) {
                        $(".table-drop #table_" + forms_sect_id + " thead tr").append("<th data-attr='" + forms_array[i].th_div_names[u].data_attr + "'>" + "<div class='input-type' format='text'contenteditable='true' data-name='" + forms_array[i].th_div_names[u].name + "' name='" + forms_array[i].th_div_names[u].name + "' disabled>" + forms_array[i].th_div_names[u].name + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>");
                    }
                    $(".table-drop #table_" + forms_sect_id + " thead tr th:first-child() .close-btns").remove();
                    $(".table-drop #table_" + forms_sect_id + " thead tr th:first-child() div").remove();
                    $(".table-drop #table_" + forms_sect_id + " thead tr th:last-child()").after("<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                        "</button>" + "</th>");
                    for (let j = 0; j < tr_len; j++) {
                        $(".table-drop #table_" + forms_sect_id + " tbody").append("<tr data-attr='" + forms_array[i].td_div_names[j].data_attr + "'>" + "<td>" +
                            "<div class='input-type' format='text'contenteditable='true' data-name='" + forms_array[i].td_div_names[j].name + "'>" + forms_array[i].td_div_names[j].name + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" + "</tr>");
                        for (let w = 0; w < input_td_len; w++) {
                            let tr_data_attrs = $('.table-drop #table_' + forms_sect_id + ' tbody tr:nth-child(' + (j + 1) + ')').attr('data-attr');
                            if (input_type !== undefined) {
                                $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:first-child()").after(`<td><input type="${input_type}"  name="${tr_data_attrs}" disabled></td>`);
                            }
                            else {
                                $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:first-child()").after(`<td><select name="${tr_data_attrs}" disabled>
                                <option value="0">...</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                                </select></td>`);
                            }
                        }

                        let th_len = $(".table-drop #table_" + forms_sect_id + " thead tr th").length - 1;
                        for (let a = 0; a < th_len; a++) {
                            let trs_data_attr = $('.table-drop #table_' + forms_sect_id + ' tbody tr:nth-child(' + (j + 1) + ')').attr('data-attr');
                            let ths_data_attr = $('.table-drop #table_' + forms_sect_id + ' thead tr th:nth-child(' + (a + 1) + ')').attr('data-attr');
                            $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:nth-child(" + (a + 1) + ")").attr("data-attr", trs_data_attr + ths_data_attr);
                            if (input_type !== undefined) {
                                $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:nth-child(" + (a + 1) + ") input").attr('value', ths_data_attr);
                            }
                        }
                    }
                    $(".table-drop #table_" + forms_sect_id + " tbody tr:last-child()").after('<tr><th class="add_section_row"><button class="add_sec_row">+ add row</button></th></tr>')
                    // $(".table-drop  .forms-sect").each(function (i, e) {
                    //     $(this).parent().attr("id", i);
                    //     $(this).attr("id", "table_" + i);
                    //     $(this).find(".table_title > input").attr("id", i);
                    //     $(this).find(".add_elements").attr("id", "table-pop" + i);
                    //     $(this).find(".parents").find("").attr("id", "table-pop" + i);
                    //     $(this).find(".form-sec").attr('id', 'table_id' + i);
                    //     $(this).find('th').each(function (i, e) {
                    //         $(this).attr('data-attr', 'b' + i);
                    //         var t = $(this).attr('data-attr');
                    //     });
                    //     $(this).find("th:last-child").removeAttr('data-attr');
                    //     $(this).find('tbody tr').each(function (i, e) {
                    //         $(this).attr('data-attr', 'a' + i);

                    //         var r = $(this).attr('data-attr');
                    //         $(this).find('td').each(function (i, e) {
                    //             let r = $(this).closest('tr').attr('data-attr');
                    //             $(this).attr('data-attr', r + 'b' + i);
                    //         });

                    //     });
                    //     $(this).find('tbody tr:last-child()').removeAttr("data-attr");
                    //     let td_length = $(e).find('tbody tr td').length;
                    //     let tr_length = $(e).find('tbody tr').length;
                    //     let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                    //     for (let i = 1; i < tr_length; i++) {
                    //         for (let j = 0; j <= td_length; j++) {
                    //             let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                    //             if (td_attr !== undefined) {
                    //                 let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                    //                 let td_atr = td_attr.replace(tr_attr, '');
                    //                 if (input_type !== undefined) {
                    //                     $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                    //                 }
                    //             }
                    //         }
                    //     }
                    // });
                    // $(".table-drop #'table_"+forms_sect_id+"'").
                });
                // $("#droppable").droppable({
                //     // activeClass: "active",
                //     // hoverClass: "hover",
                //     drop: function (event, ui) {
                //         var $y = $("<div class='forms-sect'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                //             "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                //             "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                //             "<div class='table_title'>" +
                //             "<input type='text' id='' class='.t_input' value='Type a question'>" +
                //             "</div>" +
                //             "<table class='form-sec'>" +
                //             " <thead>" +
                //             "<tr>" +
                //             "<th>" + "</th>" +
                //             "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b1' name='b1' disabled>" + "b1" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                //             "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b2' name='b2'disabled>" + "b2" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                //             "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b3' name='b3'disabled>" + "b3" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                //             "<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                //             "</button>" + "</th>" +
                //             "</tr>" +
                //             "</thead>" +
                //             "<tbody>" +
                //             "<tr>" +
                //             "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a0'>" + "service" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                //             "</tr>" +
                //             "<tr>" +
                //             "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a1'>" + "Cleanliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                //             "</tr>" +
                //             "<tr>" +
                //             "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a2'>" + "Responsiveness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                //             "</tr>" +
                //             "<tr>" +
                //             "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a3'>" + "Freindliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                //             "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                //             "</tr>" +
                //             "<tr>" + "<th class='add_section_row'>" + "<button class='add_sec_row'>" + "&plus; add row" +
                //             "</button>" + "</th>" + "</tr>" +
                //             "</tbody>" +
                //             "</table>" + "</div>" + "<p class='.error_message'>" + "</p>" + "</div>");
                //     console.log('kjdfhsdkjsdkjfkjfhjkfhns');

                //         $(this).closest('.container').find('.switch input').removeAttr('disabled');
                //         $(".table-drop").append($y);
                //         $(".table-drop  .forms-sect").each(function (i, e) {
                //             $(this).parent().attr("id", i);
                //             $(this).attr("id", "table_" + i);
                //             $(this).find(".table_title > input").attr("id", i);
                //             $(this).find(".add_elements").attr("id", "table-pop" + i);
                //             $(this).find(".parents").find("").attr("id", "table-pop" + i);
                //             $(this).find(".form-sec").attr('id', 'table_id' + i);
                //             $(this).find('th').each(function (i, e) {
                //                 $(this).attr('data-attr', 'b' + i);
                //                 var t = $(this).attr('data-attr');
                //             });
                //             $(this).find("th:last-child").removeAttr('data-attr');
                //             $(this).find('tbody tr').each(function (i, e) {
                //                 $(this).attr('data-attr', 'a' + i);

                //                 var r = $(this).attr('data-attr');
                //                 $(this).find('td').each(function (i, e) {
                //                     let r = $(this).closest('tr').attr('data-attr');
                //                     $(this).attr('data-attr', r + 'b' + i);
                //                 });

                //             });
                //             $(this).find('tbody tr:last-child()').removeAttr("data-attr");
                //             let td_length = $(e).find('tbody tr td').length;
                //             let tr_length = $(e).find('tbody tr').length;
                //             let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                //             for (let i = 1; i < tr_length; i++) {
                //                 for (let j = 0; j <= td_length; j++) {
                //                     let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                //                     if (td_attr !== undefined) {
                //                         let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                //                         let td_atr = td_attr.replace(tr_attr, '');
                //                         if (input_type !== undefined) {
                //                             $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                //                         }
                //                     }
                //                 }
                //             }
                //         });
                //     }
                // });
            }
        });
    });

    $("#droppable").droppable({

        activeClass: "active",
        hoverClass: "hover",
        drop: function (event, ui) {
            var $y = $("<div class='forms-sect'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                "<div class='table_title'>" +
                "<input type='text' id='' class='.t_input' value='Type a question'>" +
                "</div>" +
                "<table class='form-sec'>" +
                " <thead>" +
                "<tr>" +
                "<th>" + "</th>" +
                "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b1' name='b1' disabled>" + "b1" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b2' name='b2'disabled>" + "b2" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b3' name='b3'disabled>" + "b3" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                "<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                "</button>" + "</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>" +
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a0'>" + "service" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a1'>" + "Cleanliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a2'>" + "Responsiveness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a3'>" + "Freindliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                "</tr>" +
                "<tr>" + "<th class='add_section_row'>" + "<button class='add_sec_row'>" + "&plus; add row" +
                "</button>" + "</th>" + "</tr>" +
                "</tbody>" +
                "</table>" + "</div>" + "<p class='.error_message'>" + "</p>" + "</div>");
            $(this).closest('.container').find('.switch input').removeAttr('disabled');
            $(".table-drop").append($y);
            $(".table-drop  .forms-sect").each(function (i, e) {
                $(this).attr("id", "table_" + i);
                $(this).find(".table_title > input").attr("id", i);
                $(this).find(".add_elements").attr("id", "table-pop" + i);
                $(this).find(".parents").find("").attr("id", "table-pop" + i);
                $(this).find(".form-sec").attr('id', 'table_id' + i);
                $(this).find('th').each(function (i, e) {
                    $(this).attr('data-attr', 'b' + i);
                    var t = $(this).attr('data-attr');
                });
                $(this).find("th:last-child").removeAttr('data-attr');
                $(this).find('tbody tr').each(function (i, e) {
                    $(this).attr('data-attr', 'a' + i);

                    var r = $(this).attr('data-attr');
                    $(this).find('td').each(function (i, e) {
                        let r = $(this).closest('tr').attr('data-attr');
                        $(this).attr('data-attr', r + 'b' + i);
                    });

                });
                $(this).find('tbody tr:last-child()').removeAttr("data-attr");
                let td_length = $(e).find('tbody tr td').length;
                let tr_length = $(e).find('tbody tr').length;
                let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                for (let i = 1; i < tr_length; i++) {
                    for (let j = 0; j <= td_length; j++) {
                        let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                        if (td_attr !== undefined) {
                            let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                            let td_atr = td_attr.replace(tr_attr, '');
                            if (input_type !== undefined) {
                                $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                            }
                        }
                    }
                }
            });
        }
    });

    $(document).mouseup(function (e) {

        let form_sect = $('.forms-sect');
        let side_navs = $('.sidenavs');
        if (!form_sect.is(e.target) && form_sect.has(e.target).length === 0) {
            if (!side_navs.is(e.target) && side_navs.has(e.target).length === 0) {
                $(form_sect).find('.add_elements').css('display', 'none');
                // $(form_sect).find('.form-section').css('box-shadow', 'none');
                $(form_sect).find('.remove_elements').css('display', 'none');
            }
        }
    });

    $(document).on('click', '.forms-sect', function () {
        $(this).parents('.container').find('.forms-sect').each(function (i, e) {
            let add_element = $(e).css('display');
            let take_tab_id = $(this).attr('id');
            take_tab_id = take_tab_id.replace('table_', '');
            let take_tab_idd = $(e).attr('id');
        });
        $(this).find('.add_elements').css('display', 'flex');
        // $(this).find('.form-section').css('box-shadow', '0px 0px 0px 2px #0293e2');
        $(this).find('.remove_elements').css('display', 'flex');
    });
    $(document).on('focusout', '.container .forms-sect', function (e) {
        $(this).find('thead tr th div').each(function (i, e) {
            let th_length = $(e).closest('thead').find('tr th').length;
            if (th_length > 3) {
                let th_remove = $(e).text();
                if (th_remove == '') {
                    let th_attr = $(e).closest('th').attr('data-attr');
                    $(e).parents('.forms-sect').find('tbody tr td').each(function (i, e) {
                        let td_attr = $(e).attr('data-attr');
                        let tr_attr = $(e).closest('tr').attr('data-attr');
                        let tr_attr_op = td_attr.replace(tr_attr, '');
                        if (th_attr == tr_attr_op) {
                            $(e).remove();
                        }
                    });
                    $(e).closest('th').remove();
                }
            }
        });

        $(this).find('tbody tr td:first-child()').each(function (i, e) {
            let a = $(e).find('div').text();
            if (a == '') {
                let div_len = $(e).closest('tbody').find('tr').length;
                console.log(div_len);
                if (div_len > 2) {
                    $(e).closest('tr').remove();
                }
            }
        });
    });

    $(document).on('click', ".add_elements", function () {
        $(this).closest('.container').find('.sidenavs .select_require select option:selected').prop('selected', false);
        $(this).closest('.container').find(`.sidenavs .select_require select option[value = "No" ]`).prop('selected', true);
        // $(this).closest('.container').find('.switch input').removeAttr('disabled');
        let input_types = $(this).closest('.forms-sect').find('tbody tr td input').attr('type');
        if (input_types !== undefined) {
            if (input_types == 'radio') {
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .radio-box-sec').addClass('changetheme');
            }
            else if (input_types == 'checkbox') {
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .check-box-sec').addClass('changetheme');
            }
            else if (input_types == 'text') {
                // $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme h5').css('color', '#000');
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .text-btn-sec').addClass('changetheme');
                // $(this).parents('.container').find('.sidenavs .input-type .text-btn-sec h5').css('color', '#fff');
            }
            else if (input_types == 'number') {
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .number-sec').addClass('changetheme');
            }
            else { }
        }
        else {
            $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
            $(this).parents('.container').find('.sidenavs .input-type .drop-down-sec').addClass('changetheme');
        }

        var tableid = $(this).parents(".forms-sect").attr("id");
        var navindex = +tableid.replace("table_", "");
        $(this).parents("body").find(".sidenavs").attr("id", "sidenavs_" + navindex);
        $(this).parents(".container").find(".rows textarea").attr("id", "rows" + navindex);
        $(this).parents(".container").find(".columns textarea").attr("id", "columns" + navindex);
        let select_value = $(this).closest('.conatiner').find('.select_require select').attr("id", navindex);
        var inputid = $(this).parents(".forms-sect").find(".table_title input").attr("id");
        $(this).parents("body").find(".sidenavs .table_ti").attr("id", "tab_" + navindex);
        $(this).parents("body").find(".sidenavs .select_require select").attr("id", "select_" + navindex);
        var sidenav_id = $(this).parents(".container").find(".input-form-name input").attr("id", "input_form" + navindex);
        var side_id = $(this).parents(".container").find(".input-form-name input").attr("id");
        sidenav_id = side_id.replace("input_form", "");
        let tabs_titles = $(this).parents('.forms-sect').find('.table_title input').val();
        let side_navid = $(this).parents('.container').find('.sidenavs').attr('id');
        let tab_id_input = $(this).parents('.forms-sect').find('.table_title input').attr('id');
        let side_nav_id = side_navid.replace('sidenavs_', '');
        let replaceData = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
        if (replaceData.length !== 0) {
            let replace = replaceData[navindex].requirements;
            if (replace !== undefined) {
                $(this).closest('.container').find('.sidenavs .select_require select option:selected').prop('selected', false);
                $(this).closest('.container').find(`.sidenavs .select_require select option[value = "${replace}" ]`).prop('selected', true);
            }
        }

        if (tab_id_input == side_nav_id) {
            $(this).closest('.container').find('.sidenavs .input-form-name input').val(tabs_titles);
        }
        $(this).closest('.container').find('.select_require option[1]:selected');
        $(this).parents('.forms-sect').find('tbody tr td:first-child()').each(function (i, e) {
            let a = $(e).find('div').text();
            if (a == '') {
                let div_len = $(e).closest('tbody').find('tr').length;
                console.log(div_len);
                if (div_len > 2) {
                    $(e).closest('tr').remove();
                }
            }
        });

        $('.select_require select').on('change', function (e) {
            let select_id = $(this).attr('id');
            var flag = true;
            $(this).parents('.container').find('.forms-sect').each(function (i, e) {
                var tab_id = $(e).attr('id');
                var sidenavs_id = $(e).closest('.container').find('.sidenavs').attr('id');
                select_i = select_id.replace('select_', '');
                tab_i = tab_id.replace('table_', '');
                // console.log(tab_id);
                var select_value = $(e).parents('.container').find('.select_require select option:selected').val();
                if (select_i == tab_i) {
                    const itemObj = {
                        sidenavsId: sidenavs_id,
                        requirements: select_value,
                        tab_ids: tab_id
                    }

                    $(array).each((i, e) => {
                        if (e.tab_ids == tab_id) {
                            e.requirements = select_value;
                            let replaceData = JSON.parse(localStorage.getItem("items")) || [];
                            replaceData[i].requirements = e.requirements;
                            localStorage.setItem('items', JSON.stringify(replaceData));
                            flag = false;
                        }
                    });

                    if (flag) {
                        array.push(itemObj);
                        localStorage.setItem("items", JSON.stringify(array));
                    }

                }
            });
        });

        $(this).parents('.forms-sect').find('thead tr th div').each(function (i, e) {
            let th_length = $(e).closest('thead').find('tr th').length;
            if (th_length > 3) {
                let th_remove = $(e).text();
                if (th_remove == '') {
                    let th_attr = $(e).closest('th').attr('data-attr');
                    $(e).parents('.forms-sect').find('tbody tr td').each(function (i, e) {
                        let td_attr = $(e).attr('data-attr');
                        let tr_attr = $(e).closest('tr').attr('data-attr');
                        let tr_attr_op = td_attr.replace(tr_attr, '');
                        if (th_attr == tr_attr_op) {
                            $(e).remove();
                        }
                    });
                    $(e).closest('th').remove();
                }
            }
        });

        const title_value = {
            id: inputid,
            sidenavid: sidenav_id
        };

        flag = true;

        $(ids).each(function (i, e) {
            if (inputid == e.id) {
                flag = false;
            }
        });
        if (flag) {
            ids.push(title_value);
            localStorage.setItem("ids", JSON.stringify(ids));
        }

        $(".forms-sect .table_title input").keypress(function (e) {
            let txt = $(this).val() + e.key;
            let tab_id = $(this).attr("id");
            let input_form_id = $(this).parents(".container").find(".input-form-name input").attr("id");
            let sidenav_input_id = +input_form_id.replace("input_form", "");
            if (tab_id == sidenav_input_id) {
                $(this).parents('.container').find(".input-form-name input").val(txt);
            }
        });

        $(".input-form-name input").keypress(function (e) {
            let input_form_id = 0;
            let txt = $(this).val() + e.key;
            let tab_id = $(this).parents(".container").find(".forms-sect .table_title input").attr("id");

            input_form_id = $(this).attr("id");
            input_form_i = +input_form_id.replace("input_form", "");

            $(this).parents(".container").find(".forms-sect").each(function (i, e) {
                let form_id = $(this).attr("id");
                let form_i = +form_id.replace("table_", "");
                if (form_i == input_form_i) {
                    $(this).find(".table_title input").val(txt);
                }
            });

        });


        let row_name = '';
        $(this).parents('.forms-sect').find('tbody tr td:first-child()').each(function (i, e) {
            row_name += $(e).text();
            row_name = row_name.split('✕').join(",");
        });

        row_name = row_name.split(",");
        row_name = row_name.toString().split(",").join("\n").trim();

        let row_input = inputid.replace('table_', '');
        $(this).closest('.container').find('.sidenavs').each(function (i, e) {
            let row_text_area_input = $(e).attr('id');
            row_text_area_input = row_text_area_input.replace('sidenavs_', '');
            if (row_input == row_text_area_input) {
                $(e).find('.rows textarea').val('');
                $(e).find('.rows textarea').val(row_name);
            }
        });
        let column_name = '';
        $(this).parents('.forms-sect').find('thead tr th').each(function (i, e) {
            column_name += $(e).text();
            column_name = column_name.split('✕').join(",");
        });

        column_name = column_name.split(",");
        column_name = column_name.filter(e => e !== ' + add column');
        column_name = column_name.toString().split(",").join("\n");

        let column_input = inputid.replace('table_', '');
        $(this).closest('.container').find('.sidenavs').each(function (i, e) {
            let row_text_area_input = $(e).attr('id');
            row_text_area_input = row_text_area_input.replace('sidenavs_', '');
            if (column_input == row_text_area_input) {
                $(e).find('.columns textarea').val('');
                $(e).find('.columns textarea').val(column_name);
            }
        });

    });

    $(document).on('click', ".remove_elements", function () {
        $(this).closest('.forms-sect').remove();
    });

    $(".in-box").click(function () {
        $(this).parents('.input-type').find('.input-box, .changetheme').removeClass('changetheme');
        $(this).addClass('changetheme');
    });

    $('.radio-box-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();
        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="radio" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }
        let td_length = $(this).parents('.container').find(`#table_id${side_} tbody tr td`).length;
        let tr_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let input_type = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td input`).attr('type');
        for (let i = 1; i < tr_length; i++) {
            for (let j = 0; j <= td_length; j++) {
                let td_attr = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child(${j})`).attr('data-attr');
                if (td_attr !== undefined) {
                    let tr_attr = ($(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} )`).attr('data-attr'));
                    let td_atr = td_attr.replace(tr_attr, '');
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child( ${j} ) input`).attr('value', td_atr);
                }
            }
        }
    });

    $('.check-box-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();
        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="checkbox" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;

        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;

        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');

            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }
        let td_length = $(this).parents('.container').find(`#table_id${side_} tbody tr td`).length;
        let tr_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let input_type = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td input`).attr('type');
        for (let i = 1; i < tr_length; i++) {
            for (let j = 0; j <= td_length; j++) {
                let td_attr = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child(${j})`).attr('data-attr');
                if (td_attr !== undefined) {
                    let tr_attr = ($(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} )`).attr('data-attr'));
                    let td_atr = td_attr.replace(tr_attr, '');
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child( ${j} ) input`).attr('value', td_atr);
                }
            }
        }
    });

    $('.text-btn-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;

        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();

        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="text" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }


    });

    $('.number-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        console.log(sidenavs_id);
        let side_ = sidenavs_id.replace('sidenavs_', '');
        console.log(side_);
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        console.log(form_sec);

        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        $(this).parents('.container').find(`#table_id${side_} td select`).remove();
        $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="number" disabled>');
        $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        console.log(row_length);
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        console.log(button_len);
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            console.log(row_name);
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }


    });

    $('.drop-down-sec').click(function () {
        let sidenavs_id = $(this).parents('.sidenavs').attr('id');
        let side_ = sidenavs_id.replace('sidenavs_', '');
        let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
        $(this).parents('.container').find(`#table_id${side_} td input`).remove();
        if (($(this).parents('.container').find(`#table_id${side_} tr td select`).length >= 1)) {
        }
        else {
            $(this).parents('.container').find(`#table_id${side_} tr td`).append(`<select name="" id="" disabled>
        <option value="0">...</option>
        <option value="1">Yes</option>
        <option value="2">No</option>
        </select>`);
            $(this).parents('.container').find(`#table_id${side_} tr td:first-child() select`).remove();
        }

        let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
        let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
        for (let i = 1; i < row_length; i++) {
            let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
            for (let j = 0; j <= button_len; j++) {
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) select`).attr('name', row_name);
                $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
            }
        }

    });

    $('.sidenavs .rows textarea').bind('input propertychange', function (e) {
        let get_sidenavid = $(this).closest('.sidenavs').attr('id');
        get_sidenavid = get_sidenavid.replace('sidenavs_', '');
        let textarea_val = $(this).val().split('\n');
        let textarealen = textarea_val.length;

        $('.container').find('.forms-sect').each(function (i, e) {
            let tab_id = $(e).attr('id');
            tab_id = tab_id.replace('table_', '');
            if (tab_id == get_sidenavid) {
                let input_type = $(e).find('tbody tr:first-child() td:nth-child(2) input').attr('type');
                let td_len = $(e).find('tbody tr:first-child() td').length;
                $(e).find('tbody tr').each(function (i, e) {
                    $(e).find('td div').text(textarea_val[i]);
                    $(e).remove();
                });
                let name_attr = 'a0';
                let name_at = 'a';
                for (let i = 0; i < textarealen; i++) {
                    $(e).find(`tbody`).append("<tr data-attr=" + name_attr + ">" +
                        "<td data-attr=''>" + "<div class='input-type' format='text'contenteditable='true' data-name=" + name_at + ">" + "" + textarea_val[i] + "" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                        "</tr>");
                    var th_total_length = $(e).find('thead th div').length;
                    for (let j = 0; j < th_total_length; j++) {
                        if (input_type !== undefined) {
                            $(e).find('tbody *[data-attr=' + name_attr + ']').append("<td>" + "<input type=" + input_type + " disabled>" + "</td>");
                        }
                        else {
                            $(e).find('tbody *[data-attr=' + name_attr + ']').append(`<td> <select id='' disabled>
                            <option value="0">...</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                            </select> </td>`);
                        }
                    }
                    for (let k = 0; k <= td_len; k++) {
                        let th_attr = $(e).find('thead th:nth-child(' + (k) + ')').attr('data-attr');
                        let tr_attr = $(e).find('tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
                        let td_attr = tr_attr + th_attr;
                        $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ')').attr('data-attr', td_attr);
                        if (input_type !== undefined) {
                            $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ') input').attr('name', name_at);
                        }
                        else {
                            $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ') select').attr('name', name_at);
                        }
                    }

                    let name_attrs = +name_attr.replace('a', '');
                    name_attrs += 1;
                    name_attr = 'a' + name_attrs;
                    name_at = nextChar(name_at);
                }

                console.log($(e).find(`tbody tr`).length);
                $(e).find('tbody tr:last-child()').after('<tr><th class="add_section_row"><button class="add_sec_row">+ add row</button></th></tr>');
                let td_length = $(e).find('tbody tr td').length;
                let tr_length = $(e).find('tbody tr').length;
                // let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                for (let i = 1; i < tr_length; i++) {
                    for (let j = 0; j <= td_length; j++) {
                        let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                        if (td_attr !== undefined) {
                            let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                            let td_atr = td_attr.replace(tr_attr, '');
                            if (input_type !== undefined) {
                                $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                            }

                        }
                    }
                }
            }
        });
    });

    $('.sidenavs .select_require select ').bind('click', function () {
        let sidenav_id = $(this).parents('.sidenavs').attr('id');
        sidenav_id = sidenav_id.replace('sidenavs_', '');
        let val = $(this).parents('.container').find('.sidenavs .select_require option:selected').val();
        $(this).parents('.container').find('.forms-sect').each(function (i, e) {
            let tab_id = $(e).attr('id');
            tab_id = tab_id.replace('table_', '');
            if (sidenav_id == tab_id) {
                let input_type = $(e).find('tbody tr:first-child() td:last-child() input').attr('type');

                if (val == 'No') {
                    if (input_type !== undefined) {
                        $(e).find('tbody tr td input').removeAttr('required');
                    }
                    else {
                        $(e).find('tbody tr td select').removeAttr('required');
                    }
                }

                else if (val == 'Require an answer on Every row') {
                    $(e).find('tbody tr').each(function (i, e) {
                        if (input_type == 'radio' || input_type == 'checkbox') {
                            let check_length = $(e).find('td input:checked').length;
                            if (check_length < 1) {
                                // console.log('dnasdjas');
                            }
                            else {
                                // console.log(check_length, '>>>>>');
                            }
                        }
                        else if (input_type == 'text' || input_type == 'number') {
                            let text_count = 0;
                            $(e).find('td input').each(function (i, e) {
                                let a = $(e).val();
                                if (a !== '') {
                                    // console.log(a);
                                    text_count++;
                                }
                                else {

                                }
                            });
                            // console.log(text_count);
                        }
                        else {
                            var count = 0;
                            $(e).find('td select').each(function (i, e) {
                                if ($(e)[0].selectedIndex <= 0) {
                                    // console.log("not");
                                }
                                else {
                                    // console.log("yes");
                                    count++;
                                }
                                // console.log(count);
                            });
                        }
                    });
                }

                else if (val == 'Require at least one answer') {
                    $(e).find('tbody').each(function (i, e) {
                        if (input_type == 'radio' || input_type == 'checkbox') {
                            if ($(e).find('tr td input[type=radio]') || $(e).find('tr td input[type=radio]')) {
                                var count = 0;
                                $(e).find('tr td input:checked').each(function (i, e) {
                                    let check_length = $(e).length;
                                    if (check_length < 1) {
                                        // console.log("sidsjadjdlsjdlajsd");
                                    }
                                    else {
                                        count++;
                                    }
                                });
                                // console.log(count, '>>>>>');
                            }
                        }
                        else if (input_type == 'text' || input_type == 'number') {
                            let text_count = 0;
                            $(e).find('tr td input').each(function (i, e) {
                                let a = $(e).val();
                                if (a !== '') {
                                    console.log(a);
                                    text_count++;
                                }
                                else {

                                }
                            });
                            // console.log(text_count);
                        }
                        else {
                            var counts = 0;
                            if ($(e).find("tr td select")[0].selectedIndex <= 0) {

                            }
                            else {
                                counts++;
                            }
                            // console.log(counts, '>>>>>>');
                        }
                    });
                }

                else if (val == 'Require an answer in every cell') {
                    if (input_type !== undefined) {
                        $(e).find('tbody tr td input').attr('required', 'true');
                    }
                    else {
                        $(e).find('tbody tr td select').attr('required', 'true');
                    }
                }

            }
        });
    });

    $('.sidenavs .columns textarea').bind('input propertychange', function (e) {
        let get_sidenavid = $(this).closest('.sidenavs').attr('id');
        get_sidenavid = get_sidenavid.replace('sidenavs_', '');
        let textarea_val = $(this).val().split('\n');
        var textarealen = textarea_val.length;

        $('.container').find('.forms-sect').each(function (i, e) {
            let tab_id = $(e).attr('id');
            tab_id = tab_id.replace('table_', '');
            if (tab_id == get_sidenavid) {
                let td_attr_len = $(e).find('tbody tr:first-child() td input').length;
                let input_type = $(e).find('tbody tr:first-child() td:nth-child(2) input').attr('type');
                console.log(input_type);
                let name_atr = 'a';
                $(e).find('thead tr th div').each(function (i, e) {
                    $(e).text(textarea_val[i]);
                    $(e).closest('tr').find('th').has('div').remove();
                });
                let th_attr = $(e).find('thead tr th:first-child()').attr('data-attr');
                let th_atr = th_attr;
                for (let i = 0; i < textarealen; i++) {
                    th_atr = +th_atr.replace('b', '');
                    th_atr += 1;
                    th_atr = 'b' + th_atr;
                    $(e).find(`thead tr th:last-child()`).before(`<th data-attr=${th_atr}><div class='input-type' format='text'contenteditable='true' data-name='' name=''>${textarea_val[i]}</div><span class='close-btns'>&#x2715;</span></th>`);
                }
                $(e).find('tbody tr').each(function (i, e) {
                    if (input_type !== undefined) {
                        $(e).find('td input').each(function (i, e) {
                            $(e).closest('td').remove();
                        });
                    }
                    else {
                        $(e).find('td select').each(function (i, e) {
                            $(e).closest('td').remove();
                        });
                    }

                    for (let i = 0; i < textarealen; i++) {
                        if (input_type !== undefined) {
                            $(e).find('td:first-child()').after("<td>" + "<input type=" + input_type + " disabled>" + "</td>");
                        }
                        else {
                            $(e).find('td:first-child()').after(`<td> <select id='' disabled>         
                            <option value="0">...</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option> 
                            </select> </td>`);
                        }
                    }
                    var textare = $(this).find('td').length;
                    console.log(textare);

                    for (let i = 0; i <= textare; i++) {
                        console.log(textare);
                        let tr_atr = $(e).attr('data-attr');
                        console.log(tr_atr);
                        let th_attr = $(e).closest('.forms-sect').find('thead tr th:nth-child(' + (i) + ')').attr('data-attr');
                        console.log(th_attr);
                        let make_td_attr = tr_atr + th_attr;
                        $(e).find('td:nth-child(' + i + ')').attr('data-attr', make_td_attr);
                        if (input_type !== undefined) {
                            $(e).find('td:nth-child(' + i + ') input').attr('name', name_atr);
                        }
                        else {
                            $(e).find('td:nth-child(' + i + ') select').attr('name', name_atr);
                        }
                    }
                    name_atr = nextChar(name_atr);
                });
                let td_length = $(e).find('tbody tr td').length;
                let tr_length = $(e).find('tbody tr').length;
                for (let i = 1; i < tr_length; i++) {
                    for (let j = 0; j <= td_length; j++) {
                        let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                        if (td_attr !== undefined) {
                            let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                            let td_atr = td_attr.replace(tr_attr, '');
                            if (input_type !== undefined) {
                                $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                            }

                        }
                    }
                }
            }
        });
    });

    let full_array = JSON.parse(localStorage.getItem("total_array")) || [];
    $(full_array).each(function (i, e) {
        let form_sect_id = full_array[i].forms_sect;
        let table_title = full_array[i].table_ti;
        let select_require = full_array[i].select_requir;
        let input_type = full_array[i].input_typee;
        let td_length = full_array[i].input_td_length;
        let select_length = full_array[i].select_input_length;
        let td_div_name = full_array[i].td_div_names;
        let th_div_name = full_array[i].th_div_names;
        let tr_th_length = full_array[i].tr_th_length;
        var yy = $("<div class='forms-sect' id='table_" + form_sect_id + "'>" + "<div class='form-section'>" +
            "<div class='table_title'>" +
            "<h3>" + table_title + "</h3>" +
            "</div>" +
            "<table class='form-sec'>" +
            " <thead>" +
            "<tr>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>" +
            "</table>" + "<p class=error_message>" + "</p>" + "<p class=success_message>" + "</p>" + "</div>" + "</div>");
        $('.container .table_dropping').append(yy);
        // $('.container .table_dropping .form-section').css('box-shadow', 'unset');
        for (let i = 0; i < tr_th_length; i++) {
            $('.table_dropping #table_' + form_sect_id + ' thead tr').append("<th data-attr='" + th_div_name[i].data_attr + "'>" + "<div class='input-type' format='text name='" + th_div_name[i].name + "'>" + "" + th_div_name[i].name + "" + "</div>" + "</th>");
        }
        $('.table_dropping #table_' + form_sect_id + ' thead tr th:first-child div').remove();
        for (let i = 0; i < td_div_name.length; i++) {
            $('.table_dropping #table_' + form_sect_id + ' tbody').append(`<tr data-attr='${td_div_name[i].data_attr}'><td><div class='input-type' format='text' name='${td_div_name[i].data_attr}'>${td_div_name[i].name}</div></td></tr>`);
        }
        for (let i = 0; i < td_div_name.length; i++) {
            if (input_type !== undefined) {
                for (let j = 0; j < td_length; j++) {
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><input type='${input_type}' name ='' value =''></td>`);
                }
            }
            else {
                for (let j = 0; j < select_length; j++) {
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><select name="" id="">
                    <option value="0">...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </select></td>`);
                }
            }
        }
        for (let i = 0; i < td_div_name.length; i++) {
            let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
            for (let j = 0; j <= td_length; j++) {
                let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ')').attr('data-attr', tr_attr + th_attr);
            }
        }
        for (let i = 0; i < td_div_name.length; i++) {
            let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    for (let j = 1; j <= td_length; j++) {
                        let tabs_titles = 'table_' + form_sect_id;
                        let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('value', th_attr);
                    }
                }
                else if (input_type == 'text' || input_type == 'number') {
                    for (let j = 1; j <= td_length; j++) {
                        let tabs_titles = 'table_' + form_sect_id;
                        let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                    }
                }
            }
            else {
                for (let j = 1; j <= select_length; j++) {
                    let tabs_titles = 'table_' + form_sect_id;
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') select').attr('name', tabs_titles + tr_attr);
                }
            }
        }

    });
});

$(document).on('click', '.on_submit', function () {
    $('.container .preview_section .back_home').css('display', 'flex');


    let len = $('.table_dropping .forms-sect').length;
    for (let i = 0; i < len; i++) {
        let full_array = JSON.parse(localStorage.getItem("total_array")) || [];
        let select_condition = JSON.stringify(full_array[i].select_requir);
        input_type = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td:last-child() input').attr('type');
        if (select_condition.match("No")) {
        }
        else if (select_condition.match("Require an answer on Every row")) {

            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    var cod1 = 0;
                    var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        var count1 = 0;
                        let check_length = $(e).find('td input:checked').length;
                        if (check_length >= 1) {
                            count1 = count1 + 1;
                        }
                        else {
                        }
                        if (count1 >= 1) {
                            cod1 = cod1 + 1;
                        }
                    });
                    if (cod1 < tr_len1) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('select atleast one answer from every row');
                    }
                    else {
                        console.log("else cod1 < tr_len1");
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }

                else if (input_type == 'text' || input_type == 'number') {
                    var tr_len = 0;
                    var cod = 0;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        tr_len = tr_len + 1;
                        var count = 0;
                        var tdinput = 0;
                        $(e).find('td input').each(function (i, e) {
                            tdinput++;
                            let check_val = $(e).val();
                            if (check_val == '') {
                                count = count + 1;
                            }
                            else {
                            }
                        });

                        if (count < tdinput) {
                            cod = cod + 1;
                        }
                    });

                    if (cod < tr_len) {
                        console.log('saflsf');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('select atleast one answer from every row');
                    }
                    else {
                        console.log('shgdsghdf');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                    let con = 0;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').each(function (i, e) {
                        let check_val = $(e).val();
                        if (check_val == '') {
                            con = con + 1;
                        }
                    });
                }
            }

            else {
                $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                    let count = 0;
                    let counts = 0;

                    $(e).find('td select').each(function (i, e) {
                        counts++;
                        if ($(e)[0].selectedIndex <= 0) {
                            count++;
                        }
                        else {
                            console.log('hello');
                        }
                    });
                    if (count >= counts) {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                        $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer from every row');
                    }
                    else {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                    }
                });
            }
        }
        else if (select_condition.match("Require at least one answer")) {
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        let count = 0;
                        let checklength = $(e).find('tr td input:checked').length;
                        if (checklength < 1) {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                            $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                        }
                        else {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                        }
                    });
                }
                else if (input_type == 'text' || input_type == 'number') {
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        let count = 0;
                        let input_length = $(e).find('tr td input').length;
                        $(e).find('tr').each(function (i, e) {
                            $(e).find('td').each(function (i, e) {
                                if ($(e).find('input').val() == '') {
                                    count = count + 1;
                                }
                            })
                        });
                        if (count >= input_length) {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                            $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                        }
                        else {
                            console.log('sdkjfhdf');
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                        }
                    });
                }
            }
            else {
                $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                    let count = 0;
                    let selects = 0;
                    $(e).find('tr td select').each(function (i, e) {
                        selects++;
                        if ($(e)[0].selectedIndex <= 0) {
                            count++;
                        }
                        else {

                        }
                    });
                    if (count >= selects) {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                        $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                    }
                    else {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                    }

                });
            }
        }
        else if (select_condition.match("Require an answer in every cell")) {
            if (input_type !== undefined) {
                if (input_type == 'radio') {
                    var cod1 = 0;
                    var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        var count1 = 0;
                        let check_length = $(e).find('td input:checked').length;
                        if (check_length >= 1) {
                            count1 = count1 + 1;
                        }
                        else {
                        }
                        if (count1 >= 1) {
                            cod1 = cod1 + 1;
                        }
                    });
                    if (cod1 < tr_len1) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                    }
                    else {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }
                else if (input_type == 'checkbox') {
                    var cod1 = 0;
                    var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        var count1 = 0;
                        let check_length = $(e).find('td input:checked').length;
                        let check_box_length = $(e).find('td input').length;
                        console.log(check_box_length);
                        if (check_length >= check_box_length) {
                            count1 = count1 + 1;
                        }
                        else {
                        }
                        if (count1 >= 1) {
                            cod1 = cod1 + 1;
                        }
                    });
                    if (cod1 < tr_len1) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                    }
                    else {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }
                else if (input_type == 'text' || input_type == 'number') {
                    var tr_len2 = 0;
                    var td_len = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').length;
                    var count2 = 0;
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        tr_len2 = tr_len2 + 1;
                        var tdinput2 = 0;
                        $(e).find('tr td').each(function (i, e) {
                            $(e).find('input').each(function (i, e) {
                                tdinput2++;
                                let check_val2 = $(e).val();
                                if (check_val2 !== '') {
                                    count2 = count2 + 1;
                                }
                            });
                        });
                    });
                    if (count2 !== td_len) {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                    }
                    else {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                    }
                }
            }
            else {
                $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                    let count = 0;
                    let selects = 0;
                    $(e).find('tr td select').each(function (i, e) {
                        selects++;
                        if ($(e)[0].selectedIndex <= 0) {
                        }
                        else {
                            count++;
                        }
                    });
                    console.log(selects);
                    if (count < selects) {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                        $(e).closest('.forms-sect').find('.error_message').text('select all answers');
                    }
                    else {
                        $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                    }
                });
            }
        }
        else {
        }
    }
    let count = 0;
    $('.table_dropping .forms-sect').each(function (i, e) {
        let dis_css = $(e).find('.error_message').css('display');
        if (dis_css == 'block') {
            count = count + 1;
        }
    });
    let length = $('.table_dropping .forms-sect').length;
    if (count > 0) {
        $('.s_message').css({ 'display': 'none' });
        $('.container .json_sec').css('display', 'none');

    }
    else if (length == 1) {
        $('.s_message').css({ 'display': 'block', 'text-align': 'center' });
        $('.s_message').text('Form filled successfully');
        $('.err_message').css({ 'display': 'none' });
        localStorage.removeItem('array');
        let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];

        $('.table_dropping .forms-sect').each(function (i, e) {

            let th_names = [];
            let tr_names = [];
            let tab_id = $(e).attr('id');
            console.log(tab_id);
            let flag = true;
            let input_type = $(e).find('tbody tr td input').attr('type');
            $(e).find('thead th div').each(function (i, e) {
                let th_name = $(e).text();
                th_names.push(th_name);
            });
            $(e).find('tbody tr div').each(function (i, e) {
                let tr_name = $(e).text();
                tr_names.push(tr_name);
            });
            console.log(tr_names);
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    let selected_input = [];
                    $(e).find('tbody tr td input:checked').each(function (i, e) {
                        let select_input = $(e).attr('value');
                        let select_attr = $(e).closest('td').attr('data-attr');
                        let select_input_attr = {
                            input_value: select_input,
                            td_input_attr: select_attr
                        };
                        selected_input.push(select_input_attr);
                    });

                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: selected_input,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }
                else if (input_type == 'text' || input_type == 'number') {
                    let inputs_val = [];
                    $(e).find('tbody tr td input').each(function (i, e) {
                        let input_val = $(e).val();
                        let td_attr = $(e).closest('td').attr('data-attr');
                        if (input_val !== '') {
                            let input_attr = {
                                input_value: input_val,
                                td_input_attr: td_attr
                            }
                            inputs_val.push(input_attr);
                        }
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: inputs_val,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }

            }
            else {
                let selected_val = [];
                $(e).find('tbody tr td select').each(function (i, e) {
                    if ($(e)[0].selectedIndex <= 0) {

                    }
                    else {
                        let select_val = $(e).find('option:selected').text();
                        let select_td_attr = $(e).closest('td').attr('data-attr');
                        let select_arr = {
                            select_value: select_val,
                            selected_td_attr: select_td_attr
                        }
                        selected_val.push(select_arr);
                    }
                });
                let full_arrs = {
                    th__names: th_names,
                    td__names: tr_names,
                    selects: selected_val,
                    table_id: tab_id
                }
                table_store.push(full_arrs);
                localStorage.setItem('array', JSON.stringify(table_store));
            }
        });
        console.log(table_store);
        $('.container .json_sec').css('display', 'block');
    }
    else {
        $('.s_message').css({ 'display': 'block', 'text-align': 'center' });
        $('.s_message').text('Forms filled successfully');
        $('.err_message').css({ 'display': 'none' });
        localStorage.removeItem('array');
        let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];

        $('.table_dropping .forms-sect').each(function (i, e) {

            let th_names = [];
            let tr_names = [];
            let tab_id = $(e).attr('id');
            console.log(tab_id);
            let input_type = $(e).find('tbody tr td input').attr('type');
            $(e).find('thead th div').each(function (i, e) {
                let th_name = $(e).text();
                th_names.push(th_name);
            });
            $(e).find('tbody tr div').each(function (i, e) {
                let tr_name = $(e).text();
                tr_names.push(tr_name);
            });
            console.log(tr_names);
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    let selected_input = [];
                    $(e).find('tbody tr td input:checked').each(function (i, e) {
                        let select_input = $(e).attr('value');
                        let select_attr = $(e).closest('td').attr('data-attr');
                        let select_input_attr = {
                            input_value: select_input,
                            td_input_attr: select_attr
                        };

                        selected_input.push(select_input_attr);
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: selected_input,
                        table_id: tab_id
                    }

                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));

                }
                else if (input_type == 'text' || input_type == 'number') {
                    let inputs_val = [];
                    $(e).find('tbody tr td input').each(function (i, e) {
                        let input_val = $(e).val();
                        let td_attr = $(e).closest('td').attr('data-attr');
                        if (input_val !== '') {
                            let input_attr = {
                                input_value: input_val,
                                td_input_attr: td_attr
                            }
                            inputs_val.push(input_attr);
                        }
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        inputs: inputs_val,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }
            }
            else {
                let selected_val = [];
                $(e).find('tbody tr td select').each(function (i, e) {
                    if ($(e)[0].selectedIndex <= 0) {
                    }
                    else {
                        let select_val = $(e).find('option:selected').text();
                        let select_td_attr = $(e).closest('td').attr('data-attr');
                        let select_arr = {
                            select_value: select_val,
                            selected_td_attr: select_td_attr
                        }
                        selected_val.push(select_arr);
                    }
                });
                let full_arrs = {
                    th__names: th_names,
                    td__names: tr_names,
                    selects: selected_val,
                    table_id: tab_id
                }
                table_store.push(full_arrs);
                localStorage.setItem('array', JSON.stringify(table_store));
            }

        });
        $('.container .json_sec').css('display', 'block');
    }

});

$(document).on('click', '.json-btn', function () {
    let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];
    console.log(table_store);
    let y = $(`<div class="json_table">
    <table class="json_tab">
    <thead>
    <tr>
    <th colspan='3'>Table Info</th>
    <th colspan='2'>Filled Inputs</th>
    </tr>
      <tr>
      <th>Table Id</th>
      <th>Row Names</th>
      <th>Column Names</th>
        <th>Input Value</th>
        <th>Input Attribute</th>
      </tr>
</thead>
<tbody>
</tbody>
    </table>
  </div>`);
    $(this).parents('.json_sec').find('.json_table').remove();
    $(this).after(y);
    // $(this).parents('.json_sec').find('.json_table tbody')
    table_len = $(this).parents('.container').find('.table_dropping .forms-sect').length;
    console.log(table_len);
    for (let i = 0; i < table_len; i++) {
        let input_len = $(table_store[i].inputs).length;
        console.log(input_len);
        let input_val = '';
        let input_attr = '';
        let input_type = $(this).parents('.container').find('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').attr('type');
        console.log(input_type);
        if (input_type !== undefined) {
            for (let j = 0; j < input_len; j++) {
                input_val = input_val + "<br>" + table_store[i].inputs[j].input_value;
                input_attr = input_attr + "<br>" + table_store[i].inputs[j].td_input_attr;
            }
            let row_names_len = $(table_store[i].td__names).length;
            let row_name = '';
            for (let l = 0; l < row_names_len; l++) {
                row_name = row_name + "<br>" + table_store[i].td__names[l];
            }
            let column_names_len = $(table_store[i].th__names).length;
            let column_name = '';
            console.log(column_names_len);
            for (let m = 0; m < column_names_len; m++) {
                column_name = column_name + "<br>" + table_store[i].th__names[m];
            }
            console.log(column_name);

            $(this).parents('.json_sec').find('.json_table tbody').append(`<tr>
            <td>${table_store[i].table_id}</td>
            <td>${row_name}</td>
            <td>${column_name}</td>
            <td>${input_val}</td>
            <td>${input_attr}</td>
            </tr>`);
        }
        else {
            let select_len = $(table_store[i].selects).length;
            console.log(select_len);
            let select_val = '';
            let select_attr = '';
            for (let j = 0; j < select_len; j++) {
                select_val = select_val + "<br>" + table_store[i].selects[j].select_value;
                select_attr = select_attr + "<br>" + table_store[i].selects[j].selected_td_attr;
            }
            console.log(select_val);
            console.log(select_attr);
            let row_names_len = $(table_store[i].td__names).length;
            let row_name = '';
            for (let l = 0; l < row_names_len; l++) {
                row_name = row_name + "<br>" + table_store[i].td__names[l];
            }
            let column_names_len = $(table_store[i].th__names).length;
            let column_name = '';
            console.log(column_names_len);
            for (let m = 0; m < column_names_len; m++) {
                column_name = column_name + "<br>" + table_store[i].th__names[m];
            }
            console.log(column_name);

            $(this).parents('.json_sec').find('.json_table tbody').append(`<tr>
            <td>${table_store[i].table_id}</td>
            <td>${row_name}</td>
            <td>${column_name}</td>
            <td>${select_val}</td>
            <td>${select_attr}</td>
            </tr>`);
        }

    }
});

$(document).on('click', '.switch', function () {
    let disabled_attr = $(this).closest('.container').find('.switch input').prop('disabled');
    if (disabled_attr == true) {

    }
    else {
        let total_array = [];

        $(this).parents('.container').find('.forms-sect').each(function (i, e) {
            let table_id = $(e).attr('id');
            let table_title = $(e).find('.table_title input').val();
            let select_id = $('.container').find('.sidenavs .select_require select').attr('id');
            table_id = table_id.replace('table_', '');

            let replaceData = JSON.parse(localStorage.getItem("items")) || [];
            if (replaceData.length === 0 || replaceData[i] == undefined) {
                var replace = "No";
            }
            else {
                var replace = replaceData[i].requirements;
            }
            let input_type = $(e).find('tbody tr td input').attr('type');
            if (input_type !== undefined) {
                var td_length = $(e).find('tbody tr:first-child() td input').length;
            }
            else {
                var td_length = $(e).find('tbody tr:first-child() td select').length;
            }
            let tds_length = $(e).find('tbody tr:first-child() td select').length;
            let th_length = $(e).find('thead tr th').length;
            let th_names = [];
            let dataAttr = '';
            let value = '';

            $(e).find('thead tr th').each(function (_i, e) {
                dataAttr = $(e).attr('data-attr');
                value = $(e).find('div').text();
                let th_obj = {
                    name: value,
                    data_attr: dataAttr
                }
                th_names.push(th_obj);
            });
            let td_attr = '';
            let td_val = '';
            let td_names = [];
            $(e).find('tbody tr').each(function (i, e) {
                td_attr = $(e).attr('data-attr');
                td_val = $(e).find('td:first-child() div').text();
                let td_obj = {
                    name: td_val,
                    data_attr: td_attr
                }
                td_names.push(td_obj);
            });
            let full_array = {
                forms_sect: table_id,
                table_ti: table_title,
                select_requir: replace,
                input_typee: input_type,
                input_td_length: td_length,
                select_input_length: tds_length,
                tr_th_length: th_length,
                th_div_names: th_names,
                td_div_names: td_names,
            }
            total_array.push(full_array);

            $(e).find('thead tr th span').remove();
            $(e).find('thead tr th div').removeAttr('contenteditable');
            $(e).find('thead tr .add_section').remove();
            $(e).find('thead tr th:last-child()').css('writing-mode', 'horizontal-tb');
            $(e).find('tbody tr td span').remove();
            $(e).find('tbody tr td div').removeAttr('contenteditable');
            $(e).find('tbody tr th').closest('tr').remove();
            $(e).find('.add_elements').remove();
            $(e).find('.remove_elements').remove();
            $(e).find('.form-sec').css('max-width', '100%');
        });
        localStorage.setItem("total_array", JSON.stringify(total_array));
        // setTimeout(function () {
        //     window.location.replace("form.html");
        // }, 1000);

        $.ajax({
            url: "form.html",
            type: "GET",
            success: function (e) {
                $.ajax({
                    url: "form.html", success: function (result) {
                        $(".container").html(result);
                        $('body meta').remove();
                        $('body link').remove();
                        $('body script').remove();
                    }
                });
            }
        });
    }

});
$(document).on('click', '.add_element', function () {
    let x = window.matchMedia("(max-width: 575px)");

    if (x.matches) {
        $(".sidenav").css({ "transform": "translateX(0)" });
    }
    else {
        $(".sidenav").css({ "transform": "translateX(0)" });
    }
});

$(document).on('click', '.sidenav .closebtn', function () {
    $(".sidenav").css({ "transform": "translateX(-400px)" });
});

$(document).on('click', '.add_elements', function () {
    let x = window.matchMedia({ "max-width": "575px" });
    if (x.matches) {
        $(".sidenavs").css({ "transform": "translateX(0)" });
    }
    else {
        let a = $(".sidenavs").css("transform");
        if (a == 'matrix(1, 0, 0, 1, 400, 0)') {
            $(".sidenavs").css({ "transform": "translateX(0)" });
        }
        else {
            $(".sidenavs").css({ "transform": "translateX(400px)" });
        }
    }
});

$(document).on('click', '.sidenavs .closebtn', function () {
    $(".sidenavs").css({ "transform": "translateX(400px)" });
});

$(document).on('click', '.add_sec', function () {

    let data_atr = $(this).parents(".form-sec").find("thead th:nth-last-child(2) div").attr('name');
    let name_atr = nextChar(data_atr);

    if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=radio]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='radio' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=checkbox]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='checkbox' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=text]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='text' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=number]').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='number' name='d' disabled></td>`);
    }
    else if ($(this).parents('.form-sec').find('tbody tr td:last-child() select').length > 0) {
        $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><select name='${name_atr}' id='' disabled>
        <option value="0">...</option>
        <option value='Yes'>Yes</option>
        <option value='No'>No</option>
        </select></td>`);
    }

    let row_size = $(this).parents('.form-sec').find('tbody tr').length - 1;
    for (let i = 0; i <= row_size; i++) {
        let column_name = $(this).parents('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-last-child(2) input').attr('name');
        $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ") td:last-child() input").attr('name', column_name);
    }

    let last_th_attr = $(this).parents(".form-sec").find("thead tr th:nth-last-child(2)").attr("data-attr");
    let take_num = (+last_th_attr.replace("b", "")) + 1;
    let create_attr = 'b' + take_num;
    $(this).parents('.form-sec').find("thead tr th:last-child()").before(`<th><div class='input-type' format='text'contenteditable='true' data-name='${create_attr}' name='${create_attr}'>${create_attr}</div><span class='close-btns'>&#x2715;</span></th>`);
    $(this).parents('.form-sec').find("thead tr th:nth-last-child(2)").attr("data-attr", create_attr);
    let last_td_attr = $(this).parents(".form-sec").find('tbody tr').length;
    let td_atr = last_td_attr - 1;

    for (let i = 0; i <= td_atr; i++) {
        let row_index = $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ")").attr('data-attr');
        let column_index = $(this).parents(".form-sec").find("thead tr:first-child() th:nth-last-child(2)").attr('data-attr');
        let create_attr = row_index + column_index;
        $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ") td:last-child()").attr("data-attr", create_attr);
    }
    let td_length = $(this).parents(".form-sec").find('tbody tr td').length;
    let tr_length = $(this).parents(".form-sec").find('tbody tr').length;
    let input_type = $(this).parents(".form-sec").find('tbody tr:first-child() td input').attr('type');
    for (let i = 1; i < tr_length; i++) {
        for (let j = 0; j <= td_length; j++) {
            let td_attr = $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
            if (td_attr !== undefined) {
                let tr_attr = ($(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                let td_atr = td_attr.replace(tr_attr, '');
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                    }
                    else if (input_type == 'text' || input_type == 'number') {
                        // $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                    }
                }
                else {
                    // $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') select').attr('value', td_atr);
                }
            }
        }
    }
});

$(document).on('click', '.add_sec_row', function () {
    let radio_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=radio]").length;
    let check_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=checkbox]").length;
    let text_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=text]").length;
    let numb_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=number]").length;
    let select_length = $(this).parents('.form-sec').find("tbody tr:first-child() select").length;
    console.log(select_length);
    let data_atr = $(this).parents(".form-sec").find("tbody tr:nth-last-child(2)").attr('data-attr');
    let name_ = $(this).parents('.form-sec').find("tbody tr:nth-last-child(2) td:last-child() input").attr('name');
    let name_select = $(this).parents('.form-sec').find("tbody tr:nth-last-child(2) td:last-child() select").attr('name');

    if (name_ != undefined) {
        var name_atr = nextChar(name_);
        console.log(name_atr);
    }
    else if (name_select != undefined) {
        var name_atr = nextChar(name_select);
        console.log(name_atr);
    }
    data_atr = +data_atr.replace("a", "") + 1;
    data_atr = data_atr.toString();
    let string = 'a';
    string = string.concat(data_atr);

    $(this).parents(".form-sec").find("tbody tr:last-child()").before("<tr>" +
        "<td data-attr=''>" + "<div class='input-type' format='text'contenteditable='true' data-name=" + string + ">" + string + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
        "</tr>");
    $(this).parents(".form-sec").find('tbody tr:nth-last-child(2)').attr('data-attr', string);
    let radio_ = $(this).parents('.form-sec').find('tbody tr:first-child() input[type=radio]').length;
    console.log('radiobox', radio_);
    if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=radio]').length > 0) {
        for (let i = 0; i < radio_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='radio' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=checkbox]').length > 0) {
        for (let i = 0; i < check_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='checkbox' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=text]').length > 0) {
        for (let i = 0; i < text_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='text' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=number]').length > 0) {
        for (let i = 0; i < numb_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<input type='number' name=" + string + " disabled>" + "</td>");
        }
    }

    else if ($(this).parents('.form-sec').find(`tbody tr:first-child() select`).length > 0) {
        console.log("hellodfgrdgrdgdrg");
        for (let i = 0; i < select_length; i++) {
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                .after("<td>" + "<select name=" + string + " id='' disabled>" +
                    "<option value='0'>" + "..." + "</option>" +
                    "<option value='Yes'>" + "Yes" + "</option>" +
                    "<option value='No'>" + "No" + "</option>" +
                    + "</select>" + "</td>");
        }
    }

    let take_row_length = $(this).parents(".form-sec").find("tbody tr:first-child() td").length;
    for (let o = 0; o <= take_row_length; o++) {
        let t = $(this).parents(".form-sec").find("tbody tr:nth-last-child(3) td:nth-child(" + o + ")").attr("data-attr");
        let row_index = $(this).parents(".form-sec").find("tbody tr:nth-last-child(2)").attr('data-attr');
        let column_index = $(this).parents(".form-sec").find("thead tr:first-child() th:nth-child(" + o + ")").attr('data-attr');
        create_data_attr = row_index + column_index;
        $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:nth-child(" + o + ")").attr("data-attr", create_data_attr);
    }
    let td_length = $(this).parents(".form-sec").find('tbody tr td').length;
    let tr_length = $(this).parents(".form-sec").find('tbody tr').length;
    let input_type = $(this).parents(".form-sec").find('tbody tr:first-child() td input').attr('type');
    for (let i = 1; i < tr_length; i++) {
        for (let j = 0; j <= td_length; j++) {
            let td_attr = $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
            if (td_attr !== undefined) {
                let tr_attr = ($(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                let td_atr = td_attr.replace(tr_attr, '');
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                    }
                }
                else {

                }
            }
        }
    }
});

$(document).on('click', 'tr td .close-btn', function () {
    let tr_total_length = $(this).parents('tbody').find('tr').length;
    console.log(tr_total_length);
    if (tr_total_length <= 2) {
    }
    else {
        $(this).closest('tr').remove();
    }
});

$(document).on('click', '.close-btns', function () {
    let th_total_length = $(this).closest('tr').find('th').length;
    console.log(th_total_length);
    if (th_total_length <= 3) {
    }
    else {
        let radio_len = $(this).closest('.form-sec').find('tbody tr').length;
        let radio_length = radio_len - 1;
        console.log(radio_length);

        let td_radio = $(this).closest(".form-sec").find("tbody tr:first-child() td").length;
        console.log(td_radio);
        for (let i = 1; i <= radio_length; i++) {
            console.log("hello");
            let th_attr = $(this).parents("th").attr("data-attr");
            console.log(th_attr);
            for (let j = 1; j <= td_radio; j++) {
                let td_rad = $(this).closest('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr("data-attr");
                console.log(td_rad);
                let search_result = td_rad.search(th_attr);
                console.log(search_result);
                if (search_result == -1) {
                }
                else {
                    $(this).closest('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').remove();
                    break;
                }
            }
        }
        $(this).closest('th').remove();
    }
});

$(document).on('click', '.back_home', function () {
    $.ajax({
        url: "index.html", success: function (result) {
            localStorage.clear();
            console.log(result);
            $(".container").html(result);
        }
    });
    // setTimeout(function () {
    //     window.location.replace("index.html");
    // }, 2500);
});

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}





    // let full_array = JSON.parse(localStorage.getItem("total_array")) || [];
    // $(full_array).each(function (i, e) {
    //     let form_sect_id = full_array[i].forms_sect;
    //     let table_title = full_array[i].table_ti;
    //     let select_require = full_array[i].select_requir;
    //     let input_type = full_array[i].input_typee;
    //     let td_length = full_array[i].input_td_length;
    //     let select_length = full_array[i].select_input_length;
    //     let td_div_name = full_array[i].td_div_names;
    //     let th_div_name = full_array[i].th_div_names;
    //     let tr_th_length = full_array[i].tr_th_length;
    //     var yy = $("<div class='forms-sect' id='table_" + form_sect_id + "'>" + "<div class='form-section'>" +
    //         "<div class='table_title'>" +
    //         "<h3>" + table_title + "</h3>" +
    //         "</div>" +
    //         "<table class='form-sec'>" +
    //         " <thead>" +
    //         "<tr>" +
    //         "</tr>" +
    //         "</thead>" +
    //         "<tbody>" +
    //         "</tbody>" +
    //         "</table>" + "<p class=error_message>" + "</p>" + "<p class=success_message>" + "</p>" + "</div>" + "</div>");
    //     $('.container .table_dropping').append(yy);
    //     // $('.container .table_dropping .form-section').css('box-shadow', 'unset');
    //     for (let i = 0; i < tr_th_length; i++) {
    //         $('.table_dropping #table_' + form_sect_id + ' thead tr').append("<th data-attr='" + th_div_name[i].data_attr + "'>" + "<div class='input-type' format='text name='" + th_div_name[i].name + "'>" + "" + th_div_name[i].name + "" + "</div>" + "</th>");
    //     }
    //     $('.table_dropping #table_' + form_sect_id + ' thead tr th:first-child div').remove();
    //     for (let i = 0; i < td_div_name.length; i++) {
    //         $('.table_dropping #table_' + form_sect_id + ' tbody').append(`<tr data-attr='${td_div_name[i].data_attr}'><td><div class='input-type' format='text' name='${td_div_name[i].data_attr}'>${td_div_name[i].name}</div></td></tr>`);
    //     }
    //     for (let i = 0; i < td_div_name.length; i++) {
    //         if (input_type !== undefined) {
    //             for (let j = 0; j < td_length; j++) {
    //                 $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><input type='${input_type}' name ='' value =''></td>`);
    //             }
    //         }
    //         else {
    //             for (let j = 0; j < select_length; j++) {
    //                 $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><select name="" id="">
    //                 <option value="0">...</option>
    //                 <option value="1">Yes</option>
    //                 <option value="2">No</option>
    //                 </select></td>`);
    //             }
    //         }
    //     }
    //     for (let i = 0; i < td_div_name.length; i++) {
    //         let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
    //         for (let j = 0; j <= td_length; j++) {
    //             let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
    //             $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ')').attr('data-attr', tr_attr + th_attr);
    //         }
    //     }
    //     for (let i = 0; i < td_div_name.length; i++) {
    //         let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
    //         if (input_type !== undefined) {
    //             if (input_type == 'radio' || input_type == 'checkbox') {
    //                 for (let j = 1; j <= td_length; j++) {
    //                     let tabs_titles = 'table_' + form_sect_id;
    //                     let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
    //                     $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
    //                     $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('value', th_attr);
    //                 }
    //             }
    //             else if (input_type == 'text' || input_type == 'number') {
    //                 for (let j = 1; j <= td_length; j++) {
    //                     let tabs_titles = 'table_' + form_sect_id;
    //                     let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
    //                     $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
    //                 }
    //             }
    //         }
    //         else {
    //             for (let j = 1; j <= select_length; j++) {
    //                 let tabs_titles = 'table_' + form_sect_id;
    //                 $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') select').attr('name', tabs_titles + tr_attr);
    //             }
    //         }
    //     }

    // });



































































































    $(document).ready(function () {

        $('.container').find('.preview_form').css('display', 'flex');
    
        var ids = localStorage.getItem("ids") ? JSON.parse(localStorage.getItem("ids")) : [];
        var array = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    
        // $(this).closest('.container').find('.switch input').removeAttr('disabled');
    
        $('.tabs > li').click(function () {
            var $this = $(this);
            var $theTab = $(this).attr('id');
    
            if ($this.hasClass('active')) {
            } else {
                $this.closest('.category').find('.tabs > li, .content .list').removeClass('active');
                $('.content .list[data-tab="' + $theTab + '"], .tabs > li[id="' + $theTab + '"]').addClass('active');
            }
        });
    
        $(function () {
            $("#draggable2").draggable({
                revert: "invalid",
                helper: "clone",
            });
    
            $("#droppable").droppable({
                classes: {
                    "ui-droppable-active": "ui-state-active",
                    "ui-droppable-hover": "ui-state-hover"
                },
            });
        });
    
        $(document).on('click', '.switchs', function () {
    
            $.ajax({
                url: "index.html", success: function (result) {
                    $("body").html(result);
                    $('body meta').remove();
                    $('body link').remove();
                    $('body script').remove();
    
                    $(function () {
                        $("#draggable2").draggable({
                            revert: "invalid",
                            helper: "clone",
                        });
    
                        $("#droppable ").droppable({
                            classes: {
                                "ui-droppable-active": "ui-state-active",
                                "ui-droppable-hover": "ui-state-hover",
                                activeClass: "active",
                                hoverClass: "hover",
    
                                drop: function (event, ui) {
                                    var $y = $("<div class='forms-sect'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                                        "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                                        "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                                        "<div class='table_title'>" +
                                        "<input type='text' id='' class='.t_input' value='Type a question'>" +
                                        "</div>" +
                                        "<table class='form-sec'>" +
                                        " <thead>" +
                                        "<tr>" +
                                        "<th>" + "</th>" +
                                        "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b1' name='b1' disabled>" + "b1" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                                        "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b2' name='b2'disabled>" + "b2" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                                        "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b3' name='b3'disabled>" + "b3" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                                        "<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                                        "</button>" + "</th>" +
                                        "</tr>" +
                                        "</thead>" +
                                        "<tbody>" +
                                        "<tr>" +
                                        "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a0'>" + "service" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                        "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a1'>" + "Cleanliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                        "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a2'>" + "Responsiveness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                                        "</tr>" +
                                        "<tr>" +
                                        "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a3'>" + "Freindliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                                        "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                                        "</tr>" +
                                        "<tr>" + "<th class='add_section_row'>" + "<button class='add_sec_row'>" + "&plus; add row" +
                                        "</button>" + "</th>" + "</tr>" +
                                        "</tbody>" +
                                        "</table>" + "</div>" + "<p class='.error_message'>" + "</p>" + "</div>");
                                    console.log('kjdfhsdkjsdkjfkjfhjkfhns');
    
                                    // $(this).closest('.container').find('.switch input').removeAttr('disabled');
                                    $(".table-drop").append($y);
                                    $(".table-drop  .forms-sect").each(function (i, e) {
                                        $(this).parent().attr("id", i);
                                        $(this).attr("id", "table_" + i);
                                        $(this).find(".table_title > input").attr("id", i);
                                        $(this).find(".add_elements").attr("id", "table-pop" + i);
                                        $(this).find(".parents").find("").attr("id", "table-pop" + i);
                                        $(this).find(".form-sec").attr('id', 'table_id' + i);
                                        $(this).find('th').each(function (i, e) {
                                            $(this).attr('data-attr', 'b' + i);
                                            var t = $(this).attr('data-attr');
                                        });
                                        $(this).find("th:last-child").removeAttr('data-attr');
                                        $(this).find('tbody tr').each(function (i, e) {
                                            $(this).attr('data-attr', 'a' + i);
    
                                            var r = $(this).attr('data-attr');
                                            $(this).find('td').each(function (i, e) {
                                                let r = $(this).closest('tr').attr('data-attr');
                                                $(this).attr('data-attr', r + 'b' + i);
                                            });
    
                                        });
                                        $(this).find('tbody tr:last-child()').removeAttr("data-attr");
                                        let td_length = $(e).find('tbody tr td').length;
                                        let tr_length = $(e).find('tbody tr').length;
                                        let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                                        for (let i = 1; i < tr_length; i++) {
                                            for (let j = 0; j <= td_length; j++) {
                                                let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                                                if (td_attr !== undefined) {
                                                    let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                                                    let td_atr = td_attr.replace(tr_attr, '');
                                                    if (input_type !== undefined) {
                                                        $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                            },
                        });
                    });
                    let forms_array = localStorage.getItem("total_array") ? JSON.parse(localStorage.getItem("total_array")) : [];
                    // console.log(forms_array);
                    let tt = 0;
                    $(forms_array).each(function (i, e) {
                        tt++;
                        let forms_sect_id = forms_array[i].forms_sect;
                        let tab_title = forms_array[i].table_ti;
                        let select_require = forms_array[i].select_requir;
                        let input_type = forms_array[i].input_typee;
                        let input_td_len = forms_array[i].input_td_length;
                        let td_div_names = forms_array[i].td_div_names;
                        let th_div_names = forms_array[i].th_div_names;
                        let tr_len = forms_array[i].td_div_names.length;
                        let th_len = forms_array[i].th_div_names.length;
                        // console.log(forms_sect_id,tab_title,select_require,input_type,input_td_len,td_div_names,th_div_names);
                        // console.log(forms_sect_id);
    
                        let form_table = $("<div class='forms-sect' id='table_" + forms_sect_id + "'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                            "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                            "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                            "<div class='table_title'>" +
                            "<input type='text' id='" + forms_sect_id + "' class='.t_input' value='" + tab_title + "'>" +
                            "</div>" +
                            "<table class='form-sec' id = 'table_id" + forms_sect_id + "'>" +
                            " <thead>" +
                            "<tr>" +
                            "</tr>" +
                            "</thead>" +
                            "<tbody>" +
                            "</tbody>" +
                            "</table>" + "</div>" + "<p class='.error_message'>" + "</p>" + "</div>");
                        $('.table-drop').append(form_table);
                        for (let u = 0; u < th_len; u++) {
                            $(".table-drop #table_" + forms_sect_id + " thead tr").append("<th data-attr='" + forms_array[i].th_div_names[u].data_attr + "'>" + "<div class='input-type' format='text'contenteditable='true' data-name='" + forms_array[i].th_div_names[u].name + "' name='" + forms_array[i].th_div_names[u].name + "' disabled>" + forms_array[i].th_div_names[u].name + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>");
                        }
                        $(".table-drop #table_" + forms_sect_id + " thead tr th:first-child() .close-btns").remove();
                        $(".table-drop #table_" + forms_sect_id + " thead tr th:first-child() div").remove();
                        $(".table-drop #table_" + forms_sect_id + " thead tr th:last-child()").after("<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                            "</button>" + "</th>");
                        for (let j = 0; j < tr_len; j++) {
                            $(".table-drop #table_" + forms_sect_id + " tbody").append("<tr data-attr='" + forms_array[i].td_div_names[j].data_attr + "'>" + "<td>" +
                                "<div class='input-type' format='text'contenteditable='true' data-name='" + forms_array[i].td_div_names[j].name + "'>" + forms_array[i].td_div_names[j].name + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" + "</tr>");
                            for (let w = 0; w < input_td_len; w++) {
                                let tr_data_attrs = $('.table-drop #table_' + forms_sect_id + ' tbody tr:nth-child(' + (j + 1) + ')').attr('data-attr');
                                if (input_type !== undefined) {
                                    $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:first-child()").after(`<td><input type="${input_type}"  name="${tr_data_attrs}" disabled></td>`);
                                }
                                else {
                                    $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:first-child()").after(`<td><select name="${tr_data_attrs}" disabled>
                                    <option value="0">...</option>
                                    <option value="1">Yes</option>
                                    <option value="2">No</option>
                                    </select></td>`);
                                }
                            }
    
                            let th_len = $(".table-drop #table_" + forms_sect_id + " thead tr th").length - 1;
                            for (let a = 0; a < th_len; a++) {
                                let trs_data_attr = $('.table-drop #table_' + forms_sect_id + ' tbody tr:nth-child(' + (j + 1) + ')').attr('data-attr');
                                let ths_data_attr = $('.table-drop #table_' + forms_sect_id + ' thead tr th:nth-child(' + (a + 1) + ')').attr('data-attr');
                                $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:nth-child(" + (a + 1) + ")").attr("data-attr", trs_data_attr + ths_data_attr);
                                if (input_type !== undefined) {
                                    $(".table-drop #table_" + forms_sect_id + " tbody tr:nth-child(" + (j + 1) + ") td:nth-child(" + (a + 1) + ") input").attr('value', ths_data_attr);
                                }
                            }
                        }
                        $(".table-drop #table_" + forms_sect_id + " tbody tr:last-child()").after('<tr><th class="add_section_row"><button class="add_sec_row">+ add row</button></th></tr>')
                    });
                    // console.log(tt);
                    let form_sect_len = $('.container .forms-sect').length;
                    // console.log(form_sect_len);
                    if (form_sect_len >= 1) {
                        $('.container').find('.switch input').prop('disabled', false);
                    }
                    else {
                        $('.container').find('.switch input').prop('disabled', true);
                        // prev();
                    }
                }
            });
        });
    
        $("#droppable").droppable({
    
            activeClass: "active",
            hoverClass: "hover",
            drop: function (event, ui) {
                var $y = $("<div class='forms-sect'>" + "<span class='add_elements' id=''>" + "<i class='fa fa-cog'>" + "</i>" +
                    "<span class='hidden-element'>" + " Properties" + "</span>" + "</span>" + "<span class='remove_elements' id=''>" + "<i class='fa fa-trash'>" + "</i>" +
                    "<span class='hidden-element'>" + " Remove" + "</span>" + "</span>" + "<div class='form-section'>" +
                    "<div class='table_title'>" +
                    "<input type='text' id='' class='.t_input' value='Type a question'>" +
                    "</div>" +
                    "<table class='form-sec'>" +
                    " <thead>" +
                    "<tr>" +
                    "<th>" + "</th>" +
                    "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b1' name='b1' disabled>" + "b1" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                    "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b2' name='b2'disabled>" + "b2" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                    "<th>" + "<div class='input-type' format='text'contenteditable='true' data-name='b3' name='b3'disabled>" + "b3" + "</div>" + "<span class='close-btns'>" + "&#x2715;" + "</span>" + "</th>" +
                    "<th class='add_section'>" + "<button class='add_sec'>" + " &plus; add column" +
                    "</button>" + "</th>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>" +
                    "<tr>" +
                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a0'>" + "service" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                    "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a0'disabled>" + "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a1'>" + "Cleanliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                    "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a1'disabled>" + "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a2'>" + "Responsiveness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                    "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a2'disabled>" + "</td>" +
                    "</tr>" +
                    "<tr>" +
                    "<td>" + "<div class='input-type' format='text'contenteditable='true' data-name='a3'>" + "Freindliness" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                    "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                    "<td>" + "<input type='radio' name='a3'disabled>" + "</td>" +
                    "</tr>" +
                    "<tr>" + "<th class='add_section_row'>" + "<button class='add_sec_row'>" + "&plus; add row" +
                    "</button>" + "</th>" + "</tr>" +
                    "</tbody>" +
                    "</table>" + "</div>" + "<p class='.error_message'>" + "</p>" + "</div>");
                $(this).closest('.container').find('.switch input').removeAttr('disabled');
                $(".table-drop").append($y);
                $(".table-drop  .forms-sect").each(function (i, e) {
                    $(this).attr("id", "table_" + i);
                    $(this).find(".table_title > input").attr("id", i);
                    $(this).find(".add_elements").attr("id", "table-pop" + i);
                    $(this).find(".parents").find("").attr("id", "table-pop" + i);
                    $(this).find(".form-sec").attr('id', 'table_id' + i);
                    $(this).find('th').each(function (i, e) {
                        $(this).attr('data-attr', 'b' + i);
                        var t = $(this).attr('data-attr');
                    });
                    $(this).find("th:last-child").removeAttr('data-attr');
                    $(this).find('tbody tr').each(function (i, e) {
                        $(this).attr('data-attr', 'a' + i);
    
                        var r = $(this).attr('data-attr');
                        $(this).find('td').each(function (i, e) {
                            let r = $(this).closest('tr').attr('data-attr');
                            $(this).attr('data-attr', r + 'b' + i);
                        });
    
                    });
                    $(this).find('tbody tr:last-child()').removeAttr("data-attr");
                    let td_length = $(e).find('tbody tr td').length;
                    let tr_length = $(e).find('tbody tr').length;
                    let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                    for (let i = 1; i < tr_length; i++) {
                        for (let j = 0; j <= td_length; j++) {
                            let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                            if (td_attr !== undefined) {
                                let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                                let td_atr = td_attr.replace(tr_attr, '');
                                if (input_type !== undefined) {
                                    $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                                }
                            }
                        }
                    }
                });
            }
        });
    
        $(document).mouseup(function (e) {
    
            let form_sect = $('.forms-sect');
            let side_navs = $('.sidenavs');
            if (!form_sect.is(e.target) && form_sect.has(e.target).length === 0) {
                if (!side_navs.is(e.target) && side_navs.has(e.target).length === 0) {
                    $(form_sect).find('.add_elements').css('display', 'none');
                    // $(form_sect).find('.form-section').css('box-shadow', 'none');
                    $(form_sect).find('.remove_elements').css('display', 'none');
                }
            }
        });
    
        $(document).on('click', '.forms-sect', function () {
            $(this).parents('.container').find('.forms-sect').each(function (i, e) {
                let add_element = $(e).css('display');
                let take_tab_id = $(this).attr('id');
                take_tab_id = take_tab_id.replace('table_', '');
                let take_tab_idd = $(e).attr('id');
            });
            $(this).find('.add_elements').css('display', 'flex');
            // $(this).find('.form-section').css('box-shadow', '0px 0px 0px 2px #0293e2');
            $(this).find('.remove_elements').css('display', 'flex');
        });
    
        $(document).on('focusout', '.container .forms-sect', function (e) {
            $(this).find('thead tr th div').each(function (i, e) {
                let th_length = $(e).closest('thead').find('tr th').length;
                if (th_length > 3) {
                    let th_remove = $(e).text();
                    if (th_remove == '') {
                        let th_attr = $(e).closest('th').attr('data-attr');
                        $(e).parents('.forms-sect').find('tbody tr td').each(function (i, e) {
                            let td_attr = $(e).attr('data-attr');
                            let tr_attr = $(e).closest('tr').attr('data-attr');
                            let tr_attr_op = td_attr.replace(tr_attr, '');
                            if (th_attr == tr_attr_op) {
                                $(e).remove();
                            }
                        });
                        $(e).closest('th').remove();
                    }
                }
            });
    
            $(this).find('tbody tr td:first-child()').each(function (i, e) {
                let a = $(e).find('div').text();
                if (a == '') {
                    let div_len = $(e).closest('tbody').find('tr').length;
                    console.log(div_len);
                    if (div_len > 2) {
                        $(e).closest('tr').remove();
                    }
                }
            });
        });
    
        $(document).on('click', ".add_elements", function () {
            $(this).closest('.container').find('.sidenavs .select_require select option:selected').prop('selected', false);
            $(this).closest('.container').find(`.sidenavs .select_require select option[value = "No" ]`).prop('selected', true);
            // $(this).closest('.container').find('.switch input').removeAttr('disabled');
            let input_types = $(this).closest('.forms-sect').find('tbody tr td input').attr('type');
            if (input_types !== undefined) {
                if (input_types == 'radio') {
                    $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                    $(this).parents('.container').find('.sidenavs .input-type .radio-box-sec').addClass('changetheme');
                }
                else if (input_types == 'checkbox') {
                    $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                    $(this).parents('.container').find('.sidenavs .input-type .check-box-sec').addClass('changetheme');
                }
                else if (input_types == 'text') {
                    // $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme h5').css('color', '#000');
                    $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                    $(this).parents('.container').find('.sidenavs .input-type .text-btn-sec').addClass('changetheme');
                    // $(this).parents('.container').find('.sidenavs .input-type .text-btn-sec h5').css('color', '#fff');
                }
                else if (input_types == 'number') {
                    $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                    $(this).parents('.container').find('.sidenavs .input-type .number-sec').addClass('changetheme');
                }
                else { }
            }
            else {
                $(this).parents('.container').find('.sidenavs .input-type .input-box, .changetheme').removeClass('changetheme');
                $(this).parents('.container').find('.sidenavs .input-type .drop-down-sec').addClass('changetheme');
            }
    
            var tableid = $(this).parents(".forms-sect").attr("id");
            var navindex = +tableid.replace("table_", "");
            $(this).parents("body").find(".sidenavs").attr("id", "sidenavs_" + navindex);
            $(this).parents(".container").find(".rows textarea").attr("id", "rows" + navindex);
            $(this).parents(".container").find(".columns textarea").attr("id", "columns" + navindex);
            let select_value = $(this).closest('.conatiner').find('.select_require select').attr("id", navindex);
            var inputid = $(this).parents(".forms-sect").find(".table_title input").attr("id");
            $(this).parents("body").find(".sidenavs .table_ti").attr("id", "tab_" + navindex);
            $(this).parents("body").find(".sidenavs .select_require select").attr("id", "select_" + navindex);
            var sidenav_id = $(this).parents(".container").find(".input-form-name input").attr("id", "input_form" + navindex);
            var side_id = $(this).parents(".container").find(".input-form-name input").attr("id");
            sidenav_id = side_id.replace("input_form", "");
            let tabs_titles = $(this).parents('.forms-sect').find('.table_title input').val();
            let side_navid = $(this).parents('.container').find('.sidenavs').attr('id');
            let tab_id_input = $(this).parents('.forms-sect').find('.table_title input').attr('id');
            let side_nav_id = side_navid.replace('sidenavs_', '');
            let replaceData = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
            if (replaceData.length !== 0) {
                let replace = replaceData[navindex].requirements;
                if (replace !== undefined) {
                    $(this).closest('.container').find('.sidenavs .select_require select option:selected').prop('selected', false);
                    $(this).closest('.container').find(`.sidenavs .select_require select option[value = "${replace}" ]`).prop('selected', true);
                }
            }
    
            if (tab_id_input == side_nav_id) {
                $(this).closest('.container').find('.sidenavs .input-form-name input').val(tabs_titles);
            }
            $(this).closest('.container').find('.select_require option[1]:selected');
            $(this).parents('.forms-sect').find('tbody tr td:first-child()').each(function (i, e) {
                let a = $(e).find('div').text();
                if (a == '') {
                    let div_len = $(e).closest('tbody').find('tr').length;
                    console.log(div_len);
                    if (div_len > 2) {
                        $(e).closest('tr').remove();
                    }
                }
            });
    
            $('.select_require select').on('change', function (e) {
                let select_id = $(this).attr('id');
                var flag = true;
                $(this).parents('.container').find('.forms-sect').each(function (i, e) {
                    var tab_id = $(e).attr('id');
                    var sidenavs_id = $(e).closest('.container').find('.sidenavs').attr('id');
                    select_i = select_id.replace('select_', '');
                    tab_i = tab_id.replace('table_', '');
                    // console.log(tab_id);
                    var select_value = $(e).parents('.container').find('.select_require select option:selected').val();
                    if (select_i == tab_i) {
                        const itemObj = {
                            sidenavsId: sidenavs_id,
                            requirements: select_value,
                            tab_ids: tab_id
                        }
    
                        $(array).each((i, e) => {
                            if (e.tab_ids == tab_id) {
                                e.requirements = select_value;
                                let replaceData = JSON.parse(localStorage.getItem("items")) || [];
                                replaceData[i].requirements = e.requirements;
                                localStorage.setItem('items', JSON.stringify(replaceData));
                                flag = false;
                            }
                        });
    
                        if (flag) {
                            array.push(itemObj);
                            localStorage.setItem("items", JSON.stringify(array));
                        }
    
                    }
                });
            });
    
            $(this).parents('.forms-sect').find('thead tr th div').each(function (i, e) {
                let th_length = $(e).closest('thead').find('tr th').length;
                if (th_length > 3) {
                    let th_remove = $(e).text();
                    if (th_remove == '') {
                        let th_attr = $(e).closest('th').attr('data-attr');
                        $(e).parents('.forms-sect').find('tbody tr td').each(function (i, e) {
                            let td_attr = $(e).attr('data-attr');
                            let tr_attr = $(e).closest('tr').attr('data-attr');
                            let tr_attr_op = td_attr.replace(tr_attr, '');
                            if (th_attr == tr_attr_op) {
                                $(e).remove();
                            }
                        });
                        $(e).closest('th').remove();
                    }
                }
            });
    
            const title_value = {
                id: inputid,
                sidenavid: sidenav_id
            };
    
            flag = true;
    
            $(ids).each(function (i, e) {
                if (inputid == e.id) {
                    flag = false;
                }
            });
            if (flag) {
                ids.push(title_value);
                localStorage.setItem("ids", JSON.stringify(ids));
            }
    
            $(".forms-sect .table_title input").keypress(function (e) {
                let txt = $(this).val() + e.key;
                let tab_id = $(this).attr("id");
                let input_form_id = $(this).parents(".container").find(".input-form-name input").attr("id");
                let sidenav_input_id = +input_form_id.replace("input_form", "");
                if (tab_id == sidenav_input_id) {
                    $(this).parents('.container').find(".input-form-name input").val(txt);
                }
            });
    
            $(".input-form-name input").keypress(function (e) {
                let input_form_id = 0;
                let txt = $(this).val() + e.key;
                let tab_id = $(this).parents(".container").find(".forms-sect .table_title input").attr("id");
    
                input_form_id = $(this).attr("id");
                input_form_i = +input_form_id.replace("input_form", "");
    
                $(this).parents(".container").find(".forms-sect").each(function (i, e) {
                    let form_id = $(this).attr("id");
                    let form_i = +form_id.replace("table_", "");
                    if (form_i == input_form_i) {
                        $(this).find(".table_title input").val(txt);
                    }
                });
    
            });
    
    
            let row_name = '';
            $(this).parents('.forms-sect').find('tbody tr td:first-child()').each(function (i, e) {
                row_name += $(e).text();
                row_name = row_name.split('✕').join(",");
            });
    
            row_name = row_name.split(",");
            row_name = row_name.toString().split(",").join("\n").trim();
    
            let row_input = inputid.replace('table_', '');
            $(this).closest('.container').find('.sidenavs').each(function (i, e) {
                let row_text_area_input = $(e).attr('id');
                row_text_area_input = row_text_area_input.replace('sidenavs_', '');
                if (row_input == row_text_area_input) {
                    $(e).find('.rows textarea').val('');
                    $(e).find('.rows textarea').val(row_name);
                }
            });
            let column_name = '';
            $(this).parents('.forms-sect').find('thead tr th').each(function (i, e) {
                column_name += $(e).text();
                column_name = column_name.split('✕').join(",");
            });
    
            column_name = column_name.split(",");
            column_name = column_name.filter(e => e !== ' + add column');
            column_name = column_name.toString().split(",").join("\n");
    
            let column_input = inputid.replace('table_', '');
            $(this).closest('.container').find('.sidenavs').each(function (i, e) {
                let row_text_area_input = $(e).attr('id');
                row_text_area_input = row_text_area_input.replace('sidenavs_', '');
                if (column_input == row_text_area_input) {
                    $(e).find('.columns textarea').val('');
                    $(e).find('.columns textarea').val(column_name);
                }
            });
    
        });
    
        $(document).on('click', ".remove_elements", function () {
            $(this).closest('.forms-sect').remove();
        });
    
        $(".in-box").click(function () {
            $(this).parents('.input-type').find('.input-box, .changetheme').removeClass('changetheme');
            $(this).addClass('changetheme');
        });
    
        $('.radio-box-sec').click(function () {
            let sidenavs_id = $(this).parents('.sidenavs').attr('id');
            let side_ = sidenavs_id.replace('sidenavs_', '');
            let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
            $(this).parents('.container').find(`#table_id${side_} td input`).remove();
            $(this).parents('.container').find(`#table_id${side_} td select`).remove();
            $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="radio" disabled>');
            $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();
    
            let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
            let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
            for (let i = 1; i < row_length; i++) {
                let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
                for (let j = 0; j <= button_len; j++) {
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
                }
            }
            let td_length = $(this).parents('.container').find(`#table_id${side_} tbody tr td`).length;
            let tr_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
            let input_type = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td input`).attr('type');
            for (let i = 1; i < tr_length; i++) {
                for (let j = 0; j <= td_length; j++) {
                    let td_attr = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child(${j})`).attr('data-attr');
                    if (td_attr !== undefined) {
                        let tr_attr = ($(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} )`).attr('data-attr'));
                        let td_atr = td_attr.replace(tr_attr, '');
                        $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child( ${j} ) input`).attr('value', td_atr);
                    }
                }
            }
        });
    
        $('.check-box-sec').click(function () {
            let sidenavs_id = $(this).parents('.sidenavs').attr('id');
            let side_ = sidenavs_id.replace('sidenavs_', '');
            let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
            $(this).parents('.container').find(`#table_id${side_} td input`).remove();
            $(this).parents('.container').find(`#table_id${side_} td select`).remove();
            $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="checkbox" disabled>');
            $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();
    
            let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
    
            let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
    
            for (let i = 1; i < row_length; i++) {
                let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
    
                for (let j = 0; j <= button_len; j++) {
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
                }
            }
            let td_length = $(this).parents('.container').find(`#table_id${side_} tbody tr td`).length;
            let tr_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
            let input_type = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td input`).attr('type');
            for (let i = 1; i < tr_length; i++) {
                for (let j = 0; j <= td_length; j++) {
                    let td_attr = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child(${j})`).attr('data-attr');
                    if (td_attr !== undefined) {
                        let tr_attr = ($(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} )`).attr('data-attr'));
                        let td_atr = td_attr.replace(tr_attr, '');
                        $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child( ${i} ) td:nth-child( ${j} ) input`).attr('value', td_atr);
                    }
                }
            }
        });
    
        $('.text-btn-sec').click(function () {
            let sidenavs_id = $(this).parents('.sidenavs').attr('id');
            let side_ = sidenavs_id.replace('sidenavs_', '');
            let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
    
            $(this).parents('.container').find(`#table_id${side_} td input`).remove();
            $(this).parents('.container').find(`#table_id${side_} td select`).remove();
    
            $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="text" disabled>');
            $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();
    
            let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
            let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
            for (let i = 1; i < row_length; i++) {
                let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
                for (let j = 0; j <= button_len; j++) {
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
                }
            }
    
    
        });
    
        $('.number-sec').click(function () {
            let sidenavs_id = $(this).parents('.sidenavs').attr('id');
            console.log(sidenavs_id);
            let side_ = sidenavs_id.replace('sidenavs_', '');
            console.log(side_);
            let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
            console.log(form_sec);
    
            $(this).parents('.container').find(`#table_id${side_} td input`).remove();
            $(this).parents('.container').find(`#table_id${side_} td select`).remove();
            $(this).parents('.container').find(`#table_id${side_} td`).append('<input type="number" disabled>');
            $(this).parents('.container').find(`#table_id${side_} tr td:first-child() input`).remove();
    
            let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
            console.log(row_length);
            let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
            console.log(button_len);
            for (let i = 1; i < row_length; i++) {
                let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
                console.log(row_name);
                for (let j = 0; j <= button_len; j++) {
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) input`).attr('name', row_name);
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
                }
            }
    
    
        });
    
        $('.drop-down-sec').click(function () {
            let sidenavs_id = $(this).parents('.sidenavs').attr('id');
            let side_ = sidenavs_id.replace('sidenavs_', '');
            let form_sec = $(this).parents('.container').find('.table-drop .forms-sect').length;
            $(this).parents('.container').find(`#table_id${side_} td input`).remove();
            if (($(this).parents('.container').find(`#table_id${side_} tr td select`).length >= 1)) {
            }
            else {
                $(this).parents('.container').find(`#table_id${side_} tr td`).append(`<select name="" id="" disabled>
            <option value="0">...</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
            </select>`);
                $(this).parents('.container').find(`#table_id${side_} tr td:first-child() select`).remove();
            }
    
            let row_length = $(this).parents('.container').find(`#table_id${side_} tbody tr`).length;
            let button_len = $(this).parents('.container').find(`#table_id${side_} tbody tr:first-child() td`).length;
            for (let i = 1; i < row_length; i++) {
                let row_name = $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i})`).attr('data-attr');
                for (let j = 0; j <= button_len; j++) {
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:nth-child(${j}) select`).attr('name', row_name);
                    $(this).parents('.container').find(`#table_id${side_} tbody tr:nth-child(${i}) td:first-child() div`).attr('name', row_name);
                }
            }
    
        });
    
        $('.sidenavs .rows textarea').bind('input propertychange', function (e) {
            let get_sidenavid = $(this).closest('.sidenavs').attr('id');
            get_sidenavid = get_sidenavid.replace('sidenavs_', '');
            let textarea_val = $(this).val().split('\n');
            let textarealen = textarea_val.length;
    
            $('.container').find('.forms-sect').each(function (i, e) {
                let tab_id = $(e).attr('id');
                tab_id = tab_id.replace('table_', '');
                if (tab_id == get_sidenavid) {
                    let input_type = $(e).find('tbody tr:first-child() td:nth-child(2) input').attr('type');
                    let td_len = $(e).find('tbody tr:first-child() td').length;
                    $(e).find('tbody tr').each(function (i, e) {
                        $(e).find('td div').text(textarea_val[i]);
                        $(e).remove();
                    });
                    let name_attr = 'a0';
                    let name_at = 'a';
                    for (let i = 0; i < textarealen; i++) {
                        $(e).find(`tbody`).append("<tr data-attr=" + name_attr + ">" +
                            "<td data-attr=''>" + "<div class='input-type' format='text'contenteditable='true' data-name=" + name_at + ">" + "" + textarea_val[i] + "" + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
                            "</tr>");
                        var th_total_length = $(e).find('thead th div').length;
                        for (let j = 0; j < th_total_length; j++) {
                            if (input_type !== undefined) {
                                $(e).find('tbody *[data-attr=' + name_attr + ']').append("<td>" + "<input type=" + input_type + " disabled>" + "</td>");
                            }
                            else {
                                $(e).find('tbody *[data-attr=' + name_attr + ']').append(`<td> <select id='' disabled>
                                <option value="0">...</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                                </select> </td>`);
                            }
                        }
                        for (let k = 0; k <= td_len; k++) {
                            let th_attr = $(e).find('thead th:nth-child(' + (k) + ')').attr('data-attr');
                            let tr_attr = $(e).find('tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
                            let td_attr = tr_attr + th_attr;
                            $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ')').attr('data-attr', td_attr);
                            if (input_type !== undefined) {
                                $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ') input').attr('name', name_at);
                            }
                            else {
                                $(e).find('tbody *[data-attr=' + name_attr + '] td:nth-child(' + k + ') select').attr('name', name_at);
                            }
                        }
    
                        let name_attrs = +name_attr.replace('a', '');
                        name_attrs += 1;
                        name_attr = 'a' + name_attrs;
                        name_at = nextChar(name_at);
                    }
    
                    console.log($(e).find(`tbody tr`).length);
                    $(e).find('tbody tr:last-child()').after('<tr><th class="add_section_row"><button class="add_sec_row">+ add row</button></th></tr>');
                    let td_length = $(e).find('tbody tr td').length;
                    let tr_length = $(e).find('tbody tr').length;
                    // let input_type = $(e).find('tbody tr:first-child() td input').attr('type');
                    for (let i = 1; i < tr_length; i++) {
                        for (let j = 0; j <= td_length; j++) {
                            let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                            if (td_attr !== undefined) {
                                let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                                let td_atr = td_attr.replace(tr_attr, '');
                                if (input_type !== undefined) {
                                    $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                                }
    
                            }
                        }
                    }
                }
            });
        });
    
        $('.sidenavs .select_require select ').bind('click', function () {
            let sidenav_id = $(this).parents('.sidenavs').attr('id');
            sidenav_id = sidenav_id.replace('sidenavs_', '');
            let val = $(this).parents('.container').find('.sidenavs .select_require option:selected').val();
            $(this).parents('.container').find('.forms-sect').each(function (i, e) {
                let tab_id = $(e).attr('id');
                tab_id = tab_id.replace('table_', '');
                if (sidenav_id == tab_id) {
                    let input_type = $(e).find('tbody tr:first-child() td:last-child() input').attr('type');
    
                    if (val == 'No') {
                        if (input_type !== undefined) {
                            $(e).find('tbody tr td input').removeAttr('required');
                        }
                        else {
                            $(e).find('tbody tr td select').removeAttr('required');
                        }
                    }
    
                    else if (val == 'Require an answer on Every row') {
                        $(e).find('tbody tr').each(function (i, e) {
                            if (input_type == 'radio' || input_type == 'checkbox') {
                                let check_length = $(e).find('td input:checked').length;
                                if (check_length < 1) {
                                    // console.log('dnasdjas');
                                }
                                else {
                                    // console.log(check_length, '>>>>>');
                                }
                            }
                            else if (input_type == 'text' || input_type == 'number') {
                                let text_count = 0;
                                $(e).find('td input').each(function (i, e) {
                                    let a = $(e).val();
                                    if (a !== '') {
                                        // console.log(a);
                                        text_count++;
                                    }
                                    else {
    
                                    }
                                });
                                // console.log(text_count);
                            }
                            else {
                                var count = 0;
                                $(e).find('td select').each(function (i, e) {
                                    if ($(e)[0].selectedIndex <= 0) {
                                        // console.log("not");
                                    }
                                    else {
                                        // console.log("yes");
                                        count++;
                                    }
                                    // console.log(count);
                                });
                            }
                        });
                    }
    
                    else if (val == 'Require at least one answer') {
                        $(e).find('tbody').each(function (i, e) {
                            if (input_type == 'radio' || input_type == 'checkbox') {
                                if ($(e).find('tr td input[type=radio]') || $(e).find('tr td input[type=radio]')) {
                                    var count = 0;
                                    $(e).find('tr td input:checked').each(function (i, e) {
                                        let check_length = $(e).length;
                                        if (check_length < 1) {
                                            // console.log("sidsjadjdlsjdlajsd");
                                        }
                                        else {
                                            count++;
                                        }
                                    });
                                    // console.log(count, '>>>>>');
                                }
                            }
                            else if (input_type == 'text' || input_type == 'number') {
                                let text_count = 0;
                                $(e).find('tr td input').each(function (i, e) {
                                    let a = $(e).val();
                                    if (a !== '') {
                                        console.log(a);
                                        text_count++;
                                    }
                                    else {
    
                                    }
                                });
                                // console.log(text_count);
                            }
                            else {
                                var counts = 0;
                                if ($(e).find("tr td select")[0].selectedIndex <= 0) {
    
                                }
                                else {
                                    counts++;
                                }
                                // console.log(counts, '>>>>>>');
                            }
                        });
                    }
    
                    else if (val == 'Require an answer in every cell') {
                        if (input_type !== undefined) {
                            $(e).find('tbody tr td input').attr('required', 'true');
                        }
                        else {
                            $(e).find('tbody tr td select').attr('required', 'true');
                        }
                    }
    
                }
            });
        });
    
        $('.sidenavs .columns textarea').bind('input propertychange', function (e) {
            let get_sidenavid = $(this).closest('.sidenavs').attr('id');
            get_sidenavid = get_sidenavid.replace('sidenavs_', '');
            let textarea_val = $(this).val().split('\n');
            var textarealen = textarea_val.length;
    
            $('.container').find('.forms-sect').each(function (i, e) {
                let tab_id = $(e).attr('id');
                tab_id = tab_id.replace('table_', '');
                if (tab_id == get_sidenavid) {
                    let td_attr_len = $(e).find('tbody tr:first-child() td input').length;
                    let input_type = $(e).find('tbody tr:first-child() td:nth-child(2) input').attr('type');
                    console.log(input_type);
                    let name_atr = 'a';
                    $(e).find('thead tr th div').each(function (i, e) {
                        $(e).text(textarea_val[i]);
                        $(e).closest('tr').find('th').has('div').remove();
                    });
                    let th_attr = $(e).find('thead tr th:first-child()').attr('data-attr');
                    let th_atr = th_attr;
                    for (let i = 0; i < textarealen; i++) {
                        th_atr = +th_atr.replace('b', '');
                        th_atr += 1;
                        th_atr = 'b' + th_atr;
                        $(e).find(`thead tr th:last-child()`).before(`<th data-attr=${th_atr}><div class='input-type' format='text'contenteditable='true' data-name='' name=''>${textarea_val[i]}</div><span class='close-btns'>&#x2715;</span></th>`);
                    }
                    $(e).find('tbody tr').each(function (i, e) {
                        if (input_type !== undefined) {
                            $(e).find('td input').each(function (i, e) {
                                $(e).closest('td').remove();
                            });
                        }
                        else {
                            $(e).find('td select').each(function (i, e) {
                                $(e).closest('td').remove();
                            });
                        }
    
                        for (let i = 0; i < textarealen; i++) {
                            if (input_type !== undefined) {
                                $(e).find('td:first-child()').after("<td>" + "<input type=" + input_type + " disabled>" + "</td>");
                            }
                            else {
                                $(e).find('td:first-child()').after(`<td> <select id='' disabled>         
                                <option value="0">...</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option> 
                                </select> </td>`);
                            }
                        }
                        var textare = $(this).find('td').length;
                        console.log(textare);
    
                        for (let i = 0; i <= textare; i++) {
                            console.log(textare);
                            let tr_atr = $(e).attr('data-attr');
                            console.log(tr_atr);
                            let th_attr = $(e).closest('.forms-sect').find('thead tr th:nth-child(' + (i) + ')').attr('data-attr');
                            console.log(th_attr);
                            let make_td_attr = tr_atr + th_attr;
                            $(e).find('td:nth-child(' + i + ')').attr('data-attr', make_td_attr);
                            if (input_type !== undefined) {
                                $(e).find('td:nth-child(' + i + ') input').attr('name', name_atr);
                            }
                            else {
                                $(e).find('td:nth-child(' + i + ') select').attr('name', name_atr);
                            }
                        }
                        name_atr = nextChar(name_atr);
                    });
                    let td_length = $(e).find('tbody tr td').length;
                    let tr_length = $(e).find('tbody tr').length;
                    for (let i = 1; i < tr_length; i++) {
                        for (let j = 0; j <= td_length; j++) {
                            let td_attr = $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                            if (td_attr !== undefined) {
                                let tr_attr = ($(e).find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                                let td_atr = td_attr.replace(tr_attr, '');
                                if (input_type !== undefined) {
                                    $(e).find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                                }
    
                            }
                        }
                    }
                }
            });
        });
    
        prev();
    
    });
    
    function prev() {
        let full_array = JSON.parse(localStorage.getItem("total_array")) || [];
        $(full_array).each(function (i, e) {
            let form_sect_id = full_array[i].forms_sect;
            let table_title = full_array[i].table_ti;
            let select_require = full_array[i].select_requir;
            let input_type = full_array[i].input_typee;
            let td_length = full_array[i].input_td_length;
            let select_length = full_array[i].select_input_length;
            let td_div_name = full_array[i].td_div_names;
            let th_div_name = full_array[i].th_div_names;
            let tr_th_length = full_array[i].tr_th_length;
            var yy = $("<div class='forms-sect' id='table_" + form_sect_id + "'>" + "<div class='form-section'>" +
                "<div class='table_title'>" +
                "<h3>" + table_title + "</h3>" +
                "</div>" +
                "<table class='form-sec'>" +
                " <thead>" +
                "<tr>" +
                "</tr>" +
                "</thead>" +
                "<tbody>" +
                "</tbody>" +
                "</table>" + "<p class=error_message>" + "</p>" + "<p class=success_message>" + "</p>" + "</div>" + "</div>");
            $('.container .table_dropping').append(yy);
            // $('.container .table_dropping .form-section').css('box-shadow', 'unset');
            for (let i = 0; i < tr_th_length; i++) {
                $('.table_dropping #table_' + form_sect_id + ' thead tr').append("<th data-attr='" + th_div_name[i].data_attr + "'>" + "<div class='input-type' format='text name='" + th_div_name[i].name + "'>" + "" + th_div_name[i].name + "" + "</div>" + "</th>");
            }
            $('.table_dropping #table_' + form_sect_id + ' thead tr th:first-child div').remove();
            for (let i = 0; i < td_div_name.length; i++) {
                $('.table_dropping #table_' + form_sect_id + ' tbody').append(`<tr data-attr='${td_div_name[i].data_attr}'><td><div class='input-type' format='text' name='${td_div_name[i].data_attr}'>${td_div_name[i].name}</div></td></tr>`);
            }
            for (let i = 0; i < td_div_name.length; i++) {
                if (input_type !== undefined) {
                    for (let j = 0; j < td_length; j++) {
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><input type='${input_type}' name ='' value =''></td>`);
                    }
                }
                else {
                    for (let j = 0; j < select_length; j++) {
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><select name="" id="">
                        <option value="0">...</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                        </select></td>`);
                    }
                }
            }
            for (let i = 0; i < td_div_name.length; i++) {
                let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
                for (let j = 0; j <= td_length; j++) {
                    let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ')').attr('data-attr', tr_attr + th_attr);
                }
            }
            for (let i = 0; i < td_div_name.length; i++) {
                let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        for (let j = 1; j <= td_length; j++) {
                            let tabs_titles = 'table_' + form_sect_id;
                            let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                            $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                            $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('value', th_attr);
                        }
                    }
                    else if (input_type == 'text' || input_type == 'number') {
                        for (let j = 1; j <= td_length; j++) {
                            let tabs_titles = 'table_' + form_sect_id;
                            let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                            $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                        }
                    }
                }
                else {
                    for (let j = 1; j <= select_length; j++) {
                        let tabs_titles = 'table_' + form_sect_id;
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') select').attr('name', tabs_titles + tr_attr);
                    }
                }
            }
    
        });
    }
    
    $(document).on('click', '.on_submit', function () {
        $('.container .preview_section .back_home').css('display', 'flex');
    
    
        let len = $('.table_dropping .forms-sect').length;
        for (let i = 0; i < len; i++) {
            let full_array = JSON.parse(localStorage.getItem("total_array")) || [];
            let select_condition = JSON.stringify(full_array[i].select_requir);
            input_type = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td:last-child() input').attr('type');
            if (select_condition.match("No")) {
            }
            else if (select_condition.match("Require an answer on Every row")) {
    
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        var cod1 = 0;
                        var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                            var count1 = 0;
                            let check_length = $(e).find('td input:checked').length;
                            if (check_length >= 1) {
                                count1 = count1 + 1;
                            }
                            else {
                            }
                            if (count1 >= 1) {
                                cod1 = cod1 + 1;
                            }
                        });
                        if (cod1 < tr_len1) {
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('select atleast one answer from every row');
                        }
                        else {
                            console.log("else cod1 < tr_len1");
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                        }
                    }
    
                    else if (input_type == 'text' || input_type == 'number') {
                        var tr_len = 0;
                        var cod = 0;
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                            tr_len = tr_len + 1;
                            var count = 0;
                            var tdinput = 0;
                            $(e).find('td input').each(function (i, e) {
                                tdinput++;
                                let check_val = $(e).val();
                                if (check_val == '') {
                                    count = count + 1;
                                }
                                else {
                                }
                            });
    
                            if (count < tdinput) {
                                cod = cod + 1;
                            }
                        });
    
                        if (cod < tr_len) {
                            console.log('saflsf');
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('select atleast one answer from every row');
                        }
                        else {
                            console.log('shgdsghdf');
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                        }
                        let con = 0;
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').each(function (i, e) {
                            let check_val = $(e).val();
                            if (check_val == '') {
                                con = con + 1;
                            }
                        });
                    }
                }
    
                else {
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                        let count = 0;
                        let counts = 0;
    
                        $(e).find('td select').each(function (i, e) {
                            counts++;
                            if ($(e)[0].selectedIndex <= 0) {
                                count++;
                            }
                            else {
                                console.log('hello');
                            }
                        });
                        if (count >= counts) {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                            $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer from every row');
                        }
                        else {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                        }
                    });
                }
            }
            else if (select_condition.match("Require at least one answer")) {
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                            let count = 0;
                            let checklength = $(e).find('tr td input:checked').length;
                            if (checklength < 1) {
                                $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                                $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                            }
                            else {
                                $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                            }
                        });
                    }
                    else if (input_type == 'text' || input_type == 'number') {
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                            let count = 0;
                            let input_length = $(e).find('tr td input').length;
                            $(e).find('tr').each(function (i, e) {
                                $(e).find('td').each(function (i, e) {
                                    if ($(e).find('input').val() == '') {
                                        count = count + 1;
                                    }
                                })
                            });
                            if (count >= input_length) {
                                $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                                $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                            }
                            else {
                                console.log('sdkjfhdf');
                                $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                            }
                        });
                    }
                }
                else {
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        let count = 0;
                        let selects = 0;
                        $(e).find('tr td select').each(function (i, e) {
                            selects++;
                            if ($(e)[0].selectedIndex <= 0) {
                                count++;
                            }
                            else {
    
                            }
                        });
                        if (count >= selects) {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                            $(e).closest('.forms-sect').find('.error_message').text('select atleast one answer');
                        }
                        else {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                        }
    
                    });
                }
            }
            else if (select_condition.match("Require an answer in every cell")) {
                if (input_type !== undefined) {
                    if (input_type == 'radio') {
                        var cod1 = 0;
                        var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                            var count1 = 0;
                            let check_length = $(e).find('td input:checked').length;
                            if (check_length >= 1) {
                                count1 = count1 + 1;
                            }
                            else {
                            }
                            if (count1 >= 1) {
                                cod1 = cod1 + 1;
                            }
                        });
                        if (cod1 < tr_len1) {
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                        }
                        else {
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                        }
                    }
                    else if (input_type == 'checkbox') {
                        var cod1 = 0;
                        var tr_len1 = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').length;
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr').each(function (i, e) {
                            var count1 = 0;
                            let check_length = $(e).find('td input:checked').length;
                            let check_box_length = $(e).find('td input').length;
                            console.log(check_box_length);
                            if (check_length >= check_box_length) {
                                count1 = count1 + 1;
                            }
                            else {
                            }
                            if (count1 >= 1) {
                                cod1 = cod1 + 1;
                            }
                        });
                        if (cod1 < tr_len1) {
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                        }
                        else {
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                        }
                    }
                    else if (input_type == 'text' || input_type == 'number') {
                        var tr_len2 = 0;
                        var td_len = $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').length;
                        var count2 = 0;
                        $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                            tr_len2 = tr_len2 + 1;
                            var tdinput2 = 0;
                            $(e).find('tr td').each(function (i, e) {
                                $(e).find('input').each(function (i, e) {
                                    tdinput2++;
                                    let check_val2 = $(e).val();
                                    if (check_val2 !== '') {
                                        count2 = count2 + 1;
                                    }
                                });
                            });
                        });
                        if (count2 !== td_len) {
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'block');
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').text('fill all answers');
                        }
                        else {
                            $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ')').find('.error_message').css('display', 'none');
                        }
                    }
                }
                else {
                    $('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody').each(function (i, e) {
                        let count = 0;
                        let selects = 0;
                        $(e).find('tr td select').each(function (i, e) {
                            selects++;
                            if ($(e)[0].selectedIndex <= 0) {
                            }
                            else {
                                count++;
                            }
                        });
                        console.log(selects);
                        if (count < selects) {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'block');
                            $(e).closest('.forms-sect').find('.error_message').text('select all answers');
                        }
                        else {
                            $(e).closest('.forms-sect').find('.error_message').css('display', 'none');
                        }
                    });
                }
            }
            else {
            }
        }
        let count = 0;
        $('.table_dropping .forms-sect').each(function (i, e) {
            let dis_css = $(e).find('.error_message').css('display');
            if (dis_css == 'block') {
                count = count + 1;
            }
        });
        let length = $('.table_dropping .forms-sect').length;
        if (count > 0) {
            $('.s_message').css({ 'display': 'none' });
            $('.container .json_sec').css('display', 'none');
    
        }
        else if (length == 1) {
            $('.s_message').css({ 'display': 'block', 'text-align': 'center' });
            $('.s_message').text('Form filled successfully');
            $('.err_message').css({ 'display': 'none' });
            localStorage.removeItem('array');
            let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];
    
            $('.table_dropping .forms-sect').each(function (i, e) {
    
                let th_names = [];
                let tr_names = [];
                let tab_id = $(e).attr('id');
                console.log(tab_id);
                let flag = true;
                let input_type = $(e).find('tbody tr td input').attr('type');
                $(e).find('thead th div').each(function (i, e) {
                    let th_name = $(e).text();
                    th_names.push(th_name);
                });
                $(e).find('tbody tr div').each(function (i, e) {
                    let tr_name = $(e).text();
                    tr_names.push(tr_name);
                });
                console.log(tr_names);
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        let selected_input = [];
                        $(e).find('tbody tr td input:checked').each(function (i, e) {
                            let select_input = $(e).attr('value');
                            let select_attr = $(e).closest('td').attr('data-attr');
                            let select_input_attr = {
                                input_value: select_input,
                                td_input_attr: select_attr
                            };
                            selected_input.push(select_input_attr);
                        });
    
                        let full_arrs = {
                            th__names: th_names,
                            td__names: tr_names,
                            inputs: selected_input,
                            table_id: tab_id
                        }
                        table_store.push(full_arrs);
                        localStorage.setItem('array', JSON.stringify(table_store));
                    }
                    else if (input_type == 'text' || input_type == 'number') {
                        let inputs_val = [];
                        $(e).find('tbody tr td input').each(function (i, e) {
                            let input_val = $(e).val();
                            let td_attr = $(e).closest('td').attr('data-attr');
                            if (input_val !== '') {
                                let input_attr = {
                                    input_value: input_val,
                                    td_input_attr: td_attr
                                }
                                inputs_val.push(input_attr);
                            }
                        });
                        let full_arrs = {
                            th__names: th_names,
                            td__names: tr_names,
                            inputs: inputs_val,
                            table_id: tab_id
                        }
                        table_store.push(full_arrs);
                        localStorage.setItem('array', JSON.stringify(table_store));
                    }
    
                }
                else {
                    let selected_val = [];
                    $(e).find('tbody tr td select').each(function (i, e) {
                        if ($(e)[0].selectedIndex <= 0) {
    
                        }
                        else {
                            let select_val = $(e).find('option:selected').text();
                            let select_td_attr = $(e).closest('td').attr('data-attr');
                            let select_arr = {
                                select_value: select_val,
                                selected_td_attr: select_td_attr
                            }
                            selected_val.push(select_arr);
                        }
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        selects: selected_val,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }
            });
            console.log(table_store);
            $('.container .json_sec').css('display', 'block');
        }
        else {
            $('.s_message').css({ 'display': 'block', 'text-align': 'center' });
            $('.s_message').text('Forms filled successfully');
            $('.err_message').css({ 'display': 'none' });
            localStorage.removeItem('array');
            let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];
    
            $('.table_dropping .forms-sect').each(function (i, e) {
    
                let th_names = [];
                let tr_names = [];
                let tab_id = $(e).attr('id');
                console.log(tab_id);
                let input_type = $(e).find('tbody tr td input').attr('type');
                $(e).find('thead th div').each(function (i, e) {
                    let th_name = $(e).text();
                    th_names.push(th_name);
                });
                $(e).find('tbody tr div').each(function (i, e) {
                    let tr_name = $(e).text();
                    tr_names.push(tr_name);
                });
                console.log(tr_names);
                if (input_type !== undefined) {
                    if (input_type == 'radio' || input_type == 'checkbox') {
                        let selected_input = [];
                        $(e).find('tbody tr td input:checked').each(function (i, e) {
                            let select_input = $(e).attr('value');
                            let select_attr = $(e).closest('td').attr('data-attr');
                            let select_input_attr = {
                                input_value: select_input,
                                td_input_attr: select_attr
                            };
    
                            selected_input.push(select_input_attr);
                        });
                        let full_arrs = {
                            th__names: th_names,
                            td__names: tr_names,
                            inputs: selected_input,
                            table_id: tab_id
                        }
    
                        table_store.push(full_arrs);
                        localStorage.setItem('array', JSON.stringify(table_store));
    
                    }
                    else if (input_type == 'text' || input_type == 'number') {
                        let inputs_val = [];
                        $(e).find('tbody tr td input').each(function (i, e) {
                            let input_val = $(e).val();
                            let td_attr = $(e).closest('td').attr('data-attr');
                            if (input_val !== '') {
                                let input_attr = {
                                    input_value: input_val,
                                    td_input_attr: td_attr
                                }
                                inputs_val.push(input_attr);
                            }
                        });
                        let full_arrs = {
                            th__names: th_names,
                            td__names: tr_names,
                            inputs: inputs_val,
                            table_id: tab_id
                        }
                        table_store.push(full_arrs);
                        localStorage.setItem('array', JSON.stringify(table_store));
                    }
                }
                else {
                    let selected_val = [];
                    $(e).find('tbody tr td select').each(function (i, e) {
                        if ($(e)[0].selectedIndex <= 0) {
                        }
                        else {
                            let select_val = $(e).find('option:selected').text();
                            let select_td_attr = $(e).closest('td').attr('data-attr');
                            let select_arr = {
                                select_value: select_val,
                                selected_td_attr: select_td_attr
                            }
                            selected_val.push(select_arr);
                        }
                    });
                    let full_arrs = {
                        th__names: th_names,
                        td__names: tr_names,
                        selects: selected_val,
                        table_id: tab_id
                    }
                    table_store.push(full_arrs);
                    localStorage.setItem('array', JSON.stringify(table_store));
                }
    
            });
            $('.container .json_sec').css('display', 'block');
        }
    
    });
    
    $(document).on('click', '.json-btn', function () {
        let table_store = localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [];
        console.log(table_store);
        let y = $(`<div class="json_table">
        <table class="json_tab">
        <thead>
        <tr>
        <th colspan='3'>Table Info</th>
        <th colspan='2'>Filled Inputs</th>
        </tr>
          <tr>
          <th>Table Id</th>
          <th>Row Names</th>
          <th>Column Names</th>
            <th>Input Value</th>
            <th>Input Attribute</th>
          </tr>
    </thead>
    <tbody>
    </tbody>
        </table>
      </div>`);
        $(this).parents('.json_sec').find('.json_table').remove();
        $(this).after(y);
        // $(this).parents('.json_sec').find('.json_table tbody')
        table_len = $(this).parents('.container').find('.table_dropping .forms-sect').length;
        console.log(table_len);
        for (let i = 0; i < table_len; i++) {
            let input_len = $(table_store[i].inputs).length;
            console.log(input_len);
            let input_val = '';
            let input_attr = '';
            let input_type = $(this).parents('.container').find('.table_dropping .forms-sect:nth-child(' + (i + 1) + ') tbody tr td input').attr('type');
            console.log(input_type);
            if (input_type !== undefined) {
                for (let j = 0; j < input_len; j++) {
                    input_val = input_val + "<br>" + table_store[i].inputs[j].input_value;
                    input_attr = input_attr + "<br>" + table_store[i].inputs[j].td_input_attr;
                }
                let row_names_len = $(table_store[i].td__names).length;
                let row_name = '';
                for (let l = 0; l < row_names_len; l++) {
                    row_name = row_name + "<br>" + table_store[i].td__names[l];
                }
                let column_names_len = $(table_store[i].th__names).length;
                let column_name = '';
                console.log(column_names_len);
                for (let m = 0; m < column_names_len; m++) {
                    column_name = column_name + "<br>" + table_store[i].th__names[m];
                }
                console.log(column_name);
    
                $(this).parents('.json_sec').find('.json_table tbody').append(`<tr>
                <td>${table_store[i].table_id}</td>
                <td>${row_name}</td>
                <td>${column_name}</td>
                <td>${input_val}</td>
                <td>${input_attr}</td>
                </tr>`);
            }
            else {
                let select_len = $(table_store[i].selects).length;
                console.log(select_len);
                let select_val = '';
                let select_attr = '';
                for (let j = 0; j < select_len; j++) {
                    select_val = select_val + "<br>" + table_store[i].selects[j].select_value;
                    select_attr = select_attr + "<br>" + table_store[i].selects[j].selected_td_attr;
                }
                console.log(select_val);
                console.log(select_attr);
                let row_names_len = $(table_store[i].td__names).length;
                let row_name = '';
                for (let l = 0; l < row_names_len; l++) {
                    row_name = row_name + "<br>" + table_store[i].td__names[l];
                }
                let column_names_len = $(table_store[i].th__names).length;
                let column_name = '';
                console.log(column_names_len);
                for (let m = 0; m < column_names_len; m++) {
                    column_name = column_name + "<br>" + table_store[i].th__names[m];
                }
                console.log(column_name);
    
                $(this).parents('.json_sec').find('.json_table tbody').append(`<tr>
                <td>${table_store[i].table_id}</td>
                <td>${row_name}</td>
                <td>${column_name}</td>
                <td>${select_val}</td>
                <td>${select_attr}</td>
                </tr>`);
            }
    
        }
    });
    
    $(document).on('click', '.switch', function () {
        prev();
    
        let disabled_attr = $(this).closest('.container').find('.switch input').prop('disabled');
        if (disabled_attr == true) {
    
        }
    
        else {
            let total_array = [];
            let forms_array = JSON.parse(localStorage.getItem("total_array"));
            console.log(forms_array);
            $(this).parents('.container').find('.forms-sect').each(function (i, e) {
                let table_id = $(e).attr('id');
                let table_title = $(e).find('.table_title input').val();
                let select_id = $('.container').find('.sidenavs .select_require select').attr('id');
                table_id = table_id.replace('table_', '');
                let input_id = $(e).find('.table_title input').attr('id');
                console.log(input_id);
                let replaceData = JSON.parse(localStorage.getItem("items")) || [];
                if (replaceData.length === 0 || replaceData[i] == undefined) {
                    var replace = "No";
                }
                else {
                    var replace = replaceData[i].requirements;
                }
                let input_type = $(e).find('tbody tr td input').attr('type');
                if (input_type !== undefined) {
                    var td_length = $(e).find('tbody tr:first-child() td input').length;
                }
                else {
                    var td_length = $(e).find('tbody tr:first-child() td select').length;
                }
                let tds_length = $(e).find('tbody tr:first-child() td select').length;
                let th_length = $(e).find('thead tr th').length;
                let th_names = [];
                let dataAttr = '';
                let value = '';
    
                $(e).find('thead tr th').each(function (i, e) {
                    dataAttr = $(e).attr('data-attr');
                    value = $(e).find('div').text();
                    let th_obj = {
                        name: value,
                        data_attr: dataAttr
                    }
                    th_names.push(th_obj);
                });
                let td_attr = '';
                let td_val = '';
                let td_names = [];
                $(e).find('tbody tr').each(function (i, e) {
                    td_attr = $(e).attr('data-attr');
                    td_val = $(e).find('td:first-child() div').text();
                    let td_obj = {
                        name: td_val,
                        data_attr: td_attr
                    }
                    td_names.push(td_obj);
                });
                let full_array = {
                    forms_sect: table_id,
                    table_ti: table_title,
                    select_requir: replace,
                    input_typee: input_type,
                    input_td_length: td_length,
                    select_input_length: tds_length,
                    tr_th_length: th_length,
                    th_div_names: th_names,
                    td_div_names: td_names,
                }
                total_array.push(full_array);
    
                $(e).find('thead tr th span').remove();
                $(e).find('thead tr th div').removeAttr('contenteditable');
                $(e).find('thead tr .add_section').remove();
                $(e).find('thead tr th:last-child()').css('writing-mode', 'horizontal-tb');
                $(e).find('tbody tr td span').remove();
                $(e).find('tbody tr td div').removeAttr('contenteditable');
                $(e).find('tbody tr th').closest('tr').remove();
                $(e).find('.add_elements').remove();
                $(e).find('.remove_elements').remove();
                $(e).find('.form-sec').css('max-width', '100%');
            });
            localStorage.setItem("total_array", JSON.stringify(total_array));
            // setTimeout(function () {
            //     window.location.replace("form.html");
            // }, 1000);
    
            $.ajax({
                url: "form.html",
                type: "GET",
                success: function (e) {
                    $.ajax({
                        url: "form.html", success: function (result) {
                            $(".container").html(result);
                            $('.container meta').remove();
                            $('.container link').remove();
                            $('.container script').remove();
                        }
                    });
                }
            });
        }
    
    });
    
    $(document).on('click', '.add_element', function () {
        let x = window.matchMedia("(max-width: 575px)");
    
        if (x.matches) {
            $(".sidenav").css({ "transform": "translateX(0)" });
        }
        else {
            $(".sidenav").css({ "transform": "translateX(0)" });
        }
    });
    
    $(document).on('click', '.sidenav .closebtn', function () {
        $(".sidenav").css({ "transform": "translateX(-400px)" });
    });
    
    $(document).on('click', '.add_elements', function () {
        let x = window.matchMedia({ "max-width": "575px" });
        if (x.matches) {
            $(".sidenavs").css({ "transform": "translateX(0)" });
        }
        else {
            let a = $(".sidenavs").css("transform");
            if (a == 'matrix(1, 0, 0, 1, 400, 0)') {
                $(".sidenavs").css({ "transform": "translateX(0)" });
            }
            else {
                $(".sidenavs").css({ "transform": "translateX(400px)" });
            }
        }
    });
    
    $(document).on('click', '.sidenavs .closebtn', function () {
        $(".sidenavs").css({ "transform": "translateX(400px)" });
    });
    
    $(document).on('click', '.add_sec', function () {
    
        let data_atr = $(this).parents(".form-sec").find("thead th:nth-last-child(2) div").attr('name');
        let name_atr = nextChar(data_atr);
    
        if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=radio]').length > 0) {
            $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='radio' name='d' disabled></td>`);
        }
        else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=checkbox]').length > 0) {
            $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='checkbox' name='d' disabled></td>`);
        }
        else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=text]').length > 0) {
            $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='text' name='d' disabled></td>`);
        }
        else if ($(this).parents('.form-sec').find('tbody tr td:last-child() input[type=number]').length > 0) {
            $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><input type='number' name='d' disabled></td>`);
        }
        else if ($(this).parents('.form-sec').find('tbody tr td:last-child() select').length > 0) {
            $(this).parents('.form-sec').find("tbody tr td:last-child()").after(`<td><select name='${name_atr}' id='' disabled>
            <option value="0">...</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
            </select></td>`);
        }
    
        let row_size = $(this).parents('.form-sec').find('tbody tr').length - 1;
        for (let i = 0; i <= row_size; i++) {
            let column_name = $(this).parents('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-last-child(2) input').attr('name');
            $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ") td:last-child() input").attr('name', column_name);
        }
    
        let last_th_attr = $(this).parents(".form-sec").find("thead tr th:nth-last-child(2)").attr("data-attr");
        let take_num = (+last_th_attr.replace("b", "")) + 1;
        let create_attr = 'b' + take_num;
        $(this).parents('.form-sec').find("thead tr th:last-child()").before(`<th><div class='input-type' format='text'contenteditable='true' data-name='${create_attr}' name='${create_attr}'>${create_attr}</div><span class='close-btns'>&#x2715;</span></th>`);
        $(this).parents('.form-sec').find("thead tr th:nth-last-child(2)").attr("data-attr", create_attr);
        let last_td_attr = $(this).parents(".form-sec").find('tbody tr').length;
        let td_atr = last_td_attr - 1;
    
        for (let i = 0; i <= td_atr; i++) {
            let row_index = $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ")").attr('data-attr');
            let column_index = $(this).parents(".form-sec").find("thead tr:first-child() th:nth-last-child(2)").attr('data-attr');
            let create_attr = row_index + column_index;
            $(this).parents(".form-sec").find("tbody tr:nth-child(" + i + ") td:last-child()").attr("data-attr", create_attr);
        }
        let td_length = $(this).parents(".form-sec").find('tbody tr td').length;
        let tr_length = $(this).parents(".form-sec").find('tbody tr').length;
        let input_type = $(this).parents(".form-sec").find('tbody tr:first-child() td input').attr('type');
        for (let i = 1; i < tr_length; i++) {
            for (let j = 0; j <= td_length; j++) {
                let td_attr = $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                if (td_attr !== undefined) {
                    let tr_attr = ($(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                    let td_atr = td_attr.replace(tr_attr, '');
                    if (input_type !== undefined) {
                        if (input_type == 'radio' || input_type == 'checkbox') {
                            $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                        }
                        else if (input_type == 'text' || input_type == 'number') {
                            // $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                        }
                    }
                    else {
                        // $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') select').attr('value', td_atr);
                    }
                }
            }
        }
    });
    
    $(document).on('click', '.add_sec_row', function () {
        let radio_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=radio]").length;
        let check_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=checkbox]").length;
        let text_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=text]").length;
        let numb_length = $(this).parents('.form-sec').find("tbody tr:first-child() input[type=number]").length;
        let select_length = $(this).parents('.form-sec').find("tbody tr:first-child() select").length;
        console.log(select_length);
        let data_atr = $(this).parents(".form-sec").find("tbody tr:nth-last-child(2)").attr('data-attr');
        let name_ = $(this).parents('.form-sec').find("tbody tr:nth-last-child(2) td:last-child() input").attr('name');
        let name_select = $(this).parents('.form-sec').find("tbody tr:nth-last-child(2) td:last-child() select").attr('name');
    
        if (name_ != undefined) {
            var name_atr = nextChar(name_);
            console.log(name_atr);
        }
        else if (name_select != undefined) {
            var name_atr = nextChar(name_select);
            console.log(name_atr);
        }
        data_atr = +data_atr.replace("a", "") + 1;
        data_atr = data_atr.toString();
        let string = 'a';
        string = string.concat(data_atr);
    
        $(this).parents(".form-sec").find("tbody tr:last-child()").before("<tr>" +
            "<td data-attr=''>" + "<div class='input-type' format='text'contenteditable='true' data-name=" + string + ">" + string + "</div>" + "<span class='close-btn'>" + "&#x2715;" + "</span>" + "</td>" +
            "</tr>");
        $(this).parents(".form-sec").find('tbody tr:nth-last-child(2)').attr('data-attr', string);
        let radio_ = $(this).parents('.form-sec').find('tbody tr:first-child() input[type=radio]').length;
        console.log('radiobox', radio_);
        if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=radio]').length > 0) {
            for (let i = 0; i < radio_length; i++) {
                $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                    .after("<td>" + "<input type='radio' name=" + string + " disabled>" + "</td>");
            }
        }
    
        else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=checkbox]').length > 0) {
            for (let i = 0; i < check_length; i++) {
                $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                    .after("<td>" + "<input type='checkbox' name=" + string + " disabled>" + "</td>");
            }
        }
    
        else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=text]').length > 0) {
            for (let i = 0; i < text_length; i++) {
                $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                    .after("<td>" + "<input type='text' name=" + string + " disabled>" + "</td>");
            }
        }
    
        else if ($(this).parents('.form-sec').find('tbody tr:first-child() input[type=number]').length > 0) {
            for (let i = 0; i < numb_length; i++) {
                $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                    .after("<td>" + "<input type='number' name=" + string + " disabled>" + "</td>");
            }
        }
    
        else if ($(this).parents('.form-sec').find(`tbody tr:first-child() select`).length > 0) {
            console.log("hellodfgrdgrdgdrg");
            for (let i = 0; i < select_length; i++) {
                $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:first-child()")
                    .after("<td>" + "<select name=" + string + " id='' disabled>" +
                        "<option value='0'>" + "..." + "</option>" +
                        "<option value='Yes'>" + "Yes" + "</option>" +
                        "<option value='No'>" + "No" + "</option>" +
                        + "</select>" + "</td>");
            }
        }
    
        let take_row_length = $(this).parents(".form-sec").find("tbody tr:first-child() td").length;
        for (let o = 0; o <= take_row_length; o++) {
            let t = $(this).parents(".form-sec").find("tbody tr:nth-last-child(3) td:nth-child(" + o + ")").attr("data-attr");
            let row_index = $(this).parents(".form-sec").find("tbody tr:nth-last-child(2)").attr('data-attr');
            let column_index = $(this).parents(".form-sec").find("thead tr:first-child() th:nth-child(" + o + ")").attr('data-attr');
            create_data_attr = row_index + column_index;
            $(this).parents(".form-sec").find("tbody tr:nth-last-child(2) td:nth-child(" + o + ")").attr("data-attr", create_data_attr);
        }
        let td_length = $(this).parents(".form-sec").find('tbody tr td').length;
        let tr_length = $(this).parents(".form-sec").find('tbody tr').length;
        let input_type = $(this).parents(".form-sec").find('tbody tr:first-child() td input').attr('type');
        for (let i = 1; i < tr_length; i++) {
            for (let j = 0; j <= td_length; j++) {
                let td_attr = $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr('data-attr');
                if (td_attr !== undefined) {
                    let tr_attr = ($(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ')').attr('data-attr'));
                    let td_atr = td_attr.replace(tr_attr, '');
                    if (input_type !== undefined) {
                        if (input_type == 'radio' || input_type == 'checkbox') {
                            $(this).parents(".form-sec").find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ') input').attr('value', td_atr);
                        }
                    }
                    else {
    
                    }
                }
            }
        }
    });
    
    $(document).on('click', 'tr td .close-btn', function () {
        let tr_total_length = $(this).parents('tbody').find('tr').length;
        console.log(tr_total_length);
        if (tr_total_length <= 2) {
        }
        else {
            $(this).closest('tr').remove();
        }
    });
    
    $(document).on('click', '.close-btns', function () {
        let th_total_length = $(this).closest('tr').find('th').length;
        console.log(th_total_length);
        if (th_total_length <= 3) {
        }
        else {
            let radio_len = $(this).closest('.form-sec').find('tbody tr').length;
            let radio_length = radio_len - 1;
            console.log(radio_length);
    
            let td_radio = $(this).closest(".form-sec").find("tbody tr:first-child() td").length;
            console.log(td_radio);
            for (let i = 1; i <= radio_length; i++) {
                console.log("hello");
                let th_attr = $(this).parents("th").attr("data-attr");
                console.log(th_attr);
                for (let j = 1; j <= td_radio; j++) {
                    let td_rad = $(this).closest('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').attr("data-attr");
                    console.log(td_rad);
                    let search_result = td_rad.search(th_attr);
                    console.log(search_result);
                    if (search_result == -1) {
                    }
                    else {
                        $(this).closest('.form-sec').find('tbody tr:nth-child(' + i + ') td:nth-child(' + j + ')').remove();
                        break;
                    }
                }
            }
            $(this).closest('th').remove();
        }
    });
    
    $(document).on('click', '.back_home', function () {
        $.ajax({
            url: "index.html", success: function (result) {
                localStorage.clear();
                console.log(result);
                $(".container").html(result);
            }
        });
        // setTimeout(function () {
        //     window.location.replace("index.html");
        // }, 2500);
    });
    
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    
    















    let full_array = localStorage.getItem("total_array") ? JSON.parse(localStorage.getItem("total_array")) : [];
    $(full_array).each(function (i, e) {
        let form_sect_id = full_array[i].forms_sect;
        let table_title = full_array[i].table_ti;
        let select_require = full_array[i].select_requir;
        let input_type = full_array[i].input_typee;
        let td_length = full_array[i].input_td_length;
        let select_length = full_array[i].select_input_length;
        let td_div_name = full_array[i].td_div_names;
        let th_div_name = full_array[i].th_div_names;
        let tr_th_length = full_array[i].tr_th_length;
        var yy = $("<div class='forms-sect' id='table_" + form_sect_id + "'>" + "<div class='form-section'>" +
            "<div class='table_title'>" +
            "<h3>" + table_title + "</h3>" +
            "</div>" +
            "<table class='form-sec'>" +
            " <thead>" +
            "<tr>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>" +
            "</table>" + "<p class=error_message>" + "</p>" + "<p class=success_message>" + "</p>" + "</div>" + "</div>");

        $('.container .table_dropping').append(yy);
        // $('.container .table_dropping .form-section').css('box-shadow', 'unset');
        for (let i = 0; i < tr_th_length; i++) {
            $('.table_dropping #table_' + form_sect_id + ' thead tr').append("<th data-attr='" + th_div_name[i].data_attr + "'>" + "<div class='input-type' format='text name='" + th_div_name[i].name + "'>" + "" + th_div_name[i].name + "" + "</div>" + "</th>");
        }
        $('.table_dropping #table_' + form_sect_id + ' thead tr th:first-child div').remove();
        for (let i = 0; i < td_div_name.length; i++) {
            $('.table_dropping #table_' + form_sect_id + ' tbody').append(`<tr data-attr='${td_div_name[i].data_attr}'><td><div class='input-type' format='text' name='${td_div_name[i].data_attr}'>${td_div_name[i].name}</div></td></tr>`);
        }
        for (let i = 0; i < td_div_name.length; i++) {
            if (input_type !== undefined) {
                for (let j = 0; j < td_length; j++) {
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><input type='${input_type}' name ='' value =''></td>`);
                }
            }
            else {
                for (let j = 0; j < select_length; j++) {
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:first-child()').after(`<td><select name="" id="">
                    <option value="0">...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </select></td>`);
                }
            }
        }
        for (let i = 0; i < td_div_name.length; i++) {
            let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
            for (let j = 0; j <= td_length; j++) {
                let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ')').attr('data-attr', tr_attr + th_attr);
            }
        }
        for (let i = 0; i < td_div_name.length; i++) {
            let tr_attr = $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ')').attr('data-attr');
            if (input_type !== undefined) {
                if (input_type == 'radio' || input_type == 'checkbox') {
                    for (let j = 1; j <= td_length; j++) {
                        let tabs_titles = 'table_' + form_sect_id;
                        let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('value', th_attr);
                    }
                }
                else if (input_type == 'text' || input_type == 'number') {
                    for (let j = 1; j <= td_length; j++) {
                        let tabs_titles = 'table_' + form_sect_id;
                        let th_attr = $('.table_dropping #table_' + form_sect_id + ' thead tr th:nth-child(' + (j + 1) + ')').attr('data-attr');
                        $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') input').attr('name', tabs_titles + tr_attr);
                    }
                }
            }
            else {
                for (let j = 1; j <= select_length; j++) {
                    let tabs_titles = 'table_' + form_sect_id;
                    $('.table_dropping #table_' + form_sect_id + ' tbody tr:nth-child(' + (i + 1) + ') td:nth-child(' + (j + 1) + ') select').attr('name', tabs_titles + tr_attr);
                }
            }
        }

    });





    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
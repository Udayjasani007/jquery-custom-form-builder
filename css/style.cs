@font-face {
  font-family: "Poppins";
  font-weight: 100;
  src: url("../fonts/Poppins-Thin.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 200;
  src: url("../fonts/Poppins-ExtraLight.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 300;
  src: url("../fonts/Poppins-Light.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 400;
  src: url("../fonts/Poppins-Regular.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 500;
  src: url("../fonts/Poppins-Medium.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 600;
  src: url("../fonts/Poppins-SemiBold.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 700;
  src: url("../fonts/Poppins-Bold.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 800;
  src: url("../fonts/Poppins-ExtraBold.woff") format("woff");
}
@font-face {
  font-family: "Poppins";
  font-weight: 900;
  src: url("../fonts/Poppins-Black.woff") format("woff");
}
* {
  box-sizing: border-box;
  font-family: "Poppins";
}

body {
  margin: 0;
}

.input-type {
  max-width: 100%;
  font-weight: 500;
}

:focus-visible {
  outline: rgba(0, 0, 0, 0) auto 0px;
}

input:focus-visible {
  outline: none;
}

textarea {
  width: 100%;
  min-height: 200px;
  color: #000 !important;
  font-size: 14px;
  border: 1px solid #00acc1;
  border-radius: 10px;
  resize: none;
}

option:hover {
  background-color: #000;
}

h6 {
  font-size: 20px;
  margin: 0;
}

li {
  list-style-type: none;
}

h5 {
  font-size: 13px !important;
  margin: 0 auto;
  font-weight: 400;
}

::placeholder {
  color: black;
}

.changetheme {
  background-color: #00acc1;
  padding: 10px;
}
.changetheme h5 {
  color: #fff;
}

input[type=text] {
  min-width: 50px !important;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  border: none;
  background-color: rgba(109, 104, 104, 0);
}

tr td input {
  border-bottom: 1px solid #3e4652 !important;
}

input[type=number] {
  min-width: 50px !important;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.541);
  background-color: rgba(109, 104, 104, 0);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color: #e8f0fe !important;
  color: -internal-light-dark(black, white) !important;
}

.ui-widget-header {
  background: #f6a72800 !important;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
}
.container .logo_section {
  display: flex;
  height: 100px;
  max-width: 300px;
  margin: 0 auto;
  justify-content: center;
}
.container .logo_section img {
  width: 100%;
  object-fit: contain;
}
.container .preview_section {
  background: #00acc1;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 0;
  position: relative;
}
@media (max-width: 767px) {
  .container .preview_section {
    width: 100%;
    justify-content: flex-start;
    padding-left: 20px;
  }
}
@media (max-width: 575px) {
  .container .preview_section {
    font-size: 13px;
    padding-left: 15px;
  }
}
.container .preview_section .back_home {
  display: none;
  align-items: center;
  cursor: pointer;
  height: 34px;
}
.container .preview_section .back_home img {
  width: 44px;
  margin-right: 10px;
}
.container .preview_section .preview_form {
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  width: 100%;
  color: #fff;
  align-items: center;
}
.container .preview_section .preview_form .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 10px;
}
.container .preview_section .preview_form .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.container .preview_section .preview_form .slider {
  position: absolute;
  cursor: pointer;
  top: 8px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  height: 20px;
  width: 45px;
}
.container .preview_section .preview_form .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: -6px;
  bottom: -3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.container .preview_section .preview_form input:checked + .slider {
  background-color: #A4E01F;
}
.container .preview_section .preview_form input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.container .preview_section .preview_form input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
.container .preview_section .preview_form .slider.round {
  border-radius: 34px;
}
.container .preview_section .preview_form .slider.round:before {
  border-radius: 50%;
}
.container .preview_section .preview_forms {
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  width: 100%;
  color: #fff;
  align-items: center;
  position: absolute;
  right: 0;
}
@media (max-width: 575px) {
  .container .preview_section .preview_forms {
    padding-right: 0;
    font-size: 13px;
  }
}
.container .preview_section .preview_forms .switchs {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 10px;
}
.container .preview_section .preview_forms .switchs input {
  opacity: 0;
  width: 0;
  height: 0;
}
.container .preview_section .preview_forms .sliders {
  position: absolute;
  cursor: pointer;
  top: 8px;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  height: 20px;
  width: 45px;
  background-color: #fff;
}
.container .preview_section .preview_forms .sliders:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: -6px;
  bottom: -3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.container .preview_section .preview_forms input:checked + .sliders {
  background-color: #A4E01F;
}
.container .preview_section .preview_forms input:checked + .sliders:before {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.container .preview_section .preview_forms input:focus + .sliders {
  box-shadow: 0 0 1px #2196F3;
}
.container .preview_section .preview_forms .sliders.round {
  border-radius: 34px;
}
.container .preview_section .preview_forms .sliders.round:before {
  border-radius: 50%;
}
.container .sidenavs {
  height: 100%;
  width: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  transform: translateX(400px);
  background: #e8e8ea;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
@media (max-width: 575px) {
  .container .sidenavs {
    width: 250px;
  }
}
.container .sidenavs ul {
  padding-left: 0;
}
.container .sidenavs ul li .head {
  color: #000;
  border-bottom: none;
  font-weight: 600;
  padding: 0 25px;
  font-size: 20px;
}
.container .sidenavs ul .category {
  padding-top: 20px !important;
}
.container .sidenavs ul .category .tabs {
  text-decoration: none;
  color: #000;
  border: none;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}
@media (max-width: 575px) {
  .container .sidenavs ul .category .tabs {
    padding: 0 5px;
  }
}
.container .sidenavs ul .category .tabs li {
  cursor: pointer;
  font-size: 15px;
  padding: 0 5px;
  position: relative;
  color: #000;
  text-decoration: none;
  padding-bottom: 15px;
  transition: 0.5s ease;
  text-transform: uppercase;
}
@media (max-width: 575px) {
  .container .sidenavs ul .category .tabs li {
    font-size: 12px;
    padding: 10px 3px;
  }
}
.container .sidenavs ul .category .tabs li::after {
  content: "";
  position: absolute;
  background-color: #FFFFFF;
  opacity: 0;
  width: 0;
  height: 3px;
  bottom: 0;
  text-align: center;
  transition: 1s ease;
  left: 0;
  right: 0;
  bottom: 0;
}
.container .sidenavs ul .category .tabs li:hover {
  font-weight: 700;
}
.container .sidenavs ul .category .tabs li:hover::after {
  content: "";
  position: absolute;
  background-color: #00acc1;
  opacity: 1;
  width: 100%;
  height: 3px;
  bottom: 0;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
}
.container .sidenavs ul .category .clear {
  clear: both;
}
.container .sidenavs ul .category .content {
  text-decoration: none;
  padding-left: none;
  color: #000;
  border: none;
  list-style-type: none;
  padding: 25px 15px 25px 15px;
  display: block;
}
@media (max-width: 575px) {
  .container .sidenavs ul .category .content {
    padding: 50px 0px 25px 0px;
  }
}
.container .sidenavs ul .category .content .list {
  font-size: 13px;
  padding: 0 10px;
  position: relative;
  color: #000;
  text-decoration: none;
  padding-bottom: 15px;
  transition: 0.5s ease;
  display: none;
}
.container .sidenavs ul .category .content .list .input-form-name h6 {
  font-weight: 500;
}
.container .sidenavs ul .category .content .list .input-form-name input[type=text] {
  color: #000;
  border: none;
  border-bottom: 1px solid #fff;
  font-weight: 400;
}
.container .sidenavs ul .category .content .list .required {
  padding-top: 30px;
}
.container .sidenavs ul .category .content .list .required .requir {
  padding-bottom: 20px;
  font-weight: 500;
}
.container .sidenavs ul .category .content .list .required select {
  -webkit-writing-mode: horizontal-tb !important;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  font-family: "poppins";
  color: #000;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  height: 50px;
  position: relative;
  border-color: -internal-light-dark(rgba(118, 118, 118, 0), rgba(133, 133, 133, 0));
  border: 1px solid #00acc1;
}
.container .sidenavs ul .category .content .list .input-type h6 {
  color: #000;
  font-weight: 500;
}
.container .sidenavs ul .category .content .list .input-type .in-type {
  display: flex;
  flex-wrap: wrap;
}
.container .sidenavs ul .category .content .list .input-type .in-type .in-box {
  display: block;
  width: 25%;
  margin: 10px 10px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: 0.5s ease;
  border-radius: 10px;
  padding: 10px;
}
@media (max-width: 575px) {
  .container .sidenavs ul .category .content .list .input-type .in-type .in-box {
    width: 40%;
    margin: 10px 10px;
  }
}
.container .sidenavs ul .category .content .list .input-type .in-type .in-box:hover {
  background-color: #00acc1;
  padding: 10px;
  color: #fff;
  border: 1px solid #00acc1;
}
.container .sidenavs ul .category .content .list .input-type .in-type .in-box img {
  width: 100%;
  border-radius: 10px;
}
.container .sidenavs ul .category .content .list .input-type .in-type .in-box h5 {
  text-align: center;
}
.container .sidenavs ul .category .content .list .rows {
  padding-top: 25px;
}
.container .sidenavs ul .category .content .list .rows h6 {
  font-weight: 500;
}
.container .sidenavs ul .category .content .list .columns {
  padding-top: 15px;
}
.container .sidenavs ul .category .content .list .columns h6 {
  font-weight: 500;
}
.container .sidenavs ul .category .content .list.active {
  display: block;
}
.container .sidenavs ul .category .content .list.hide {
  display: none;
}
.container .sidenavs ul .category .content .activelink {
  color: red;
}
.container .sidenavs .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #00acc1;
  text-decoration: none;
}
@media (max-width: 575px) {
  .container .sidenavs {
    padding-top: 15px;
  }
  .container .sidenavs a {
    font-size: 18px;
  }
}
.container .form-sections {
  max-width: 1000px;
  margin: 20px auto;
  background-color: white;
  box-shadow: 0 0 10px #000;
  position: relative;
  padding-bottom: 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}
.container .form-sections .err_message {
  color: red;
  display: none;
}
.container .form-sections .s_message {
  color: green;
  display: none;
  font-weight: 700;
}
.container .form-sections .form-heading {
  padding: 25px 20px;
}
@media (max-width: 1300px) {
  .container .form-sections .form-heading {
    padding-top: 70px;
  }
}
.container .form-sections .form-heading h1 {
  font-size: 20px;
  margin: 0;
  font-weight: 600;
}
.container .form-sections .table-drop {
  width: 90%;
  min-height: 200px;
  border-color: rgba(0, 0, 0, 0.15);
  background-color: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin: 10px auto;
  z-index: -1;
  border-radius: 10px;
}
.container .form-sections .table-drop.table_dropping .forms-sect .form-section .form-sec thead tr th:last-child {
  writing-mode: unset;
}
.container .form-sections .table-drop.table_dropping .forms-sect .form-section .error_message {
  display: none;
  color: red;
}
.container .form-sections .table-drop.table_dropping .forms-sect .form-section .success_message {
  display: none;
  color: green;
}
.container .form-sections .submit {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
}
.container .form-sections .submit .submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  background-color: #00acc1;
  color: #fff;
  border: 1px solid #00acc1;
  border-radius: 10px;
  font-size: 16px;
  text-transform: capitalize;
  transition: 0.5s ease;
}
.container .form-sections .submit .submit-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  background-color: #00acc1;
  color: #fff;
  border: 1px solid #00acc1;
  border-radius: 10px;
  font-size: 16px;
  text-transform: capitalize;
  transition: 0.5s ease;
  cursor: pointer;
}
.container .form-sections .submit .submit-btns:hover {
  background-color: #fff;
  color: #00acc1;
}
.container .form-sections .json_sec {
  display: none;
  justify-content: center;
  padding: 0px 0px 20px 0px;
}
.container .form-sections .json_sec .json-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  background-color: #00acc1;
  color: #fff;
  border: 1px solid #00acc1;
  border-radius: 10px;
  font-size: 16px;
  text-transform: capitalize;
  transition: 0.5s ease;
  cursor: pointer;
  margin: 0 auto;
}
.container .form-sections .json_sec .json-btn:hover {
  background-color: #fff;
  color: #00acc1;
}
.container .form-sections .json_sec .json_table {
  overflow-x: auto;
  display: block;
  padding-top: 20px;
}
.container .form-sections .json_sec .json_table .json_tab {
  margin: 0 auto;
  border: 1px solid #00acc1;
  border-collapse: collapse;
  border-radius: 10px;
}
.container .form-sections .json_sec .json_table .json_tab thead tr th {
  text-align: center;
  padding: 15px;
  border: 1px solid #00acc1;
}
.container .form-sections .json_sec .json_table .json_tab tbody tr td {
  padding: 15px;
  text-align: center;
  border: 1px solid #00acc1;
}
.container .sidenav {
  height: 100%;
  width: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  transition: 0.5s;
  background: #fff;
  transform: translateX(-400px);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
@media (max-width: 575px) {
  .container .sidenav {
    width: 250px;
  }
}
.container .sidenav .user_section {
  background: url(../img/sidenavbg.png);
  padding: 25px 24px;
  background-size: cover;
}
.container .sidenav .user_section .user_logo {
  display: block;
}
.container .sidenav .user_section .user_logo img {
  width: 50px;
}
.container .sidenav .user_section .user_detail {
  display: block;
}
.container .sidenav .user_section .user_detail .user_name {
  font-size: 14px;
  margin: 0;
  font-weight: 700;
  line-height: 1.5;
}
.container .sidenav .user_section .user_detail .user_id {
  margin: 0;
  color: #555;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 500;
}
.container .sidenav ul {
  padding-left: 0;
}
.container .sidenav ul li a {
  padding: 8px 8px 8px 20px;
  text-decoration: none;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  display: block;
  transition: 0.3s;
  background: #fff;
  font-weight: 600;
}
@media (max-width: 575px) {
  .container .sidenav ul li a {
    font-size: 15px;
    padding: 10px 15px;
  }
}
.container .sidenav ul li a span {
  padding-right: 25px;
}
@media (max-width: 575px) {
  .container .sidenav ul li a span {
    padding-right: 10px;
  }
}
.container .sidenav ul li:hover a {
  background: #ececec;
}
.container .sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #00acc1;
  text-decoration: none;
}
@media (max-width: 575px) {
  .container .sidenav .closebtn {
    top: -10px;
    right: 10px;
  }
}
@media (max-width: 575px) {
  .container .sidenav a {
    font-size: 18px;
  }
}
.container .add_element {
  font-size: 15px;
  cursor: pointer;
  background: #00acc1;
  color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 20px 10px 10px;
  position: absolute;
  left: 0;
  top: 20vh;
  width: 140px;
}
@media (max-width: 1300px) {
  .container .add_element {
    width: 54px;
    height: 54px;
    top: unset;
    bottom: 31.5vh;
  }
}
.container .add_element .toggle_text {
  display: inline-block;
  width: 74px;
  line-height: 20px;
  text-align: center;
}
@media (max-width: 1300px) {
  .container .add_element .toggle_text {
    display: none;
  }
}
.container .add_element .fa-plus {
  position: absolute;
  right: 0;
  top: 4px;
  width: 54px;
  height: 54px;
  text-align: center;
  border-radius: 50%;
  font-weight: 100;
  line-height: 54px;
  display: inline-block;
  font-size: 25px;
}
.container .footer_section {
  max-width: 100%;
  display: flex;
}

.forms-sect {
  position: relative;
  margin: 20px auto 40px auto;
  margin-top: 0;
  background: #fff;
  background-size: cover;
  border-radius: 10px;
}
.forms-sect .error_message {
  display: none;
  color: red;
}
.forms-sect .success_message {
  display: none;
  color: green;
}
.forms-sect .add_elements {
  font-size: 15px;
  cursor: pointer;
  background-color: #00acc1;
  color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px 20px 10px 10px;
  position: absolute;
  right: 0;
  top: 41%;
  transition: 0.5s ease;
  width: 30px;
  display: flex;
  align-items: center;
}
.forms-sect .add_elements .hidden-element {
  padding-left: 10px;
  display: none;
}
.forms-sect .add_elements:hover {
  width: 125px;
  opacity: 1;
}
.forms-sect .add_elements:hover .hidden-element {
  display: flex;
}
.forms-sect .remove_elements {
  font-size: 15px;
  cursor: pointer;
  background-color: #d73027;
  color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px 20px 10px 10px;
  position: absolute;
  right: 0;
  top: 59%;
  transition: 0.5s ease;
  width: 30px;
  display: flex;
  align-items: center;
}
.forms-sect .remove_elements .hidden-element {
  padding-left: 10px;
  display: none;
}
.forms-sect .remove_elements:hover {
  width: 105px;
  opacity: 1;
}
.forms-sect .remove_elements:hover .hidden-element {
  display: flex;
}
.forms-sect .form-section {
  padding: 25px 10px 10px 10px;
  overflow: auto;
  color: #000;
  width: 90%;
  margin: 40px auto 0 auto;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}
.forms-sect .form-section .table_title {
  display: block;
  width: 100%;
}
.forms-sect .form-section .table_title input[type=text] {
  width: 100%;
}
.forms-sect .form-section .form-sec {
  max-width: 500px;
}
.forms-sect .form-section .form-sec thead tr:last-child {
  background-color: rgba(255, 255, 255, 0);
}
.forms-sect .form-section .form-sec thead tr:last-child td {
  color: #000;
}
.forms-sect .form-section .form-sec thead tr th {
  position: relative;
  padding: 20px 20px 20px 10px !important;
  background: rgba(0, 172, 193, 0.2);
  padding: 20px;
}
.forms-sect .form-section .form-sec thead tr th .close-btns {
  position: absolute;
  top: 20px;
  right: 5px;
  cursor: pointer;
}
.forms-sect .form-section .form-sec thead tr th:first-child {
  background-color: rgba(73, 64, 64, 0);
}
.forms-sect .form-section .form-sec thead tr th:last-child {
  background: rgba(0, 172, 193, 0.2);
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.forms-sect .form-section .form-sec thead tr .add_section {
  writing-mode: vertical-rl !important;
  text-orientation: mixed !important;
  background: rgba(255, 255, 255, 0) !important;
  padding: 0;
}
.forms-sect .form-section .form-sec thead tr .add_section .add_sec {
  position: absolute;
  top: -21px;
  left: 13px;
  cursor: pointer;
  transform: translateX(-35%) translateY(90%) rotate(90deg);
  writing-mode: vertical-rl !important;
  text-orientation: mixed !important;
  background: rgba(255, 255, 255, 0);
  border: none;
  font-weight: 600;
}
.forms-sect .form-section .form-sec tbody tr:nth-child(2) {
  border-radius: 20px;
}
.forms-sect .form-section .form-sec tbody tr td {
  padding: 20px 10px;
  text-align: center;
  min-width: 90px;
  position: relative;
}
.forms-sect .form-section .form-sec tbody tr td:first-child {
  padding: 20px 30px 20px 15px;
  background: rgba(0, 172, 193, 0.2);
  text-align: left;
}
.forms-sect .form-section .form-sec tbody tr td:first-child .input-type {
  max-width: 100%;
  font-weight: 500;
}
.forms-sect .form-section .form-sec tbody tr td:first-child .close-btn {
  position: absolute;
  top: 20px;
  right: 5px;
  cursor: pointer;
}
.forms-sect .form-section .form-sec tbody tr:last-child .add_section_row {
  background-color: rgba(255, 255, 255, 0);
  padding: 0;
}
.forms-sect .form-section .form-sec tbody tr:last-child .add_section_row .add_sec_row {
  cursor: pointer;
  background: rgba(255, 255, 255, 0);
  border: none;
  font-weight: 600;
}

/*# sourceMappingURL=style.cs.map */

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   // 定义要接收的字段列表
//   $fields = ['firstName', 'lastName', 'email', 'genderDropdown', 'birthdate', 'address','postcode','city','state','countryDropdown','programmeDropdown','campusDropdown','entryQualificationDropdown','stpmMathMGrade','stpmMathTGrade','stpmICTGrade','stpmPhyGrade','stpmChmGrade','stpmBioGrade','spmBMGrade','spmEngGrade','spmBCGrade','spmSjGrade','spmMathsGrade','spmAMGrade','spmPhyGrade','spmChmGrade','spmBioGrade','spmMoralGrade','dipCGPA','foundCGPA'];

//   // 初始化一个关联数组来存储表单数据
//   $formData = [];

//   // 循环遍历字段列表并接收表单数据
//   foreach ($fields as $field) {
//       $formData[$field] = isset($_POST[$field]) ? $_POST[$field] : null;
//   }

//   // 检查是否填写了所有必填字段
//   // if (in_array(null, $formData, true)) {
//   //     echo 'Please fill in all required fields.';
//   //     exit;
//   // }

//   // 最低要求的 CGPA 分数
//   $minimum_cgpa = 2.5;

//   // 根据字段处理表单数据
//   $firstName = $formData['firstName'];
//   $lastName = $formData['lastName'];
//   $email = $formData['email'];
//   $gender = $formData['genderDropdown'];
//   $birthdate = $formData['birthdate'];
//   $address = $formData['address'];
//   $postcode = $formData['postcode'];
//   $city = $formData['city'];
//   $state = $formData['state'];
//   $country = $formData['countryDropdown'];
//   $programme = $formData['programmeDropdown'];
//   $campus = $formData['campusDropdown'];
//   $entryQualification = $formData['entryQualificationDropdown'];
//   $stpmMathMGrade = $formData['stpmMathMGrade'];
//   $stpmMathTGrade = $formData['stpmMathTGrade'];
//   $stpmICTGrade = $formData['stpmICTGrade'];
//   $stpmPhyGrade = $formData['stpmPhyGrade'];
//   $stpmChmGrade = $formData['stpmChmGrade'];
//   $stpmBioGrade = $formData['stpmBioGrade'];
//   $spmBMGrade = $formData['spmBMGrade'];
//   $spmEngGrade = $formData['spmEngGrade'];
//   $spmBCGrade = $formData['spmBCGrade'];
//   $spmSjGrade = $formData['spmSjGrade'];
//   $spmMathsGrade = $formData['spmMathsGrade'];
//   $spmAMGrade = $formData['spmAMGrade'];
//   $spmPhyGrade = $formData['spmPhyGrade'];
//   $spmChmGrade = $formData['spmChmGrade'];
//   $spmBioGrade = $formData['spmBioGrade'];
//   $spmMoralGrade = $formData['spmMoralGrade'];
//   $dipCGPA = $formData['dipCGPA'];
//   $foundCGPA = $formData['foundCGPA'];

//   // 检查学生是否被接受或拒绝
//   if ($dipCGPA >= $minimum_cgpa) {
//       echo "Congratulations, $firstName! You are accepted for the $programme program.";
//   } else {
//       echo "Sorry, $firstName. You are rejected for the $programme program. Minimum CGPA required is $minimum_cgpa.";
//   }
  
} 
//else {
  // Handle GET request or direct access to this script
//   echo 'This script is not meant to be accessed directly.';
// }
  // Sanitize user inputs
  // $firstName = filter_var($_POST['firstName'], FILTER_SANITIZE_STRING);
  // $lastName = filter_var($_POST['lastName'], FILTER_SANITIZE_STRING);
  // $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  // $gender = $_POST('genderDropdown');
  // $bday = $_POST('birthdate');
  // $addr = filter_var($_POST['address'], FILTER_SANITIZE_STRING);
  // $postcode = filter_var($_POST['postcode'], FILTER_VALIDATE_INT);
  // $city = filter_var($_POST['city'], FILTER_SANITIZE_STRING);
  // $state = filter_var($_POST['state'], FILTER_SANITIZE_STRING);
  // $country = $_POST('countryDropdown');
  // $programme = $_POST('programmeDropdown');
  // $campus = $_POST('campusDropdown');
  // $entryQualification = $_POST('entryQualificationDropdown');

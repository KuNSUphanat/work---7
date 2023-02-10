<template>
  <div class="container">
    <h3>วิชาที่ฉันลงทะเบียนทั้งหมด</h3>
    <table>
      <thead>
        <th>รหัสวิชา</th>
        <th>ชื่อวิชา</th>
      </thead>
      <tbody>
        <tr v-for="(subject, index) in myEnrollment" :key="index">
          <td>{{ subject.course_id }}</td>
          <td>{{ subject.course_name }}</td>
          <td><button @click="removeFromBasket(index)">ถอนวิชา</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script setup>
import { useEnrollment } from "../stores/useEnrollment";

const enrollmentList = useEnrollment();

const myEnrollment = enrollmentList.getState;
function removeFromBasket(course_key) {
  if (confirm("ต้องการลบรายวิชาหรือไม่ ?")) {
    myEnrollment.value.pop(course_key);
  }
}

</script>
<style></style>

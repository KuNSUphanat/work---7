<script setup>
import news from "../json/news.json";
</script>
<template>
  <div class="content">
    <div class="header-section">
      <h1 class="m-0">ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนเรียนออนไลน์</h1>
      <h3 class="m-0 color-gray">สาขาวิชาวิทยาการคอมพิวเตอร์</h3>
    </div>
<hr />

<h5>ข่าวสารล่าสุด</h5>
<article>
  <table>
    <tr>
      <th>วันที่</th>
      <th>หัวข้อข่าว</th>
    </tr>

    <tr v-for="news_content in news" :key="news_content.newsId">
      <td style="text-align: left">{{ news_content.News_Date }}</td>
      <td style="text-align: left">
        
        {{ news_content.News_Title }}
      </td>
    </tr>
  </table>
</article>
  </div>
</template>
<style scoped>
.content {
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
}

.header-section {
  padding-top: 2em;
  padding-bottom: 2em;
}

.m-0 {
  margin: unset;
}

.color-gray {
  color: rgb(62, 63, 110);
}

h1 {
  font-weight: bold;
  font-size: 2em;
}

h3 {
  font-size: 1.5em;
}

hr {
  border-top: 1px solid rgb(23, 99, 0);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  margin-bottom: 2em;
}

h5 {
  font-size: 1.2em;
  margin-bottom: 1em;
}

table {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
}

th, td {
  border: 1px solid rgb(0, 0, 0);
  padding: 0.5em;
  text-align: left;
}

th {
  background-color: rgb(65, 65, 65);
}
</style>
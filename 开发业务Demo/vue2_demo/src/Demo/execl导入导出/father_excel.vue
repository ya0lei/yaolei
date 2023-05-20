<template>
  <div id="father_excel">
    <!-- 导入 -->
    <ExcelUpload
      :onSuccess="onSuccess"
      :beforeUpload="beforeUpload"
    ></ExcelUpload>
    <!-- 导出 -->
    <button @click="exportFn">点击导出文件压缩包</button>
  </div>
</template>

<script>
import ExcelUpload from "./components/excelUpload.vue";

export default {
  name: "father_excel",
  components: { ExcelUpload },
  methods: {
    // 上传之前做一些判断,一般是格式判断,文件大小判断,如果通过,一定要返回 true
    beforeUpload(rawFile) {
      console.log("上传之前捕获到的文件信息:", rawFile);
      return true;
    },

    // 上传成功后,解析 excel 并返回数据
    onSuccess({ header, results }) {
      console.log("解析后的表头数据", header);
      console.log("解析后的表格数据", results);

      // 由于返回的数据,每个对象的键名是中文形式,需要转换为后端规定的单词(通常是英文)
      // 假设返回数据中每个对象有四个中文键名,应设置中文键名的对应关系
      const keyMap = {
        中文键名1: "需要转换的单词",
        中文键名2: "需要转换的单词",
        中文键名3: "需要转换的单词",
        中文键名4: "需要转换的单词",
      };

      const newResults = results.map((item) => {
        const obj = {};
        Object.keys(keyMap).forEach((key) => {
          obj[keyMap[key]] = item[key];
        });
        return obj;
      });

      // 利用 newResults 发送后端请求
      console.log(newResults);
    },

    // 导出的方法
    exportFn() {
      import("./components/Export2Excel").then((excel) => {
        // 导出的文件是excel
        excel.export_json_to_excel({
          header: ["姓名", "年龄", "爱好"], //表头 必填
          data: [
            ["张三", "20", "蔚蓝"],
            ["李三", "30", "传送门"],
          ], //具体数据 必填
          filename: "excel-list", //非必填
          autoWidth: true, //非必填
          bookType: "xlsx", //非必填
          multiHeader: [["姓名", "主要信息", "", "", "部门"]], // 复杂表头,非必填
          merges: ["A1:A2"], // 需要合并的部分,非必填
        });

        // 想要导出的是zip文件,把上面import地址改成zip的,并解开下面的注释
        // excel.export_txt_to_zip(
        //   ["姓名", "年龄", "爱好"],
        //   [['张三','20','蔚蓝'],['李三','30','传送门']],
        //   "zip测试",
        //   "zip测试"
        // );
      });
    },
  },
};
// 导出可能需要数据改造
// 原数据
const oldArr = [
  { username: "张三", mobile: "13512341234", timeOfEntry: "2001.01.01" },
  { username: "李四", mobile: "13812341234", timeOfEntry: "2002.01.01" },
  { username: "八戒", mobile: "17712341234", timeOfEntry: "2003.01.01" },
];
// 导出的excel需要把key转为中文,并且按照用户需要的顺序来显示
// headers是excel表头
const headers = {
  姓名: "username",
  手机号: "mobile",
  入职日期: "timeOfEntry",
};
// 处理后的数据
const newArr = oldArr.map((obj) => {
  return Object.keys(headers).map((key) => {
    return obj[headers[key]];
  });
});
console.log(newArr)
</script>

<style></style>
